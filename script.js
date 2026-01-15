const menuCategories = [
  {
    title: "ГОРЯЧЕЕ",
    key: "hot",
    description: "Горячие позиции для сытного перекуса.",
    items: [
      {
        id: "hot-grill-chicken",
        name: "Курица гриль",
        price: 600,
        badge: "Популярное",
        image:
          "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Куриное филе", "Смесь специй", "Овощи гриль"],
      },
      {
        id: "hot-shawarma-chicken",
        name: "Шаурма с курицей",
        price: 250,
        badge: "Хит",
        image:
          "https://images.unsplash.com/photo-1604908554027-1c7e7f0f4cc5?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Курица", "Лаваш", "Овощи", "Соус чесночный"],
      },
      {
        id: "hot-cheese-lavash",
        name: "Сырный лаваш",
        price: 20,
        badge: "Сырное",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Лаваш", "Сырный микс", "Сливочное масло"],
      },
      {
        id: "hot-extra-ingredients",
        name: "Доп. ингредиенты",
        price: 50,
        badge: "Добавка",
        image:
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Сыр", "Соус", "Овощи"],
      },
    ],
  },
  {
    title: "ДЕСЕРТЫ",
    key: "desserts",
    description: "Сладкое завершение вашего заказа.",
    items: [
      {
        id: "dessert-tiramisu",
        name: "Тирамису",
        price: 320,
        badge: "Новинка",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Сливочный крем", "Бисквит", "Какао"],
      },
      {
        id: "dessert-honey-cake",
        name: "Медовик",
        price: 320,
        badge: "Классика",
        image:
          "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Медовые коржи", "Сметанный крем", "Орехи"],
      },
    ],
  },
  {
    title: "ВЫПЕЧКА",
    key: "bakery",
    description: "Классическая выпечка на любой вкус.",
    items: [
      {
        id: "bakery-khachapuri-adjar",
        name: "Хачапури по-аджарски",
        price: 200,
        badge: "Популярное",
        image:
          "https://images.unsplash.com/photo-1514516870926-20565d6cbd6d?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Сыр сулугуни", "Яйцо", "Сливочное масло"],
      },
      {
        id: "bakery-khachapuri-megre",
        name: "Хачапури по-мегрельски",
        price: 400,
        badge: "Сытное",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Сыр сулугуни", "Тесто", "Сырная корочка"],
      },
      {
        id: "bakery-lamajo",
        name: "Ламаджо",
        price: 180,
        badge: "Пряное",
        image:
          "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Тонкое тесто", "Мясной фарш", "Томаты"],
      },
    ],
  },
  {
    title: "ХОТ-ДОГИ",
    key: "hotdogs",
    description: "Сытные хот-доги в удобном формате.",
    items: [
      {
        id: "hotdog-danish-chicken",
        name: "Датский (курица)",
        price: 250,
        badge: "Популярное",
        image:
          "https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Куриная сосиска", "Булочка", "Соус"],
      },
      {
        id: "hotdog-danish-beef",
        name: "Датский (говядина)",
        price: 250,
        badge: "Классика",
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Говяжья сосиска", "Булочка", "Горчица"],
      },
      {
        id: "hotdog-french-chicken",
        name: "Французский (курица)",
        price: 250,
        badge: "Новинка",
        image:
          "https://images.unsplash.com/photo-1509358273862-bb82aef8d1c5?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Куриная сосиска", "Сырный соус", "Булочка с кунжутом"],
      },
      {
        id: "hotdog-french-beef",
        name: "Французский (говядина)",
        price: 250,
        badge: "Сытное",
        image:
          "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Говяжья сосиска", "Сырный соус", "Булочка с кунжутом"],
      },
    ],
  },
  {
    title: "НАПИТКИ",
    key: "drinks",
    description: "Освежающие напитки на каждый день.",
    items: [
      {
        id: "drink-natakhtari",
        name: "Натакати в асс...",
        price: 120,
        badge: "Освежающее",
        image:
          "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Газированная вода", "Сироп", "Сахар"],
      },
      {
        id: "drink-bon-aqua",
        name: "Бон Аква в асс...",
        price: 100,
        badge: "Легкое",
        image:
          "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Минеральная вода", "Негазированная"],
      },
      {
        id: "drink-dobry",
        name: "Добрый в асс...",
        price: 100,
        badge: "Популярное",
        image:
          "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Газированный напиток", "Сахар", "Аромат"],
      },
      {
        id: "drink-tan",
        name: "Тан",
        price: 80,
        badge: "Легкое",
        image:
          "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Кисломолочный напиток", "Вода", "Соль"],
      },
      {
        id: "drink-rich-juice",
        name: "Сок Rich",
        price: 150,
        badge: "Сок",
        image:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Фруктовый сок", "Вода", "Витамины"],
      },
      {
        id: "drink-rich-tea",
        name: "Чай Rich",
        price: 150,
        badge: "Чай",
        image:
          "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Чайный экстракт", "Лимон", "Сахар"],
      },
    ],
  },
  {
    title: "ПИВО",
    key: "beer",
    description: "Популярные сорта из ассортимента.",
    items: [
      {
        id: "beer-hoegaarden",
        name: "Хугарден",
        price: 160,
        badge: "Популярное",
        image:
          "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Солод", "Хмель", "Пшеница"],
      },
      {
        id: "beer-zhiguli",
        name: "Жигули",
        price: 110,
        badge: "Классика",
        image:
          "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Солод", "Хмель", "Вода"],
      },
      {
        id: "beer-stella",
        name: "Стелла Артуа",
        price: 160,
        badge: "Премиум",
        image:
          "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Солод", "Хмель", "Вода"],
      },
      {
        id: "beer-hoegaarden-na",
        name: "Хугарден Б/А",
        price: 110,
        badge: "0%",
        image:
          "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Безалкогольное", "Солод", "Хмель"],
      },
    ],
  },
  {
    title: "КОФЕ И ЧАЙ",
    key: "coffee",
    description: "Кофейная классика и горячий чай.",
    items: [
      {
        id: "coffee-americano",
        name: "Американо",
        price: 120,
        badge: "Классика",
        image:
          "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Арабика", "Вода"],
      },
      {
        id: "coffee-cappuccino",
        name: "Капучино",
        price: 160,
        badge: "Популярное",
        image:
          "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Эспрессо", "Молоко", "Пена"],
      },
      {
        id: "coffee-latte",
        name: "Латте",
        price: 160,
        badge: "Нежное",
        image:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Эспрессо", "Молоко", "Пена"],
      },
      {
        id: "coffee-espresso",
        name: "Эспрессо",
        price: 90,
        badge: "Бодрящий",
        image:
          "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Арабика", "Плотная крема"],
      },
      {
        id: "coffee-tea",
        name: "Чай",
        price: 50,
        badge: "Теплый",
        image:
          "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
        ingredients: ["Черный чай", "Лимон"],
      },
    ],
  },
];

