/* ═══════════════════════════════════════
   VŌGE — Dynamic Fashion E-Commerce
   app.js  |  Full SPA with state management
═══════════════════════════════════════ */

"use strict";

/* ─────────────────────────────────────
   PRODUCT DATABASE
───────────────────────────────────── */
const DB = {
  products: [
    {
      id: 1,
      name: "Linen Atelier Blazer",
      cat: "women",
      price: 285,
      orig: null,
      badge: "new",
      rating: 4.9,
      reviews: 87,
      sold: 312,
      img: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80",
      imgs: [
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["#d4c5b0", "#2c2c2c", "#8a6f5a"],
      desc: "A beautifully structured blazer in 100% organic linen. Relaxed silhouette with a single-button closure and deep patch pockets. Wear open over a simple tee or belted for a more polished look.",
    },
    {
      id: 2,
      name: "Silk Bias-Cut Slip Dress",
      cat: "women",
      price: 195,
      orig: 260,
      badge: "sale",
      rating: 4.7,
      reviews: 143,
      sold: 521,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      imgs: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
        "https://images.unsplash.com/photo-1594938298603-f646a2ebe56c?w=800&q=80",
      ],
      sizes: ["XS", "S", "M", "L"],
      colors: ["#c8a97e", "#1a1a2e", "#f4ede4"],
      desc: "Effortlessly elegant in 100% silk charmeuse. The bias cut drapes beautifully over the body. Adjustable spaghetti straps and a delicate lace trim at the hem.",
    },
    {
      id: 3,
      name: "Tailored Wool Trousers",
      cat: "men",
      price: 220,
      orig: null,
      badge: null,
      rating: 4.8,
      reviews: 62,
      sold: 204,
      img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      imgs: [
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      ],
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["#3c3c3c", "#6b6b6b", "#1a1a1a"],
      desc: "Slim-fit trousers in a refined Italian wool blend. Flat front, side pockets, and a clean hem. Machine washable at 30°. An absolute wardrobe essential.",
    },
    {
      id: 4,
      name: "Oversized Cotton Crewneck",
      cat: "women",
      price: 145,
      orig: null,
      badge: "new",
      rating: 4.9,
      reviews: 201,
      sold: 890,
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      imgs: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["#c4a882", "#9eada0", "#d4c5b0"],
      desc: "Heavy-weight organic cotton crewneck with a generous, drop-shoulder silhouette. Garment-dyed for a beautifully faded, lived-in look that only improves with wear.",
    },
    {
      id: 5,
      name: "Vegetable-Tanned Tote",
      cat: "accessories",
      price: 340,
      orig: null,
      badge: null,
      rating: 4.9,
      reviews: 54,
      sold: 178,
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      imgs: [
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      ],
      sizes: ["One Size"],
      colors: ["#8b6f47", "#2c2c2c", "#c4a882"],
      desc: "Generously sized tote in full-grain vegetable-tanned leather. Features an interior zip pocket, two open slip pockets, and solid brass hardware. Develops a beautiful patina over time.",
    },
    {
      id: 6,
      name: "Nike Red Shoe",
      cat: "men",
      price: 135,
      orig: 175,
      badge: "sale",
      rating: 4.6,
      reviews: 118,
      sold: 445,
      img: "img/i.png",
      imgs: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["#f5f0e8", "#a8c5da", "#c4a882"],
      desc: "A timeless Oxford shirt in brushed Portuguese cotton. Relaxed fit with a left chest pocket and a slightly curved hem. The perfect canvas for any outfit.",
    },
    {
      id: 7,
      name: "Merino Rib Knit Cardigan",
      cat: "women",
      price: 215,
      orig: null,
      badge: null,
      rating: 4.8,
      reviews: 93,
      sold: 267,
      img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      imgs: [
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      ],
      sizes: ["XS", "S", "M", "L"],
      colors: ["#f0e6d3", "#8a9b8a", "#5c4a3a"],
      desc: "Luxuriously soft in 100% extra-fine merino wool. Open-front silhouette with a deep ribbed texture and two functional pockets. Layer over everything.",
    },
    {
      id: 8,
      name: "Minimalist Swiss Watch",
      cat: "accessories",
      price: 420,
      orig: null,
      badge: "new",
      rating: 4.9,
      reviews: 39,
      sold: 98,
      img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      imgs: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      ],
      sizes: ["36mm", "40mm"],
      colors: ["#c0c0c0", "#c8a97e", "#2c2c2c"],
      desc: "Swiss-movement timepiece with a 36mm stainless case and anti-reflective sapphire crystal glass. Available with vegetable-tanned leather or woven mesh band.",
    },
    {
      id: 9,
      name: "Wide-Leg Linen Trousers",
      cat: "women",
      price: 165,
      orig: 210,
      badge: "sale",
      rating: 4.7,
      reviews: 156,
      sold: 632,
      id: 9,
      name: "Wide-Leg Linen Trousers",
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      imgs: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["#e8ddd0", "#8a9b8a", "#2c2c2c"],
      desc: "Relaxed wide-leg trousers in washed linen. High-rise waist with an elasticated back panel. The fabric is pre-washed for instant softness and a naturally crinkled texture.",
    },
    {
      id: 10,
      name: "Cashmere Beanie",
      cat: "accessories",
      price: 95,
      orig: null,
      badge: null,
      rating: 4.8,
      reviews: 72,
      sold: 389,
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      imgs: [
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      ],
      sizes: ["One Size"],
      colors: ["#d4c5b0", "#3c3c3c", "#8a6f5a"],
      desc: "Ultra-soft 100% grade-A cashmere knit beanie. Ribbed cuff with a relaxed, slouchy top. Naturally temperature regulating — warm in the cold, cool when it's not.",
    },
    {
      id: 11,
      name: "Structured Canvas Jacket",
      cat: "men",
      price: 310,
      orig: null,
      badge: "new",
      rating: 4.7,
      reviews: 44,
      sold: 156,
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      imgs: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["#8b6f47", "#3c3c3c", "#c4a882"],
      desc: "A workwear-inspired canvas jacket in 12oz organic cotton. Two chest pockets, two side pockets and a clean snap closure. Unlined for lighter-weather layering.",
    },
    {
      id: 12,
      name: "Silk Square Scarf",
      cat: "accessories",
      price: 110,
      orig: 145,
      badge: "sale",
      rating: 4.6,
      reviews: 88,
      sold: 302,
      img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      imgs: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      ],
      sizes: ["70x70cm", "90x90cm"],
      colors: ["#c8a97e", "#1a1a2e", "#f4ede4"],
      desc: "Hand-rolled edges and digitally-printed artwork on 100% mulberry silk. Wear as a neckerchief, hair tie, or pocket square.",
    },
  ],

  heroSlides: [
    {
      img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&q=80",
      tag: "SS 2026 Collection",
      title: "Wear<br><em>less.</em><br>Say<br><em>more.</em>",
    },
    {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
      tag: "New Arrivals",
      title: "Form<br><em>follows</em><br><em>feeling.</em>",
    },
    {
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=80",
      tag: "The Edit",
      title: "Quiet<br><em>luxury.</em><br>Loud<br><em>soul.</em>",
    },
  ],

  lookbook: [
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
  ],

  ticker: [
    "Free Shipping Over $150",
    "New Arrivals Every Friday",
    "Ethically Made",
    "Sustainable Fabrics",
    "Free Returns",
    "Members Get 10% Off",
    "Secure Checkout",
  ],

  footerLinks: {
    Shop: [
      ["Women", "shop", "women"],
      ["Men", "shop", "men"],
      ["Accessories", "shop", "accessories"],
      ["New Arrivals", "shop", "new"],
      ["Sale", "shop", "sale"],
    ],
    Help: [
      ["Shipping Info", "#"],
      ["Returns", "#"],
      ["Size Guide", "#"],
      ["Track Order", "#"],
      ["Contact Us", "#"],
    ],
    Company: [
      ["About", "about"],
      ["Sustainability", "#"],
      ["Press", "#"],
      ["Careers", "#"],
      ["Privacy Policy", "#"],
    ],
  },
};

