const products = [
  {
    id: "bg-classic",
    name: "Black Classic",
    description: "Курица су-вид, трюфельный айоли и свежий салат.",
    weight: "420 г",
    heat: "Сливочная",
    price: 390,
    badge: "Хит",
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
    ingredients: ["Запеченные овощи", "Хумус", "Соус гранат", "Салатный микс"],
  },
];

const cart = new Map();

const productsGrid = document.getElementById("products-grid");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const cartItemsCount = document.getElementById("cart-items-count");

const openCartButtons = [
  document.getElementById("open-cart"),
  document.getElementById("open-cart-hero"),
  document.getElementById("open-cart-footer"),
].filter(Boolean);

const formatPrice = (value) => `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;

const renderProducts = () => {
  if (!productsGrid) {
    return;
  }
  productsGrid.innerHTML = products
    .map((product) => {
      const ingredients = product.ingredients.map((item) => `<li>${item}</li>`).join("");
      return `
        <article class="product-card">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
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
      (item) => `
        <div class="cart-item">
          <div class="cart-item-header">
            <div>
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-meta">${item.weight} · ${item.heat}</div>
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
      `
    )
    .join("");

  cartItemsContainer.innerHTML = itemsMarkup;
  updateCartSummary();
};

const addToCart = (id) => {
  const product = products.find((item) => item.id === id);
  if (!product) {
    return;
  }
  if (cart.has(id)) {
    cart.get(id).quantity += 1;
  } else {
    cart.set(id, { ...product, quantity: 1 });
  }
  renderCart();
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

const sliderTrack = document.getElementById("slider-track");
const slides = sliderTrack ? Array.from(sliderTrack.children) : [];
const dots = Array.from(document.querySelectorAll(".dot"));
const prevButton = document.querySelector('[data-direction="prev"]');
const nextButton = document.querySelector('[data-direction="next"]');
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let sliderIndex = 0;
let sliderTimer;

const setSlide = (index) => {
  if (!sliderTrack) {
    return;
  }
  sliderIndex = (index + slides.length) % slides.length;
  sliderTrack.style.transform = `translateX(-${sliderIndex * 100}%)`;
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
renderCart();
setSlide(0);
startSlider();
