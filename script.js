// ============================================
// Вкусно и Быстро — Full-Featured App
// ============================================

const images = {
    shawarma: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600&q=80',
    chicken: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80',
    lavash: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    tiramisu: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
    medovik: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',
    khachapuri: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80',
    lamadjo: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80',
    hotdog: 'https://images.unsplash.com/photo-1612392062126-1b76d3c73f5c?w=600&q=80',
    lemonade: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80',
    water: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80',
    juice: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80',
    beer: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80',
    coffee: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
    tea: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80'
};

// All extras available for customization
const allExtras = [
    { id: 'cheese', name: 'Сыр', price: 50 },
    { id: 'jalapeno', name: 'Халапеньо', price: 50 },
    { id: 'mushrooms', name: 'Грибы', price: 60 },
    { id: 'bacon', name: 'Бекон', price: 80 },
    { id: 'egg', name: 'Яйцо', price: 40 },
    { id: 'sauce', name: 'Доп. соус', price: 30 },
    { id: 'vegetables', name: 'Доп. овощи', price: 40 },
    { id: 'meat', name: 'Доп. мясо', price: 100 }
];

// Products with full details
const products = [
    // ГОРЯЧЕЕ
    {
        id: 1, name: 'Курица гриль', category: 'hot', price: 600,
        image: images.chicken,
        desc: 'Сочная курица на гриле с ароматными специями и травами. Подаётся с фирменным соусом.',
        ingredients: ['Курица', 'Специи', 'Травы', 'Чеснок', 'Лимон'],
        badges: ['popular', 'hit'],
        weight: '450 г'
    },
    {
        id: 2, name: 'Шаурма с курицей', category: 'hot', price: 250,
        image: images.shawarma,
        desc: 'Классическая шаурма с нежной курицей, свежими овощами и фирменным соусом в тонком лаваше.',
        ingredients: ['Курица', 'Лаваш', 'Томаты', 'Огурцы', 'Капуста', 'Соус'],
        badges: ['popular'],
        weight: '350 г',
        customizable: true,
        extras: ['cheese', 'jalapeno', 'mushrooms', 'bacon', 'egg', 'sauce', 'vegetables', 'meat']
    },
    {
        id: 3, name: 'Сырный лаваш', category: 'hot', price: 200,
        image: images.lavash,
        desc: 'Хрустящий лаваш с тремя видами сыра. Подаётся горячим.',
        ingredients: ['Лаваш', 'Сулугуни', 'Моцарелла', 'Чеддер'],
        badges: ['new'],
        weight: '280 г'
    },
    
    // ДЕСЕРТЫ
    {
        id: 4, name: 'Тирамису', category: 'dessert', price: 320,
        image: images.tiramisu,
        desc: 'Классический итальянский десерт с маскарпоне и кофейной пропиткой.',
        ingredients: ['Маскарпоне', 'Савоярди', 'Эспрессо', 'Какао'],
        badges: ['popular', 'hit'],
        weight: '150 г'
    },
    {
        id: 5, name: 'Медовик', category: 'dessert', price: 320,
        image: images.medovik,
        desc: 'Домашний торт с тонкими медовыми коржами и нежным кремом.',
        ingredients: ['Мёд', 'Сметана', 'Масло', 'Мука'],
        badges: [],
        weight: '180 г'
    },
    
    // ВЫПЕЧКА
    {
        id: 6, name: 'Хачапури по-аджарски', category: 'bakery', price: 200,
        image: images.khachapuri,
        desc: 'Лодочка из теста с сыром сулугуни, яйцом и сливочным маслом.',
        ingredients: ['Тесто', 'Сулугуни', 'Яйцо', 'Масло'],
        badges: ['popular', 'hit'],
        weight: '350 г'
    },
    {
        id: 7, name: 'Хачапури по-мегрельски', category: 'bakery', price: 400,
        image: images.khachapuri,
        desc: 'Закрытый хачапури с двойным слоем сыра — внутри и сверху.',
        ingredients: ['Тесто', 'Сулугуни', 'Имеретинский сыр', 'Масло'],
        badges: [],
        weight: '400 г'
    },
    {
        id: 8, name: 'Ламаджо', category: 'bakery', price: 180,
        image: images.lamadjo,
        desc: 'Армянская пицца с острой мясной начинкой и овощами.',
        ingredients: ['Тесто', 'Говядина', 'Томаты', 'Перец', 'Зелень'],
        badges: ['spicy'],
        weight: '280 г'
    },
    
    // ХОТ-ДОГИ
    {
        id: 9, name: 'Датский хот-дог (курица)', category: 'hotdog', price: 250,
        image: images.hotdog,
        desc: 'Датский хот-дог с куриной сосиской, жареным луком и соусами.',
        ingredients: ['Булочка', 'Сосиска куриная', 'Лук', 'Огурцы', 'Горчица', 'Кетчуп'],
        badges: ['popular'],
        weight: '220 г',
        customizable: true,
        extras: ['cheese', 'jalapeno', 'bacon', 'sauce']
    },
    {
        id: 10, name: 'Датский хот-дог (говядина)', category: 'hotdog', price: 250,
        image: images.hotdog,
        desc: 'Датский хот-дог с говяжьей сосиской, жареным луком и соусами.',
        ingredients: ['Булочка', 'Сосиска говяжья', 'Лук', 'Огурцы', 'Горчица', 'Кетчуп'],
        badges: [],
        weight: '230 г',
        customizable: true,
        extras: ['cheese', 'jalapeno', 'bacon', 'sauce']
    },
    {
        id: 11, name: 'Французский хот-дог', category: 'hotdog', price: 250,
        image: images.hotdog,
        desc: 'Французский хот-дог в багете с соусами на выбор.',
        ingredients: ['Багет', 'Сосиска', 'Сыр', 'Горчица', 'Кетчуп'],
        badges: ['new'],
        weight: '200 г',
        customizable: true,
        extras: ['cheese', 'jalapeno', 'sauce']
    },
    
    // НАПИТКИ
    {
        id: 12, name: 'Натахтари', category: 'drinks', price: 120,
        image: images.lemonade,
        desc: 'Грузинский лимонад в ассортименте: тархун, груша, саперави.',
        ingredients: ['Вода', 'Сахар', 'Натуральные экстракты'],
        badges: ['popular'],
        weight: '500 мл'
    },
    {
        id: 13, name: 'Бон Аква', category: 'drinks', price: 100,
        image: images.water,
        desc: 'Питьевая вода газированная или негазированная.',
        ingredients: ['Вода'],
        badges: [],
        weight: '500 мл'
    },
    {
        id: 14, name: 'Сок Rich', category: 'drinks', price: 150,
        image: images.juice,
        desc: 'Премиум сок в ассортименте: яблоко, апельсин, мультифрукт.',
        ingredients: ['Натуральный сок'],
        badges: [],
        weight: '300 мл'
    },
    
    // КОФЕ
    {
        id: 15, name: 'Капучино', category: 'coffee', price: 160,
        image: images.coffee,
        desc: 'Классический капучино с нежной молочной пенкой.',
        ingredients: ['Эспрессо', 'Молоко', 'Пенка'],
        badges: ['popular', 'hit'],
        weight: '300 мл'
    },
    {
        id: 16, name: 'Латте', category: 'coffee', price: 160,
        image: images.coffee,
        desc: 'Мягкий кофе с большим количеством молока.',
        ingredients: ['Эспрессо', 'Молоко'],
        badges: [],
        weight: '350 мл'
    },
    {
        id: 17, name: 'Американо', category: 'coffee', price: 120,
        image: images.coffee,
        desc: 'Классический чёрный кофе с насыщенным вкусом.',
        ingredients: ['Эспрессо', 'Вода'],
        badges: [],
        weight: '250 мл'
    },
    {
        id: 18, name: 'Чай', category: 'coffee', price: 50,
        image: images.tea,
        desc: 'Чёрный или зелёный чай на выбор.',
        ingredients: ['Чай', 'Вода'],
        badges: [],
        weight: '300 мл'
    }
];

