// ============================================
// Вкусно и Быстро — Premium JavaScript
// ============================================

// Product images from Unsplash
const images = {
    shawarma: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80',
    chicken: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80',
    lavash: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    tiramisu: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
    medovik: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
    khachapuri: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80',
    lamadjo: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80',
    hotdog: 'https://images.unsplash.com/photo-1612392062126-1b76d3c73f5c?w=400&q=80',
    lemonade: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80',
    water: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80',
    juice: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80',
    tan: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
    beer: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80',
    americano: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
    cappuccino: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
    latte: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&q=80',
    espresso: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80',
    tea: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80'
};

// Products Data
const products = [
    // ГОРЯЧЕЕ
    { id: 1, name: 'Курица гриль', category: 'hot', price: 600, image: images.chicken, desc: 'Сочная курица на гриле со специями' },
    { id: 2, name: 'Шаурма с курицей', category: 'hot', price: 250, image: images.shawarma, desc: 'Классическая шаурма с соусом', customizable: true },
    { id: 3, name: 'Сырный лаваш', category: 'hot', price: 200, image: images.lavash, desc: 'Хрустящий лаваш с сыром' },
    
    // ДЕСЕРТЫ
    { id: 4, name: 'Тирамису', category: 'dessert', price: 320, image: images.tiramisu, desc: 'Итальянский десерт с маскарпоне', tag: 'Хит' },
    { id: 5, name: 'Медовик', category: 'dessert', price: 320, image: images.medovik, desc: 'Домашний торт с медовыми коржами' },
    
    // ВЫПЕЧКА
    { id: 6, name: 'Хачапури по-аджарски', category: 'bakery', price: 200, image: images.khachapuri, desc: 'С яйцом и сулугуни', tag: 'Хит' },
    { id: 7, name: 'Хачапури по-мегрельски', category: 'bakery', price: 400, image: images.khachapuri, desc: 'С двойным сыром сверху' },
    { id: 8, name: 'Ламаджо', category: 'bakery', price: 180, image: images.lamadjo, desc: 'Армянская пицца с мясом' },
    
    // ХОТ-ДОГИ
    { id: 9, name: 'Датский (курица)', category: 'hotdog', price: 250, image: images.hotdog, desc: 'С куриной сосиской и соусами' },
    { id: 10, name: 'Датский (говядина)', category: 'hotdog', price: 250, image: images.hotdog, desc: 'С говяжьей сосиской и соусами' },
    { id: 11, name: 'Французский (курица)', category: 'hotdog', price: 250, image: images.hotdog, desc: 'Французский стиль с курицей' },
    { id: 12, name: 'Французский (говядина)', category: 'hotdog', price: 250, image: images.hotdog, desc: 'Французский стиль с говядиной' },
    
    // НАПИТКИ
    { id: 13, name: 'Натахтари', category: 'drinks', price: 120, image: images.lemonade, desc: 'Грузинский лимонад' },
    { id: 14, name: 'Бон Аква', category: 'drinks', price: 100, image: images.water, desc: 'Вода газ/негаз' },
    { id: 15, name: 'Добрый', category: 'drinks', price: 100, image: images.juice, desc: 'Сок в ассортименте' },
    { id: 16, name: 'Тан', category: 'drinks', price: 80, image: images.tan, desc: 'Кисломолочный напиток' },
    { id: 17, name: 'Сок Rich', category: 'drinks', price: 150, image: images.juice, desc: 'Премиум сок', tag: 'Premium' },
    { id: 18, name: 'Чай Rich', category: 'drinks', price: 150, image: images.tea, desc: 'Холодный чай' },
    
    // ПИВО
    { id: 19, name: 'Хугарден', category: 'beer', price: 160, image: images.beer, desc: 'Бельгийское пшеничное', tag: '18+' },
    { id: 20, name: 'Жигули', category: 'beer', price: 110, image: images.beer, desc: 'Классический лагер', tag: '18+' },
    { id: 21, name: 'Стелла Артуа', category: 'beer', price: 160, image: images.beer, desc: 'Бельгийский пилснер', tag: '18+' },
    { id: 22, name: 'Хугарден Б/А', category: 'beer', price: 110, image: images.beer, desc: 'Безалкогольное' },
    
    // КОФЕ
    { id: 23, name: 'Американо', category: 'coffee', price: 120, image: images.americano, desc: 'Классический чёрный кофе' },
    { id: 24, name: 'Капучино', category: 'coffee', price: 160, image: images.cappuccino, desc: 'С нежной молочной пенкой', tag: 'Хит' },
    { id: 25, name: 'Латте', category: 'coffee', price: 160, image: images.latte, desc: 'Мягкий кофе с молоком' },
    { id: 26, name: 'Эспрессо', category: 'coffee', price: 90, image: images.espresso, desc: 'Крепкий и бодрящий' },
    { id: 27, name: 'Чай', category: 'coffee', price: 50, image: images.tea, desc: 'Чёрный или зелёный' }
];

