// === API BASE ===
const API = '';

// === STATE ===
let currentUser = null;
let products = [];
let orders = [];
let promos = [];
let settings = {};

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    initEventListeners();
});

// === AUTH ===
async function checkAuth() {
    try {
        const res = await fetch(`${API}/api/auth/me`, { credentials: 'include' });
        if (res.ok) {
            currentUser = await res.json();
            showApp();
        } else {
            showLogin();
        }
    } catch (e) {
        showLogin();
    }
}

function showLogin() {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('app').classList.remove('active');
}

function showApp() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('app').classList.add('active');
    document.getElementById('userName').textContent = currentUser.username;
    
    loadDashboard();
}

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const btn = document.getElementById('loginBtn');
    const error = document.getElementById('loginError');
    
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Вход...';
    error.style.display = 'none';
    
    try {
        const res = await fetch(`${API}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password })
        });
        
        const data = await res.json();
        
        if (res.ok) {
            currentUser = data.user;
            showApp();
        } else {
            error.textContent = data.error || 'Ошибка входа';
            error.style.display = 'block';
        }
    } catch (e) {
        error.textContent = 'Ошибка соединения с сервером';
        error.style.display = 'block';
    }
    
    btn.disabled = false;
    btn.innerHTML = '<span>Войти</span>';
});

async function logout() {
    await fetch(`${API}/api/auth/logout`, { method: 'POST', credentials: 'include' });
    currentUser = null;
    showLogin();
}

// === NAVIGATION ===
function initEventListeners() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            navigateTo(page);
        });
    });
}

function navigateTo(page) {
    // Update nav
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`[data-page="${page}"]`).classList.add('active');
    
    // Show page
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(`page-${page}`).style.display = 'block';
    
    // Load data
    switch(page) {
        case 'dashboard': loadDashboard(); break;
        case 'orders': loadOrders(); break;
        case 'products': loadProducts(); break;
        case 'promos': loadPromos(); break;
        case 'settings': loadSettings(); break;
    }
}

// === DASHBOARD ===
async function loadDashboard() {
    try {
        const [statsRes, ordersRes] = await Promise.all([
            fetch(`${API}/api/stats`, { credentials: 'include' }),
            fetch(`${API}/api/orders`, { credentials: 'include' })
        ]);
        
        const stats = await statsRes.json();
        orders = await ordersRes.json();
        
        renderStats(stats);
        renderRecentOrders(orders.slice(0, 5));
        
        // Update badge
        if (stats.newOrders > 0) {
            document.getElementById('newOrdersBadge').style.display = 'inline';
            document.getElementById('newOrdersBadge').textContent = stats.newOrders;
        } else {
            document.getElementById('newOrdersBadge').style.display = 'none';
        }
    } catch (e) {
        console.error('Error loading dashboard:', e);
    }
}

function renderStats(stats) {
    document.getElementById('statsGrid').innerHTML = `
        <div class="stat-card">
            <div class="stat-card-header">
                <div class="stat-card-icon green"><i class="fas fa-shopping-bag"></i></div>
            </div>
            <div class="stat-card-value">${stats.todayOrders}</div>
            <div class="stat-card-label">Заказов сегодня</div>
        </div>
        <div class="stat-card">
            <div class="stat-card-header">
                <div class="stat-card-icon gold"><i class="fas fa-ruble-sign"></i></div>
            </div>
            <div class="stat-card-value">${formatMoney(stats.todayRevenue)}</div>
            <div class="stat-card-label">Выручка сегодня</div>
        </div>
        <div class="stat-card">
            <div class="stat-card-header">
                <div class="stat-card-icon blue"><i class="fas fa-calendar"></i></div>
            </div>
            <div class="stat-card-value">${stats.monthOrders}</div>
            <div class="stat-card-label">Заказов за месяц</div>
        </div>
        <div class="stat-card">
            <div class="stat-card-header">
                <div class="stat-card-icon red"><i class="fas fa-bell"></i></div>
            </div>
            <div class="stat-card-value">${stats.newOrders}</div>
            <div class="stat-card-label">Новых заказов</div>
        </div>
    `;
}

function renderRecentOrders(orders) {
    if (orders.length === 0) {
        document.getElementById('recentOrdersTable').innerHTML = `
            <div class="empty-state">
                <i class="fas fa-receipt"></i>
                <h3>Нет заказов</h3>
                <p>Заказы появятся здесь</p>
            </div>
        `;
        return;
    }
    
    document.getElementById('recentOrdersTable').innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Клиент</th>
                    <th>Сумма</th>
                    <th>Статус</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody>
                ${orders.map(o => `
                    <tr onclick="openOrderModal(${o.id})" style="cursor: pointer;">
                        <td><strong>#${o.number}</strong></td>
                        <td>${o.customer?.name || o.name || '-'}</td>
                        <td><strong>${o.total || 0} ₽</strong></td>
                        <td><span class="status-badge status-${o.status}">${getStatusText(o.status)}</span></td>
                        <td>${formatDate(o.createdAt)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// === ORDERS ===
async function loadOrders() {
    try {
        const res = await fetch(`${API}/api/orders`, { credentials: 'include' });
        orders = await res.json();
        renderOrdersTable();
    } catch (e) {
        console.error('Error loading orders:', e);
    }
}

function renderOrdersTable() {
    if (orders.length === 0) {
        document.getElementById('ordersTable').innerHTML = `
            <div class="empty-state">
                <i class="fas fa-receipt"></i>
                <h3>Нет заказов</h3>
            </div>
        `;
        return;
    }
    
    document.getElementById('ordersTable').innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Клиент</th>
                    <th>Телефон</th>
                    <th>Сумма</th>
                    <th>Доставка</th>
                    <th>Статус</th>
                    <th>Дата</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${orders.map(o => `
                    <tr>
                        <td><strong>#${o.number}</strong></td>
                        <td>${o.customer?.name || o.name || '-'}</td>
                        <td>${o.customer?.phone || o.phone || '-'}</td>
                        <td><strong>${o.total || 0} ₽</strong></td>
                        <td>${o.deliveryType === 'pickup' ? 'Самовывоз' : 'Доставка'}</td>
                        <td>
                            <select class="form-input" style="width: auto; padding: 4px 8px; font-size: 12px;" onchange="updateOrderStatus(${o.id}, this.value)">
                                <option value="new" ${o.status === 'new' ? 'selected' : ''}>Новый</option>
                                <option value="processing" ${o.status === 'processing' ? 'selected' : ''}>Готовится</option>
                                <option value="completed" ${o.status === 'completed' ? 'selected' : ''}>Выполнен</option>
                                <option value="cancelled" ${o.status === 'cancelled' ? 'selected' : ''}>Отменён</option>
                            </select>
                        </td>
                        <td>${formatDate(o.createdAt)}</td>
                        <td class="actions-cell">
                            <button class="action-btn" onclick="openOrderModal(${o.id})" title="Подробнее">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="action-btn danger" onclick="deleteOrder(${o.id})" title="Удалить">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

async function updateOrderStatus(id, status) {
    try {
        await fetch(`${API}/api/orders/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ status })
        });
        showToast('Статус обновлён', 'success');
    } catch (e) {
        showToast('Ошибка обновления', 'error');
    }
}

