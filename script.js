/* ============================================
   PRODUCTS DATA - Saare products ka data
   Har product mein: id, name, price, category,
   image (Unsplash URL), desc, rating, reviews
   ============================================ */
const products = [
  {
    id: 1,
    name: "Premium Champagne",
    price: 4500,
    category: "Cocktails",
    image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=400&fit=crop",
    desc: "Elegant sparkling drink for celebrations and special evenings.",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 2,
    name: "Golden Champagne",
    price: 3800,
    category: "Cocktails",
    image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=600&h=400&fit=crop",
    desc: "Smooth golden champagne with a rich and refreshing taste.",
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 3,
    name: "Espresso Coffee",
    price: 350,
    category: "Soft drinks",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=400&fit=crop",
    desc: "Freshly brewed espresso made by our expert barista.",
    rating: 4.9,
    reviews: 210,
  },
  {
    id: 4,
    name: "Classic Burger",
    price: 650,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    desc: "Juicy beef patty with fresh veggies and special sauce.",
    rating: 4.5,
    reviews: 134,
  },
  {
    id: 5,
    name: "Creamy Pasta",
    price: 550,
    category: "Pastas",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop",
    desc: "Italian pasta with creamy sauce and herbs.",
    rating: 4.4,
    reviews: 87,
  },
  {
    id: 6,
    name: "Tomato Soup",
    price: 300,
    category: "Soups",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
    desc: "Warm homemade tomato soup — perfect starter.",
    rating: 4.3,
    reviews: 62,
  },
  {
    id: 7,
    name: "Garden Salad",
    price: 400,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    desc: "Fresh mixed greens with olive oil dressing.",
    rating: 4.2,
    reviews: 45,
  },
  {
    id: 8,
    name: "Club Sandwich",
    price: 480,
    category: "Sandwich",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&h=400&fit=crop",
    desc: "Triple-layer sandwich with chicken and fresh lettuce.",
    rating: 4.5,
    reviews: 73,
  },
  {
    id: 9,
    name: "Mojito Cocktail",
    price: 600,
    category: "Cocktails",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=400&fit=crop",
    desc: "Refreshing mint and lime cocktail — summer favorite.",
    rating: 4.7,
    reviews: 112,
  },
  {
    id: 10,
    name: "Chocolate Cake",
    price: 320,
    category: "Confectionery",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    desc: "Rich chocolate cake slice with creamy frosting.",
    rating: 4.8,
    reviews: 189,
  },
  {
    id: 11,
    name: "Cold Soft Drink",
    price: 150,
    category: "Soft drinks",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&h=400&fit=crop",
    desc: "Chilled soft drink — Coke, Sprite & more available.",
    rating: 4.1,
    reviews: 230,
  },
  {
    id: 12,
    name: "Cheese Burger",
    price: 720,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&h=400&fit=crop",
    desc: "Double cheese burger with grilled patty and fries.",
    rating: 4.6,
    reviews: 145,
  },
];

/* Category-wise features - har category ki features list
   Product popup mein dikhai deti hain */
const categoryFeatures = {
  Cocktails: ["Premium quality", "Served chilled", "Perfect for parties"],
  Burgers: ["Fresh ingredients", "Grilled to order", "Includes fries"],
  Pastas: ["Italian recipe", "Creamy sauce", "Hot & fresh"],
  Soups: ["Homemade", "Healthy option", "Served hot"],
  Salads: ["Fresh vegetables", "Light & healthy", "Custom dressing"],
  Sandwich: ["Fresh bread", "Loaded filling", "Quick serve"],
  Confectionery: ["Baked fresh", "Rich flavor", "Perfect dessert"],
  "Soft drinks": ["Ice cold", "Multiple flavors", "Instant serve"],
};

/* ============================================
   GLOBAL VARIABLES - App ki current state
   activeCategory = kon si category select hai
   searchQuery = search bar mein kya likha hai
   activeProduct = abhi kaun sa product popup mein hai
   quantity = kitne items chahiye
   cartItems = cart mein kya kya hai (array)
   ============================================ */
let activeCategory = "all";
let searchQuery = "";
let activeProduct = null;
let quantity = 1;
let cartItems = [];