const DELIVERY_THRESHOLD = 1000;
const DELIVERY_PRICE = 150;

// State
let cart = [];
let currentProduct = null;
let modalQty = 1;
let modalExtras = [];

// DOM
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// Elements
const menuGrid = $('#menuGrid');
const cartTrigger = $('#cartTrigger');
const cartOverlay = $('#cartOverlay');
const cartDrawer = $('#cartDrawer');
const cartClose = $('#cartClose');
const cartClose2 = $('#cartClose2');
const cartBody = $('#cartBody');
const cartBadge = $('#cartBadge');
const cartSubtotal = $('#cartSubtotal');
const cartDeliveryPrice = $('#cartDeliveryPrice');
const cartTotal = $('#cartTotal');
const cartSubtotal2 = $('#cartSubtotal2');
const cartDeliveryPrice2 = $('#cartDeliveryPrice2');
const cartTotal2 = $('#cartTotal2');
const toStep2Btn = $('#toStep2Btn');
const backToStep1 = $('#backToStep1');
const cartStep1 = $('#cartStep1');
const cartStep2 = $('#cartStep2');
const submitOrderBtn = $('#submitOrderBtn');
const submitOrderTotal = $('#submitOrderTotal');
const addressSection = $('#addressSection');
const themeBtn = $('#themeBtn');
const contactForm = $('#contactForm');
const toast = $('#toast');
const toastText = $('#toastText');