const useGeneratedMenuImages = true;

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const hashString = (value) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const palette = [
  { bg: "#0b0b0d", accent: "#d5a33b", glow: "#f4d28f" },
  { bg: "#111216", accent: "#c89a3b", glow: "#f0c77f" },
  { bg: "#15151a", accent: "#b9862a", glow: "#f3d48a" },
  { bg: "#0e0f13", accent: "#d0a04f", glow: "#f6dca2" },
];

const getCategoryIcon = (key, accent, glow) => {
  switch (key) {
    case "hot":
      return `
        <path d="M430 120 C390 170 405 230 430 260 C455 230 470 170 430 120 Z" fill="${accent}" />
        <path d="M430 150 C410 185 415 215 430 235 C445 215 450 185 430 150 Z" fill="${glow}" />
      `;
    case "desserts":
      return `
        <rect x="360" y="210" width="180" height="60" rx="14" fill="${accent}" />
        <rect x="375" y="160" width="150" height="55" rx="12" fill="${glow}" />
        <circle cx="395" cy="150" r="12" fill="${accent}" />
        <circle cx="430" cy="145" r="10" fill="${accent}" />
        <circle cx="465" cy="150" r="12" fill="${accent}" />
      `;
    case "bakery":
      return `
        <rect x="350" y="170" width="200" height="90" rx="40" fill="${accent}" />
        <path d="M380 185 L410 235 M420 180 L450 235 M460 185 L490 235" stroke="${glow}" stroke-width="6" stroke-linecap="round" />
      `;
    case "hotdogs":
      return `
        <rect x="345" y="185" width="210" height="70" rx="35" fill="${glow}" />
        <rect x="355" y="200" width="190" height="40" rx="20" fill="${accent}" />
        <rect x="355" y="214" width="190" height="12" rx="6" fill="#0b0b0d" opacity="0.35" />
      `;
    case "drinks":
      return `
        <rect x="395" y="120" width="70" height="150" rx="16" fill="${accent}" />
        <rect x="405" y="135" width="50" height="20" rx="8" fill="${glow}" />
        <rect x="385" y="260" width="90" height="25" rx="12" fill="${glow}" />
      `;
    case "beer":
      return `
        <rect x="370" y="140" width="120" height="140" rx="18" fill="${accent}" />
        <rect x="485" y="170" width="40" height="70" rx="18" fill="${glow}" />
        <circle cx="390" cy="140" r="20" fill="${glow}" />
        <circle cx="430" cy="135" r="24" fill="${glow}" />
        <circle cx="470" cy="140" r="20" fill="${glow}" />
      `;
    case "coffee":
      return `
        <rect x="360" y="190" width="170" height="80" rx="26" fill="${accent}" />
        <rect x="510" y="205" width="40" height="50" rx="20" fill="${glow}" />
        <rect x="350" y="270" width="190" height="18" rx="9" fill="${glow}" />
        <path d="M390 180 C400 160 430 160 440 180" stroke="${glow}" stroke-width="6" stroke-linecap="round" />
      `;
    default:
      return `<circle cx="440" cy="210" r="70" fill="${accent}" />`;
  }
};