/* ============================================
   DOM ELEMENTS - HTML se JavaScript mein elements
   getElementById se hum HTML ke elements pakadte hain
   Taake un pe click wagera laga sakein
   ============================================ */
const productGrid = document.getElementById("productGrid");       // Products ka grid container
const noResults = document.getElementById("noResults");           // "No products found" message
const searchInput = document.getElementById("searchInput");       // Search input field
const searchBtn = document.getElementById("searchBtn");           // Search button
const categoryList = document.getElementById("categoryList");     // Category filter list
const menuToggle = document.getElementById("menuToggle");         // Mobile menu hamburger button
const nav = document.getElementById("nav");                       // Navigation menu
const cartIcon = document.getElementById("cartIcon");             // Cart icon (click pe dropdown khulta hai)
const cartBadge = document.getElementById("cartBadge");           // Cart badge (items ki tadaad)
const cartDropdown = document.getElementById("cartDropdown");     // Cart dropdown panel
const cartItemsEl = document.getElementById("cartItems");         // Cart items ka container
const cartTotal = document.getElementById("cartTotal");           // Cart ka total amount

// Product popup ke elements
const popupOverlay = document.getElementById("popupOverlay");     // Popup ka dark background
const popupClose = document.getElementById("popupClose");         // Popup ka X close button
const popupImage = document.getElementById("popupImage");         // Product ki bari image
const popupCategory = document.getElementById("popupCategory");   // Category badge
const popupTitle = document.getElementById("popupTitle");         // Product ka naam
const popupRatingText = document.getElementById("popupRatingText"); // Rating text (4.8 stars)
const popupPrice = document.getElementById("popupPrice");         // Product ki qeemat
const popupDesc = document.getElementById("popupDesc");           // Product ka description
const popupFeatures = document.getElementById("popupFeatures");   // Features list
const qtyMinus = document.getElementById("qtyMinus");             // Quantity kam karo (-) button
const qtyPlus = document.getElementById("qtyPlus");               // Quantity barhao (+) button
const qtyValue = document.getElementById("qtyValue");             // Current quantity ka number
const popupAddCart = document.getElementById("popupAddCart");     // "Add to Cart" button
const popupBuyNow = document.getElementById("popupBuyNow");       // "Buy Now" button
const popupSuccess = document.getElementById("popupSuccess");     // "Added to cart!" success message

/* ============================================
   HELPER FUNCTIONS - Utility functions
   ============================================ */

// Price ko "Rs. 1,234" format mein convert karta hai (Pakistani format)
function formatPrice(price) {
  return "Rs. " + price.toLocaleString("en-PK");
}

// Filtered products return karta hai - category + search dono match hone chahiye
function getFilteredProducts() {
  return products.filter((item) => {
    const matchCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery) ||
      item.desc.toLowerCase().includes(searchQuery);
    return matchCategory && matchSearch;
  });
}

/* ============================================
   PRODUCT POPUP FUNCTIONS
   Product open/close karna, success message
   ============================================ */

// Product popup khulta hai - saari details fill karta hai
function openPopup(product) {
  activeProduct = product;
  quantity = 1;
  qtyValue.textContent = quantity;
  popupSuccess.classList.add("hidden");

  popupImage.src = product.image;
  popupImage.alt = product.name;
  popupImage.onerror = () => { popupImage.src = "../card.jpg"; };
  popupCategory.textContent = product.category;
  popupTitle.textContent = product.name;
  popupRatingText.textContent = product.rating + " (" + product.reviews + " reviews)";
  popupPrice.textContent = formatPrice(product.price);
  popupDesc.textContent = product.desc;

  const features = categoryFeatures[product.category] || ["Quality assured", "Fast delivery", "Best price"];
  popupFeatures.innerHTML = features
    .map(function(f) { return "<li><i class=\"fas fa-check\"></i> " + f + "</li>"; })
    .join("");

  popupOverlay.classList.remove("hidden");
  popupOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("popup-open");
}

// Product popup band karta hai
function closePopup() {
  popupOverlay.classList.add("hidden");
  popupOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("popup-open");
  activeProduct = null;
}

