// === CONFIGURATION ===
const DELIVERY_THRESHOLD = 1000;
const DELIVERY_PRICE = 150;
const MIN_ORDER = 500;
const PROMO_CODES = {
    'СКИДКА10': 0.10,
    'ПЕРВЫЙ20': 0.20,
    'VIP': 0.15
};

// === IMAGES ===
const images = {
    'Курица гриль': 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400',
    'Шаурма с курицей': 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400',
    'Сырный лаваш': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
    'Тирамису': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
    'Медовик': 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400',
    'Хачапури по-аджарски': 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400',
    'Хачапури по-мегрельски': 'https://images.unsplash.com/photo-1574448857443-dc1d7e9c4dad?w=400',
    'Ламаджо': 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400',
    'Датский хот-дог (курица)': 'https://images.unsplash.com/photo-1612392062126-2f0e6715c628?w=400',
    'Датский хот-дог (говядина)': 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=400',
    'Французский хот-дог (курица)': 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=400',
    'Французский хот-дог (говядина)': 'https://images.unsplash.com/photo-1612392062126-2f0e6715c628?w=400',
    'Натакати': 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400',
    'Бон Аква': 'https://images.unsplash.com/photo-1560023907-5f339617ea30?w=400',
    'Добрый': 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400',
    'Тан': 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400',
    'Сок Rich': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400',
    'Чай Rich': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
    'Хугарден': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400',
    'Жигули': 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400',
    'Стелла Артуа': 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400',
    'Хугарден Б/А': 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400',
    'Американо': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    'Капучино': 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
    'Латте': 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400',
    'Эспрессо': 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400',
    'Чай': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400',
    'default': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'
};

