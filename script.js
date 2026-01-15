// ============================================
// Golden Shawarma - JavaScript
// ============================================

// Products Data
const products = [
    {
        id: 1,
        name: "Классическая Шаурма",
        category: "classic",
        price: 299,
        weight: "350 г",
        badge: "Хит продаж",
        badgeType: "hit",
        icon: "fas fa-utensils",
        ingredients: [
            { name: "Куриное филе", icon: "fas fa-drumstick-bite" },
            { name: "Лаваш", icon: "fas fa-bread-slice" },
            { name: "Томаты", icon: "fas fa-apple-alt" },
            { name: "Огурцы", icon: "fas fa-seedling" },
            { name: "Капуста", icon: "fas fa-leaf" },
            { name: "Соус чесночный", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 2,
        name: "Шаурма Премиум",
        category: "premium",
        price: 449,
        weight: "450 г",
        badge: "Premium",
        badgeType: "premium",
        icon: "fas fa-crown",
        ingredients: [
            { name: "Телятина", icon: "fas fa-drumstick-bite" },
            { name: "Сыр Фета", icon: "fas fa-cheese" },
            { name: "Руккола", icon: "fas fa-leaf" },
            { name: "Вяленые томаты", icon: "fas fa-apple-alt" },
            { name: "Авокадо", icon: "fas fa-seedling" },
            { name: "Соус Цезарь", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 3,
        name: "Острая Шаурма",
        category: "spicy",
        price: 329,
        weight: "380 г",
        badge: "Острая",
        badgeType: "spicy",
        icon: "fas fa-pepper-hot",
        ingredients: [
            { name: "Куриное филе", icon: "fas fa-drumstick-bite" },
            { name: "Халапеньо", icon: "fas fa-pepper-hot" },
            { name: "Томаты", icon: "fas fa-apple-alt" },
            { name: "Лук красный", icon: "fas fa-circle" },
            { name: "Капуста", icon: "fas fa-leaf" },
            { name: "Острый соус", icon: "fas fa-fire" }
        ]
    },
    {
        id: 4,
        name: "Шаурма с Бараниной",
        category: "premium",
        price: 489,
        weight: "420 г",
        badge: "Premium",
        badgeType: "premium",
        icon: "fas fa-drumstick-bite",
        ingredients: [
            { name: "Баранина", icon: "fas fa-drumstick-bite" },
            { name: "Мята", icon: "fas fa-leaf" },
            { name: "Красный лук", icon: "fas fa-circle" },
            { name: "Томаты черри", icon: "fas fa-apple-alt" },
            { name: "Сумах", icon: "fas fa-mortar-pestle" },
            { name: "Соус тахини", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 5,
        name: "Вегетарианская",
        category: "classic",
        price: 249,
        weight: "320 г",
        badge: "Vegan",
        badgeType: "new",
        icon: "fas fa-carrot",
        ingredients: [
            { name: "Фалафель", icon: "fas fa-circle" },
            { name: "Хумус", icon: "fas fa-mortar-pestle" },
            { name: "Томаты", icon: "fas fa-apple-alt" },
            { name: "Огурцы", icon: "fas fa-seedling" },
            { name: "Капуста", icon: "fas fa-leaf" },
            { name: "Соус тахини", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 6,
        name: "Огненный Дракон",
        category: "spicy",
        price: 379,
        weight: "400 г",
        badge: "Очень острая",
        badgeType: "spicy",
        icon: "fas fa-fire-flame-curved",
        ingredients: [
            { name: "Говядина", icon: "fas fa-drumstick-bite" },
            { name: "Перец чили", icon: "fas fa-pepper-hot" },
            { name: "Шрирача", icon: "fas fa-fire" },
            { name: "Кимчи", icon: "fas fa-leaf" },
            { name: "Зелёный лук", icon: "fas fa-seedling" },
            { name: "Острый майонез", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 7,
        name: "Комбо Набор №1",
        category: "combo",
        price: 699,
        weight: "800 г",
        badge: "-20%",
        badgeType: "hit",
        icon: "fas fa-box-open",
        ingredients: [
            { name: "2 Классические", icon: "fas fa-utensils" },
            { name: "Картофель фри", icon: "fas fa-french-fries" },
            { name: "Coca-Cola 0.5л", icon: "fas fa-glass-water" },
            { name: "Соусы 3 вида", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 8,
        name: "Комбо для Компании",
        category: "combo",
        price: 1499,
        weight: "2 кг",
        badge: "-30%",
        badgeType: "hit",
        icon: "fas fa-users",
        ingredients: [
            { name: "4 Шаурмы на выбор", icon: "fas fa-utensils" },
            { name: "Большая картошка", icon: "fas fa-french-fries" },
            { name: "4 напитка", icon: "fas fa-glass-water" },
            { name: "Соусы все виды", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 9,
        name: "Цыплёнок BBQ",
        category: "classic",
        price: 339,
        weight: "370 г",
        badge: "Новинка",
        badgeType: "new",
        icon: "fas fa-fire",
        ingredients: [
            { name: "Цыплёнок гриль", icon: "fas fa-drumstick-bite" },
            { name: "Соус BBQ", icon: "fas fa-droplet" },
            { name: "Кукуруза", icon: "fas fa-seedling" },
            { name: "Красный лук", icon: "fas fa-circle" },
            { name: "Салат Айсберг", icon: "fas fa-leaf" },
            { name: "Халапеньо", icon: "fas fa-pepper-hot" }
        ]
    }
];

// Cart State
let cart = [];

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

// Slider Elements
const slides = document.querySelectorAll('.slide');
const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');
const sliderDots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

// ============================================
// Slider Functions
// ============================================
function showSlide(index) {
    // Handle index bounds
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    currentSlide = index;
    
    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    // Update dots
    sliderDots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Slider Event Listeners
prevSlideBtn.addEventListener('click', () => {
    stopSlideShow();
    prevSlide();
    startSlideShow();
});

nextSlideBtn.addEventListener('click', () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
});

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopSlideShow();
        showSlide(index);
        startSlideShow();
    });
});

// Start automatic slideshow
startSlideShow();

// ============================================
// Product Functions
// ============================================
function createProductCard(product) {
    const badgeClass = product.badgeType === 'spicy' ? 'spicy' : 
                       product.badgeType === 'new' ? 'new' : '';
    
    const ingredientsList = product.ingredients.map(ing => 
        `<span class="ingredient"><i class="${ing.icon}"></i>${ing.name}</span>`
    ).join('');
    
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <i class="${product.icon}"></i>
                ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-weight">${product.weight}</p>
                <div class="product-ingredients">
                    <h4>Состав:</h4>
                    <div class="ingredients-list">
                        ${ingredientsList}
                    </div>
                </div>
                <div class="product-footer">
                    <span class="product-price">${product.price} <span>₽</span></span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(category = 'all') {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    productsGrid.innerHTML = filteredProducts.map(createProductCard).join('');
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
// Cart Functions
// ============================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            quantity: 1
        });
    }
    
    updateCart();
    showAddedAnimation();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCart();
    }
}

function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Ваша корзина пуста</p>
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
                    <span class="cart-item-price">${item.price * item.quantity} ₽</span>
                </div>
                <div class="cart-item-controls">
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update total price
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `${total} ₽`;
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showAddedAnimation() {
    cartBtn.classList.add('pulse');
    setTimeout(() => cartBtn.classList.remove('pulse'), 300);
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
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

function openSuccessModal() {
    successModal.classList.add('active');
}

function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Cart Modal Events
cartBtn.addEventListener('click', openCartModal);
closeCart.addEventListener('click', closeCartModal);
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        closeCartModal();
    }
});

// Success Modal Events
closeSuccess.addEventListener('click', closeSuccessModal);
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeSuccessModal();
    }
});

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    
    closeCartModal();
    setTimeout(() => {
        openSuccessModal();
        cart = [];
        updateCart();
    }, 300);
});

// ============================================
// Mobile Menu
// ============================================
burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        burgerMenu.classList.remove('active');
    });
});

// ============================================
// Contact Form
// ============================================
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    openSuccessModal();
    contactForm.reset();
});

// ============================================
// Smooth Scroll for Navigation
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Header Scroll Effect
// ============================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    loadCart();
});

// Add CSS for pulse animation
const style = document.createElement('style');
style.textContent = `
    .cart-btn.pulse {
        animation: pulse 0.3s ease;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