// Cart mein add hone ka success message dikhata hai popup mein
function showCartSuccess(message) {
  popupSuccess.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
  popupSuccess.classList.remove("hidden");
}

/* ============================================
   CART FUNCTIONS - Cart kaam karta hai
   Items add/remove, badge update, dropdown render
   ============================================ */

// Cart badge update karta hai - kitne items hain
function updateCartBadge() {
  var totalItems = cartItems.reduce(function(sum, item) { return sum + item.qty; }, 0);
  cartBadge.textContent = totalItems;
  cartBadge.classList.remove("bump");
  void cartBadge.offsetWidth;
  cartBadge.classList.add("bump");
}

// Cart dropdown render karta hai - items, total, promo discount sab
function renderCartDropdown() {
  if (cartItems.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    cartTotal.textContent = "";
    return;
  }

  var html = "";
  var total = 0;

  cartItems.forEach(function(item, index) {
    var subtotal = item.price * item.qty;
    total += subtotal;
    html += '<div class="cart-item">' +
      '<img src="' + item.image + '" alt="' + item.name + '" class="cart-item-img" onerror="this.src=\'../card.jpg\'">' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + item.name + '</div>' +
        '<div class="cart-item-details">' + item.qty + ' × ' + formatPrice(item.price) + ' = ' + formatPrice(subtotal) + '</div>' +
      '</div>' +
      '<button class="cart-item-remove" data-index="' + index + '" title="Remove"><i class="fas fa-trash"></i></button>' +
    '</div>';
  });

  cartItemsEl.innerHTML = html;

  var totalHtml = "";
  if (appliedPromo) {
    var discountAmount = Math.round(total * appliedPromo.discount / 100);
    var finalTotal = total - discountAmount;
    totalHtml = '<div class="cart-subtotal">Subtotal: ' + formatPrice(total) + '</div>' +
      '<div class="cart-discount">' + appliedPromo.label + ' (-' + formatPrice(discountAmount) + ')</div>' +
      '<div class="cart-final-total">Total: ' + formatPrice(finalTotal) + '</div>';
  } else {
    totalHtml = '<div class="cart-final-total">Total: ' + formatPrice(total) + '</div>';
  }
  cartTotal.innerHTML = totalHtml;

  cartItemsEl.querySelectorAll(".cart-item-remove").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var idx = parseInt(this.getAttribute("data-index"));
      cartItems.splice(idx, 1);
      renderCartDropdown();
      updateCartBadge();
    });
  });
}

// Active product ko cart mein add karta hai
function addToCart() {
  if (!activeProduct) return;
  var total = formatPrice(activeProduct.price * quantity);
  showCartSuccess(
    quantity + " × " + activeProduct.name + " added! Total: " + total
  );

  var existing = cartItems.find(function(item) { return item.id === activeProduct.id; });
  if (existing) {
    existing.qty += quantity;
  } else {
    cartItems.push({
      id: activeProduct.id,
      name: activeProduct.name,
      price: activeProduct.price,
      image: activeProduct.image,
      qty: quantity
    });
  }

  updateCartBadge();
  renderCartDropdown();
}

/* ============================================
   PRODUCT RENDERING - Products ko screen pe dikhata hai
   Filtered products se cards banata hai
   ============================================ */

// Saare filtered products ke cards banata hai aur grid mein dalta hai
function renderProducts() {
  var list = getFilteredProducts();
  productGrid.innerHTML = "";

  list.forEach(function(item) {
    var card = document.createElement("article");
    card.className = "card";
    card.dataset.id = item.id;
    card.innerHTML =
      '<img src="' + item.image + '" alt="' + item.name + '" onerror="this.src=\'../card.jpg\'">' +
      '<div class="card-body">' +
        '<span class="card-tag">' + item.category + '</span>' +
        '<div class="card-top">' +
          '<h3 class="card-title">' + item.name + '</h3>' +
          '<span class="card-price">' + formatPrice(item.price) + '</span>' +
        '</div>' +
        '<p class="card-text">' + item.desc + '</p>' +
        '<button type="button" class="btn shop-btn" data-id="' + item.id + '">Shop Now</button>' +
      '</div>';

    card.addEventListener("click", function(e) {
      if (e.target.closest(".shop-btn")) return;
      openPopup(item);
    });

    card.querySelector(".shop-btn").addEventListener("click", function(e) {
      e.stopPropagation();
      openPopup(item);
    });

    productGrid.appendChild(card);
  });

  noResults.classList.toggle("hidden", list.length > 0);
}