// === PRODUCTS ===
const products = [
    { id: 1, name: 'Курица гриль', price: 600, category: 'hot', ingredients: ['Курица', 'Специи', 'Чеснок', 'Травы'], weight: '450г', badges: ['hit', 'popular'], desc: 'Сочная курица, приготовленная на гриле с ароматными специями' },
    { id: 2, name: 'Шаурма с курицей', price: 250, category: 'hot', ingredients: ['Лаваш', 'Курица', 'Овощи', 'Соус'], weight: '350г', badges: ['popular'], customizable: true, extras: ['cheese', 'jalapeno', 'sauce', 'meat'], desc: 'Классическая шаурма с нежной курицей и свежими овощами' },
    { id: 3, name: 'Сырный лаваш', price: 200, category: 'hot', ingredients: ['Лаваш', 'Сыр', 'Масло'], weight: '200г', badges: ['new'], desc: 'Хрустящий лаваш с расплавленным сыром' },
    { id: 4, name: 'Тирамису', price: 320, category: 'dessert', ingredients: ['Маскарпоне', 'Савоярди', 'Кофе', 'Какао'], weight: '150г', badges: ['popular'], desc: 'Классический итальянский десерт с кофейной пропиткой' },
    { id: 5, name: 'Медовик', price: 320, category: 'dessert', ingredients: ['Мёд', 'Сметана', 'Орехи'], weight: '180г', badges: [], desc: 'Нежный медовый торт со сметанным кремом' },
    { id: 6, name: 'Хачапури по-аджарски', price: 200, category: 'bakery', ingredients: ['Тесто', 'Сулугуни', 'Яйцо', 'Масло'], weight: '280г', badges: ['hit'], desc: 'Традиционное грузинское хачапури в форме лодочки' },
    { id: 7, name: 'Хачапури по-мегрельски', price: 400, category: 'bakery', ingredients: ['Тесто', 'Сулугуни', 'Имеретинский сыр'], weight: '350г', badges: ['popular'], desc: 'Закрытое хачапури с двойным сыром' },
    { id: 8, name: 'Ламаджо', price: 180, category: 'bakery', ingredients: ['Тесто', 'Мясной фарш', 'Томаты', 'Перец'], weight: '220г', badges: ['spicy'], desc: 'Армянская мясная лепёшка с острым фаршем' },
    { id: 9, name: 'Датский хот-дог (курица)', price: 250, category: 'hotdog', ingredients: ['Булка', 'Сосиска куриная', 'Соусы', 'Лук'], weight: '250г', badges: [], desc: 'Датский хот-дог с куриной сосиской' },
    { id: 10, name: 'Датский хот-дог (говядина)', price: 250, category: 'hotdog', ingredients: ['Булка', 'Сосиска говяжья', 'Соусы', 'Лук'], weight: '250г', badges: ['hit'], desc: 'Датский хот-дог с говяжьей сосиской' },
    { id: 11, name: 'Французский хот-дог (курица)', price: 250, category: 'hotdog', ingredients: ['Багет', 'Сосиска куриная', 'Сыр', 'Соусы'], weight: '260г', badges: [], desc: 'Французский хот-дог в хрустящем багете' },
    { id: 12, name: 'Французский хот-дог (говядина)', price: 250, category: 'hotdog', ingredients: ['Багет', 'Сосиска говяжья', 'Сыр', 'Соусы'], weight: '260г', badges: ['new'], desc: 'Французский хот-дог с говяжьей сосиской' },
    { id: 13, name: 'Натакати', price: 120, category: 'drinks', ingredients: [], weight: '500мл', badges: [], desc: 'Грузинский лимонад в ассортименте' },
    { id: 14, name: 'Бон Аква', price: 100, category: 'drinks', ingredients: [], weight: '500мл', badges: [], desc: 'Питьевая вода в ассортименте' },
    { id: 15, name: 'Добрый', price: 100, category: 'drinks', ingredients: [], weight: '500мл', badges: [], desc: 'Сок в ассортименте' },
    { id: 16, name: 'Тан', price: 80, category: 'drinks', ingredients: ['Кисломолочный продукт'], weight: '500мл', badges: [], desc: 'Освежающий кисломолочный напиток' },
    { id: 17, name: 'Сок Rich', price: 150, category: 'drinks', ingredients: [], weight: '1л', badges: [], desc: 'Премиальный сок в ассортименте' },
    { id: 18, name: 'Чай Rich', price: 150, category: 'drinks', ingredients: [], weight: '1л', badges: [], desc: 'Холодный чай в ассортименте' },
    { id: 19, name: 'Хугарден', price: 160, category: 'beer', ingredients: [], weight: '500мл', badges: ['18'], desc: 'Бельгийское пшеничное пиво' },
    { id: 20, name: 'Жигули', price: 110, category: 'beer', ingredients: [], weight: '500мл', badges: ['18'], desc: 'Классическое светлое пиво' },
    { id: 21, name: 'Стелла Артуа', price: 160, category: 'beer', ingredients: [], weight: '500мл', badges: ['18'], desc: 'Бельгийский светлый лагер' },
    { id: 22, name: 'Хугарден Б/А', price: 110, category: 'beer', ingredients: [], weight: '500мл', badges: [], desc: 'Безалкогольное пшеничное пиво' },
    { id: 23, name: 'Американо', price: 120, category: 'coffee', ingredients: ['Эспрессо', 'Вода'], weight: '200мл', badges: [], desc: 'Классический чёрный кофе' },
    { id: 24, name: 'Капучино', price: 160, category: 'coffee', ingredients: ['Эспрессо', 'Молоко', 'Пенка'], weight: '250мл', badges: ['popular'], desc: 'Кофе с молочной пенкой' },
    { id: 25, name: 'Латте', price: 160, category: 'coffee', ingredients: ['Эспрессо', 'Молоко'], weight: '300мл', badges: [], desc: 'Нежный кофейный напиток с молоком' },
    { id: 26, name: 'Эспрессо', price: 90, category: 'coffee', ingredients: ['Кофе'], weight: '40мл', badges: [], desc: 'Крепкий итальянский кофе' },
    { id: 27, name: 'Чай', price: 50, category: 'coffee', ingredients: ['Чай'], weight: '300мл', badges: [], desc: 'Чай в ассортименте' }
];

// === EXTRAS ===
const allExtras = {
    cheese: { name: 'Дополнительный сыр', price: 50 },
    jalapeno: { name: 'Халапеньо', price: 30 },
    sauce: { name: 'Дополнительный соус', price: 20 },
    meat: { name: 'Двойное мясо', price: 100 }
};

// === STATE ===
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
let currentCategory = 'all';
let searchQuery = '';
let appliedPromo = null;
let appliedDiscount = 0;

// Modal state
let modalProduct = null;
let modalQty = 1;
let modalExtras = [];

// === DOM ELEMENTS ===
const menuGrid = document.getElementById('menuGrid');
const cartTrigger = document.getElementById('cartTrigger');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartClose = document.getElementById('cartClose');
const cartClose2 = document.getElementById('cartClose2');
const cartBody = document.getElementById('cartBody');
const cartBadge = document.getElementById('cartBadge');
const favoritesBadge = document.getElementById('favoritesBadge');

const cartStep1 = document.getElementById('cartStep1');
const cartStep2 = document.getElementById('cartStep2');
const toStep2Btn = document.getElementById('toStep2Btn');
const backToStep1 = document.getElementById('backToStep1');
const submitOrderBtn = document.getElementById('submitOrderBtn');