/* ─────────────────────────────────────
   APP STATE
───────────────────────────────────── */
const State = {
  cart: JSON.parse(localStorage.getItem("voge_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("voge_wish") || "[]"),
  currentPage: "home",
  currentProduct: null,
  selectedSize: "",
  selectedColor: "",
  detailQty: 1,
  shopFilter: "all",
  shopSort: "default",
  shopViewMode: "grid",
  priceMax: 500,
  sizeFilter: [],
  catFilters: [],
  heroSlide: 0,
  heroTimer: null,
  checkoutStep: 0,

  saveCart() {
    localStorage.setItem("voge_cart", JSON.stringify(this.cart));
  },
  saveWish() {
    localStorage.setItem("voge_wish", JSON.stringify(this.wishlist));
  },

  addToCart(product, size, color, qty = 1) {
    const key = `${product.id}|${size}|${color}`;
    const existing = this.cart.find((i) => i.key === key);
    existing
      ? (existing.qty += qty)
      : this.cart.push({ key, id: product.id, size, color, qty });
    this.saveCart();
    UI.updateCartBadge();
    UI.renderCartBody();
  },

  removeFromCart(key) {
    this.cart = this.cart.filter((i) => i.key !== key);
    this.saveCart();
    UI.updateCartBadge();
    UI.renderCartBody();
  },

  changeQty(key, delta) {
    const item = this.cart.find((i) => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    this.saveCart();
    UI.updateCartBadge();
    UI.renderCartBody();
  },

  toggleWish(id) {
    const idx = this.wishlist.indexOf(id);
    idx === -1 ? this.wishlist.push(id) : this.wishlist.splice(idx, 1);
    this.saveWish();
    UI.updateWishBadge();
  },

  get cartTotal() {
    return this.cart.reduce((s, i) => {
      const p = DB.products.find((x) => x.id === i.id);
      return s + (p ? p.price : 0) * i.qty;
    }, 0);
  },
  get cartCount() {
    return this.cart.reduce((s, i) => s + i.qty, 0);
  },
};

/* ─────────────────────────────────────
   ROUTER
───────────────────────────────────── */
const Router = {
  go(pageId, opts = {}) {
    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    const el = document.getElementById("page-" + pageId);
    if (!el) return;
    el.classList.add("active");
    State.currentPage = pageId;
    window.scrollTo({ top: 0, behavior: "instant" });

    // Nav active states
    document.querySelectorAll(".nav-link").forEach((a) => {
      a.classList.toggle(
        "active",
        a.dataset.page === pageId && !a.dataset.filter,
      );
    });

    // Hero nav style
    const nav = document.getElementById("navbar");
    nav.classList.toggle("hero-nav", pageId === "home" && window.scrollY < 80);

    // Page init
    const inits = {
      home: () => Pages.home(),
      shop: () => Pages.shop(opts),
      product: () => Pages.product(opts.id),
      checkout: () => Pages.checkout(),
      about: () => Pages.about(),
      wishlist: () => Pages.wishlist(),
      confirmed: () => Pages.confirmed(),
    };
    (inits[pageId] || (() => {}))();

    // Observe reveal elements
    setTimeout(() => UI.observeReveals(), 100);
  },
};

/* ─────────────────────────────────────
   PAGES
───────────────────────────────────── */
const Pages = {
  home() {
    UI.buildTicker();
    UI.buildHero();
    UI.renderProductGrid(
      "featuredGrid",
      DB.products.filter((p) => p.badge === "new").slice(0, 4),
    );
    UI.renderProductGrid(
      "bestGrid",
      [...DB.products].sort((a, b) => b.sold - a.sold).slice(0, 4),
    );
    UI.buildCatBanner();
    UI.buildLookbook();
    UI.buildFooter("mainFooter");
    heroAutoplay();
  },

  shop({ filter = null, sort = null } = {}) {
    if (filter !== null) State.shopFilter = filter;
    if (sort !== null) State.shopSort = sort;
    UI.buildShopFilterPills();
    UI.buildSidebar();
    UI.renderShop();
    UI.buildFooter("shopFooter");
  },

  product(id) {
    if (!id) return Router.go("shop");
    const p = DB.products.find((x) => x.id === id);
    if (!p) return Router.go("shop");
    State.currentProduct = p;
    State.selectedSize = p.sizes[0];
    State.selectedColor = p.colors[0];
    State.detailQty = 1;
    UI.buildProductDetail(p);
    UI.renderProductGrid(
      "relatedGrid",
      DB.products.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 3),
    );
    UI.buildFooter("prodFooter");
  },

  checkout() {
    State.checkoutStep = 0;
    UI.buildCheckout();
  },

  about() {
    UI.buildFooter("aboutFooter");
  },

  wishlist() {
    const prods = DB.products.filter((p) => State.wishlist.includes(p.id));
    const sub = document.getElementById("wishSubtitle");
    if (sub)
      sub.textContent = `${prods.length} saved item${prods.length !== 1 ? "s" : ""}`;
    const grid = document.getElementById("wishGrid");
    const empty = document.getElementById("wishEmpty");
    if (!prods.length) {
      grid.innerHTML = "";
      empty.style.display = "block";
    } else {
      empty.style.display = "none";
      UI.renderProductGrid("wishGrid", prods);
    }
    UI.buildFooter("wishFooter");
  },

  confirmed() {
    State.cart = [];
    State.saveCart();
    UI.updateCartBadge();
    UI.renderCartBody();
  },
};

/* ─────────────────────────────────────
   UI BUILDERS
───────────────────────────────────── */
const UI = {
  /* ── HERO ── */
  buildHero() {
    const slide = DB.heroSlides[State.heroSlide];
    const img = document.getElementById("heroBgImg");
    const tag = document.querySelector(".hero-tag");
    const title = document.querySelector(".hero-title");
    if (img) img.src = slide.img;
    if (tag) tag.textContent = slide.tag;
    if (title) title.innerHTML = slide.title;
    document
      .querySelectorAll(".slide-dot")
      .forEach((d, i) => d.classList.toggle("active", i === State.heroSlide));
  },

  /* ── TICKER ── */
  buildTicker() {
    const track = document.getElementById("tickerTrack");
    if (!track) return;
    const items = [...DB.ticker, ...DB.ticker];
    track.innerHTML = items
      .map((t) => `<span>${t}</span><span class="dot">·</span>`)
      .join("");
  },

  /* ── CATEGORY BANNER ── */
  buildCatBanner() {
    const el = document.getElementById("catBanner");
    if (!el) return;
    el.innerHTML = `
      <div class="cat-card tall" data-filter="women" data-page="shop">
        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80" alt="Women"/>
        <div class="cat-label"><small>Explore</small><h3>Women</h3></div>
      </div>
      <div class="cat-card short" data-filter="men" data-page="shop">
        <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80" alt="Men"/>
        <div class="cat-label"><small>Explore</small><h3>Men</h3></div>
      </div>
      <div class="cat-card short" data-filter="accessories" data-page="shop">
        <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80" alt="Accessories"/>
        <div class="cat-label"><small>Explore</small><h3>Accessories</h3></div>
      </div>
    `;
  },

  /* ── LOOKBOOK ── */
  buildLookbook() {
    const el = document.getElementById("lookbookGrid");
    if (!el) return;
    el.innerHTML = DB.lookbook
      .map(
        (img, i) => `
      <div class="look-item" style="animation-delay:${i * 0.08}s">
        <img src="${img}" alt="Look ${i + 1}" loading="lazy"/>
        <div class="look-overlay"><span>Shop the Look</span></div>
      </div>
    `,
      )
      .join("");
  },

  /* ── PRODUCT GRID ── */
  renderProductGrid(containerId, products) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.classList.add("loading");
    setTimeout(() => {
      el.innerHTML = products.length
        ? products.map((p, i) => this.productCardHTML(p, i)).join("")
        : '<p style="color:var(--gray);grid-column:1/-1;padding:40px 0">No products found.</p>';
      el.classList.remove("loading");
    }, 120);
  },

  productCardHTML(p, delay = 0) {
    const isWished = State.wishlist.includes(p.id);
    const badge = p.badge
      ? `<span class="p-badge ${p.badge}">${p.badge === "new" ? "New" : "Sale"}</span>`
      : "";
    const price = p.orig
      ? `<del>$${p.orig}</del><span class="sp">$${p.price}</span>`
      : `$${p.price}`;
    const dots = p.colors
      .map(
        (c) => `<div class="p-dot" style="background:${c}" title="${c}"></div>`,
      )
      .join("");
    return `
      <div class="product-card animate-in" style="animation-delay:${delay * 0.07}s"
           data-page="product" data-id="${p.id}">
        <div class="p-img-wrap">
          <img src="${p.img}" alt="${p.name}" loading="lazy"/>
          ${badge}
          <div class="p-overlay">
            <button class="p-quick-add" data-action="quickadd" data-id="${p.id}">Quick Add</button>
            <button class="p-wish ${isWished ? "wishlisted" : ""}" data-action="wish" data-id="${p.id}">
              <svg width="14" height="14" fill="${isWished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="p-info">
          <p class="p-cat">${p.cat}</p>
          <h3 class="p-name">${p.name}</h3>
          <p class="p-price">${price}</p>
          <div class="p-dots">${dots}</div>
        </div>
      </div>`;
  },

  /* ── SHOP FILTER PILLS ── */
  buildShopFilterPills() {
    const el = document.getElementById("filterPills");
    if (!el) return;
    const filters = [
      ["all", "All"],
      ["women", "Women"],
      ["men", "Men"],
      ["accessories", "Accessories"],
      ["sale", "Sale"],
      ["new", "New"],
    ];
    el.innerHTML = filters
      .map(
        ([v, l]) =>
          `<button class="fpill${State.shopFilter === v ? " active" : ""}" data-shopfilter="${v}">${l}</button>`,
      )
      .join("");

    const titles = {
      all: "All Products",
      women: "Women's Collection",
      men: "Men's Collection",
      accessories: "Accessories",
      sale: "Sale Items",
      new: "New Arrivals",
    };
    const h = document.getElementById("shopHeading");
    if (h) h.textContent = titles[State.shopFilter] || "All Products";
    const sort = document.getElementById("sortSelect");
    if (sort) sort.value = State.shopSort;
  },

  /* ── SIDEBAR ── */
  buildSidebar() {
    const cats = document.getElementById("catChecks");
    if (cats) {
      const catList = ["women", "men", "accessories"];
      cats.innerHTML = catList
        .map(
          (c) => `
        <label class="check-item">
          <input type="checkbox" value="${c}" ${State.catFilters.includes(c) ? "checked" : ""}/>
          ${c.charAt(0).toUpperCase() + c.slice(1)}
        </label>`,
        )
        .join("");
    }
    const sizes = document.getElementById("sizeChecks");
    if (sizes) {
      const allSizes = [...new Set(DB.products.flatMap((p) => p.sizes))];
      sizes.innerHTML = allSizes
        .map(
          (s) => `
        <div class="size-tag${State.sizeFilter.includes(s) ? " active" : ""}" data-sizef="${s}">${s}</div>`,
        )
        .join("");
    }
    const slider = document.getElementById("priceSlider");
    if (slider) slider.value = State.priceMax;
    const pm = document.getElementById("priceMax");
    if (pm)
      pm.textContent = State.priceMax >= 500 ? "$500+" : `$${State.priceMax}`;
  },

  /* ── SHOP RENDER ── */
  renderShop() {
    let items = [...DB.products];
    // Filter by category
    if (State.shopFilter === "sale") items = items.filter((p) => p.orig);
    else if (State.shopFilter === "new")
      items = items.filter((p) => p.badge === "new");
    else if (State.shopFilter !== "all")
      items = items.filter((p) => p.cat === State.shopFilter);
    // Category checkboxes
    if (State.catFilters.length)
      items = items.filter((p) => State.catFilters.includes(p.cat));
    // Size filter
    if (State.sizeFilter.length)
      items = items.filter((p) =>
        State.sizeFilter.some((s) => p.sizes.includes(s)),
      );
    // Price range
    if (State.priceMax < 500)
      items = items.filter((p) => p.price <= State.priceMax);
    // Sort
    const sorts = {
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      name: (a, b) => a.name.localeCompare(b.name),
      rating: (a, b) => b.rating - a.rating,
    };
    if (sorts[State.shopSort]) items.sort(sorts[State.shopSort]);

    const count = document.getElementById("productCount");
    if (count)
      count.textContent = `${items.length} product${items.length !== 1 ? "s" : ""}`;

    const grid = document.getElementById("shopGrid");
    const empty = document.getElementById("shopEmpty");
    if (!items.length) {
      if (grid) grid.innerHTML = "";
      if (empty) empty.style.display = "block";
    } else {
      if (empty) empty.style.display = "none";
      this.renderProductGrid("shopGrid", items);
      if (grid) {
        grid.className = `product-grid cols3`;
        if (State.shopViewMode === "list") grid.classList.add("list-mode");
      }
    }
  },

  /* ── PRODUCT DETAIL ── */
  buildProductDetail(p) {
    // Gallery
    const main = document.getElementById("mainImg");
    const thumbs = document.getElementById("galleryThumbs");
    if (main) main.src = p.imgs[0];
    if (thumbs) {
      thumbs.innerHTML = p.imgs
        .map(
          (img, i) =>
            `<img class="g-thumb${i === 0 ? " active" : ""}" src="${img}" alt="${p.name}" data-thumb="${i}"/>`,
        )
        .join("");
    }

    // Zoom effect
    const mainWrap = document.querySelector(".gallery-main");
    const zoom = document.getElementById("galleryZoom");
    if (mainWrap && zoom) {
      mainWrap.addEventListener("mousemove", (e) => {
        const r = mainWrap.getBoundingClientRect();
        const x = (((e.clientX - r.left) / r.width) * 100).toFixed(1);
        const y = (((e.clientY - r.top) / r.height) * 100).toFixed(1);
        zoom.style.backgroundImage = `url(${p.imgs[0]})`;
        zoom.style.backgroundPosition = `${x}% ${y}%`;
      });
    }

    // Info panel
    const info = document.getElementById("detailInfo");
    if (!info) return;
    const isWished = State.wishlist.includes(p.id);
    const priceHTML = p.orig
      ? `<del>$${p.orig}</del><span class="sp">$${p.price}</span>`
      : `$${p.price}`;
    const starsHTML =
      "★".repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? "½" : "");

    info.innerHTML = `
      <div class="d-breadcrumb">
        <span data-page="home">Home</span> /
        <span data-page="shop">Shop</span> /
        <span>${p.name}</span>
      </div>
      <p class="d-cat">${p.cat.charAt(0).toUpperCase() + p.cat.slice(1)}</p>
      <h1 class="d-name">${p.name}</h1>
      <p class="d-price">${priceHTML}</p>
      <div class="d-rating">
        <span class="stars">${"★".repeat(5)}</span>
        <span>${p.rating} · ${p.reviews} reviews · ${p.sold} sold</span>
      </div>
      <p class="d-section-label">Size <span id="selectedSizeLabel" style="text-transform:none;letter-spacing:0;color:var(--black)"></span></p>
      <div class="d-sizes" id="detailSizes">
        ${p.sizes.map((s) => `<button class="d-size${s === State.selectedSize ? " active" : ""}" data-dsize="${s}">${s}</button>`).join("")}
      </div>
      <p class="d-section-label" style="margin-bottom:12px">Colour</p>
      <div class="d-colors" id="detailColors">
        ${p.colors.map((c, i) => `<div class="d-swatch${i === 0 ? " active" : ""}" style="background:${c}" data-dcolor="${c}" title="${c}"></div>`).join("")}
      </div>
      <div class="d-qty-wrap">
        <span class="d-qty-label">Qty</span>
        <div class="d-qty">
          <button id="qtyMinus">−</button>
          <span id="qtyDisplay">1</span>
          <button id="qtyPlus">+</button>
        </div>
      </div>
      <div class="d-add"><button class="btn-black" id="addToCartBtn">Add to Cart — $${p.price}</button></div>
      <button class="d-wish-btn" id="wishBtn">
        <svg width="14" height="14" fill="${isWished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
        ${isWished ? "Saved to Wishlist" : "Save to Wishlist"}
      </button>
      <p class="d-desc">${p.desc}</p>
      <div class="accordion">
        ${[
          [
            "Fabric & Care",
            "100% organic or recycled fibres. Machine wash cold on a gentle cycle. Tumble dry low or lay flat. Do not bleach or iron on prints.",
          ],
          [
            "Shipping & Returns",
            "Free standard shipping on orders over $150. Express available at checkout. Free returns within 30 days — items must be unworn and in original packaging.",
          ],
          [
            "Size & Fit",
            "Model is 5'9\" and wears a size S. This piece runs true to size. For a more relaxed fit, size up. Full size guide available in Help.",
          ],
        ]
          .map(
            ([h, b]) => `
          <div class="accordion-item">
            <div class="acc-head"><span>${h}</span><span class="acc-icon">+</span></div>
            <div class="acc-body">${b}</div>
          </div>`,
          )
          .join("")}
      </div>
    `;
    // Update size label
    document.getElementById("selectedSizeLabel").textContent =
      "— " + State.selectedSize;
  },

  /* ── CART ── */
  renderCartBody() {
    const body = document.getElementById("cartBody");
    const foot = document.getElementById("cartFoot");
    const count = document.getElementById("cartCount");
    if (!body) return;
    if (count)
      count.textContent = State.cartCount > 0 ? `(${State.cartCount})` : "";

    if (!State.cart.length) {
      body.innerHTML = `
        <div class="cart-empty-msg">
          <svg width="44" height="44" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          <p>Your cart is empty</p>
          <button class="btn-black" style="width:auto;padding:11px 28px" data-page="shop" onclick="Cart.close()">Shop Now</button>
        </div>`;
      if (foot) foot.innerHTML = "";
      return;
    }

    body.innerHTML = State.cart
      .map((item) => {
        const p = DB.products.find((x) => x.id === item.id);
        if (!p) return "";
        return `
        <div class="c-item">
          <img class="c-img" src="${p.img}" alt="${p.name}"/>
          <div class="c-info">
            <p class="c-name">${p.name}</p>
            <p class="c-meta">Size: ${item.size}</p>
            <div class="c-qty">
              <button class="c-qbtn" data-action="minus" data-key="${item.key}">−</button>
              <span class="c-qnum">${item.qty}</span>
              <button class="c-qbtn" data-action="plus"  data-key="${item.key}">+</button>
            </div>
            <button class="c-rm" data-action="remove" data-key="${item.key}">Remove</button>
          </div>
          <span class="c-price">$${(p.price * item.qty).toFixed(2)}</span>
        </div>`;
      })
      .join("");

    const shipping = State.cartTotal >= 150 ? "Free" : "$12.00";
    const total = State.cartTotal + (State.cartTotal >= 150 ? 0 : 12);
    if (foot)
      foot.innerHTML = `
      <div class="c-sub">
        <span>Subtotal</span>
        <strong>$${State.cartTotal.toFixed(2)}</strong>
      </div>
      <p class="c-ship-note">Shipping: ${shipping} · Free over $150</p>
      <button class="btn-black" style="margin-bottom:10px" data-page="checkout" id="toCheckout">Checkout — $${total.toFixed(2)}</button>
      <button class="btn-outline" data-cartclose>Continue Shopping</button>
    `;
  },

  updateCartBadge() {
    const b = document.getElementById("cartBadge");
    if (b) {
      b.style.display = State.cartCount > 0 ? "flex" : "none";
      b.textContent = State.cartCount;
    }
  },

  updateWishBadge() {
    const b = document.getElementById("wishBadge");
    if (b) {
      b.style.display = State.wishlist.length > 0 ? "flex" : "none";
      b.textContent = State.wishlist.length;
    }
  },

  /* ── CHECKOUT ── */
  buildCheckout() {
    const forms = document.getElementById("checkoutForms");
    if (!forms) return;
    const steps = [
      `<h2 class="co-sec-title">Contact Information</h2>
       <div class="co-form">
         <input class="co-input" type="email" placeholder="Email address" id="coEmail"/>
         <div class="co-row">
           <input class="co-input" type="text" placeholder="First name"/>
           <input class="co-input" type="text" placeholder="Last name"/>
         </div>
         <input class="co-input" type="text" placeholder="Address"/>
         <div class="co-row">
           <input class="co-input" type="text" placeholder="City"/>
           <input class="co-input" type="text" placeholder="ZIP"/>
         </div>
         <input class="co-input" type="text" placeholder="Country" value="Cambodia"/>
         <div class="co-btns">
           <button class="btn-black" id="coNext">Continue to Shipping →</button>
           <button class="btn-outline" data-page="shop">← Return to Shop</button>
         </div>
       </div>`,
      `<h2 class="co-sec-title">Shipping Method</h2>
       <div class="co-form">
         <label style="display:flex;gap:12px;align-items:center;padding:16px;border:2px solid var(--black)">
           <input type="radio" name="ship" value="free" checked/> <span><strong>Standard (3–5 days)</strong> — Free over $150</span>
         </label>
         <label style="display:flex;gap:12px;align-items:center;padding:16px;border:1px solid var(--lgray)">
           <input type="radio" name="ship" value="express"/> <span><strong>Express (1–2 days)</strong> — $18.00</span>
         </label>
         <div class="co-btns">
           <button class="btn-black" id="coNext">Continue to Payment →</button>
           <button class="btn-outline" id="coBack">← Back</button>
         </div>
       </div>`,
      `<h2 class="co-sec-title">Payment</h2>
       <div class="co-form">
         <input class="co-input" type="text" placeholder="Card number" maxlength="19"/>
         <div class="co-row">
           <input class="co-input" type="text" placeholder="MM / YY" maxlength="7"/>
           <input class="co-input" type="text" placeholder="CVC" maxlength="4"/>
         </div>
         <input class="co-input" type="text" placeholder="Name on card"/>
         <div class="co-btns">
           <button class="btn-black" id="coPlace">Place Order ✓</button>
           <button class="btn-outline" id="coBack">← Back</button>
         </div>
       </div>`,
    ];
    forms.innerHTML = steps[State.checkoutStep];

    // Update step indicators
    document
      .querySelectorAll(".cstep")
      .forEach((s, i) => s.classList.toggle("active", i <= State.checkoutStep));

    // Order summary
    const coItems = document.getElementById("coItems");
    if (coItems) {
      coItems.innerHTML = State.cart
        .map((item) => {
          const p = DB.products.find((x) => x.id === item.id);
          if (!p) return "";
          return `<div class="co-item">
          <img src="${p.img}" alt="${p.name}"/>
          <div class="co-item-info">
            <p class="co-item-name">${p.name}</p>
            <p class="co-item-meta">Size: ${item.size} · Qty: ${item.qty}</p>
          </div>
          <span>$${(p.price * item.qty).toFixed(2)}</span>
        </div>`;
        })
        .join("");
    }
    const shipping = State.cartTotal >= 150 ? 0 : 12;
    const total = State.cartTotal + shipping;
    const totals = document.getElementById("coTotals");
    if (totals)
      totals.innerHTML = `
      <div class="co-row-t"><span>Subtotal</span><span>$${State.cartTotal.toFixed(2)}</span></div>
      <div class="co-row-t"><span>Shipping</span><span>${shipping === 0 ? "Free" : "$" + shipping.toFixed(2)}</span></div>
      <div class="co-row-t total"><span>Total</span><span>$${total.toFixed(2)}</span></div>`;
  },

  /* ── FOOTER ── */
  buildFooter(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const cols = Object.entries(DB.footerLinks)
      .map(
        ([title, links]) => `
      <div class="foot-col">
        <h4>${title}</h4>
        <ul>${links
          .map(
            ([label, page, filter]) => `
          <li><a ${page.startsWith("#") ? `href="${page}"` : `data-page="${page}"${filter ? ` data-filter="${filter}"` : ""}`}>${label}</a></li>
        `,
          )
          .join("")}</ul>
      </div>`,
      )
      .join("");
    el.innerHTML = `
      <div class="foot-grid">
        <div class="foot-brand">
          <a class="nav-logo" data-page="home">VŌGE</a>
          <p>Thoughtful fashion for the considered individual. Crafted to endure, designed with purpose.</p>
        </div>
        ${cols}
      </div>
      <div class="foot-bottom">
        <span>© 2026 VŌGE. All rights reserved.</span>
        <div class="foot-social"><a>Instagram</a><a>Pinterest</a><a>TikTok</a></div>
      </div>`;
  },

  /* ── SCROLL REVEALS ── */
  observeReveals() {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(".reveal:not(.visible)")
      .forEach((el) => obs.observe(el));
  },
};

