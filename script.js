// ============================================
// Вкусно и Быстро - JavaScript
// ============================================

// Products Data
const products = [
    // ГОРЯЧЕЕ
    {
        id: 1,
        name: "Курица гриль",
        category: "hot",
        price: 600,
        icon: "fas fa-drumstick-bite",
        desc: "Сочная курица на гриле"
    },
    {
        id: 2,
        name: "Шаурма с курицей",
        category: "hot",
        price: 250,
        icon: "fas fa-burger",
        desc: "Классическая шаурма",
        customizable: true
    },
    {
        id: 3,
        name: "Сырный лаваш",
        category: "hot",
        price: 200,
        icon: "fas fa-cheese",
        desc: "Лаваш с сыром"
    },
    
    // ДЕСЕРТЫ
    {
        id: 4,
        name: "Тирамису",
        category: "dessert",
        price: 320,
        icon: "fas fa-cake-candles",
        desc: "Итальянский десерт"
    },
    {
        id: 5,
        name: "Медовик",
        category: "dessert",
        price: 320,
        icon: "fas fa-layer-group",
        desc: "Домашний торт"
    },
    
    // ВЫПЕЧКА
    {
        id: 6,
        name: "Хачапури по-аджарски",
        category: "bakery",
        price: 200,
        icon: "fas fa-bread-slice",
        desc: "С яйцом и сыром"
    },
    {
        id: 7,
        name: "Хачапури по-мегрельски",
        category: "bakery",
        price: 400,
        icon: "fas fa-bread-slice",
        desc: "С двойным сыром"
    },
    {
        id: 8,
        name: "Ламаджо",
        category: "bakery",
        price: 180,
        icon: "fas fa-pizza-slice",
        desc: "Армянская пицца"
    },
    
    // ХОТ-ДОГИ
    {
        id: 9,
        name: "Датский (курица)",
        category: "hotdog",
        price: 250,
        icon: "fas fa-hotdog",
        desc: "С куриной сосиской"
    },
    {
        id: 10,
        name: "Датский (говядина)",
        category: "hotdog",
        price: 250,
        icon: "fas fa-hotdog",
        desc: "С говяжьей сосиской"
    },
    {
        id: 11,
        name: "Французский (курица)",
        category: "hotdog",
        price: 250,
        icon: "fas fa-hotdog",
        desc: "Французский стиль"
    },
    {
        id: 12,
        name: "Французский (говядина)",
        category: "hotdog",
        price: 250,
        icon: "fas fa-hotdog",
        desc: "Французский стиль"
    },
    
    // НАПИТКИ
    {
        id: 13,
        name: "Натакхтари",
        category: "drinks",
        price: 120,
        icon: "fas fa-bottle-water",
        desc: "Лимонад в ассортименте"
    },
    {
        id: 14,
        name: "Бон Аква",
        category: "drinks",
        price: 100,
        icon: "fas fa-bottle-water",
        desc: "Вода в ассортименте"
    },
    {
        id: 15,
        name: "Добрый",
        category: "drinks",
        price: 100,
        icon: "fas fa-glass-water",
        desc: "Сок в ассортименте"
    },
    {
        id: 16,
        name: "Тан",
        category: "drinks",
        price: 80,
        icon: "fas fa-glass-water",
        desc: "Кисломолочный напиток"
    },
    {
        id: 17,
        name: "Сок Rich",
        category: "drinks",
        price: 150,
        icon: "fas fa-glass-water",
        desc: "Премиум сок"
    },
    {
        id: 18,
        name: "Чай Rich",
        category: "drinks",
        price: 150,
        icon: "fas fa-mug-hot",
        desc: "Холодный чай"
    },
    
    // ПИВО
    {
        id: 19,
        name: "Хугарден",
        category: "beer",
        price: 160,
        icon: "fas fa-beer-mug-empty",
        desc: "Бельгийское пшеничное",
        badge: "18+"
    },
    {
        id: 20,
        name: "Жигули",
        category: "beer",
        price: 110,
        icon: "fas fa-beer-mug-empty",
        desc: "Классическое",
        badge: "18+"
    },
    {
        id: 21,
        name: "Стелла Артуа",
        category: "beer",
        price: 160,
        icon: "fas fa-beer-mug-empty",
        desc: "Бельгийский лагер",
        badge: "18+"
    },
    {
        id: 22,
        name: "Хугарден Б/А",
        category: "beer",
        price: 110,
        icon: "fas fa-beer-mug-empty",
        desc: "Безалкогольное"
    },
    
    // КОФЕ И ЧАЙ
    {
        id: 23,
        name: "Американо",
        category: "coffee",
        price: 120,
        icon: "fas fa-mug-hot",
        desc: "Классический кофе"
    },
    {
        id: 24,
        name: "Капучино",
        category: "coffee",
        price: 160,
        icon: "fas fa-mug-hot",
        desc: "С молочной пенкой"
    },
    {
        id: 25,
        name: "Латте",
        category: "coffee",
        price: 160,
        icon: "fas fa-mug-hot",
        desc: "Нежный и мягкий"
    },
    {
        id: 26,
        name: "Эспрессо",
        category: "coffee",
        price: 90,
        icon: "fas fa-mug-saucer",
        desc: "Крепкий кофе"
    },
    {
        id: 27,
        name: "Чай",
        category: "coffee",
        price: 50,
        icon: "fas fa-mug-hot",
        desc: "Чёрный / зелёный"
    }
];