const createMenuImage = ({ name, category, badge, key }) => {
  const safeName = escapeXml(name);
  const safeCategory = escapeXml(category);
  const safeBadge = badge ? escapeXml(badge) : "";
  const colors = palette[hashString(name) % palette.length];
  const icon = getCategoryIcon(key, colors.accent, colors.glow);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${colors.bg}" />
          <stop offset="100%" stop-color="#050506" />
        </linearGradient>
        <radialGradient id="glow" cx="70%" cy="20%" r="60%">
          <stop offset="0%" stop-color="${colors.glow}" stop-opacity="0.6" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
      </defs>
      <rect width="600" height="400" rx="32" fill="url(#bg)" />
      <rect width="600" height="400" rx="32" fill="url(#glow)" />
      <circle cx="90" cy="80" r="46" fill="${colors.accent}" opacity="0.9" />
      <circle cx="520" cy="320" r="80" fill="${colors.accent}" opacity="0.2" />
      <g>${icon}</g>
      <text x="40" y="230" fill="#f8f3e8" font-family="Inter, sans-serif" font-size="34" font-weight="700">
        ${safeName}
      </text>
      <text x="40" y="265" fill="#c5bdaa" font-family="Inter, sans-serif" font-size="18">
        ${safeCategory}
      </text>
      ${
        safeBadge
          ? `<text x="40" y="90" fill="#0b0b0d" font-family="Inter, sans-serif" font-size="16" font-weight="700">${safeBadge}</text>`
          : ""
      }
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const getMenuImage = (item, category) => {
  if (!useGeneratedMenuImages && item.image) {
    return item.image;
  }
  return createMenuImage({
    name: item.name,
    category: category.title,
    badge: item.badge,
    key: category.key,
  });
};

const menuItems = menuCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    image: getMenuImage(item, category),
    category: category.title,
    type: "menu",
  }))
);

const cart = new Map();