/* ─────────────────────────────────────
   CART CONTROLLER
───────────────────────────────────── */
const Cart = {
  open() {
    document.getElementById("cartDrawer").classList.add("open");
    document.getElementById("cartOverlay").classList.add("open");
    document.body.style.overflow = "hidden";
  },
  close() {
    document.getElementById("cartDrawer").classList.remove("open");
    document.getElementById("cartOverlay").classList.remove("open");
    document.body.style.overflow = "";
  },
};

/* ─────────────────────────────────────
   TOAST
───────────────────────────────────── */
let toastTimer;
function toast(msg) {
  const el = document.getElementById("toastMsg");
  const t = document.getElementById("toast");
  if (el) el.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ─────────────────────────────────────
   SEARCH
───────────────────────────────────── */
function openSearch() {
  document.getElementById("searchOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => document.getElementById("searchInput").focus(), 150);
}
function closeSearch() {
  document.getElementById("searchOverlay").classList.remove("open");
  document.body.style.overflow = "";
  document.getElementById("searchInput").value = "";
  document.getElementById("searchResults").innerHTML = "";
}
function doSearch(q) {
  const res = document.getElementById("searchResults");
  if (!q.trim()) {
    res.innerHTML = "";
    return;
  }
  const matches = DB.products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.cat.toLowerCase().includes(q.toLowerCase()),
    )
    .slice(0, 5);
  res.innerHTML = matches.length
    ? matches
        .map(
          (p) => `
        <div class="s-result" data-page="product" data-id="${p.id}" onclick="closeSearch()">
          <img src="${p.img}" alt="${p.name}"/>
          <div class="s-result-info">
            <p>${p.name}</p>
            <span>$${p.price} · ${p.cat}</span>
          </div>
        </div>`,
        )
        .join("")
    : '<p style="color:var(--gray);font-size:13px;text-align:center;padding:20px 0">No results found</p>';
}

/* ─────────────────────────────────────
   HERO AUTOPLAY
───────────────────────────────────── */
function heroAutoplay() {
  clearInterval(State.heroTimer);
  State.heroTimer = setInterval(() => {
    State.heroSlide = (State.heroSlide + 1) % DB.heroSlides.length;
    const img = document.getElementById("heroBgImg");
    if (img) {
      img.classList.add("fade");
      setTimeout(() => {
        img.src = DB.heroSlides[State.heroSlide].img;
        img.classList.remove("fade");
      }, 500);
    }
    document
      .querySelectorAll(".slide-dot")
      .forEach((d, i) => d.classList.toggle("active", i === State.heroSlide));
  }, 5000);
}

/* ─────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────── */
function initCursor() {
  const cur = document.getElementById("cursor");
  const dot = document.getElementById("cursorDot");
  if (!cur || !dot) return;
  let mx = 0,
    my = 0,
    cx = 0,
    cy = 0;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
  });
  (function anim() {
    cx += (mx - cx) * 0.15;
    cy += (my - cy) * 0.15;
    cur.style.left = cx + "px";
    cur.style.top = cy + "px";
    requestAnimationFrame(anim);
  })();
  document.addEventListener("mousedown", () =>
    document.body.classList.add("cursor-clicking"),
  );
  document.addEventListener("mouseup", () =>
    document.body.classList.remove("cursor-clicking"),
  );
  document.addEventListener("mouseover", (e) => {
    const isHover = e.target.closest(
      "button,a,[data-page],[data-id],[data-action],input,.product-card,.cat-card,.look-item",
    );
    document.body.classList.toggle("cursor-hover", !!isHover);
  });
}