// Shawarma extras
const extras = [
    { id: 'cheese', name: 'Сыр' },
    { id: 'jalapeno', name: 'Халапеньо' },
    { id: 'mushrooms', name: 'Грибы' },
    { id: 'bacon', name: 'Бекон' },
    { id: 'egg', name: 'Яйцо' },
    { id: 'sauce', name: 'Доп. соус' },
    { id: 'vegetables', name: 'Доп. овощи' },
    { id: 'meat', name: 'Доп. мясо' }
];

const EXTRA_PRICE = 50;

// State
let cart = [];
let quantities = {};
let selectedExtras = [];
let customQty = 1;

// DOM
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const menuGrid = $('#menuGrid');
const cartTrigger = $('#cartTrigger');
const cartOverlay = $('#cartOverlay');
const cartDrawer = $('#cartDrawer');
const cartClose = $('#cartClose');
const cartBody = $('#cartBody');
const cartBadge = $('#cartBadge');
const cartTotal = $('#cartTotal');
const checkoutBtn = $('#checkoutBtn');
const themeBtn = $('#themeBtn');
const menuToggle = $('#menuToggle');
const nav = $('#nav');
const contactForm = $('#contactForm');
const toast = $('#toast');
const toastText = $('#toastText');

const customizeOverlay = $('#customizeOverlay');
const customizeModal = $('#customizeModal');
const customizeClose = $('#customizeClose');
const extrasList = $('#extrasList');
const customMinus = $('#customMinus');
const customPlus = $('#customPlus');
const customQtyEl = $('#customQty');
const customTotalEl = $('#customTotal');
const addCustomBtn = $('#addCustomBtn');

const successOverlay = $('#successOverlay');
const successModal = $('#successModal');
const successClose = $('#successClose');

// ============================================
// Theme
// ============================================
function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
}

themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// ============================================
// Products
// ============================================
function renderProducts(category = 'all') {
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    
    menuGrid.innerHTML = filtered.map((p, i) => {
        const qty = quantities[p.id] || 0;
        return `
            <article class="product-card" style="animation-delay: ${i * 50}ms">
                <div class="product-img">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                    ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
                </div>
                <div class="product-body">
                    <h3 class="product-name">${p.name}</h3>
                    <p class="product-desc">${p.desc}</p>
                    <div class="product-footer">
                        <span class="product-price">${p.price} <span>₽</span></span>
                        <div class="product-actions">
                            ${p.customizable ? `
                                <button class="customize-trigger" onclick="openCustomize(${p.id})">
                                    <i class="fas fa-sliders"></i> Собрать
                                </button>
                            ` : `
                                <div class="qty-group">
                                    <button class="qty-btn" onclick="changeQty(${p.id}, -1)"><i class="fas fa-minus"></i></button>
                                    <span class="qty-num" id="qty-${p.id}">${qty}</span>
                                    <button class="qty-btn" onclick="changeQty(${p.id}, 1)"><i class="fas fa-plus"></i></button>
                                </div>
                                <button class="add-btn" onclick="addToCart(${p.id})"><i class="fas fa-plus"></i></button>
                            `}
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function changeQty(id, delta) {
    const current = quantities[id] || 0;
    quantities[id] = Math.max(0, current + delta);
    const el = $(`#qty-${id}`);
    if (el) el.textContent = quantities[id];
}

// Category filter
$$('.menu-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $$('.menu-nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.category);
    });
});

