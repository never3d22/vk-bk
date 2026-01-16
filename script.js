// ============================================
// Shawarma House - Modern UX JavaScript
// ============================================

// Products Data
const products = [
    {
        id: 1,
        name: "Классическая",
        category: "classic",
        price: 289,
        weight: "350 г",
        badge: "Хит",
        badgeType: "hit",
        icon: "fas fa-burger",
        ingredients: [
            { name: "Курица", icon: "fas fa-drumstick-bite" },
            { name: "Лаваш", icon: "fas fa-bread-slice" },
            { name: "Помидоры", icon: "fas fa-apple-alt" },
            { name: "Огурцы", icon: "fas fa-seedling" },
            { name: "Капуста", icon: "fas fa-leaf" },
            { name: "Чесночный соус", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 2,
        name: "Премиум с говядиной",
        category: "premium",
        price: 389,
        weight: "420 г",
        badge: "Premium",
        badgeType: "premium",
        icon: "fas fa-crown",
        ingredients: [
            { name: "Говядина", icon: "fas fa-drumstick-bite" },
            { name: "Сыр", icon: "fas fa-cheese" },
            { name: "Руккола", icon: "fas fa-leaf" },
            { name: "Томаты", icon: "fas fa-apple-alt" },
            { name: "Авокадо", icon: "fas fa-seedling" },
            { name: "Соус Цезарь", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 3,
        name: "Острая с халапеньо",
        category: "spicy",
        price: 319,
        weight: "380 г",
        badge: "Острая 🔥",
        badgeType: "spicy",
        icon: "fas fa-pepper-hot",
        ingredients: [
            { name: "Курица", icon: "fas fa-drumstick-bite" },
            { name: "Халапеньо", icon: "fas fa-pepper-hot" },
            { name: "Томаты", icon: "fas fa-apple-alt" },
            { name: "Лук", icon: "fas fa-circle" },
            { name: "Острый соус", icon: "fas fa-fire" }
        ]
    },
    {
        id: 4,
        name: "С бараниной",
        category: "premium",
        price: 449,
        weight: "450 г",
        badge: "Premium",
        badgeType: "premium",
        icon: "fas fa-star",
        ingredients: [
            { name: "Баранина", icon: "fas fa-drumstick-bite" },
            { name: "Мята", icon: "fas fa-leaf" },
            { name: "Лук", icon: "fas fa-circle" },
            { name: "Томаты черри", icon: "fas fa-apple-alt" },
            { name: "Тахини", icon: "fas fa-droplet" }
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
            { name: "Овощи", icon: "fas fa-seedling" },
            { name: "Салат", icon: "fas fa-leaf" },
            { name: "Тахини", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 6,
        name: "Огненная",
        category: "spicy",
        price: 349,
        weight: "400 г",
        badge: "Очень острая 🔥🔥",
        badgeType: "spicy",
        icon: "fas fa-fire-flame-curved",
        ingredients: [
            { name: "Говядина", icon: "fas fa-drumstick-bite" },
            { name: "Перец чили", icon: "fas fa-pepper-hot" },
            { name: "Шрирача", icon: "fas fa-fire" },
            { name: "Лук", icon: "fas fa-seedling" },
            { name: "Острый майонез", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 7,
        name: "Комбо на двоих",
        category: "combo",
        price: 649,
        weight: "850 г",
        badge: "-20%",
        badgeType: "hit",
        icon: "fas fa-box-open",
        ingredients: [
            { name: "2 шаурмы", icon: "fas fa-burger" },
            { name: "Картошка фри", icon: "fas fa-french-fries" },
            { name: "2 напитка", icon: "fas fa-glass-water" },
            { name: "Соусы", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 8,
        name: "Комбо для компании",
        category: "combo",
        price: 1399,
        weight: "2 кг",
        badge: "-30%",
        badgeType: "hit",
        icon: "fas fa-users",
        ingredients: [
            { name: "4 шаурмы", icon: "fas fa-burger" },
            { name: "Большая картошка", icon: "fas fa-french-fries" },
            { name: "4 напитка", icon: "fas fa-glass-water" },
            { name: "Все соусы", icon: "fas fa-droplet" }
        ]
    },
    {
        id: 9,
        name: "BBQ курица",
        category: "classic",
        price: 329,
        weight: "380 г",
        badge: "New",
        badgeType: "new",
        icon: "fas fa-drumstick-bite",
        ingredients: [
            { name: "Курица гриль", icon: "fas fa-drumstick-bite" },
            { name: "BBQ соус", icon: "fas fa-droplet" },
            { name: "Кукуруза", icon: "fas fa-seedling" },
            { name: "Лук", icon: "fas fa-circle" },
            { name: "Салат", icon: "fas fa-leaf" }
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
const header = document.getElementById('header');

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
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

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
                    <button class="add-to-cart" onclick="addToCart(${product.id})" aria-label="Добавить в корзину">
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
        productCard.style.transform = 'translateY(20px)';
        productsGrid.appendChild(productCard);
        
        setTimeout(() => {
            productCard.style.transition = 'all 0.4s ease';
            productCard.style.opacity = '1';
            productCard.style.transform = 'translateY(0)';
        }, index * 80);
    });
}

// Category Filter
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const currentCards = productsGrid.querySelectorAll('.product-card');
        currentCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        });
        
        setTimeout(() => {
            renderProducts(btn.dataset.category);
        }, 200);
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
    showToast(`${product.name} добавлена в корзину`);
    animateCartButton();
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
                    <span class="cart-item-price">${item.price * item.quantity} ₽</span>
                </div>
                <div class="cart-item-controls">
                    <button class="remove-item" onclick="removeFromCart(${item.id})" aria-label="Удалить">
                        <i class="fas fa-trash"></i>
                    </button>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Уменьшить">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Увеличить">
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

function animateCartButton() {
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// ============================================
// Toast Notification
// ============================================
function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    
    // Add toast styles if not exists
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            .toast {
                position: fixed;
                bottom: 24px;
                left: 50%;
                transform: translateX(-50%) translateY(100px);
                background: #1A1A2E;
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                gap: 12px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.2);
                z-index: 3000;
                opacity: 0;
                transition: all 0.3s ease;
            }
            .toast.show {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
            .toast i {
                color: #00B894;
                font-size: 20px;
            }
            .toast span {
                font-size: 14px;
                font-weight: 500;
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
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
    if (e.target === cartModal) closeCartModal();
});

closeSuccess.addEventListener('click', closeSuccessModal);
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) closeSuccessModal();
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Корзина пуста');
        return;
    }
    
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
    showToast('Заявка отправлена!');
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
            const headerHeight = header.offsetHeight;
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
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements after DOM load
function setupAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .delivery-card, .about-content, .contacts-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    loadCart();
    setupAnimations();
});

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCartModal();
        closeSuccessModal();
        mobileMenu.classList.remove('active');
    }
});
