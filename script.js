// ============================================
// Golden Shawarma - Premium JavaScript
// ============================================

// Products Data - Premium Collection
const products = [
    {
        id: 1,
        name: "Классическая Шаурма",
        category: "classic",
        price: 299,
        weight: "350 г",
        badge: "Бестселлер",
        badgeType: "hit",
        icon: "fas fa-utensils",
        ingredients: [
            { name: "Куриное филе", icon: "fas fa-drumstick-bite" },
            { name: "Лаваш", icon: "fas fa-bread-slice" },
            { name: "Томаты", icon: "fas fa-apple-alt" },
            { name: "Огурцы", icon: "fas fa-seedling" },
            { name: "Капуста", icon: "fas fa-leaf" },
            { name: "Фирменный соус", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 2,
        name: "Шаурма Империал",
        category: "premium",
        price: 549,
        weight: "480 г",
        badge: "Premium",
        badgeType: "premium",
        icon: "fas fa-crown",
        ingredients: [
            { name: "Мраморная говядина", icon: "fas fa-drumstick-bite" },
            { name: "Сыр Фета", icon: "fas fa-cheese" },
            { name: "Руккола", icon: "fas fa-leaf" },
            { name: "Вяленые томаты", icon: "fas fa-apple-alt" },
            { name: "Трюфельный соус", icon: "fas fa-droplet" },
            { name: "Авокадо", icon: "fas fa-seedling" }
        ]
    },
    {
        id: 3,
        name: "Адская Жара",
        category: "spicy",
        price: 349,
        weight: "400 г",
        badge: "Экстра острая",
        badgeType: "spicy",
        icon: "fas fa-pepper-hot",
        ingredients: [
            { name: "Куриное филе", icon: "fas fa-drumstick-bite" },
            { name: "Перец Хабанеро", icon: "fas fa-pepper-hot" },
            { name: "Халапеньо", icon: "fas fa-fire" },
            { name: "Красный лук", icon: "fas fa-circle" },
            { name: "Чили соус", icon: "fas fa-droplet" },
            { name: "Кинза", icon: "fas fa-leaf" }
        ]
    },
    {
        id: 4,
        name: "Шаурма Султан",
        category: "premium",
        price: 599,
        weight: "450 г",
        badge: "Exclusive",
        badgeType: "premium",
        icon: "fas fa-gem",
        ingredients: [
            { name: "Ягнёнок", icon: "fas fa-drumstick-bite" },
            { name: "Гранат", icon: "fas fa-apple-alt" },
            { name: "Свежая мята", icon: "fas fa-leaf" },
            { name: "Хумус", icon: "fas fa-mortar-pestle" },
            { name: "Соус тахини", icon: "fas fa-droplet" },
            { name: "Сумах", icon: "fas fa-seedling" }
        ]
    },
    {
        id: 5,
        name: "Веган Делюкс",
        category: "classic",
        price: 299,
        weight: "380 г",
        badge: "Vegan",
        badgeType: "new",
        icon: "fas fa-carrot",
        ingredients: [
            { name: "Фалафель", icon: "fas fa-circle" },
            { name: "Хумус", icon: "fas fa-mortar-pestle" },
            { name: "Баклажан гриль", icon: "fas fa-seedling" },
            { name: "Томаты черри", icon: "fas fa-apple-alt" },
            { name: "Микс салатов", icon: "fas fa-leaf" },
            { name: "Тахини", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 6,
        name: "Огненный Дракон",
        category: "spicy",
        price: 399,
        weight: "420 г",
        badge: "Очень острая",
        badgeType: "spicy",
        icon: "fas fa-fire-flame-curved",
        ingredients: [
            { name: "Говядина Блэк Ангус", icon: "fas fa-drumstick-bite" },
            { name: "Перец чили", icon: "fas fa-pepper-hot" },
            { name: "Соус Шрирача", icon: "fas fa-fire" },
            { name: "Кимчи", icon: "fas fa-leaf" },
            { name: "Зелёный лук", icon: "fas fa-seedling" },
            { name: "Васаби майонез", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 7,
        name: "Комбо Дуэт",
        category: "combo",
        price: 799,
        weight: "900 г",
        badge: "Выгода -25%",
        badgeType: "hit",
        icon: "fas fa-box-open",
        ingredients: [
            { name: "2 Шаурмы на выбор", icon: "fas fa-utensils" },
            { name: "Картофель Премиум", icon: "fas fa-fire" },
            { name: "2 Напитка", icon: "fas fa-glass-water" },
            { name: "Соусы 4 вида", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 8,
        name: "Комбо Империя",
        category: "combo",
        price: 1799,
        weight: "2.5 кг",
        badge: "VIP -35%",
        badgeType: "hit",
        icon: "fas fa-users",
        ingredients: [
            { name: "5 Шаурм Премиум", icon: "fas fa-crown" },
            { name: "XXL Картофель", icon: "fas fa-fire" },
            { name: "5 Напитков", icon: "fas fa-glass-water" },
            { name: "Все соусы", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 9,
        name: "BBQ Люкс",
        category: "classic",
        price: 379,
        weight: "400 г",
        badge: "Новинка",
        badgeType: "new",
        icon: "fas fa-fire",
        ingredients: [
            { name: "Цыплёнок гриль", icon: "fas fa-drumstick-bite" },
            { name: "Соус BBQ Gold", icon: "fas fa-droplet" },
            { name: "Карамелизированный лук", icon: "fas fa-circle" },
            { name: "Кукуруза гриль", icon: "fas fa-seedling" },
            { name: "Бекон", icon: "fas fa-bacon" },
            { name: "Айсберг", icon: "fas fa-leaf" }
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
// Floating Particles Effect
// ============================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(212, 175, 55, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            pointer-events: none;
            z-index: -1;
            animation: floatParticle ${Math.random() * 20 + 15}s linear infinite;
            animation-delay: ${Math.random() * 10}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation styles
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    .particles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    }
`;
document.head.appendChild(particleStyles);

// ============================================
// Slider Functions
// ============================================
function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    currentSlide = index;
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
    
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
    slideInterval = setInterval(nextSlide, 6000);
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
                    <h4>Состав</h4>
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
    
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach((product, index) => {
        const card = document.createElement('div');
        card.innerHTML = createProductCard(product);
        const productCard = card.firstElementChild;
        productCard.style.opacity = '0';
        productCard.style.transform = 'translateY(30px)';
        productsGrid.appendChild(productCard);
        
        setTimeout(() => {
            productCard.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            productCard.style.opacity = '1';
            productCard.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Category Filter with animation
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Fade out current products
        const currentCards = productsGrid.querySelectorAll('.product-card');
        currentCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        });
        
        setTimeout(() => {
            renderProducts(btn.dataset.category);
        }, 300);
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
    showNotification(`${product.name} добавлена в корзину`);
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
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
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
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `${total.toLocaleString('ru-RU')} ₽`;
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showAddedAnimation() {
    cartBtn.classList.add('pulse');
    setTimeout(() => cartBtn.classList.remove('pulse'), 400);
}

// Notification Toast
function showNotification(message) {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add toast styles
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast-notification {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%);
        border: 1px solid rgba(212, 175, 55, 0.3);
        padding: 18px 35px;
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 3000;
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .toast-notification.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    
    .toast-notification i {
        color: #D4AF37;
        font-size: 20px;
    }
    
    .toast-notification span {
        color: #fff;
        font-size: 14px;
        letter-spacing: 0.5px;
    }
`;
document.head.appendChild(toastStyles);

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

cartBtn.addEventListener('click', openCartModal);
closeCart.addEventListener('click', closeCartModal);
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        closeCartModal();
    }
});

closeSuccess.addEventListener('click', closeSuccessModal);
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeSuccessModal();
    }
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    
    closeCartModal();
    setTimeout(() => {
        openSuccessModal();
        cart = [];
        updateCart();
    }, 400);
});

// ============================================
// Mobile Menu
// ============================================
burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

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
// Smooth Scroll
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
// Scroll Animations
// ============================================
function revealOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .delivery-card, .about-content, .contacts-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for scroll animations
document.querySelectorAll('.feature-card, .delivery-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
});

window.addEventListener('scroll', revealOnScroll);

// ============================================
// Header Scroll Effect
// ============================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(5, 5, 5, 0.98)';
        header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.background = 'rgba(5, 5, 5, 0.85)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Cursor Glow Effect (Desktop only)
// ============================================
function initCursorGlow() {
    if (window.innerWidth < 768) return;
    
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}

// Add cursor glow styles
const cursorStyles = document.createElement('style');
cursorStyles.textContent = `
    .cursor-glow {
        position: fixed;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s;
    }
    
    .cart-btn.pulse {
        animation: pulse 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.15); box-shadow: 0 0 40px rgba(212, 175, 55, 0.5); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(cursorStyles);

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    loadCart();
    createParticles();
    initCursorGlow();
    revealOnScroll();
});