async function deleteOrder(id) {
    if (!confirm('Удалить заказ?')) return;
    
    try {
        await fetch(`${API}/api/orders/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        showToast('Заказ удалён', 'success');
        loadOrders();
    } catch (e) {
        showToast('Ошибка удаления', 'error');
    }
}

function openOrderModal(id) {
    const order = orders.find(o => o.id === id);
    if (!order) return;
    
    document.getElementById('orderModalTitle').textContent = `Заказ #${order.number}`;
    
    const items = order.items || order.cart?.map(i => {
        let text = `${i.name} x${i.qty} — ${i.price * i.qty} ₽`;
        if (i.extras && i.extras.length > 0) {
            text += ` (${i.extras.join(', ')})`;
        }
        return text;
    }).join('<br>') || 'Не указано';
    
    document.getElementById('orderModalBody').innerHTML = `
        <div style="display: grid; gap: 16px;">
            <div>
                <strong style="color: var(--text-secondary); font-size: 12px;">КЛИЕНТ</strong>
                <p style="margin-top: 4px;">${order.customer?.name || order.name || '-'}</p>
            </div>
            <div>
                <strong style="color: var(--text-secondary); font-size: 12px;">ТЕЛЕФОН</strong>
                <p style="margin-top: 4px;"><a href="tel:${order.customer?.phone || order.phone}" style="color: var(--primary);">${order.customer?.phone || order.phone || '-'}</a></p>
            </div>
            <div>
                <strong style="color: var(--text-secondary); font-size: 12px;">АДРЕС</strong>
                <p style="margin-top: 4px;">${order.deliveryType === 'pickup' ? 'Самовывоз' : (order.customer?.address || order.address || '-')}</p>
            </div>
            <div>
                <strong style="color: var(--text-secondary); font-size: 12px;">ЗАКАЗ</strong>
                <p style="margin-top: 4px;">${items}</p>
            </div>
            <div>
                <strong style="color: var(--text-secondary); font-size: 12px;">СУММА</strong>
                <p style="margin-top: 4px; font-size: 20px; font-weight: 700; color: var(--primary);">${order.total || 0} ₽</p>
            </div>
            <div>
                <strong style="color: var(--text-secondary); font-size: 12px;">ОПЛАТА</strong>
                <p style="margin-top: 4px;">${order.paymentType === 'card' ? 'Картой' : order.paymentType === 'cash' ? 'Наличными' : 'Онлайн'}</p>
            </div>
            ${order.comment ? `
            <div>
                <strong style="color: var(--text-secondary); font-size: 12px;">КОММЕНТАРИЙ</strong>
                <p style="margin-top: 4px;">${order.comment}</p>
            </div>
            ` : ''}
            <div>
                <strong style="color: var(--text-secondary); font-size: 12px;">ДАТА</strong>
                <p style="margin-top: 4px;">${formatDate(order.createdAt)}</p>
            </div>
        </div>
    `;
    
    document.getElementById('orderModal').classList.add('active');
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('active');
}

// === PRODUCTS ===
async function loadProducts() {
    try {
        const res = await fetch(`${API}/api/products`, { credentials: 'include' });
        products = await res.json();
        renderProductsTable();
    } catch (e) {
        console.error('Error loading products:', e);
    }
}

function renderProductsTable() {
    if (products.length === 0) {
        document.getElementById('productsTable').innerHTML = `
            <div class="empty-state">
                <i class="fas fa-utensils"></i>
                <h3>Нет товаров</h3>
                <p>Добавьте первый товар</p>
            </div>
        `;
        return;
    }
    
    document.getElementById('productsTable').innerHTML = `
        <table>
            <thead>
                <tr>
                    <th style="width: 60px;"></th>
                    <th>Название</th>
                    <th>Категория</th>
                    <th>Цена</th>
                    <th>Статус</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${products.map(p => `
                    <tr>
                        <td>
                            <div class="product-thumb">
                                ${p.image ? `<img src="${API}${p.image}" alt="${p.name}">` : '<i class="fas fa-image" style="color: var(--text-secondary);"></i>'}
                            </div>
                        </td>
                        <td><strong>${p.name}</strong></td>
                        <td>${getCategoryName(p.category)}</td>
                        <td><strong>${p.price} ₽</strong></td>
                        <td>
                            <span class="status-badge ${p.active ? 'status-completed' : 'status-cancelled'}">
                                ${p.active ? 'Активен' : 'Скрыт'}
                            </span>
                        </td>
                        <td class="actions-cell">
                            <button class="action-btn" onclick="editProduct(${p.id})" title="Редактировать">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="action-btn danger" onclick="deleteProduct(${p.id})" title="Удалить">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function openProductModal(id = null) {
    document.getElementById('productModalTitle').textContent = id ? 'Редактировать товар' : 'Добавить товар';
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    document.getElementById('productImagePreview').style.display = 'none';
    document.getElementById('productActive').checked = true;
    
    if (id) {
        const p = products.find(pr => pr.id === id);
        if (p) {
            document.getElementById('productId').value = p.id;
            document.getElementById('productName').value = p.name;
            document.getElementById('productPrice').value = p.price;
            document.getElementById('productCategory').value = p.category;
            document.getElementById('productWeight').value = p.weight || '';
            document.getElementById('productDesc').value = p.desc || '';
            document.getElementById('productIngredients').value = (p.ingredients || []).join(', ');
            document.getElementById('productActive').checked = p.active !== false;
            
            document.getElementById('badgeHit').checked = (p.badges || []).includes('hit');
            document.getElementById('badgeNew').checked = (p.badges || []).includes('new');
            document.getElementById('badgePopular').checked = (p.badges || []).includes('popular');
            document.getElementById('badgeSpicy').checked = (p.badges || []).includes('spicy');
            
            if (p.image) {
                document.getElementById('productImagePreview').src = `${API}${p.image}`;
                document.getElementById('productImagePreview').style.display = 'block';
            }
        }
    }
    
    document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

function editProduct(id) {
    openProductModal(id);
}

async function saveProduct() {
    const id = document.getElementById('productId').value;
    const formData = new FormData();
    
    formData.append('name', document.getElementById('productName').value);
    formData.append('price', document.getElementById('productPrice').value);
    formData.append('category', document.getElementById('productCategory').value);
    formData.append('weight', document.getElementById('productWeight').value);
    formData.append('desc', document.getElementById('productDesc').value);
    formData.append('active', document.getElementById('productActive').checked);
    
    const ingredients = document.getElementById('productIngredients').value
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);
    formData.append('ingredients', JSON.stringify(ingredients));
    
    const badges = [];
    if (document.getElementById('badgeHit').checked) badges.push('hit');
    if (document.getElementById('badgeNew').checked) badges.push('new');
    if (document.getElementById('badgePopular').checked) badges.push('popular');
    if (document.getElementById('badgeSpicy').checked) badges.push('spicy');
    formData.append('badges', JSON.stringify(badges));
    
    const imageFile = document.getElementById('productImage').files[0];
    if (imageFile) {
        formData.append('image', imageFile);
    }
    
    try {
        const url = id ? `${API}/api/products/${id}` : `${API}/api/products`;
        const method = id ? 'PUT' : 'POST';
        
        await fetch(url, {
            method,
            credentials: 'include',
            body: formData
        });
        
        showToast(id ? 'Товар обновлён' : 'Товар добавлен', 'success');
        closeProductModal();
        loadProducts();
    } catch (e) {
        showToast('Ошибка сохранения', 'error');
    }
}

async function deleteProduct(id) {
    if (!confirm('Удалить товар?')) return;
    
    try {
        await fetch(`${API}/api/products/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        showToast('Товар удалён', 'success');
        loadProducts();
    } catch (e) {
        showToast('Ошибка удаления', 'error');
    }
}

// Image preview
document.getElementById('productImage').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('productImagePreview').src = e.target.result;
            document.getElementById('productImagePreview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// === PROMOS ===
async function loadPromos() {
    try {
        const res = await fetch(`${API}/api/promos`, { credentials: 'include' });
        promos = await res.json();
        renderPromosTable();
    } catch (e) {
        console.error('Error loading promos:', e);
    }
}

function renderPromosTable() {
    if (promos.length === 0) {
        document.getElementById('promosTable').innerHTML = `
            <div class="empty-state">
                <i class="fas fa-tags"></i>
                <h3>Нет промокодов</h3>
            </div>
        `;
        return;
    }
    
    document.getElementById('promosTable').innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Код</th>
                    <th>Скидка</th>
                    <th>Использований</th>
                    <th>Статус</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${promos.map(p => `
                    <tr>
                        <td><strong>${p.code}</strong></td>
                        <td>${p.discount}${p.type === 'percent' ? '%' : ' ₽'}</td>
                        <td>${p.uses || 0}</td>
                        <td>
                            <span class="status-badge ${p.active ? 'status-completed' : 'status-cancelled'}">
                                ${p.active ? 'Активен' : 'Неактивен'}
                            </span>
                        </td>
                        <td class="actions-cell">
                            <button class="action-btn" onclick="editPromo(${p.id})" title="Редактировать">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="action-btn danger" onclick="deletePromo(${p.id})" title="Удалить">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function openPromoModal(id = null) {
    document.getElementById('promoModalTitle').textContent = id ? 'Редактировать промокод' : 'Добавить промокод';
    document.getElementById('promoForm').reset();
    document.getElementById('promoId').value = '';
    document.getElementById('promoActive').checked = true;
    
    if (id) {
        const p = promos.find(pr => pr.id === id);
        if (p) {
            document.getElementById('promoId').value = p.id;
            document.getElementById('promoCode').value = p.code;
            document.getElementById('promoDiscount').value = p.discount;
            document.getElementById('promoType').value = p.type;
            document.getElementById('promoActive').checked = p.active;
        }
    }
    
    document.getElementById('promoModal').classList.add('active');
}

function closePromoModal() {
    document.getElementById('promoModal').classList.remove('active');
}

function editPromo(id) {
    openPromoModal(id);
}

async function savePromo() {
    const id = document.getElementById('promoId').value;
    
    const data = {
        code: document.getElementById('promoCode').value.toUpperCase(),
        discount: parseFloat(document.getElementById('promoDiscount').value),
        type: document.getElementById('promoType').value,
        active: document.getElementById('promoActive').checked
    };
    
    try {
        const url = id ? `${API}/api/promos/${id}` : `${API}/api/promos`;
        const method = id ? 'PUT' : 'POST';
        
        await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data)
        });
        
        showToast(id ? 'Промокод обновлён' : 'Промокод добавлен', 'success');
        closePromoModal();
        loadPromos();
    } catch (e) {
        showToast('Ошибка сохранения', 'error');
    }
}

async function deletePromo(id) {
    if (!confirm('Удалить промокод?')) return;
    
    try {
        await fetch(`${API}/api/promos/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        showToast('Промокод удалён', 'success');
        loadPromos();
    } catch (e) {
        showToast('Ошибка удаления', 'error');
    }
}

// === SETTINGS ===
async function loadSettings() {
    try {
        const res = await fetch(`${API}/api/settings/full`, { credentials: 'include' });
        settings = await res.json();
        
        document.getElementById('setSiteName').value = settings.siteName || '';
        document.getElementById('setPhone').value = settings.phone || '';
        document.getElementById('setAddress').value = settings.address || '';
        document.getElementById('setWorkHours').value = settings.workHours || '';
        document.getElementById('setMinOrder').value = settings.minOrder || 0;
        document.getElementById('setDeliveryPrice').value = settings.deliveryPrice || 0;
        document.getElementById('setFreeDelivery').value = settings.freeDeliveryFrom || 0;
        document.getElementById('setTelegramEnabled').checked = settings.telegram?.enabled || false;
        document.getElementById('setTelegramToken').value = settings.telegram?.botToken || '';
        document.getElementById('setTelegramChatId').value = settings.telegram?.chatId || '';
    } catch (e) {
        console.error('Error loading settings:', e);
    }
}

document.getElementById('settingsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
        siteName: document.getElementById('setSiteName').value,
        phone: document.getElementById('setPhone').value,
        address: document.getElementById('setAddress').value,
        workHours: document.getElementById('setWorkHours').value,
        minOrder: parseInt(document.getElementById('setMinOrder').value) || 0,
        deliveryPrice: parseInt(document.getElementById('setDeliveryPrice').value) || 0,
        freeDeliveryFrom: parseInt(document.getElementById('setFreeDelivery').value) || 0,
        telegram: {
            enabled: document.getElementById('setTelegramEnabled').checked,
            botToken: document.getElementById('setTelegramToken').value,
            chatId: document.getElementById('setTelegramChatId').value
        }
    };
    
    try {
        await fetch(`${API}/api/settings`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data)
        });
        
        showToast('Настройки сохранены', 'success');
    } catch (e) {
        showToast('Ошибка сохранения', 'error');
    }
});

async function testTelegram() {
    const botToken = document.getElementById('setTelegramToken').value;
    const chatId = document.getElementById('setTelegramChatId').value;
    
    if (!botToken || !chatId) {
        showToast('Заполните Bot Token и Chat ID', 'error');
        return;
    }
    
    try {
        const res = await fetch(`${API}/api/telegram/test`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ botToken, chatId })
        });
        
        const data = await res.json();
        
        if (res.ok) {
            showToast('Тестовое сообщение отправлено!', 'success');
        } else {
            showToast(data.error || 'Ошибка отправки', 'error');
        }
    } catch (e) {
        showToast('Ошибка соединения', 'error');
    }
}

// === HELPERS ===
function formatMoney(value) {
    return new Intl.NumberFormat('ru-RU').format(value || 0) + ' ₽';
}

function formatDate(dateStr) {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getStatusText(status) {
    const statuses = {
        new: 'Новый',
        processing: 'Готовится',
        completed: 'Выполнен',
        cancelled: 'Отменён'
    };
    return statuses[status] || status;
}

function getCategoryName(cat) {
    const categories = {
        hot: 'Горячее',
        hotdog: 'Хот-доги',
        bakery: 'Выпечка',
        dessert: 'Десерты',
        drinks: 'Напитки',
        beer: 'Пиво',
        coffee: 'Кофе'
    };
    return categories[cat] || cat;
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = toast.querySelector('i');
    
    toast.className = `toast ${type}`;
    icon.className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    document.getElementById('toastText').textContent = message;
    
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});

// ESC to close modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    }
});