const productOverlay = document.getElementById('productOverlay');
const productModal = document.getElementById('productModal');
const productClose = document.getElementById('productClose');

const successOverlay = document.getElementById('successOverlay');
const successModal = document.getElementById('successModal');
const successClose = document.getElementById('successClose');

const historyBtn = document.getElementById('historyBtn');
const historyOverlay = document.getElementById('historyOverlay');
const historyDrawer = document.getElementById('historyDrawer');
const historyClose = document.getElementById('historyClose');
const historyBody = document.getElementById('historyBody');

const favoritesBtn = document.getElementById('favoritesBtn');
const favoritesOverlay = document.getElementById('favoritesOverlay');
const favoritesDrawer = document.getElementById('favoritesDrawer');
const favoritesClose = document.getElementById('favoritesClose');
const favoritesBody = document.getElementById('favoritesBody');

const themeBtn = document.getElementById('themeBtn');
const menuSearch = document.getElementById('menuSearch');
const scrollTopBtn = document.getElementById('scrollTop');
const toast = document.getElementById('toast');
const toastText = document.getElementById('toastText');

// Promo slider
const promoSlider = document.getElementById('promoSlider');
const promoDots = document.getElementById('promoDots');
const promoPrev = document.getElementById('promoPrev');
const promoNext = document.getElementById('promoNext');

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProducts();
    updateCart();
    updateFavoritesBadge();
    initPromoSlider();
    initEventListeners();
});

// === THEME ===
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// === PROMO SLIDER ===
let currentPromoSlide = 0;
let promoInterval;

function initPromoSlider() {
    const slides = promoSlider.querySelectorAll('.promo-slide');
    const dots = promoDots.querySelectorAll('.promo-dot');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentPromoSlide = index;
    }
    
    promoNext.addEventListener('click', () => {
        showSlide((currentPromoSlide + 1) % slides.length);
    });
    
    promoPrev.addEventListener('click', () => {
        showSlide((currentPromoSlide - 1 + slides.length) % slides.length);
    });
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });
    
    promoInterval = setInterval(() => {
        showSlide((currentPromoSlide + 1) % slides.length);
    }, 5000);
}

function copyPromo(code) {
    navigator.clipboard.writeText(code).then(() => {
        showToast(`Промокод ${code} скопирован!`);
    });
}
window.copyPromo = copyPromo;

