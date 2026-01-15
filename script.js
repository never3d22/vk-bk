const menuCategories = [
  {
    title: "ГОРЯЧЕЕ",
    items: [
      { id: "hot-grill-chicken", name: "Курица гриль", price: 600 },
      { id: "hot-shawarma-chicken", name: "Шаурма с курицей", price: 250 },
      { id: "hot-cheese-lavash", name: "Сырный лаваш", price: 20 },
      { id: "hot-extra-ingredients", name: "Доп. ингредиенты", price: 50 },
    ],
  },
  {
    title: "ДЕСЕРТЫ",
    items: [
      { id: "dessert-tiramisu", name: "Тирамису", price: 320 },
      { id: "dessert-honey-cake", name: "Медовик", price: 320 },
    ],
  },
  {
    title: "ВЫПЕЧКА",
    items: [
      { id: "bakery-khachapuri-adjar", name: "Хачапури по-аджарски", price: 200 },
      { id: "bakery-khachapuri-megre", name: "Хачапури по-мегрельски", price: 400 },
      { id: "bakery-lamajo", name: "Ламаджо", price: 180 },
    ],
  },
  {
    title: "ХОТ-ДОГИ",
    items: [
      { id: "hotdog-danish-chicken", name: "Датский (курица)", price: 250 },
      { id: "hotdog-danish-beef", name: "Датский (говядина)", price: 250 },
      { id: "hotdog-french-chicken", name: "Французский (курица)", price: 250 },
      { id: "hotdog-french-beef", name: "Французский (говядина)", price: 250 },
    ],
  },
  {
    title: "НАПИТКИ",
    items: [
      { id: "drink-natakhtari", name: "Натакати в асс...", price: 120 },
      { id: "drink-bon-aqua", name: "Бон Аква в асс...", price: 100 },
      { id: "drink-dobry", name: "Добрый в асс...", price: 100 },
      { id: "drink-tan", name: "Тан", price: 80 },
      { id: "drink-rich-juice", name: "Сок Rich", price: 150 },
      { id: "drink-rich-tea", name: "Чай Rich", price: 150 },
    ],
  },
  {
    title: "ПИВО",
    items: [
      { id: "beer-hoegaarden", name: "Хугарден", price: 160 },
      { id: "beer-zhiguli", name: "Жигули", price: 110 },
      { id: "beer-stella", name: "Стелла Артуа", price: 160 },
      { id: "beer-hoegaarden-na", name: "Хугарден Б/А", price: 110 },
    ],
  },
  {
    title: "КОФЕ И ЧАЙ",
    items: [
      { id: "coffee-americano", name: "Американо", price: 120 },
      { id: "coffee-cappuccino", name: "Капучино", price: 160 },
      { id: "coffee-latte", name: "Латте", price: 160 },
      { id: "coffee-espresso", name: "Эспрессо", price: 90 },
      { id: "coffee-tea", name: "Чай", price: 50 },
    ],
  },
];

const menuItems = menuCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    category: category.title,
    type: "menu",
  }))
);

const cart = new Map();

const menuCategoriesContainer = document.getElementById("menu-categories");
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
const allItems = [...menuItems];

const getItemMeta = (item) => {
  return item.category ?? "";
};

const renderMenu = () => {
  if (!menuCategoriesContainer) {
    return;
  }
  menuCategoriesContainer.innerHTML = menuCategories
    .map((category) => {
      const cards = category.items
        .map((item) => {
          return `
            <article class="menu-card reveal">
              <div class="menu-card-header">
                <h4>${item.name}</h4>
                <span class="menu-price">${formatPrice(item.price)}</span>
              </div>
              <div class="menu-card-footer">
                <button class="btn btn-ghost" type="button" data-add="${item.id}">
                  В корзину
                </button>
              </div>
            </article>
          `;
        })
        .join("");
      return `
        <div class="menu-category reveal">
          <h3>${category.title}</h3>
          <div class="menu-grid">
            ${cards}
          </div>
        </div>
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

renderMenu();
renderCart();
initReveal();
setSlide(0);
startSlider();
