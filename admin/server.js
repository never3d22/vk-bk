require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;

// === DATA PATHS ===
const DATA_DIR = path.join(__dirname, 'data');
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const PROMOS_FILE = path.join(DATA_DIR, 'promos.json');

// Ensure directories exist
[DATA_DIR, UPLOADS_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// === MIDDLEWARE ===
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false
}));
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(UPLOADS_DIR));

// Session
app.use(session({
    secret: process.env.SESSION_SECRET || 'super-secret-key-change-me',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// File upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOADS_DIR),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${uuidv4()}${ext}`);
    }
});
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
        const allowed = /jpeg|jpg|png|gif|webp/;
        const ext = allowed.test(path.extname(file.originalname).toLowerCase());
        const mime = allowed.test(file.mimetype);
        if (ext && mime) cb(null, true);
        else cb(new Error('Only images allowed'));
    }
});

// === HELPERS ===
function readJSON(file, defaultValue = []) {
    try {
        if (fs.existsSync(file)) {
            return JSON.parse(fs.readFileSync(file, 'utf8'));
        }
    } catch (e) {
        console.error(`Error reading ${file}:`, e);
    }
    return defaultValue;
}

function writeJSON(file, data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}

// Initialize default data if not exists
function initData() {
    if (!fs.existsSync(SETTINGS_FILE)) {
        writeJSON(SETTINGS_FILE, {
            siteName: 'Вкусно и Быстро',
            phone: '+7 999 123-45-67',
            address: 'г. Москва, ул. Пушкина, 15',
            workHours: '10:00 — 23:00',
            minOrder: 500,
            deliveryPrice: 150,
            freeDeliveryFrom: 1000,
            telegram: {
                enabled: false,
                botToken: '',
                chatId: ''
            }
        });
    }
    
    if (!fs.existsSync(PROMOS_FILE)) {
        writeJSON(PROMOS_FILE, [
            { code: 'ПЕРВЫЙ20', discount: 20, type: 'percent', active: true, uses: 0 },
            { code: 'СКИДКА10', discount: 10, type: 'percent', active: true, uses: 0 },
            { code: 'VIP', discount: 15, type: 'percent', active: true, uses: 0 }
        ]);
    }
    
    if (!fs.existsSync(ORDERS_FILE)) {
        writeJSON(ORDERS_FILE, []);
    }
    
    if (!fs.existsSync(PRODUCTS_FILE)) {
        // Copy initial products
        const initialProducts = [
            { id: 1, name: 'Курица гриль', price: 600, category: 'hot', ingredients: ['Курица', 'Специи', 'Чеснок', 'Травы'], weight: '450г', badges: ['hit', 'popular'], desc: 'Сочная курица, приготовленная на гриле', image: '', active: true },
            { id: 2, name: 'Шаурма с курицей', price: 250, category: 'hot', ingredients: ['Лаваш', 'Курица', 'Овощи', 'Соус'], weight: '350г', badges: ['popular'], customizable: true, extras: ['cheese', 'jalapeno', 'sauce', 'meat'], desc: 'Классическая шаурма', image: '', active: true },
            { id: 3, name: 'Сырный лаваш', price: 200, category: 'hot', ingredients: ['Лаваш', 'Сыр', 'Масло'], weight: '200г', badges: ['new'], desc: 'Хрустящий лаваш с сыром', image: '', active: true }
        ];
        writeJSON(PRODUCTS_FILE, initialProducts);
    }
}
initData();

// === AUTH MIDDLEWARE ===
function requireAuth(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    }
    res.status(401).json({ error: 'Unauthorized' });
}

// === AUTH ROUTES ===
app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required' });
    }
    
    const users = readJSON(USERS_FILE, []);
    const user = users.find(u => u.username === username);
    
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    req.session.userId = user.id;
    req.session.username = user.username;
    req.session.role = user.role;
    
    res.json({ 
        success: true, 
        user: { 
            id: user.id, 
            username: user.username, 
            role: user.role 
        } 
    });
});