// === PRODUCTS ===
function renderProducts() {
    const filtered = products.filter(p => {
        const categoryMatch = currentCategory === 'all' || 
                            currentCategory === 'favorites' && favorites.includes(p.id) ||
                            p.category === currentCategory;
        const searchMatch = searchQuery === '' || 
                          p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && searchMatch;
    });
    
    if (filtered.length === 0) {
        menuGrid.innerHTML = `
            <div class="cart-empty" style="grid-column: 1/-1;">
                <div class="cart-empty-icon"><i class="fas fa-search"></i></div>
                <h4>Ничего не найдено</h4>
                <p>Попробуйте изменить критерии поиска</p>
            </div>
        `;
        return;
    }
    
    menuGrid.innerHTML = filtered.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const isFavorite = favorites.includes(product.id);
    const imgSrc = images[product.name] || images.default;
    
    const badgesHtml = product.badges.map(badge => {
        const badgeClass = badge === 'hit' ? 'badge-hit' : 
                          badge === 'new' ? 'badge-new' : 
                          badge === 'spicy' ? 'badge-spicy' :
                          badge === '18' ? 'badge-18' :
                          badge === 'popular' ? 'badge-popular' : '';
        const badgeText = badge === 'hit' ? 'Хит' : 
                         badge === 'new' ? 'Новинка' : 
                         badge === 'spicy' ? 'Острое' :
                         badge === '18' ? '18+' :
                         badge === 'popular' ? 'Топ' : badge;
        return `<span class="badge ${badgeClass}">${badgeText}</span>`;
    }).join('');
    
    const ingredientsHtml = product.ingredients.slice(0, 4).map(ing => 
        `<span class="product-ingredient">${ing}</span>`
    ).join('');
    
    return `
        <div class="product-card">
            <div class="product-img" onclick="openProductModal(${product.id})">
                <img src="${imgSrc}" alt="${product.name}" loading="lazy">
                <div class="product-badges">${badgesHtml}</div>
            </div>
            <button class="product-favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                <i class="fas fa-heart"></i>
            </button>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-weight">${product.weight}</div>
                <div class="product-ingredients">${ingredientsHtml}</div>
                <div class="product-footer">
                    <span class="product-price">${product.price} ₽</span>
                    <button class="add-btn" onclick="quickAdd(${product.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// === FAVORITES ===
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Удалено из избранного');
    } else {
        favorites.push(id);
        showToast('Добавлено в избранное');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesBadge();
    renderProducts();
}
window.toggleFavorite = toggleFavorite;

function updateFavoritesBadge() {
    favoritesBadge.textContent = favorites.length;
    favoritesBadge.dataset.count = favorites.length;
}

function renderFavorites() {
    const favoriteProducts = products.filter(p => favorites.includes(p.id));
    
    if (favoriteProducts.length === 0) {
        favoritesBody.innerHTML = `
            <div class="favorites-empty">
                <i class="fas fa-heart"></i>
                <h4>Нет избранных</h4>
                <p>Добавьте блюда, нажав на сердечко</p>
            </div>
        `;
        return;
    }
    
    favoritesBody.innerHTML = favoriteProducts.map(p => {
        const imgSrc = images[p.name] || images.default;
        return `
            <div class="cart-item">
                <div class="cart-item-img"><img src="${imgSrc}" alt="${p.name}"></div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${p.name}</div>
                    <div class="cart-item-bottom">
                        <span class="cart-item-price">${p.price} ₽</span>
                        <button class="add-btn" onclick="quickAdd(${p.id}); closeFavorites();">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="toggleFavorite(${p.id}); renderFavorites();">✕</button>
            </div>
        `;
    }).join('');
}

// === PRODUCT MODAL ===
function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    modalProduct = product;
    modalQty = 1;
    modalExtras = [];
    
    const imgSrc = images[product.name] || images.default;
    
    document.getElementById('modalProductImg').innerHTML = `<img src="${imgSrc}" alt="${product.name}">`;
    document.getElementById('modalProductTitle').textContent = product.name;
    document.getElementById('modalProductDesc').textContent = product.desc || '';
    
    // Badges
    const badgesHtml = product.badges.map(badge => {
        const badgeClass = badge === 'hit' ? 'badge-hit' : 
                          badge === 'new' ? 'badge-new' : 
                          badge === 'spicy' ? 'badge-spicy' :
                          badge === '18' ? 'badge-18' :
                          badge === 'popular' ? 'badge-popular' : '';
        const badgeText = badge === 'hit' ? 'Хит' : 
                         badge === 'new' ? 'Новинка' : 
                         badge === 'spicy' ? 'Острое' :
                         badge === '18' ? '18+' :
                         badge === 'popular' ? 'Топ' : badge;
        return `<span class="badge ${badgeClass}">${badgeText}</span>`;
    }).join('');
    document.getElementById('modalProductBadges').innerHTML = badgesHtml;
    
    // Ingredients
    if (product.ingredients && product.ingredients.length > 0) {
        document.getElementById('modalProductIngredients').innerHTML = `
            <h5>Состав</h5>
            <div class="ingredients-list">
                ${product.ingredients.map(ing => `<span class="ingredient-tag">${ing}</span>`).join('')}
            </div>
        `;
    } else {
        document.getElementById('modalProductIngredients').innerHTML = '';
    }
    
    // Extras
    if (product.customizable && product.extras) {
        document.getElementById('modalProductExtras').innerHTML = `
            <h5>Добавки</h5>
            <div class="extras-grid">
                ${product.extras.map(extraId => {
                    const extra = allExtras[extraId];
                    return `
                        <div class="extra-item" data-id="${extraId}" onclick="toggleModalExtra('${extraId}')">
                            <div class="extra-check"><i class="fas fa-check"></i></div>
                            <span class="extra-name">${extra.name}</span>
                            <span class="extra-price">+${extra.price} ₽</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    } else {
        document.getElementById('modalProductExtras').innerHTML = '';
    }
    
    document.getElementById('modalQtyValue').textContent = modalQty;
    updateModalTotal();
    
    productOverlay.classList.add('active');
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
window.openProductModal = openProductModal;

function closeProductModal() {
    productOverlay.classList.remove('active');
    productModal.classList.remove('active');
    document.body.style.overflow = '';
    modalProduct = null;
}

function toggleModalExtra(extraId) {
    const index = modalExtras.indexOf(extraId);
    if (index > -1) {
        modalExtras.splice(index, 1);
    } else {
        modalExtras.push(extraId);
    }
    
    document.querySelectorAll('#modalProductExtras .extra-item').forEach(el => {
        el.classList.toggle('selected', modalExtras.includes(el.dataset.id));
    });
    
    updateModalTotal();
}
window.toggleModalExtra = toggleModalExtra;

function updateModalTotal() {
    if (!modalProduct) return;
    
    let total = modalProduct.price;
    modalExtras.forEach(extraId => {
        if (allExtras[extraId]) {
            total += allExtras[extraId].price;
        }
    });
    total *= modalQty;
    
    document.getElementById('modalTotalPrice').textContent = `${total} ₽`;
}

document.getElementById('modalQtyMinus').addEventListener('click', () => {
    if (modalQty > 1) {
        modalQty--;
        document.getElementById('modalQtyValue').textContent = modalQty;
        updateModalTotal();
    }
});

document.getElementById('modalQtyPlus').addEventListener('click', () => {
    modalQty++;
    document.getElementById('modalQtyValue').textContent = modalQty;
    updateModalTotal();
});

document.getElementById('modalAddBtn').addEventListener('click', () => {
    if (!modalProduct) return;
    
    const cartItem = {
        cartId: generateCartId(),
        id: modalProduct.id,
        name: modalProduct.name,
        price: modalProduct.price,
        qty: modalQty,
        extras: [...modalExtras]
    };
    
    cart.push(cartItem);
    saveCart();
    updateCart();
    closeProductModal();
    showToast(`${modalProduct.name} добавлен в корзину`);
});

productClose.addEventListener('click', closeProductModal);
productOverlay.addEventListener('click', closeProductModal);

// === QUICK ADD ===
function quickAdd(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    if (product.customizable) {
        openProductModal(id);
        return;
    }
    
    // Check if already in cart
    const existing = cart.find(item => item.id === id && item.extras.length === 0);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            cartId: generateCartId(),
            id: product.id,
            name: product.name,
            price: product.price,
            qty: 1,
            extras: []
        });
    }
    
    saveCart();
    updateCart();
    showToast(`${product.name} добавлен в корзину`);
}
window.quickAdd = quickAdd;

// === CART ===
function generateCartId() {
    return 'cart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadge.textContent = totalItems;
    
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon"><i class="fas fa-shopping-bag"></i></div>
                <h4>Корзина пуста</h4>
                <p>Добавьте что-нибудь вкусное!</p>
                <button class="btn btn-primary" onclick="closeCart()">Перейти в меню</button>
            </div>
        `;
        toStep2Btn.disabled = true;
        document.getElementById('cartSubtotal').textContent = '0 ₽';
        document.getElementById('cartDeliveryPrice').textContent = 'Бесплатно';
        document.getElementById('cartTotal').textContent = '0 ₽';
        document.getElementById('cartTotal2').textContent = '0 ₽';
        document.getElementById('submitOrderTotal').textContent = '0 ₽';
        document.getElementById('minOrderNotice').style.display = 'none';
        return;
    }
    
    cartBody.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        const imgSrc = images[item.name] || images.default;
        
        let itemPrice = item.price;
        let extrasText = '';
        
        if (item.extras && item.extras.length > 0) {
            const extrasNames = item.extras.map(extraId => {
                if (allExtras[extraId]) {
                    itemPrice += allExtras[extraId].price;
                    return allExtras[extraId].name;
                }
                return '';
            }).filter(Boolean);
            extrasText = extrasNames.join(', ');
        }
        
        const totalPrice = itemPrice * item.qty;
        
        return `
            <div class="cart-item">
                <div class="cart-item-img"><img src="${imgSrc}" alt="${item.name}"></div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    ${extrasText ? `<div class="cart-item-extras">${extrasText}</div>` : ''}
                    <div class="cart-item-bottom">
                        <span class="cart-item-price">${totalPrice} ₽</span>
                        <div class="cart-item-qty">
                            <button onclick="updateCartItemQty('${item.cartId}', -1)"><i class="fas fa-minus"></i></button>
                            <span>${item.qty}</span>
                            <button onclick="updateCartItemQty('${item.cartId}', 1)"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.cartId}')">✕</button>
            </div>
        `;
    }).join('');
    
    // Calculate totals
    let subtotal = 0;
    cart.forEach(item => {
        let itemPrice = item.price;
        if (item.extras) {
            item.extras.forEach(extraId => {
                if (allExtras[extraId]) {
                    itemPrice += allExtras[extraId].price;
                }
            });
        }
        subtotal += itemPrice * item.qty;
    });
    
    const discount = subtotal * appliedDiscount;
    const afterDiscount = subtotal - discount;
    
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked')?.value || 'delivery';
    const delivery = deliveryType === 'pickup' ? 0 : (afterDiscount >= DELIVERY_THRESHOLD ? 0 : DELIVERY_PRICE);
    const total = afterDiscount + delivery;
    
    document.getElementById('cartSubtotal').textContent = `${subtotal} ₽`;
    
    const discountRow = document.getElementById('discountRow');
    if (appliedDiscount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('discountLabel').textContent = `Скидка ${Math.round(appliedDiscount * 100)}%`;
        document.getElementById('cartDiscount').textContent = `-${Math.round(discount)} ₽`;
    } else {
        discountRow.style.display = 'none';
    }
    
    if (deliveryType === 'pickup') {
        document.getElementById('cartDeliveryPrice').textContent = 'Самовывоз';
    } else if (delivery === 0) {
        document.getElementById('cartDeliveryPrice').textContent = 'Бесплатно';
    } else {
        document.getElementById('cartDeliveryPrice').textContent = `${delivery} ₽`;
    }
    
    document.getElementById('cartTotal').textContent = `${Math.round(total)} ₽`;
    document.getElementById('cartTotal2').textContent = `${Math.round(total)} ₽`;
    document.getElementById('submitOrderTotal').textContent = `${Math.round(total)} ₽`;
    
    // Min order check
    const minOrderNotice = document.getElementById('minOrderNotice');
    if (subtotal < MIN_ORDER) {
        minOrderNotice.style.display = 'flex';
        toStep2Btn.disabled = true;
    } else {
        minOrderNotice.style.display = 'none';
        toStep2Btn.disabled = false;
    }
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
    updateCart();
}
window.removeFromCart = removeFromCart;