const productOverlay = $('#productOverlay');
const productModal = $('#productModal');
const productClose = $('#productClose');
const modalProductImg = $('#modalProductImg');
const modalProductBadges = $('#modalProductBadges');
const modalProductTitle = $('#modalProductTitle');
const modalProductDesc = $('#modalProductDesc');
const modalProductIngredients = $('#modalProductIngredients');
const modalProductExtras = $('#modalProductExtras');
const modalQtyMinus = $('#modalQtyMinus');
const modalQtyPlus = $('#modalQtyPlus');
const modalQtyValue = $('#modalQtyValue');
const modalTotalPrice = $('#modalTotalPrice');
const modalAddBtn = $('#modalAddBtn');

const successOverlay = $('#successOverlay');
const successModal = $('#successModal');
const successClose = $('#successClose');
const successOrderInfo = $('#successOrderInfo');

// ============================================
// Theme
// ============================================
function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
}

themeBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// ============================================
// Badge HTML
// ============================================
function getBadgeHTML(badges) {
    const badgeMap = {
        popular: { class: 'badge-popular', text: '🔥 Популярное' },
        hit: { class: 'badge-hit', text: 'Хит' },
        new: { class: 'badge-new', text: 'Новинка' },
        spicy: { class: 'badge-spicy', text: '🌶️ Острое' },
        vegan: { class: 'badge-vegan', text: '🌱 Веган' },
        '18+': { class: 'badge-18', text: '18+' }
    };
    
    return badges.map(b => {
        const badge = badgeMap[b];
        return badge ? `<span class="product-badge ${badge.class}">${badge.text}</span>` : '';
    }).join('');
}