/* ============================================
   EVENT LISTENERS - Click, search, scroll events
   ============================================ */

// Category filter click - kis category ke products dikhane hain
categoryList.addEventListener("click", function(e) {
  var btn = e.target.closest(".cat-btn");
  if (!btn) return;
  e.preventDefault();

  document.querySelectorAll(".cat-btn").forEach(function(b) { b.classList.remove("active"); });
  btn.classList.add("active");
  activeCategory = btn.dataset.category;
  renderProducts();
});

// Search function - products ko filter karta hai search query se
function doSearch() {
  searchQuery = searchInput.value.trim().toLowerCase();
  renderProducts();

  if (searchQuery) {
    scrollToSection("menu");
  }
}

searchBtn.addEventListener("click", function(e) {
  e.preventDefault();
  doSearch();
});

searchInput.addEventListener("keyup", function(e) {
  doSearch();
});

/* ============================================
   SCROLL & NAVIGATION FUNCTIONS
   Header height update, smooth scroll, active nav
   ============================================ */

// Header ki height calculate karta hai aur CSS variable mein set karta hai
function updateHeaderOffset() {
  var header = document.querySelector(".header");
  var height = header ? Math.ceil(header.getBoundingClientRect().height) : 80;
  document.documentElement.style.setProperty("--header-height", height + "px");
  return height;
}

// Header offset return karta hai
function getHeaderOffset() {
  return updateHeaderOffset();
}

// Scroll offset calculate karta hai (header height + gap)
function getScrollOffset() {
  var headerH = getHeaderOffset();
  var gap = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--scroll-gap"),
    10
  ) || 50;
  return headerH + gap;
}

// Scroll position fix karta hai - target header ke neeche dikh jaye
function fixScrollPosition(target) {
  var header = document.querySelector(".header");
  if (!target || !header) return;

  var headerBottom = header.getBoundingClientRect().bottom;
  var targetTop = target.getBoundingClientRect().top;
  var minGap = 16;

  if (targetTop < headerBottom + minGap) {
    window.scrollBy({
      top: targetTop - headerBottom - minGap,
      behavior: "smooth",
    });
  }
}

// Smoothly kisi section pe scroll karta hai
function scrollToSection(id) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  var target = document.getElementById(id);
  if (!target) return;

  var offset = getScrollOffset();
  var top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

  setTimeout(function() { fixScrollPosition(target); }, 450);
  setTimeout(function() { fixScrollPosition(target); }, 900);
}

// Mobile menu toggle - hamburger pe click pe menu khulta/band hota hai
menuToggle.addEventListener("click", function() {
  nav.classList.toggle("open");
  setTimeout(updateHeaderOffset, 100);
});

window.addEventListener("load", updateHeaderOffset);
window.addEventListener("resize", updateHeaderOffset);

// Active navigation link update karta hai - kaun sa section visible hai
function setActiveNav(href) {
  document.querySelectorAll(".nav a").forEach(function(a) {
    a.classList.toggle("active", a.getAttribute("href") === href);
  });
}

// Sab anchor links pe click handler - smooth scroll + nav update
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener("click", function(e) {
    var href = link.getAttribute("href");
    if (!href || href === "#") return;

    var id = href.slice(1);
    var target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();

    if (!popupOverlay.classList.contains("hidden")) {
      closePopup();
    }

    nav.classList.remove("open");

    setTimeout(function() {
      updateHeaderOffset();
      scrollToSection(id);
    }, 200);

    if (link.closest(".nav")) {
      setActiveNav(href);
    }
  });
});

// Scroll pe header ka background dark karta hai
var headerEl = document.querySelector(".header");