function updateCartItemQty(cartId, delta) {
    const item = cart.find(i => i.cartId === cartId);
    if (!item) return;
    
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(cartId);
    } else {
        saveCart();
        updateCart();
    }
}
window.updateCartItemQty = updateCartItemQty;

function openCart() {
    cartOverlay.classList.add('active');
    cartDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
    showStep(1);
}

function closeCart() {
    cartOverlay.classList.remove('active');
    cartDrawer.classList.remove('active');
    document.body.style.overflow = '';
}
window.closeCart = closeCart;

function showStep(step) {
    if (step === 1) {
        cartStep1.style.display = 'flex';
        cartStep2.style.display = 'none';
    } else {
        cartStep1.style.display = 'none';
        cartStep2.style.display = 'flex';
    }
}

// === ORDER HISTORY ===
function renderHistory() {
    if (orderHistory.length === 0) {
        historyBody.innerHTML = `
            <div class="history-empty">
                <i class="fas fa-clock-rotate-left"></i>
                <h4>История пуста</h4>
                <p>Здесь будут ваши заказы</p>
            </div>
        `;
        return;
    }
    
    historyBody.innerHTML = orderHistory.map(order => `
        <div class="history-item">
            <div class="history-item-header">
                <span class="history-item-number">Заказ #${order.number}</span>
                <span class="history-item-date">${order.date}</span>
            </div>
            <div class="history-item-products">${order.items}</div>
            <div class="history-item-footer">
                <span class="history-item-total">${order.total} ₽</span>
                <button class="history-repeat-btn" onclick="repeatOrder(${order.number})">
                    <i class="fas fa-redo"></i> Повторить
                </button>
            </div>
        </div>
    `).join('');
}