/* ─────────────────────────────────────
   NAVBAR SCROLL BEHAVIOUR
───────────────────────────────────── */
function initNavScroll() {
  let lastY = 0;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      const nav = document.getElementById("navbar");
      nav.classList.toggle("solid", y > 60);
      nav.classList.toggle("hero-nav", State.currentPage === "home" && y < 80);
      nav.classList.toggle("hidden", y > lastY + 10 && y > 200);
      nav.classList.remove("hidden"); // don't hide on small scroll
      lastY = y;
    },
    { passive: true },
  );
}

/* ─────────────────────────────────────
   MOBILE MENU
───────────────────────────────────── */
function initMobileMenu() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    document.body.style.overflow = menu.classList.contains("open")
      ? "hidden"
      : "";
  });
}

/* ─────────────────────────────────────
   GLOBAL EVENT DELEGATION
───────────────────────────────────── */
document.addEventListener("click", (e) => {
  const t = e.target;

  // Page navigation
  const pageEl = t.closest("[data-page]");
  if (
    pageEl &&
    !pageEl.closest("#cartDrawer") &&
    !pageEl.closest("#checkoutForms") &&
    !pageEl.closest("#mobileMenu")
  ) {
    const page = pageEl.dataset.page;
    const filter = pageEl.dataset.filter;
    const id = parseInt(pageEl.dataset.id);
    if (page === "product" && id) Router.go("product", { id });
    else if (filter) {
      State.shopFilter = filter;
      Router.go("shop");
    } else if (page) Router.go(page);
    // Close mobile menu
    document.getElementById("mobileMenu").classList.remove("open");
    document.body.style.overflow = "";
    return;
  }

  // Mobile menu links
  const mobLink = t.closest(".mob-link");
  if (mobLink) {
    const page = mobLink.dataset.page,
      filter = mobLink.dataset.filter;
    if (filter) State.shopFilter = filter;
    Router.go(page || "home");
    document.getElementById("mobileMenu").classList.remove("open");
    document.body.style.overflow = "";
    return;
  }

  // Cart navigation (separate handling to avoid conflicts)
  if (t.closest("#cartDrawer")) {
    const el = t.closest("[data-page]");
    if (el) {
      Cart.close();
      setTimeout(() => {
        const p = el.dataset.page;
        if (p === "checkout") Router.go("checkout");
        else if (p === "shop") Router.go("shop");
      }, 300);
      return;
    }
    const close = t.closest("[data-cartclose]");
    if (close) {
      Cart.close();
      return;
    }
  }

  // Cart body actions
  const actionEl = t.closest("[data-action]");
  if (actionEl) {
    e.stopPropagation();
    const action = actionEl.dataset.action;
    const key = actionEl.dataset.key;
    const id = parseInt(actionEl.dataset.id);
    if (action === "remove") {
      State.removeFromCart(key);
    }
    if (action === "minus") {
      State.changeQty(key, -1);
    }
    if (action === "plus") {
      State.changeQty(key, 1);
    }
    if (action === "quickadd") {
      const p = DB.products.find((x) => x.id === id);
      if (p) {
        State.addToCart(p, p.sizes[0], p.colors[0]);
        toast(`${p.name} added`);
        Cart.open();
      }
    }
    if (action === "wish") {
      State.toggleWish(id);
      const p = DB.products.find((x) => x.id === id);
      toast(
        State.wishlist.includes(id)
          ? `Saved to wishlist`
          : `Removed from wishlist`,
      );
      // Refresh grids
      if (State.currentPage === "shop") UI.renderShop();
      if (State.currentPage === "home") {
        UI.renderProductGrid(
          "featuredGrid",
          DB.products.filter((p) => p.badge === "new").slice(0, 4),
        );
        UI.renderProductGrid(
          "bestGrid",
          [...DB.products].sort((a, b) => b.sold - a.sold).slice(0, 4),
        );
      }
    }
    return;
  }

  // Shop filter pills
  const pill = t.closest("[data-shopfilter]");
  if (pill) {
    State.shopFilter = pill.dataset.shopfilter;
    document
      .querySelectorAll(".fpill")
      .forEach((p) =>
        p.classList.toggle("active", p.dataset.shopfilter === State.shopFilter),
      );
    const titles = {
      all: "All Products",
      women: "Women's Collection",
      men: "Men's Collection",
      accessories: "Accessories",
      sale: "Sale Items",
      new: "New Arrivals",
    };
    const h = document.getElementById("shopHeading");
    if (h) h.textContent = titles[State.shopFilter] || "All Products";
    UI.renderShop();
    return;
  }

  // Size filter tags (sidebar)
  const sizeTag = t.closest("[data-sizef]");
  if (sizeTag) {
    const s = sizeTag.dataset.sizef;
    const idx = State.sizeFilter.indexOf(s);
    idx === -1 ? State.sizeFilter.push(s) : State.sizeFilter.splice(idx, 1);
    sizeTag.classList.toggle("active");
    UI.renderShop();
    return;
  }

  // Thumbnails (detail)
  const thumb = t.closest("[data-thumb]");
  if (thumb) {
    const i = parseInt(thumb.dataset.thumb);
    const p = State.currentProduct;
    if (p && p.imgs[i]) {
      document.getElementById("mainImg").src = p.imgs[i];
      document
        .querySelectorAll(".g-thumb")
        .forEach((g) => g.classList.toggle("active", g.dataset.thumb == i));
      const z = document.getElementById("galleryZoom");
      if (z) z.style.backgroundImage = `url(${p.imgs[i]})`;
    }
    return;
  }

  // Detail size
  const dsize = t.closest("[data-dsize]");
  if (dsize) {
    State.selectedSize = dsize.dataset.dsize;
    document
      .querySelectorAll(".d-size")
      .forEach((b) =>
        b.classList.toggle("active", b.dataset.dsize === State.selectedSize),
      );
    const lbl = document.getElementById("selectedSizeLabel");
    if (lbl) lbl.textContent = "— " + State.selectedSize;
    return;
  }

  // Detail colour
  const dcolor = t.closest("[data-dcolor]");
  if (dcolor) {
    State.selectedColor = dcolor.dataset.dcolor;
    document
      .querySelectorAll(".d-swatch")
      .forEach((s) =>
        s.classList.toggle("active", s.dataset.dcolor === State.selectedColor),
      );
    return;
  }

  // Detail qty
  if (t.id === "qtyMinus") {
    State.detailQty = Math.max(1, State.detailQty - 1);
    const d = document.getElementById("qtyDisplay");
    if (d) d.textContent = State.detailQty;
    return;
  }
  if (t.id === "qtyPlus") {
    State.detailQty++;
    const d = document.getElementById("qtyDisplay");
    if (d) d.textContent = State.detailQty;
    return;
  }

  // Add to cart (detail)
  if (t.id === "addToCartBtn") {
    if (!State.selectedSize) {
      toast("Please select a size");
      return;
    }
    State.addToCart(
      State.currentProduct,
      State.selectedSize,
      State.selectedColor,
      State.detailQty,
    );
    toast(`${State.currentProduct.name} added`);
    Cart.open();
    return;
  }

  // Wishlist (detail)
  if (t.id === "wishBtn" || t.closest("#wishBtn")) {
    const p = State.currentProduct;
    if (!p) return;
    State.toggleWish(p.id);
    const btn = document.getElementById("wishBtn");
    if (btn) {
      const isW = State.wishlist.includes(p.id);
      btn
        .querySelector("svg")
        .setAttribute("fill", isW ? "currentColor" : "none");
      btn.querySelector("svg").nextSibling.textContent = isW
        ? " Saved to Wishlist"
        : " Save to Wishlist";
      toast(isW ? "Saved to wishlist" : "Removed from wishlist");
    }
    return;
  }

  // Checkout next/back/place
  if (t.id === "coNext") {
    State.checkoutStep = Math.min(2, State.checkoutStep + 1);
    UI.buildCheckout();
    window.scrollTo({ top: 0 });
    return;
  }
  if (t.id === "coBack") {
    State.checkoutStep = Math.max(0, State.checkoutStep - 1);
    UI.buildCheckout();
    return;
  }
  if (t.id === "coPlace") {
    Router.go("confirmed");
    return;
  }

  // Clear shop filters
  if (t.id === "clearShopFilters" || t.id === "resetFilters") {
    State.shopFilter = "all";
    State.catFilters = [];
    State.sizeFilter = [];
    State.priceMax = 500;
    State.shopSort = "default";
    Pages.shop();
    return;
  }

  // Cart open/close
  if (t.closest("#cartBtn")) {
    Cart.open();
    return;
  }
  if (t.closest("#cartClose")) {
    Cart.close();
    return;
  }
  if (t.id === "cartOverlay") {
    Cart.close();
    return;
  }

  // Wishlist nav
  if (t.closest("#wishlistNav")) {
    Router.go("wishlist");
    return;
  }

  // Slide dots
  const dot = t.closest(".slide-dot");
  if (dot) {
    State.heroSlide = parseInt(dot.dataset.slide);
    UI.buildHero();
    const img = document.getElementById("heroBgImg");
    if (img) img.src = DB.heroSlides[State.heroSlide].img;
    heroAutoplay();
    return;
  }

  // Accordion
  const accHead = t.closest(".acc-head");
  if (accHead) {
    const body = accHead.nextElementSibling;
    const icon = accHead.querySelector(".acc-icon");
    const open = body.classList.contains("open");
    document
      .querySelectorAll(".acc-body")
      .forEach((b) => b.classList.remove("open"));
    document.querySelectorAll(".acc-icon").forEach((i) => {
      i.classList.remove("open");
      i.textContent = "+";
    });
    if (!open) {
      body.classList.add("open");
      icon.classList.add("open");
      icon.textContent = "+";
    }
    return;
  }

  // Search close
  if (t.id === "searchClose" || t.id === "searchOverlay") {
    if (t.id !== "searchInput") closeSearch();
    return;
  }
});