function updateHeaderOnScroll() {
  if (!headerEl) return;

  if (window.scrollY > 50) {
    headerEl.classList.add("scrolled");
  } else {
    headerEl.classList.remove("scrolled");
  }
}

// Scroll event - header styling + active nav section detect karta hai
window.addEventListener("scroll", function() {
  updateHeaderOnScroll();

  var sections = ["home", "menu", "sale", "contact"];
  var headerH = getHeaderOffset();
  var scrollPos = window.scrollY + headerH + 60;
  var current = "home";

  if (window.scrollY < 80) {
    setActiveNav("#home");
    return;
  }

  sections.forEach(function(id) {
    if (id === "home") return;
    var el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) {
      current = id;
    }
  });

  setActiveNav("#" + current);
});

updateHeaderOnScroll();

/* ============================================
   CART EVENT LISTENERS - Cart icon click,
   popup close, quantity buttons, add to cart
   ============================================ */

// Cart icon toggle - click pe dropdown khulta/band hota hai
cartIcon.addEventListener("click", function(e) {
  e.stopPropagation();
  cartDropdown.classList.toggle("hidden");
  renderCartDropdown();
});

// Bahar click karne pe cart dropdown band hota hai
document.addEventListener("click", function(e) {
  if (!cartDropdown.contains(e.target) && !cartIcon.contains(e.target)) {
    cartDropdown.classList.add("hidden");
  }
});

// Popup close button + overlay click + Escape key
popupClose.addEventListener("click", closePopup);

popupOverlay.addEventListener("click", function(e) {
  if (e.target === popupOverlay) closePopup();
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && !popupOverlay.classList.contains("hidden")) {
    closePopup();
  }
});

// Quantity buttons - kam / zyada karna
qtyMinus.addEventListener("click", function() {
  if (quantity > 1) {
    quantity--;
    qtyValue.textContent = quantity;
    popupSuccess.classList.add("hidden");
  }
});

qtyPlus.addEventListener("click", function() {
  if (quantity < 99) {
    quantity++;
    qtyValue.textContent = quantity;
    popupSuccess.classList.add("hidden");
  }
});

popupAddCart.addEventListener("click", addToCart);

// Product popup ka "Buy Now" - cart mein add karta hai aur popup band karta hai
popupBuyNow.addEventListener("click", function() {
  addToCart();
  setTimeout(closePopup, 1200);
});

/* ============================================
   DISCOUNT POPUP - 30% OFF special offer
   Hero/Sale ke "Shop Now" button pe aata hai
   ============================================ */
var discountOverlay = document.getElementById("discountOverlay");
var discountClose = document.getElementById("discountClose");
var discountShopBtn = document.getElementById("discountShopBtn");
var saleShopBtn = document.getElementById("saleShopBtn");

/* ============================================
   PROMO CODE - Discount code lagane ke liye
   "SHOP30" code se 30% off milta hai
   ============================================ */
var promoInput = document.getElementById("promoInput");
var promoBtn = document.getElementById("promoBtn");
var promoMessage = document.getElementById("promoMessage");
var appliedPromo = null;

// Available promo codes - sirf SHOP30 hai abhi

var promoCodes = {
  "SHOP30": { discount: 30, label: "30% OFF" }
};

// Promo "Apply" button - code validate karta hai aur discount lagata hai
promoBtn.addEventListener("click", function() {
  var code = promoInput.value.trim().toUpperCase();
  if (!code) {
    promoMessage.textContent = "Please enter a promo code.";
    promoMessage.style.color = "#ff4444";
    promoMessage.classList.remove("hidden");
    return;
  }
  if (promoCodes[code]) {
    appliedPromo = { code: code, discount: promoCodes[code].discount, label: promoCodes[code].label };
    promoMessage.textContent = "Code applied! " + appliedPromo.label + " discount.";
    promoMessage.style.color = "#4caf50";
    promoMessage.classList.remove("hidden");
  } else {
    appliedPromo = null;
    promoMessage.textContent = "Invalid promo code.";
    promoMessage.style.color = "#ff4444";
    promoMessage.classList.remove("hidden");
  }
  renderCartDropdown();
});