function repeatOrder(orderNumber) {
    const order = orderHistory.find(o => o.number === orderNumber);
    if (!order || !order.cartItems) return;
    
    order.cartItems.forEach(item => {
        cart.push({
            ...item,
            cartId: generateCartId()
        });
    });
    
    saveCart();
    updateCart();
    closeHistory();
    openCart();
    showToast('Заказ добавлен в корзину');
}
window.repeatOrder = repeatOrder;

function openHistory() {
    renderHistory();
    historyOverlay.classList.add('active');
    historyDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeHistory() {
    historyOverlay.classList.remove('active');
    historyDrawer.classList.remove('active');
    document.body.style.overflow = '';
}

function openFavorites() {
    renderFavorites();
    favoritesOverlay.classList.add('active');
    favoritesDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFavorites() {
    favoritesOverlay.classList.remove('active');
    favoritesDrawer.classList.remove('active');
    document.body.style.overflow = '';
}
window.closeFavorites = closeFavorites;

// === PROMO CODES ===
document.getElementById('promoApplyBtn').addEventListener('click', () => {
    const code = document.getElementById('promoInput').value.trim().toUpperCase();
    if (PROMO_CODES[code]) {
        appliedPromo = code;
        appliedDiscount = PROMO_CODES[code];
        document.getElementById('promoRow').style.display = 'none';
        document.getElementById('promoApplied').style.display = 'flex';
        document.getElementById('promoAppliedText').textContent = `Скидка ${Math.round(appliedDiscount * 100)}% применена`;
        updateCart();
        showToast('Промокод применён!');
    } else {
        showToast('Промокод не найден');
    }
});

document.getElementById('promoRemoveBtn').addEventListener('click', () => {
    appliedPromo = null;
    appliedDiscount = 0;
    document.getElementById('promoRow').style.display = 'flex';
    document.getElementById('promoApplied').style.display = 'none';
    document.getElementById('promoInput').value = '';
    updateCart();
});

// === CHECKOUT ===
document.querySelectorAll('input[name="deliveryType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const addressSection = document.getElementById('addressSection');
        addressSection.style.display = e.target.value === 'pickup' ? 'none' : 'block';
        updateCart();
    });
});

submitOrderBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    const address = document.getElementById('customerAddress').value.trim();
    const flat = document.getElementById('customerFlat').value.trim();
    const entrance = document.getElementById('customerEntrance').value.trim();
    const paymentType = document.querySelector('input[name="paymentType"]:checked').value;
    const comment = document.getElementById('customerComment').value.trim();
    
    if (!name || !phone) {
        showToast('Заполните имя и телефон');
        return;
    }
    
    if (deliveryType === 'delivery' && !address) {
        showToast('Укажите адрес доставки');
        return;
    }
    
    // Calculate total
    let subtotal = 0;
    const itemsList = cart.map(item => {
        let itemPrice = item.price;
        let extras = '';
        if (item.extras && item.extras.length > 0) {
            const extrasNames = item.extras.map(extraId => {
                if (allExtras[extraId]) {
                    itemPrice += allExtras[extraId].price;
                    return allExtras[extraId].name;
                }
                return '';
            }).filter(Boolean);
            extras = ` (${extrasNames.join(', ')})`;
        }
        subtotal += itemPrice * item.qty;
        return `${item.name}${extras} x${item.qty}`;
    });
    
    const discount = subtotal * appliedDiscount;
    const afterDiscount = subtotal - discount;
    const delivery = deliveryType === 'pickup' ? 0 : (afterDiscount >= DELIVERY_THRESHOLD ? 0 : DELIVERY_PRICE);
    const total = Math.round(afterDiscount + delivery);
    
    // Create order
    const orderNumber = Math.floor(10000 + Math.random() * 90000);
    const orderDate = new Date().toLocaleString('ru-RU');
    
    const order = {
        number: orderNumber,
        date: orderDate,
        items: itemsList.join(', '),
        total: total,
        cartItems: [...cart],
        customer: { name, phone, address, flat, entrance },
        deliveryType,
        paymentType,
        comment,
        discount: appliedPromo ? `${appliedPromo} (-${Math.round(discount)} ₽)` : null
    };
    
    // Save to history
    orderHistory.unshift(order);
    if (orderHistory.length > 20) orderHistory.pop();
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    
    // Send to Telegram
    if (window.TELEGRAM_CONFIG && window.TELEGRAM_CONFIG.enabled) {
        await sendToTelegram(order);
    }
    
    // Show success
    const successOrderInfo = document.getElementById('successOrderInfo');
    successOrderInfo.innerHTML = `
        <p><span>Заказ:</span><strong>#${orderNumber}</strong></p>
        <p><span>Сумма:</span><strong>${total} ₽</strong></p>
        ${order.discount ? `<p><span>Скидка:</span><strong>${order.discount}</strong></p>` : ''}
        <p><span>Доставка:</span><strong>${deliveryType === 'pickup' ? 'Самовывоз' : address}</strong></p>
    `;
    
    // Reset
    cart = [];
    saveCart();
    updateCart();
    appliedPromo = null;
    appliedDiscount = 0;
    document.getElementById('promoRow').style.display = 'flex';
    document.getElementById('promoApplied').style.display = 'none';
    document.getElementById('promoInput').value = '';
    document.getElementById('checkoutForm').reset();
    
    closeCart();
    successOverlay.classList.add('active');
    successModal.classList.add('active');
});