app.post('/api/auth/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

app.get('/api/auth/me', requireAuth, (req, res) => {
    res.json({
        id: req.session.userId,
        username: req.session.username,
        role: req.session.role
    });
});

app.post('/api/auth/change-password', requireAuth, async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    
    if (!currentPassword || !newPassword) {
        return res.status(400).json({ error: 'Both passwords required' });
    }
    
    if (newPassword.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }
    
    const users = readJSON(USERS_FILE, []);
    const userIndex = users.findIndex(u => u.id === req.session.userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    const valid = await bcrypt.compare(currentPassword, users[userIndex].password);
    if (!valid) {
        return res.status(401).json({ error: 'Current password is incorrect' });
    }
    
    users[userIndex].password = await bcrypt.hash(newPassword, 10);
    writeJSON(USERS_FILE, users);
    
    res.json({ success: true });
});

// === PRODUCTS API ===
app.get('/api/products', (req, res) => {
    const products = readJSON(PRODUCTS_FILE, []);
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const products = readJSON(PRODUCTS_FILE, []);
    const product = products.find(p => p.id == req.params.id);
    if (!product) return res.status(404).json({ error: 'Not found' });
    res.json(product);
});

app.post('/api/products', requireAuth, upload.single('image'), (req, res) => {
    const products = readJSON(PRODUCTS_FILE, []);
    
    const newProduct = {
        id: Date.now(),
        name: req.body.name,
        price: parseFloat(req.body.price) || 0,
        category: req.body.category || 'hot',
        ingredients: req.body.ingredients ? JSON.parse(req.body.ingredients) : [],
        weight: req.body.weight || '',
        badges: req.body.badges ? JSON.parse(req.body.badges) : [],
        desc: req.body.desc || '',
        customizable: req.body.customizable === 'true',
        extras: req.body.extras ? JSON.parse(req.body.extras) : [],
        image: req.file ? `/uploads/${req.file.filename}` : '',
        active: true,
        createdAt: new Date().toISOString()
    };
    
    products.push(newProduct);
    writeJSON(PRODUCTS_FILE, products);
    
    res.json(newProduct);
});

app.put('/api/products/:id', requireAuth, upload.single('image'), (req, res) => {
    const products = readJSON(PRODUCTS_FILE, []);
    const index = products.findIndex(p => p.id == req.params.id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Not found' });
    }
    
    const updated = {
        ...products[index],
        name: req.body.name || products[index].name,
        price: req.body.price ? parseFloat(req.body.price) : products[index].price,
        category: req.body.category || products[index].category,
        ingredients: req.body.ingredients ? JSON.parse(req.body.ingredients) : products[index].ingredients,
        weight: req.body.weight !== undefined ? req.body.weight : products[index].weight,
        badges: req.body.badges ? JSON.parse(req.body.badges) : products[index].badges,
        desc: req.body.desc !== undefined ? req.body.desc : products[index].desc,
        customizable: req.body.customizable !== undefined ? req.body.customizable === 'true' : products[index].customizable,
        extras: req.body.extras ? JSON.parse(req.body.extras) : products[index].extras,
        active: req.body.active !== undefined ? req.body.active === 'true' : products[index].active,
        updatedAt: new Date().toISOString()
    };
    
    if (req.file) {
        // Delete old image if exists
        if (products[index].image && products[index].image.startsWith('/uploads/')) {
            const oldPath = path.join(__dirname, products[index].image);
            if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        }
        updated.image = `/uploads/${req.file.filename}`;
    }
    
    products[index] = updated;
    writeJSON(PRODUCTS_FILE, products);
    
    res.json(updated);
});

app.delete('/api/products/:id', requireAuth, (req, res) => {
    const products = readJSON(PRODUCTS_FILE, []);
    const index = products.findIndex(p => p.id == req.params.id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Not found' });
    }
    
    // Delete image if exists
    if (products[index].image && products[index].image.startsWith('/uploads/')) {
        const imgPath = path.join(__dirname, products[index].image);
        if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }
    
    products.splice(index, 1);
    writeJSON(PRODUCTS_FILE, products);
    
    res.json({ success: true });
});

// === ORDERS API ===
app.get('/api/orders', requireAuth, (req, res) => {
    const orders = readJSON(ORDERS_FILE, []);
    // Sort by date descending
    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json(orders);
});

app.get('/api/orders/:id', requireAuth, (req, res) => {
    const orders = readJSON(ORDERS_FILE, []);
    const order = orders.find(o => o.id == req.params.id);
    if (!order) return res.status(404).json({ error: 'Not found' });
    res.json(order);
});

app.post('/api/orders', async (req, res) => {
    const orders = readJSON(ORDERS_FILE, []);
    
    const newOrder = {
        id: Date.now(),
        number: Math.floor(10000 + Math.random() * 90000),
        ...req.body,
        status: 'new',
        createdAt: new Date().toISOString()
    };
    
    orders.push(newOrder);
    writeJSON(ORDERS_FILE, orders);
    
    // Send to Telegram
    const settings = readJSON(SETTINGS_FILE, {});
    if (settings.telegram && settings.telegram.enabled) {
        await sendTelegramNotification(newOrder, settings.telegram);
    }
    
    res.json(newOrder);
});

app.put('/api/orders/:id', requireAuth, (req, res) => {
    const orders = readJSON(ORDERS_FILE, []);
    const index = orders.findIndex(o => o.id == req.params.id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Not found' });
    }
    
    orders[index] = {
        ...orders[index],
        ...req.body,
        updatedAt: new Date().toISOString()
    };
    
    writeJSON(ORDERS_FILE, orders);
    res.json(orders[index]);
});

app.delete('/api/orders/:id', requireAuth, (req, res) => {
    const orders = readJSON(ORDERS_FILE, []);
    const index = orders.findIndex(o => o.id == req.params.id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Not found' });
    }
    
    orders.splice(index, 1);
    writeJSON(ORDERS_FILE, orders);
    
    res.json({ success: true });
});

// === PROMOS API ===
app.get('/api/promos', requireAuth, (req, res) => {
    const promos = readJSON(PROMOS_FILE, []);
    res.json(promos);
});

app.post('/api/promos', requireAuth, (req, res) => {
    const promos = readJSON(PROMOS_FILE, []);
    
    const newPromo = {
        id: Date.now(),
        code: req.body.code.toUpperCase(),
        discount: parseFloat(req.body.discount) || 0,
        type: req.body.type || 'percent',
        active: true,
        uses: 0,
        createdAt: new Date().toISOString()
    };
    
    promos.push(newPromo);
    writeJSON(PROMOS_FILE, promos);
    
    res.json(newPromo);
});

app.put('/api/promos/:id', requireAuth, (req, res) => {
    const promos = readJSON(PROMOS_FILE, []);
    const index = promos.findIndex(p => p.id == req.params.id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Not found' });
    }
    
    promos[index] = { ...promos[index], ...req.body };
    writeJSON(PROMOS_FILE, promos);
    
    res.json(promos[index]);
});

app.delete('/api/promos/:id', requireAuth, (req, res) => {
    const promos = readJSON(PROMOS_FILE, []);
    const index = promos.findIndex(p => p.id == req.params.id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Not found' });
    }
    
    promos.splice(index, 1);
    writeJSON(PROMOS_FILE, promos);
    
    res.json({ success: true });
});

// Validate promo (public)
app.post('/api/promos/validate', (req, res) => {
    const { code } = req.body;
    const promos = readJSON(PROMOS_FILE, []);
    const promo = promos.find(p => p.code === code.toUpperCase() && p.active);
    
    if (!promo) {
        return res.status(404).json({ error: 'Invalid promo code' });
    }
    
    res.json({ discount: promo.discount, type: promo.type });
});

// === SETTINGS API ===
app.get('/api/settings', (req, res) => {
    const settings = readJSON(SETTINGS_FILE, {});
    // Don't expose telegram token to public
    const publicSettings = { ...settings };
    if (publicSettings.telegram) {
        publicSettings.telegram = { enabled: publicSettings.telegram.enabled };
    }
    res.json(publicSettings);
});

app.get('/api/settings/full', requireAuth, (req, res) => {
    const settings = readJSON(SETTINGS_FILE, {});
    res.json(settings);
});

app.put('/api/settings', requireAuth, (req, res) => {
    const settings = readJSON(SETTINGS_FILE, {});
    const updated = { ...settings, ...req.body };
    writeJSON(SETTINGS_FILE, updated);
    res.json(updated);
});

// === STATISTICS API ===
app.get('/api/stats', requireAuth, (req, res) => {
    const orders = readJSON(ORDERS_FILE, []);
    const products = readJSON(PRODUCTS_FILE, []);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayOrders = orders.filter(o => new Date(o.createdAt) >= today);
    const todayRevenue = todayOrders.reduce((sum, o) => sum + (o.total || 0), 0);
    
    const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthOrders = orders.filter(o => new Date(o.createdAt) >= thisMonth);
    const monthRevenue = monthOrders.reduce((sum, o) => sum + (o.total || 0), 0);
    
    const newOrders = orders.filter(o => o.status === 'new').length;
    
    res.json({
        todayOrders: todayOrders.length,
        todayRevenue,
        monthOrders: monthOrders.length,
        monthRevenue,
        totalOrders: orders.length,
        totalProducts: products.length,
        newOrders
    });
});

// === TELEGRAM ===
async function sendTelegramNotification(order, telegramConfig) {
    const { botToken, chatId } = telegramConfig;
    
    if (!botToken || !chatId) return;
    
    const items = order.items || order.cart?.map(i => `${i.name} x${i.qty}`).join(', ') || 'Не указано';
    
    const message = `
🆕 *НОВЫЙ ЗАКАЗ #${order.number}*

👤 *Клиент:* ${order.customer?.name || order.name || 'Не указано'}
📞 *Телефон:* ${order.customer?.phone || order.phone || 'Не указано'}

📦 *Заказ:*
${items}

💰 *Итого:* ${order.total || 0} ₽

🚗 *Доставка:* ${order.deliveryType === 'pickup' ? 'Самовывоз' : (order.customer?.address || order.address || 'Не указано')}

💳 *Оплата:* ${order.paymentType === 'card' ? 'Картой' : order.paymentType === 'cash' ? 'Наличными' : 'Онлайн'}

${order.comment ? `💬 *Комментарий:* ${order.comment}` : ''}
    `.trim();
    
    try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown'
            })
        });
    } catch (error) {
        console.error('Telegram error:', error);
    }
}

// Test Telegram connection
app.post('/api/telegram/test', requireAuth, async (req, res) => {
    const { botToken, chatId } = req.body;
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: '✅ Тестовое сообщение от админки «Вкусно и Быстро»'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            res.json({ success: true });
        } else {
            res.status(400).json({ error: data.description });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// === FILE UPLOAD ===
app.post('/api/upload', requireAuth, upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({ url: `/uploads/${req.file.filename}` });
});

// === SERVE ADMIN PANEL ===
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// === ERROR HANDLER ===
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message || 'Server error' });
});

// === START SERVER ===
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║   🍔 Вкусно и Быстро - Admin Server    ║
╠════════════════════════════════════════╣
║   Server: http://localhost:${PORT}        ║
║   Admin:  http://localhost:${PORT}/admin  ║
╚════════════════════════════════════════╝
    `);
});