/* ============================================
   ORDER CONFIRMATION - Cart "Buy Now" button
   Order place hone pe custom modal dikhata hai
   alert() ki jagah styled modal use hota hai
   ============================================ */
var cartBuyBtn = document.getElementById("cartBuyBtn");
var orderOverlay = document.getElementById("orderOverlay");       // Order modal ka dark background
var orderDetails = document.getElementById("orderDetails");       // Items list + total
var orderCloseBtn = document.getElementById("orderCloseBtn");     // "Got it!" button

// Cart ka "Buy Now" button - order place karta hai
cartBuyBtn.addEventListener("click", function() {
  if (cartItems.length === 0) return;

  var grandTotal = 0;
  var detailsHtml = "";

  cartItems.forEach(function(item) {
    var subtotal = item.price * item.qty;
    grandTotal += subtotal;
    detailsHtml += '<div class="order-detail-row">' +
      '<span>' + item.name + ' <span class="order-item-qty">x' + item.qty + '</span></span>' +
      '<span>' + formatPrice(subtotal) + '</span>' +
    '</div>';
  });

  if (appliedPromo) {
    var discountAmount = Math.round(grandTotal * appliedPromo.discount / 100);
    detailsHtml += '<div class="order-detail-row" style="color:#4caf50">' +
      '<span>' + appliedPromo.label + '</span>' +
      '<span>-' + formatPrice(discountAmount) + '</span>' +
    '</div>';
    grandTotal = grandTotal - discountAmount;
  }

  detailsHtml += '<div class="order-detail-row order-total-row">' +
    '<span>Total</span>' +
    '<span>' + formatPrice(grandTotal) + '</span>' +
  '</div>';

  orderDetails.innerHTML = detailsHtml;
  orderOverlay.classList.remove("hidden");

  cartItems = [];
  appliedPromo = null;
  promoInput.value = "";
  promoMessage.classList.add("hidden");
  updateCartBadge();
  renderCartDropdown();
  cartDropdown.classList.add("hidden");
});

// Order modal close karna
orderCloseBtn.addEventListener("click", function() {
  orderOverlay.classList.add("hidden");
});

// Order modal pe bahar click karne se bhi band hota hai
orderOverlay.addEventListener("click", function(e) {
  if (e.target === orderOverlay) {
    orderOverlay.classList.add("hidden");
  }
});

/* ============================================
   DISCOUNT POPUP EVENT LISTENERS
   Sale ke buttons pe click, close, Escape key
   ============================================ */
saleShopBtn.addEventListener("click", function() {
  discountOverlay.classList.remove("hidden");
});

discountClose.addEventListener("click", function() {
  discountOverlay.classList.add("hidden");
});

discountOverlay.addEventListener("click", function(e) {
  if (e.target === discountOverlay) {
    discountOverlay.classList.add("hidden");
  }
});

var saleShopBtn2 = document.querySelector(".sale-shop-btn-2");
if (saleShopBtn2) {
  saleShopBtn2.addEventListener("click", function() {
    discountOverlay.classList.remove("hidden");
  });
}

// Discount popup ka "Shop Now" - menu section pe scroll karta hai
discountShopBtn.addEventListener("click", function() {
  discountOverlay.classList.add("hidden");
  scrollToSection("menu");
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && !discountOverlay.classList.contains("hidden")) {
    discountOverlay.classList.add("hidden");
  }
});

/* ============================================
   CONTACT FORM - Message bhejne ka form
   Form submit hone pe success message dikhata hai
   ============================================ */
var contactForm = document.getElementById("contactForm");
var contactFormSuccess = document.getElementById("contactFormSuccess"); // Success message

// Form submit handler - validate + success message
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var name = document.getElementById("contactName").value.trim();
    var email = document.getElementById("contactEmail").value.trim();
    var message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) return;

    contactFormSuccess.classList.remove("hidden");
    contactForm.reset();

    setTimeout(function() {
      contactFormSuccess.classList.add("hidden");
    }, 4000);
  });
}

/* ============================================
   PAGE LOAD - Jab page open ho
   Header height set karo aur products render karo
   ============================================ */
updateHeaderOffset();    // Header ki height set karo
renderProducts();        // Saare products cards pe dikhao