/* ─────────────────────────────────────
   OTHER EVENTS
───────────────────────────────────── */
document.addEventListener("change", (e) => {
  if (e.target.id === "sortSelect") {
    State.shopSort = e.target.value;
    UI.renderShop();
  }
  if (e.target.id === "priceSlider") {
    State.priceMax = parseInt(e.target.value);
    const lbl = document.getElementById("priceMax");
    if (lbl)
      lbl.textContent = State.priceMax >= 500 ? "$500+" : `$${State.priceMax}`;
    UI.renderShop();
  }
  if (e.target.type === "checkbox" && e.target.closest("#catChecks")) {
    const v = e.target.value;
    const idx = State.catFilters.indexOf(v);
    idx === -1 ? State.catFilters.push(v) : State.catFilters.splice(idx, 1);
    UI.renderShop();
  }
});

// View toggle
document.getElementById("gridView")?.addEventListener("click", () => {
  State.shopViewMode = "grid";
  document.getElementById("gridView").classList.add("active");
  document.getElementById("listView").classList.remove("active");
  UI.renderShop();
});
document.getElementById("listView")?.addEventListener("click", () => {
  State.shopViewMode = "list";
  document.getElementById("listView").classList.add("active");
  document.getElementById("gridView").classList.remove("active");
  UI.renderShop();
});