// Shawarma extras
const shawarmaExtras = [
    { id: 'cheese', name: 'Сыр', price: 50 },
    { id: 'jalapeno', name: 'Халапеньо', price: 50 },
    { id: 'mushrooms', name: 'Грибы', price: 50 },
    { id: 'bacon', name: 'Бекон', price: 50 },
    { id: 'egg', name: 'Яйцо', price: 50 },
    { id: 'sauce', name: 'Доп. соус', price: 50 },
    { id: 'vegetables', name: 'Доп. овощи', price: 50 },
    { id: 'meat', name: 'Доп. мясо', price: 50 }
];

// State
let cart = [];
let productQuantities = {};
let selectedExtras = [];
let customQuantity = 1;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const totalPrice = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const successModal = document.getElementById('successModal');
const closeSuccess = document.getElementById('closeSuccess');
const filterBtns = document.querySelectorAll('.filter-btn');
const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.getElementById('header');
const themeToggle = document.getElementById('themeToggle');
const customizeModal = document.getElementById('customizeModal');
const closeCustomize = document.getElementById('closeCustomize');
const extrasGrid = document.getElementById('extrasGrid');
const customQtyMinus = document.getElementById('customQtyMinus');
const customQtyPlus = document.getElementById('customQtyPlus');
const customQtyValue = document.getElementById('customQtyValue');
const customizeTotal = document.getElementById('customizeTotal');
const addCustomShawarma = document.getElementById('addCustomShawarma');

