const products = [
  {
    id: "bg-classic",
    name: "Black Classic",
    description: "Курица су-вид, трюфельный айоли и свежий салат.",
    weight: "420 г",
    heat: "Сливочная",
    price: 390,
    badge: "Хит",
    image:
      "https://images.unsplash.com/photo-1604908554027-1c7e7f0f4cc5?auto=format&fit=crop&w=900&q=80",
    type: "product",
    addons: ["sauce-truffle", "sauce-garlic", "drink-cola"],
    ingredients: ["Курица су-вид", "Трюфельный айоли", "Маринованный лук", "Лаваш на закваске"],
  },
  {
    id: "golden-beef",
    name: "Golden Beef",
    description: "Томленая говядина, сыр чеддер и соус из печеного чеснока.",
    weight: "450 г",
    heat: "Средняя",
    price: 520,
    badge: "Новинка",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
    type: "product",
    addons: ["sauce-harissa", "sauce-garlic", "drink-lemonade"],
    ingredients: ["Говядина томленая", "Чеддер", "Печеный чеснок", "Маринованные овощи"],
  },
  {
    id: "smoky-luxe",
    name: "Smoky Luxe",
    description: "Копченая индейка, соус BBQ и хрустящий айсберг.",
    weight: "400 г",
    heat: "Умеренная",
    price: 410,
    badge: "Шеф-выбор",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    type: "product",
    addons: ["sauce-truffle", "drink-ginger", "drink-cola"],
    ingredients: ["Индейка BBQ", "Айсберг", "Томат конкассе", "Крем-соус"],
  },
  {
    id: "saffron-cheese",
    name: "Saffron Cheese",
    description: "Сырный микс, шафрановый соус и пряная курица.",
    weight: "430 г",
    heat: "Нежная",
    price: 450,
    badge: "Премиум",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
    type: "product",
    addons: ["sauce-truffle", "sauce-garlic", "drink-ginger"],
    ingredients: ["Курица пряная", "Сырный микс", "Шафрановый соус", "Свежая зелень"],
  },
  {
    id: "spicy-night",
    name: "Spicy Night",
    description: "Острые специи, соус харисса и говяжья вырезка.",
    weight: "440 г",
    heat: "Острая",
    price: 540,
    badge: "Острая",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    type: "product",
    addons: ["sauce-harissa", "drink-cola", "drink-lemonade"],
    ingredients: ["Говядина", "Харисса", "Огурец", "Красный лук"],
  },
  {
    id: "veggie-gold",
    name: "Veggie Gold",
    description: "Запеченные овощи, хумус и соус из граната.",
    weight: "390 г",
    heat: "Легкая",
    price: 360,
    badge: "Vegan",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    type: "product",
    addons: ["sauce-garlic", "sauce-truffle", "drink-ginger"],
    ingredients: ["Запеченные овощи", "Хумус", "Соус гранат", "Салатный микс"],
  },
];

const sets = [
  {
    id: "gold-duo",
    name: "Gold Duo",
    description: "Две шаурмы, картофель фри и два соуса.",
    price: 980,
    serves: "2 перс.",
    badge: "Сет",
    type: "set",
    typeLabel: "Сет",
    image:
      "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=80",
    includes: ["2 шаурмы Black Classic", "Картофель фри", "2 фирменных соуса"],
  },
  {
    id: "night-trio",
    name: "Night Trio",
    description: "Три шаурмы, набор соусов и напитки.",
    price: 1490,
    serves: "3 перс.",
    badge: "Комбо",
    type: "set",
    typeLabel: "Сет",
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=900&q=80",
    includes: ["3 шаурмы на выбор", "3 соуса", "2 напитка"],
  },
  {
    id: "family-box",
    name: "Family Box",
    description: "Четыре шаурмы, фри, салаты и напитки.",
    price: 2190,
    serves: "4-5 перс.",
    badge: "Большой сет",
    type: "set",
    typeLabel: "Сет",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    includes: ["4 шаурмы", "2 фри", "салатный микс", "4 напитка"],
  },
];