// ============================================
// Products Rendering
// ============================================
function renderProducts(category = 'all') {
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    
    menuGrid.innerHTML = filtered.map(p => `
        <article class="product-card" onclick="openProductModal(${p.id})">
            <div class="product-img">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                <div class="product-badges">${getBadgeHTML(p.badges)}</div>
            </div>
            <div class="product-body">
                <h3 class="product-name">${p.name}</h3>
                <p class="product-desc">${p.desc.substring(0, 60)}...</p>
                <div class="product-ingredients">
                    ${p.ingredients.slice(0, 4).map(i => `<span class="product-ingredient">${i}</span>`).join('')}
                    ${p.ingredients.length > 4 ? `<span class="product-ingredient">+${p.ingredients.length - 4}</span>` : ''}
                </div>
                <div class="product-footer">
                    <div class="product-price-dynamic">
                        <span class="product-price">${p.price} <span>₽</span></span>
                        ${p.weight ? `<span style="font-size: 12px; color: var(--text-muted)">${p.weight}</span>` : ''}
                    </div>
                    <button class="add-btn" onclick="event.stopPropagation(); quickAdd(${p.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

function quickAdd(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    if (product.customizable) {
        openProductModal(id);
        return;
    }
    
    addToCartDirect(product, 1, []);
}

// ============================================
// Product Modal
// ============================================
function openProductModal(id) {
    currentProduct = products.find(p => p.id === id);
    if (!currentProduct) return;
    
    modalQty = 1;
    modalExtras = [];
    
    modalProductImg.innerHTML = `<img src="${currentProduct.image}" alt="${currentProduct.name}">`;
    modalProductBadges.innerHTML = getBadgeHTML(currentProduct.badges);
    modalProductTitle.textContent = currentProduct.name;
    modalProductDesc.textContent = currentProduct.desc;
    
    // Ingredients
    modalProductIngredients.innerHTML = `
        <h4>Состав</h4>
        <div class="ingredients-list">
            ${currentProduct.ingredients.map(i => `<span class="ingredient-tag">${i}</span>`).join('')}
        </div>
    `;
    
    // Extras
    if (currentProduct.customizable && currentProduct.extras?.length) {
        const availableExtras = currentProduct.extras.map(eId => allExtras.find(e => e.id === eId)).filter(Boolean);
        modalProductExtras.innerHTML = `
            <h4>Добавки <span>+к цене</span></h4>
            <div class="extras-grid">
                ${availableExtras.map(e => `
                    <div class="extra-item" data-id="${e.id}" onclick="toggleModalExtra('${e.id}')">
                        <div class="extra-check"><i class="fas fa-check"></i></div>
                        <span class="extra-name">${e.name}</span>
                        <span class="extra-price">+${e.price} ₽</span>
                    </div>
                `).join('')}
            </div>
        `;
        modalProductExtras.style.display = 'block';
    } else {
        modalProductExtras.style.display = 'none';
    }
    
    modalQtyValue.textContent = modalQty;
    updateModalTotal();
    
    productOverlay.classList.add('active');
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productOverlay.classList.remove('active');
    productModal.classList.remove('active');
    document.body.style.overflow = '';
    currentProduct = null;
}

function toggleModalExtra(extraId) {
    const item = $(`.extra-item[data-id="${extraId}"]`);
    if (modalExtras.includes(extraId)) {
        modalExtras = modalExtras.filter(e => e !== extraId);
        item?.classList.remove('selected');
    } else {
        modalExtras.push(extraId);
        item?.classList.add('selected');
    }
    updateModalTotal();
}

function updateModalTotal() {
    if (!currentProduct) return;
    
    let total = currentProduct.price;
    modalExtras.forEach(eId => {
        const extra = allExtras.find(e => e.id === eId);
        if (extra) total += extra.price;
    });
    total *= modalQty;
    
    modalTotalPrice.textContent = `${total} ₽`;
}

modalQtyMinus?.addEventListener('click', () => {
    if (modalQty > 1) {
        modalQty--;
        modalQtyValue.textContent = modalQty;
        updateModalTotal();
    }
});

modalQtyPlus?.addEventListener('click', () => {
    modalQty++;
    modalQtyValue.textContent = modalQty;
    updateModalTotal();
});

modalAddBtn?.addEventListener('click', () => {
    if (!currentProduct) return;
    
    let unitPrice = currentProduct.price;
    const extrasData = [];
    modalExtras.forEach(eId => {
        const extra = allExtras.find(e => e.id === eId);
        if (extra) {
            unitPrice += extra.price;
            extrasData.push(extra.name);
        }
    });
    
    addToCartDirect(currentProduct, modalQty, extrasData, unitPrice);
    closeProductModal();
});

productClose?.addEventListener('click', closeProductModal);
productOverlay?.addEventListener('click', closeProductModal);

// ============================================
// Cart Functions
// ============================================
function addToCartDirect(product, qty, extras, customPrice = null) {
    const price = customPrice || product.price;
    const cartId = extras.length ? `${product.id}-${Date.now()}` : product.id;
    
    // Check if same item exists (without extras)
    if (!extras.length) {
        const existing = cart.find(item => item.id === product.id && !item.extras?.length);
        if (existing) {
            existing.quantity += qty;
            updateCart();
            showToast(`${product.name} — количество обновлено`);
            return;
        }
    }
    
    cart.push({
        id: cartId,
        productId: product.id,
        name: product.name,
        price: price,
        image: product.image,
        quantity: qty,
        extras: extras
    });
    
    updateCart();
    showToast(`${product.name} добавлен в корзину`);
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.id !== cartId);
    updateCart();
}

function updateCartItemQty(cartId, delta) {
    const item = cart.find(i => i.id === cartId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(cartId);
    } else {
        updateCart();
    }
}

function updateCart() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = subtotal >= DELIVERY_THRESHOLD ? 0 : DELIVERY_PRICE;
    const total = subtotal + delivery;
    
    cartBadge.textContent = totalQty;
    
    // Step 1
    cartSubtotal.textContent = `${subtotal} ₽`;
    cartDeliveryPrice.textContent = delivery === 0 ? 'Бесплатно' : `${delivery} ₽`;
    cartTotal.textContent = `${total} ₽`;
    
    // Step 2
    cartSubtotal2.textContent = `${subtotal} ₽`;
    cartDeliveryPrice2.textContent = delivery === 0 ? 'Бесплатно' : `${delivery} ₽`;
    cartTotal2.textContent = `${total} ₽`;
    submitOrderTotal.textContent = `${total} ₽`;
    
    // Cart items
    if (cart.length === 0) {
        cartBody.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Корзина пуста</p></div>`;
    } else {
        cartBody.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img"><img src="${item.image}" alt="${item.name}"></div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    ${item.extras?.length ? `<p class="cart-item-extras">+ ${item.extras.join(', ')}</p>` : ''}
                    <span class="cart-item-price">${item.price * item.quantity} ₽</span>
                </div>
                <div class="cart-item-actions">
                    <button class="cart-remove" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></button>
                    <div class="cart-qty">
                        <button onclick="updateCartItemQty('${item.id}', -1)"><i class="fas fa-minus"></i></button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartItemQty('${item.id}', 1)"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        try { cart = JSON.parse(saved); updateCart(); } catch(e) { cart = []; }
    }
}