// Search
document.getElementById("searchBtn")?.addEventListener("click", openSearch);
document
  .getElementById("searchInput")
  ?.addEventListener("input", (e) => doSearch(e.target.value));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearch();
    Cart.close();
  }
  if (
    e.key === "Enter" &&
    document.getElementById("searchOverlay").classList.contains("open")
  ) {
    const q = document.getElementById("searchInput").value.trim();
    if (q) {
      closeSearch();
      State.shopFilter = "all";
      Router.go("shop");
      setTimeout(() => {
        UI.renderProductGrid(
          "shopGrid",
          DB.products.filter(
            (p) =>
              p.name.toLowerCase().includes(q.toLowerCase()) ||
              p.cat.toLowerCase().includes(q.toLowerCase()),
          ),
        );
      }, 150);
    }
  }
});

// Newsletter
document.getElementById("newsForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("newsEmail").value;
  if (email) {
    toast("You're subscribed! Welcome to VŌGE");
    document.getElementById("newsEmail").value = "";
  }
});

// Card input formatting
document.addEventListener("input", (e) => {
  if (e.target.placeholder === "Card number") {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  }
  if (e.target.placeholder === "MM / YY") {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1 / $2")
      .slice(0, 7);
  }
});

/* ─────────────────────────────────────
   INIT
───────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // Hide loader
  setTimeout(
    () => document.getElementById("loader").classList.add("hidden"),
    1500,
  );

  // Init systems
  //   initCursor();
  initNavScroll();
  initMobileMenu();

  // Badge updates
  UI.updateCartBadge();
  UI.updateWishBadge();
  UI.renderCartBody();

  // Start on home
  Router.go("home");

  // Nav hero style on home
  document.getElementById("navbar").classList.add("hero-nav");
});