// ============================================
// Theme Toggle
// ============================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ============================================
// Product Functions
// ============================================
function createProductCard(product) {
    const qty = productQuantities[product.id] || 0;
    
    return `
        <div class="product-card" data-category="${product.category}" data-id="${product.id}">
            <div class="product-image">
                <i class="${product.icon}"></i>
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price} <span>₽</span></span>
                    <div class="product-actions">
                        ${product.customizable ? `
                            <button class="customize-btn" onclick="openCustomize(${product.id})">
                                <i class="fas fa-sliders"></i> Собрать
                            </button>
                        ` : `
                            <div class="qty-controls">
                                <button class="qty-btn" onclick="changeQty(${product.id}, -1)">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="qty-value" id="qty-${product.id}">${qty}</span>
                                <button class="qty-btn" onclick="changeQty(${product.id}, 1)">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <button class="add-btn" onclick="addToCart(${product.id})">
                                <i class="fas fa-plus"></i>
                            </button>
                        `}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(category = 'all') {
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    productsGrid.innerHTML = '';
    
    filtered.forEach((product, index) => {
        const div = document.createElement('div');
        div.innerHTML = createProductCard(product);
        const card = div.firstElementChild;
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        productsGrid.appendChild(card);
        
        setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

function changeQty(productId, delta) {
    const current = productQuantities[productId] || 0;
    const newQty = Math.max(0, current + delta);
    productQuantities[productId] = newQty;
    
    const qtyEl = document.getElementById(`qty-${productId}`);
    if (qtyEl) {
        qtyEl.textContent = newQty;
    }
}

// Category Filter
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.category);
    });
});

// ============================================
// Shawarma Customization
// ============================================
function openCustomize(productId) {
    selectedExtras = [];
    customQuantity = 1;
    
    // Render extras
    extrasGrid.innerHTML = shawarmaExtras.map(extra => `
        <div class="extra-item" data-id="${extra.id}" onclick="toggleExtra('${extra.id}')">
            <div class="extra-checkbox">
                <i class="fas fa-check" style="display: none;"></i>
            </div>
            <span class="extra-name">${extra.name}</span>
        </div>
    `).join('');
    
    updateCustomizeTotal();
    customQtyValue.textContent = customQuantity;
    customizeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function toggleExtra(extraId) {
    const item = document.querySelector(`.extra-item[data-id="${extraId}"]`);
    const checkIcon = item.querySelector('.fa-check');
    
    if (selectedExtras.includes(extraId)) {
        selectedExtras = selectedExtras.filter(id => id !== extraId);
        item.classList.remove('selected');
        checkIcon.style.display = 'none';
    } else {
        selectedExtras.push(extraId);
        item.classList.add('selected');
        checkIcon.style.display = 'block';
    }
    
    updateCustomizeTotal();
}

function updateCustomizeTotal() {
    const basePrice = 250;
    const extrasPrice = selectedExtras.length * 50;
    const total = (basePrice + extrasPrice) * customQuantity;
    customizeTotal.textContent = `${total} ₽`;
}

customQtyMinus.addEventListener('click', () => {
    if (customQuantity > 1) {
        customQuantity--;
        customQtyValue.textContent = customQuantity;
        updateCustomizeTotal();
    }
});

customQtyPlus.addEventListener('click', () => {
    customQuantity++;
    customQtyValue.textContent = customQuantity;
    updateCustomizeTotal();
});

addCustomShawarma.addEventListener('click', () => {
    const basePrice = 250;
    const extrasPrice = selectedExtras.length * 50;
    const unitPrice = basePrice + extrasPrice;
    
    const extrasNames = selectedExtras.map(id => {
        const extra = shawarmaExtras.find(e => e.id === id);
        return extra ? extra.name : '';
    }).filter(n => n);
    
    const cartItem = {
        id: `shawarma-${Date.now()}`,
        name: 'Шаурма с курицей',
        price: unitPrice,
        quantity: customQuantity,
        icon: 'fas fa-burger',
        extras: extrasNames,
        isCustom: true
    };
    
    cart.push(cartItem);
    updateCart();
    closeCustomizeModal();
    showToast('Шаурма добавлена в корзину');
});

function closeCustomizeModal() {
    customizeModal.classList.remove('active');
    document.body.style.overflow = '';
}

closeCustomize.addEventListener('click', closeCustomizeModal);
customizeModal.addEventListener('click', (e) => {
    if (e.target === customizeModal) closeCustomizeModal();
});

// ============================================
// Cart Functions
// ============================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const qty = productQuantities[productId] || 1;
    if (qty === 0) {
        productQuantities[productId] = 1;
    }
    
    const existingItem = cart.find(item => item.id === productId && !item.isCustom);
    
    if (existingItem) {
        existingItem.quantity += (productQuantities[productId] || 1);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            quantity: productQuantities[productId] || 1
        });
    }
    
    productQuantities[productId] = 0;
    const qtyEl = document.getElementById(`qty-${productId}`);
    if (qtyEl) qtyEl.textContent = '0';
    
    updateCart();
    showToast(`${product.name} добавлен в корзину`);
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => {
        if (item.isCustom) {
            return item.id !== cartItemId;
        }
        return item.id !== cartItemId;
    });
    updateCart();
}

function updateCartItemQty(cartItemId, delta, isCustom = false) {
    const item = cart.find(i => {
        if (isCustom) return i.id === cartItemId;
        return i.id === cartItemId && !i.isCustom;
    });
    
    if (!item) return;
    
    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(cartItemId);
    } else {
        updateCart();
    }
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Корзина пуста</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <i class="${item.icon}"></i>
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    ${item.extras && item.extras.length > 0 ? `
                        <p class="cart-item-extras">+ ${item.extras.join(', ')}</p>
                    ` : ''}
                    <span class="cart-item-price">${item.price * item.quantity} ₽</span>
                </div>
                <div class="cart-item-controls">
                    <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                    <div class="cart-qty">
                        <button onclick="updateCartItemQty('${item.id}', -1, ${item.isCustom || false})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartItemQty('${item.id}', 1, ${item.isCustom || false})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `${total.toLocaleString('ru-RU')} ₽`;
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCart();
    }
}

// ============================================
// Modal Functions
// ============================================
function openCartModal() {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCartModal);
closeCart.addEventListener('click', closeCartModal);
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) closeCartModal();
});

closeSuccess.addEventListener('click', () => {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
});

successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Корзина пуста');
        return;
    }
    
    closeCartModal();
    setTimeout(() => {
        successModal.classList.add('active');
        cart = [];
        updateCart();
    }, 300);
});

// ============================================
// Mobile Menu
// ============================================
burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// ============================================
// Toast
// ============================================
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check"></i> ${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ============================================
// Contact Form
// ============================================
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Сообщение отправлено!');
    e.target.reset();
});

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Keyboard
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCartModal();
        closeCustomizeModal();
        successModal.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
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