const upsells = [
  {
    id: "sauce-truffle",
    name: "Трюфельный соус",
    price: 60,
    size: "50 мл",
    type: "add-on",
    typeLabel: "Дополнение",
    image:
      "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "sauce-harissa",
    name: "Соус харисса",
    price: 60,
    size: "50 мл",
    type: "add-on",
    typeLabel: "Дополнение",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "sauce-garlic",
    name: "Сливочный чеснок",
    price: 60,
    size: "50 мл",
    type: "add-on",
    typeLabel: "Дополнение",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "drink-cola",
    name: "Cola Black 0.33",
    price: 120,
    size: "0.33 л",
    type: "add-on",
    typeLabel: "Напиток",
    image:
      "https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "drink-lemonade",
    name: "Gold Lemonade",
    price: 140,
    size: "0.45 л",
    type: "add-on",
    typeLabel: "Напиток",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "drink-ginger",
    name: "Ginger Tea",
    price: 160,
    size: "0.4 л",
    type: "add-on",
    typeLabel: "Напиток",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
];

const cart = new Map();

const productsGrid = document.getElementById("products-grid");
const setsGrid = document.getElementById("sets-grid");
const extrasGrid = document.getElementById("extras-grid");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const cartItemsCount = document.getElementById("cart-items-count");
const checkoutForm = document.getElementById("checkout-form");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const toastAction = document.getElementById("toast-action");

const openCartButtons = [
  document.getElementById("open-cart"),
  document.getElementById("open-cart-footer"),
].filter(Boolean);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let lastCartCount = 0;
let toastTimer;

const formatPrice = (value) => `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
const upsellMap = new Map(upsells.map((item) => [item.id, item]));
const allItems = [...products, ...sets, ...upsells];

const getItemMeta = (item) => {
  if (item.type === "product") {
    return `${item.weight} · ${item.heat}`;
  }
  if (item.type === "set") {
    return item.serves;
  }
  if (item.type === "add-on") {
    return item.size;
  }
  return "";
};

const renderProducts = () => {
  if (!productsGrid) {
    return;
  }
  productsGrid.innerHTML = products
    .map((product) => {
      const ingredients = product.ingredients.map((item) => `<li>${item}</li>`).join("");
      const addons = (product.addons ?? [])
        .map((addonId) => {
          const addon = upsellMap.get(addonId);
          if (!addon) {
            return "";
          }
          return `
            <button class="addon-chip" type="button" data-add="${addon.id}">
              + ${addon.name} · ${formatPrice(addon.price)}
            </button>
          `;
        })
        .join("");
      return `
        <article class="product-card reveal">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-meta">${product.weight} · ${product.heat}</div>
          </div>
          <p class="product-description">${product.description}</p>
          <ul class="ingredients">${ingredients}</ul>
          <div class="product-footer">
            <span class="price">${formatPrice(product.price)}</span>
            <button class="btn btn-primary" type="button" data-add="${product.id}">
              В корзину
            </button>
          </div>
          ${addons ? `<div class="addon-section"><span>Добавить:</span><div class="addon-list">${addons}</div></div>` : ""}
        </article>
      `;
    })
    .join("");
};

const renderSets = () => {
  if (!setsGrid) {
    return;
  }
  setsGrid.innerHTML = sets
    .map((set) => {
      const includes = set.includes.map((item) => `<li>${item}</li>`).join("");
      return `
        <article class="set-card reveal">
          <div class="set-image">
            <img src="${set.image}" alt="${set.name}" loading="lazy" />
            <span class="set-badge">${set.badge}</span>
          </div>
          <div class="set-body">
            <div>
              <h3>${set.name}</h3>
              <p class="set-meta">${set.serves}</p>
            </div>
            <p class="set-description">${set.description}</p>
            <ul class="set-list">${includes}</ul>
          </div>
          <div class="set-footer">
            <span class="price">${formatPrice(set.price)}</span>
            <button class="btn btn-primary" type="button" data-add="${set.id}">
              В корзину
            </button>
          </div>
        </article>
      `;
    })
    .join("");
};

const renderExtras = () => {
  if (!extrasGrid) {
    return;
  }
  extrasGrid.innerHTML = upsells
    .map((extra) => {
      return `
        <article class="extra-card reveal">
          <div class="extra-image">
            <img src="${extra.image}" alt="${extra.name}" loading="lazy" />
          </div>
          <div>
            <h3>${extra.name}</h3>
            <p class="extra-meta">${extra.size} · ${extra.typeLabel}</p>
          </div>
          <div class="extra-footer">
            <span class="price">${formatPrice(extra.price)}</span>
            <button class="btn btn-ghost" type="button" data-add="${extra.id}">
              Добавить
            </button>
          </div>
        </article>
      `;
    })
    .join("");
};

const openCart = () => {
  if (!cartModal) {
    return;
  }
  cartModal.classList.add("is-open");
  cartModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeCart = () => {
  if (!cartModal) {
    return;
  }
  cartModal.classList.remove("is-open");
  cartModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

const showToast = (message, actionLabel = "Корзина", action = openCart) => {
  if (!toast || !toastMessage || !toastAction) {
    return;
  }
  toastMessage.textContent = message;
  toastAction.textContent = actionLabel;
  toastAction.onclick = action;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 4200);
};

const updateCartSummary = () => {
  const totals = Array.from(cart.values()).reduce(
    (acc, item) => {
      acc.count += item.quantity;
      acc.total += item.price * item.quantity;
      return acc;
    },
    { count: 0, total: 0 }
  );

  if (cartCount) {
    cartCount.textContent = totals.count;
    if (totals.count !== lastCartCount) {
      cartCount.classList.remove("is-bump");
      void cartCount.offsetWidth;
      cartCount.classList.add("is-bump");
      lastCartCount = totals.count;
    }
  }
  if (cartItemsCount) {
    cartItemsCount.textContent = totals.count;
  }
  if (cartTotal) {
    cartTotal.textContent = formatPrice(totals.total);
  }
};

const renderCart = () => {
  if (!cartItemsContainer) {
    return;
  }

  if (cart.size === 0) {
    cartItemsContainer.innerHTML =
      '<div class="cart-empty">Корзина пуста. Добавьте позиции из меню.</div>';
    updateCartSummary();
    return;
  }

  const itemsMarkup = Array.from(cart.values())
    .map(
      (item) => {
        const metaParts = [getItemMeta(item), item.typeLabel].filter(Boolean).join(" · ");
        return `
        <div class="cart-item">
          <div class="cart-item-header">
            <div class="cart-item-info">
              ${
                item.image
                  ? `<div class="cart-item-thumb"><img src="${item.image}" alt="${item.name}" /></div>`
                  : ""
              }
              <div>
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-meta">${metaParts}</div>
              </div>
            </div>
            <div class="price">${formatPrice(item.price * item.quantity)}</div>
          </div>
          <div class="cart-item-actions">
            <div class="qty-control">
              <button type="button" data-action="decrease" data-id="${item.id}" aria-label="Уменьшить">
                −
              </button>
              <span>${item.quantity}</span>
              <button type="button" data-action="increase" data-id="${item.id}" aria-label="Увеличить">
                +
              </button>
            </div>
            <button class="remove-btn" type="button" data-action="remove" data-id="${item.id}">
              Удалить
            </button>
          </div>
        </div>
      `;
      }
    )
    .join("");

  cartItemsContainer.innerHTML = itemsMarkup;
  updateCartSummary();
};

const addToCart = (id) => {
  const item = allItems.find((entry) => entry.id === id);
  if (!item) {
    return;
  }
  if (cart.has(id)) {
    cart.get(id).quantity += 1;
  } else {
    cart.set(id, { ...item, quantity: 1 });
  }
  renderCart();
  showToast(`Добавлено: ${item.name}`);
};

const updateQuantity = (id, delta) => {
  if (!cart.has(id)) {
    return;
  }
  const item = cart.get(id);
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart.delete(id);
  } else {
    cart.set(id, item);
  }
  renderCart();
};

const removeItem = (id) => {
  if (!cart.has(id)) {
    return;
  }
  cart.delete(id);
  renderCart();
};

const initReveal = () => {
  const revealItems = Array.from(document.querySelectorAll(".reveal"));
  if (revealItems.length === 0) {
    return;
  }
  if (prefersReducedMotion.matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  revealItems.forEach((item) => observer.observe(item));
};

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    addToCart(addButton.dataset.add);
    return;
  }

  const closeTarget = event.target.closest("[data-close]");
  if (closeTarget) {
    closeCart();
  }
});

if (cartItemsContainer) {
  cartItemsContainer.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) {
      return;
    }
    const id = actionButton.dataset.id;
    const action = actionButton.dataset.action;
    if (action === "increase") {
      updateQuantity(id, 1);
    } else if (action === "decrease") {
      updateQuantity(id, -1);
    } else if (action === "remove") {
      removeItem(id);
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartModal?.classList.contains("is-open")) {
    closeCart();
  }
});

openCartButtons.forEach((button) => {
  button.addEventListener("click", openCart);
});

if (checkoutForm) {
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    checkoutForm.reset();
    showToast("Заказ отправлен. Мы свяжемся с вами в течение 2 минут.", "Ок", () => {
      toast?.classList.remove("is-visible");
    });
    closeCart();
  });
}

const sliderTrack = document.getElementById("slider-track");
const slides = sliderTrack ? Array.from(sliderTrack.children) : [];
const dots = Array.from(document.querySelectorAll(".dot"));
const prevButton = document.querySelector('[data-direction="prev"]');
const nextButton = document.querySelector('[data-direction="next"]');
let sliderIndex = 0;
let sliderTimer;

const setSlide = (index) => {
  if (!sliderTrack) {
    return;
  }
  sliderIndex = (index + slides.length) % slides.length;
  sliderTrack.style.transform = `translateX(-${sliderIndex * 100}%)`;
  slides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === sliderIndex);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("is-active", i === sliderIndex);
  });
};

const nextSlide = () => setSlide(sliderIndex + 1);
const prevSlide = () => setSlide(sliderIndex - 1);

const startSlider = () => {
  if (!sliderTrack || slides.length <= 1 || prefersReducedMotion.matches) {
    return;
  }
  stopSlider();
  sliderTimer = window.setInterval(nextSlide, 6000);
};

const stopSlider = () => {
  if (sliderTimer) {
    window.clearInterval(sliderTimer);
  }
};

if (prevButton) {
  prevButton.addEventListener("click", () => {
    prevSlide();
    startSlider();
  });
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    nextSlide();
    startSlider();
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const targetIndex = Number.parseInt(dot.dataset.slide ?? "0", 10);
    setSlide(targetIndex);
    startSlider();
  });
});

prefersReducedMotion.addEventListener("change", () => {
  if (prefersReducedMotion.matches) {
    stopSlider();
  } else {
    startSlider();
  }
});

document.querySelector(".hero-slider")?.addEventListener("mouseenter", stopSlider);
document.querySelector(".hero-slider")?.addEventListener("mouseleave", startSlider);

renderProducts();
renderSets();
renderExtras();
renderCart();
initReveal();
setSlide(0);
startSlider();