// ============================================
// Customize Shawarma
// ============================================
function openCustomize(id) {
    selectedExtras = [];
    customQty = 1;
    customQtyEl.textContent = customQty;
    
    extrasList.innerHTML = extras.map(e => `
        <div class="extra-item" data-id="${e.id}" onclick="toggleExtra('${e.id}')">
            <div class="extra-check"><i class="fas fa-check"></i></div>
            <span class="extra-name">${e.name}</span>
        </div>
    `).join('');
    
    updateCustomTotal();
    customizeOverlay.classList.add('active');
    customizeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCustomize() {
    customizeOverlay.classList.remove('active');
    customizeModal.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleExtra(id) {
    const item = $(`.extra-item[data-id="${id}"]`);
    if (selectedExtras.includes(id)) {
        selectedExtras = selectedExtras.filter(e => e !== id);
        item.classList.remove('selected');
    } else {
        selectedExtras.push(id);
        item.classList.add('selected');
    }
    updateCustomTotal();
}

function updateCustomTotal() {
    const base = 250;
    const extrasTotal = selectedExtras.length * EXTRA_PRICE;
    const total = (base + extrasTotal) * customQty;
    customTotalEl.textContent = `${total} ₽`;
}

customMinus.addEventListener('click', () => {
    if (customQty > 1) {
        customQty--;
        customQtyEl.textContent = customQty;
        updateCustomTotal();
    }
});

customPlus.addEventListener('click', () => {
    customQty++;
    customQtyEl.textContent = customQty;
    updateCustomTotal();
});

addCustomBtn.addEventListener('click', () => {
    const base = 250;
    const extrasTotal = selectedExtras.length * EXTRA_PRICE;
    const unitPrice = base + extrasTotal;
    
    const extrasNames = selectedExtras.map(id => extras.find(e => e.id === id)?.name).filter(Boolean);
    
    cart.push({
        id: `custom-${Date.now()}`,
        name: 'Шаурма с курицей',
        price: unitPrice,
        quantity: customQty,
        image: images.shawarma,
        extras: extrasNames,
        isCustom: true
    });
    
    updateCart();
    closeCustomize();
    showToast('Шаурма добавлена в корзину');
});

customizeClose.addEventListener('click', closeCustomize);
customizeOverlay.addEventListener('click', closeCustomize);

// ============================================
// Cart
// ============================================
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    const qty = quantities[id] || 1;
    const existing = cart.find(item => item.id === id && !item.isCustom);
    
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: qty
        });
    }
    
    quantities[id] = 0;
    const el = $(`#qty-${id}`);
    if (el) el.textContent = '0';
    
    updateCart();
    showToast(`${product.name} — добавлено`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function updateCartQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        updateCart();
    }
}

function updateCart() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalQty;
    
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Корзина пуста</p>
            </div>
        `;
    } else {
        cartBody.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    ${item.extras?.length ? `<p class="cart-item-extras">+ ${item.extras.join(', ')}</p>` : ''}
                    <span class="cart-item-price">${item.price * item.quantity} ₽</span>
                </div>
                <div class="cart-item-actions">
                    <button class="cart-remove" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></button>
                    <div class="cart-qty">
                        <button onclick="updateCartQty('${item.id}', -1)"><i class="fas fa-minus"></i></button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQty('${item.id}', 1)"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `${total.toLocaleString('ru-RU')} ₽`;
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
            updateCart();
        } catch (e) {
            cart = [];
        }
    }
}

// Cart drawer
function openCart() {
    cartOverlay.classList.add('active');
    cartDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartOverlay.classList.remove('active');
    cartDrawer.classList.remove('active');
    document.body.style.overflow = '';
}

cartTrigger.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Корзина пуста');
        return;
    }
    closeCart();
    setTimeout(() => {
        successOverlay.classList.add('active');
        successModal.classList.add('active');
        cart = [];
        updateCart();
    }, 300);
});

function closeSuccess() {
    successOverlay.classList.remove('active');
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

successClose.addEventListener('click', closeSuccess);
successOverlay.addEventListener('click', closeSuccess);

// ============================================
// Toast
// ============================================
function showToast(message) {
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============================================
// Contact Form
// ============================================
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Сообщение отправлено!');
    contactForm.reset();
});

// ============================================
// Smooth Scroll
// ============================================
$$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target) {
            const offset = $('#header').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Mobile Menu
// ============================================
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// ============================================
// Keyboard
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCart();
        closeCustomize();
        closeSuccess();
    }
});

// ============================================
// Init
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProducts();
    loadCart();
});

// Make functions global
window.changeQty = changeQty;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQty = updateCartQty;
window.openCustomize = openCustomize;
window.toggleExtra = toggleExtra;