const menuFiltersContainer = document.getElementById("menu-filters");
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
          const ingredients = (item.ingredients ?? [])
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join("");
          const imageSrc = getMenuImage(item, category);
          return `
            <article class="menu-card reveal">
              <div class="menu-card-media">
                <img src="${imageSrc}" alt="${item.name}" loading="lazy" />
                ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ""}
              </div>
              <div class="menu-card-top">
                <span class="menu-chip">${category.title}</span>
                <span class="menu-price">${formatPrice(item.price)}</span>
              </div>
              <h4>${item.name}</h4>
              <p class="menu-card-description">${category.description}</p>
              ${
                ingredients
                  ? `
                    <div class="menu-ingredients">
                      <span class="menu-ingredients-title">Состав:</span>
                      <ul>${ingredients}</ul>
                    </div>
                  `
                  : ""
              }
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
        <div class="menu-category reveal" data-menu-category="${category.key}">
          <h3>${category.title}</h3>
          <div class="menu-grid">
            ${cards}
          </div>
        </div>
      `;
    })
    .join("");
};

const renderMenuFilters = () => {
  if (!menuFiltersContainer) {
    return;
  }
  const buttons = [
    { key: "all", label: "Все" },
    ...menuCategories.map((category) => ({
      key: category.key,
      label: category.title,
    })),
  ];
  menuFiltersContainer.innerHTML = buttons
    .map(
      (button, index) => `
        <button
          class="filter-btn ${index === 0 ? "is-active" : ""}"
          type="button"
          data-menu-filter="${button.key}"
          aria-pressed="${index === 0 ? "true" : "false"}"
        >
          ${button.label}
        </button>
      `
    )
    .join("");
};

const applyMenuFilter = (filter) => {
  const sections = Array.from(document.querySelectorAll(".menu-category"));
  sections.forEach((section) => {
    const matches = filter === "all" || section.dataset.menuCategory === filter;
    section.classList.toggle("is-hidden", !matches);
  });
};

const setupMenuFilters = () => {
  if (!menuFiltersContainer) {
    return;
  }
  renderMenuFilters();
  const buttons = Array.from(menuFiltersContainer.querySelectorAll("[data-menu-filter]"));
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.menuFilter ?? "all";
      buttons.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
      applyMenuFilter(filter);
    });
  });
  applyMenuFilter("all");
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
  document.body.style.overflow = lightbox?.classList.contains("is-open") ? "hidden" : "";
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

const galleryFilters = Array.from(document.querySelectorAll("[data-gallery-filter]"));
const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const lightbox = document.getElementById("gallery-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxCloseButtons = Array.from(document.querySelectorAll("[data-lightbox-close]"));

const openLightbox = (item) => {
  if (!lightbox || !lightboxImage) {
    return;
  }
  const image = item.querySelector("img");
  const fullSrc = item.dataset.full || image?.src;
  if (!fullSrc) {
    return;
  }
  lightboxImage.src = fullSrc;
  lightboxImage.alt = image?.alt ?? "Фото";
  if (lightboxCaption) {
    lightboxCaption.textContent = image?.alt ?? "";
  }
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) {
    return;
  }
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.style.overflow = cartModal?.classList.contains("is-open") ? "hidden" : "";
};

const applyGalleryFilter = (filter) => {
  galleryItems.forEach((item) => {
    const matches = filter === "all" || item.dataset.category === filter;
    item.classList.toggle("is-hidden", !matches);
  });
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
  if (event.key !== "Escape") {
    return;
  }
  if (cartModal?.classList.contains("is-open")) {
    closeCart();
  }
  if (lightbox?.classList.contains("is-open")) {
    closeLightbox();
  }
});

openCartButtons.forEach((button) => {
  button.addEventListener("click", openCart);
});

galleryFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.galleryFilter ?? "all";
    galleryFilters.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    applyGalleryFilter(filter);
  });
});

galleryItems.forEach((item) => {
  item.addEventListener("click", () => openLightbox(item));
});

lightboxCloseButtons.forEach((button) => {
  button.addEventListener("click", closeLightbox);
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
setupMenuFilters();
renderCart();
initReveal();
setSlide(0);
startSlider();