// === TELEGRAM ===
async function sendToTelegram(order) {
    const { botToken, chatId } = window.TELEGRAM_CONFIG;
    
    const message = `
🆕 *НОВЫЙ ЗАКАЗ #${order.number}*

👤 *Клиент:* ${order.customer.name}
📞 *Телефон:* ${order.customer.phone}

📦 *Заказ:*
${order.items}

💰 *Итого:* ${order.total} ₽
${order.discount ? `🎁 *Скидка:* ${order.discount}` : ''}

🚗 *Доставка:* ${order.deliveryType === 'pickup' ? 'Самовывоз' : order.customer.address}
${order.customer.flat ? `🏠 Кв/офис: ${order.customer.flat}` : ''}
${order.customer.entrance ? `🚪 Подъезд: ${order.customer.entrance}` : ''}

💳 *Оплата:* ${order.paymentType === 'card' ? 'Картой' : order.paymentType === 'cash' ? 'Наличными' : 'Онлайн'}

${order.comment ? `💬 *Комментарий:* ${order.comment}` : ''}

📅 ${order.date}
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

// === SEARCH ===
menuSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
});

// === CATEGORY FILTER ===
document.querySelectorAll('.menu-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.menu-nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderProducts();
    });
});

// === SCROLL TO TOP ===
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === TOAST ===
function showToast(message) {
    toastText.textContent = message;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}

// === EVENT LISTENERS ===
function initEventListeners() {
    cartTrigger.addEventListener('click', openCart);
    cartOverlay.addEventListener('click', closeCart);
    cartClose.addEventListener('click', closeCart);
    cartClose2.addEventListener('click', closeCart);
    
    toStep2Btn.addEventListener('click', () => showStep(2));
    backToStep1.addEventListener('click', () => showStep(1));
    
    historyBtn.addEventListener('click', openHistory);
    historyOverlay.addEventListener('click', closeHistory);
    historyClose.addEventListener('click', closeHistory);
    
    favoritesBtn.addEventListener('click', openFavorites);
    favoritesOverlay.addEventListener('click', closeFavorites);
    favoritesClose.addEventListener('click', closeFavorites);
    
    successClose.addEventListener('click', () => {
        successOverlay.classList.remove('active');
        successModal.classList.remove('active');
    });
    successOverlay.addEventListener('click', () => {
        successOverlay.classList.remove('active');
        successModal.classList.remove('active');
    });
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Сообщение отправлено!');
        e.target.reset();
    });
    
    // ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeProductModal();
            closeHistory();
            closeFavorites();
            successOverlay.classList.remove('active');
            successModal.classList.remove('active');
        }
    });
    
    // Smooth scroll for nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Init new features
    initCountdown();
    initReviewsSlider();
    initParallax();
}

// === COUNTDOWN TIMER ===
function initCountdown() {
    // Set end time to today 23:59:59
    const now = new Date();
    const endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    
    function updateCountdown() {
        const now = new Date();
        let diff = endTime - now;
        
        if (diff <= 0) {
            // Reset to next day
            diff = 24 * 60 * 60 * 1000;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const hoursEl = document.getElementById('countHours');
        const minutesEl = document.getElementById('countMinutes');
        const secondsEl = document.getElementById('countSeconds');
        
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// === REVIEWS SLIDER ===
function initReviewsSlider() {
    const track = document.getElementById('reviewsTrack');
    const prevBtn = document.getElementById('reviewsPrev');
    const nextBtn = document.getElementById('reviewsNext');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const cards = track.querySelectorAll('.review-card');
    const cardWidth = 404; // 380 + 24 gap
    const visibleCards = Math.floor(track.parentElement.offsetWidth / cardWidth) || 1;
    const maxIndex = Math.max(0, cards.length - visibleCards);
    
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateSlider();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(maxIndex, currentIndex + 1);
        updateSlider();
    });
    
    // Auto scroll
    setInterval(() => {
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateSlider();
    }, 5000);
}

// === GALLERY LIGHTBOX ===
const galleryImages = [
    'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1200',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200',
    'https://images.unsplash.com/photo-1574448857443-dc1d7e9c4dad?w=1200',
    'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1200',
    'https://images.unsplash.com/photo-1612392062126-2f0e6715c628?w=1200',
    'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=1200'
];
let currentLightboxIndex = 0;

function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    
    img.src = galleryImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}
window.openLightbox = openLightbox;

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}
window.closeLightbox = closeLightbox;

function lightboxPrev() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById('lightboxImg').src = galleryImages[currentLightboxIndex];
}
window.lightboxPrev = lightboxPrev;

function lightboxNext() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
    document.getElementById('lightboxImg').src = galleryImages[currentLightboxIndex];
}
window.lightboxNext = lightboxNext;

// Close lightbox on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
    if (e.key === 'ArrowLeft') {
        lightboxPrev();
    }
    if (e.key === 'ArrowRight') {
        lightboxNext();
    }
});

// Close lightbox on overlay click
document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// === PARALLAX EFFECT ===
function initParallax() {
    const heroImg = document.querySelector('.hero-bg-img');
    if (!heroImg) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        heroImg.style.transform = `translateY(${rate}px)`;
    });
}