// ============================================
// Cart Drawer
// ============================================
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
    showStep(1);
}

function showStep(step) {
    if (step === 1) {
        cartStep1.style.display = 'flex';
        cartStep2.style.display = 'none';
    } else {
        cartStep1.style.display = 'none';
        cartStep2.style.display = 'flex';
    }
}

cartTrigger?.addEventListener('click', openCart);
cartClose?.addEventListener('click', closeCart);
cartClose2?.addEventListener('click', closeCart);
cartOverlay?.addEventListener('click', closeCart);

toStep2Btn?.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Добавьте товары в корзину');
        return;
    }
    showStep(2);
});

backToStep1?.addEventListener('click', () => showStep(1));

// Delivery type toggle
$$('input[name="deliveryType"]').forEach(input => {
    input.addEventListener('change', (e) => {
        $$('.delivery-option').forEach(opt => opt.classList.remove('active'));
        e.target.closest('.delivery-option').classList.add('active');
        
        // Show/hide address section
        addressSection.style.display = e.target.value === 'delivery' ? 'block' : 'none';
        
        // Update delivery price
        updateCart();
    });
});

// Payment type toggle
$$('input[name="paymentType"]').forEach(input => {
    input.addEventListener('change', (e) => {
        $$('.payment-option').forEach(opt => opt.classList.remove('active'));
        e.target.closest('.payment-option').classList.add('active');
    });
});

// ============================================
// Submit Order
// ============================================
submitOrderBtn?.addEventListener('click', () => {
    const name = $('#customerName')?.value?.trim();
    const phone = $('#customerPhone')?.value?.trim();
    const deliveryType = $('input[name="deliveryType"]:checked')?.value;
    const address = $('#customerAddress')?.value?.trim();
    const paymentType = $('input[name="paymentType"]:checked')?.value;
    
    if (!name) { showToast('Введите имя'); return; }
    if (!phone) { showToast('Введите телефон'); return; }
    if (deliveryType === 'delivery' && !address) { showToast('Введите адрес доставки'); return; }
    
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = subtotal >= DELIVERY_THRESHOLD ? 0 : (deliveryType === 'delivery' ? DELIVERY_PRICE : 0);
    const total = subtotal + delivery;
    
    const paymentLabels = { card: 'Картой курьеру', cash: 'Наличными', online: 'Онлайн' };
    
    successOrderInfo.innerHTML = `
        <p><strong>Заказ №${Math.floor(Math.random() * 9000) + 1000}</strong></p>
        <p>Имя: ${name}</p>
        <p>Телефон: ${phone}</p>
        <p>${deliveryType === 'delivery' ? `Адрес: ${address}` : 'Самовывоз'}</p>
        <p>Оплата: ${paymentLabels[paymentType] || paymentType}</p>
        <p>Сумма: <strong>${total} ₽</strong></p>
    `;
    
    closeCart();
    setTimeout(() => {
        successOverlay.classList.add('active');
        successModal.classList.add('active');
        cart = [];
        updateCart();
        // Reset form
        $('#checkoutForm')?.reset();
    }, 300);
});

// ============================================
// Success Modal
// ============================================
function closeSuccess() {
    successOverlay.classList.remove('active');
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

successClose?.addEventListener('click', closeSuccess);
successOverlay?.addEventListener('click', closeSuccess);

// ============================================
// Category Filter
// ============================================
$$('.menu-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        $$('.menu-nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.category);
    });
});

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
contactForm?.addEventListener('submit', (e) => {
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
            const offset = $('#header')?.offsetHeight || 80;
            window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        }
    });
});

// ============================================
// Keyboard
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCart();
        closeProductModal();
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

// Global functions
window.openProductModal = openProductModal;
window.quickAdd = quickAdd;
window.toggleModalExtra = toggleModalExtra;
window.removeFromCart = removeFromCart;
window.updateCartItemQty = updateCartItemQty;
