
// --------- Helpers ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const PAYPAL_BASE = "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=info@td-designs.com&currency_code=USD";
const paypalUrl = (itemName, amount) => `${PAYPAL_BASE}&item_name=${encodeURIComponent(itemName)}&amount=${encodeURIComponent(Number(amount).toFixed(2))}`;

const PRICING_DATA = {
  logo: [
    {
      name: "Logo Design Starter Package",
      price: 99,
      original: 199,
      blurb: "Clean, modern logo concepts—fast and affordable.",
      features: ["4 custom logo concepts", "Unlimited revisions", "High-res PNG + JPG", "100% ownership", "Delivery in 24–72 hours", "100% Money Back Guarantee"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/J4Q7Q23L8A9JY"
    },
    {
      name: "Logo Design Professional Package",
      price: 199,
      original: 399,
      blurb: "Best for growing brands that need stronger options.",
      features: ["8 custom logo concepts", "Unlimited revisions", "100% ownership", "AI / EPS vector + PNG + JPG", "100% Money Back Guarantee", "Social media profile files"],
      popular: true,
      customLink: "https://www.paypal.com/ncp/payment/T484MWSM8RH4U"
    },
    {
      name: "Logo Design Premium Package",
      price: 299,
      original: 599,
      blurb: "Full identity-ready deliverables for serious launches.",
      features: ["12 custom logo concepts", "Unlimited revisions", "AI / EPS + SVG + PDF", "Dedicated project manager", "100% Money Back Guarantee", "Social media profile files"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/GS55U9HZYAVUQ"
    }
  ],
  digitalAds: [
    {
      name: "Digital Ads & Banner Starter Package",
      price: 99,
      original: 199,
      blurb: "One polished ad creative in standard sizes.",
      features: ["1 ad concept", "Unlimited revisions", "Up to 3 standard sizes", "High-res PNG/JPG exports", "Fast turnaround"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/HYE3U2XCJ93TW"
    },
    {
      name: "Digital Ads & Banner Professional Package",
      price: 179,
      original: 349,
      blurb: "Most popular: a mini banner set for campaigns.",
      features: ["2 ad concepts", "Unlimited revisions", "Up to 6 sizes (display/social)", "CTA + hierarchy optimization", "Web-ready exports"],
      popular: true,
      customLink: "https://www.paypal.com/ncp/payment/E6V8JPGBR7WKY"
    },
    {
      name: "Digital Ads & Banner Premium Package",
      price: 249,
      original: 499,
      blurb: "For bigger promotions and multi-placement needs.",
      features: ["3 ad concepts", "Unlimited revisions", "Up to 10 sizes + variants", "Ad set consistency system", "Priority delivery"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/TCRYVK9BXK2TW"
    }
  ],
  businessCards: [
    {
      name: "Business Card Starter Package",
      price: 79,
      original: 159,
      blurb: "Simple, sharp, and print-ready.",
      features: ["1 concept", "Unlimited revisions", "Front (or single-sided) design", "CMYK print-ready PDF", "Bleed + safe margins included"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/VTABFZ2YZU8M2"
    },
    {
      name: "Business Card Professional Package",
      price: 129,
      original: 249,
      blurb: "Most popular: premium front/back layout.",
      features: ["2 concepts", "Unlimited revisions", "Double-sided design", "Print-ready PDF + PNG preview", "Standard + social QR option"],
      popular: true,
      customLink: "https://www.paypal.com/ncp/payment/JYJCHBUGRG2TL"
    },
    {
      name: "Business Card Premium Package",
      price: 179,
      original: 349,
      blurb: "For standout finishes and multiple variants.",
      features: ["3 concepts", "Unlimited revisions", "Double-sided + 2 variants", "Print-ready files (PDF)", "Finishing guidance (foil/spot UV)"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/LH8G623HGV434"
    }
  ],
  stationery: [
    {
      name: "Stationery Starter Package",
      price: 149,
      original: 299,
      blurb: "Essential branded documents for daily use.",
      features: ["Letterhead design", "Unlimited revisions", "Print-ready PDF", "1 file set (CMYK)", "Consistent typography + spacing"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/XEDZUQNYLCWEL"
    },
    {
      name: "Stationery Professional Package",
      price: 249,
      original: 499,
      blurb: "Most popular: cohesive set for a polished brand.",
      features: ["Letterhead + envelope + business card", "Unlimited revisions", "Print-ready PDFs", "Matching brand layout system", "Multiple export formats"],
      popular: true,
      customLink: "https://www.paypal.com/ncp/payment/ZEU62ME49C9NJ"
    },
    {
      name: "Stationery Premium Package",
      price: 349,
      original: 699,
      blurb: "For teams that need variants and stronger consistency.",
      features: ["Full stationery set + 2 variants", "Unlimited revisions", "Print-ready + web previews", "Brand usage notes PDF", "Priority turnaround"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/2UUK4BCU53YV8"
    }
  ],
  tshirt: [
    {
      name: "Custom T‑Shirt & Merch Starter Package",
      price: 149,
      original: 299,
      blurb: "One strong shirt graphic, ready for print.",
      features: ["1 concept", "Unlimited revisions", "Front (or back) design", "Print-ready PNG (transparent)", "1-color or full-color option"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/4UZV9KZAK9EQC"
    },
    {
      name: "Custom T‑Shirt & Merch Professional Package",
      price: 229,
      original: 449,
      blurb: "Most popular: front + back or 2 variations.",
      features: ["2 concepts", "Unlimited revisions", "Front + back (or 2 variants)", "Print-ready files (PNG/PDF)", "Placement + sizing guidance"],
      popular: true,
      customLink: "https://www.paypal.com/ncp/payment/TBZMW46KLDGMC"
    },
    {
      name: "Custom T‑Shirt & Merch Premium Package",
      price: 329,
      original: 649,
      blurb: "Merch-ready set for collections and drops.",
      features: ["3 concepts", "Unlimited revisions", "Up to 3 placements/variants", "Print-ready exports + mockup previews", "Priority turnaround"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/P3ETFEF4GLDQS"
    }
  ],
  graphic: [
    {
      name: "Graphic Design Starter Package",
      price: 99,
      original: 199,
      blurb: "One polished design asset.",
      features: ["1 design piece", "Unlimited revisions", "Print/digital sizing", "High-res exports", "Fast delivery"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/DDHBP4WPXHLFN"
    },
    {
      name: "Graphic Design Professional Package",
      price: 199,
      original: 399,
      blurb: "Most popular: a mini set for campaigns.",
      features: ["3 design pieces", "Unlimited revisions", "Multi-format exports", "Consistent styling", "Priority delivery"],
      popular: true,
      customLink: "https://www.paypal.com/ncp/payment/CF5W6RN5TPDQA"
    },
    {
      name: "Graphic Design Premium Package",
      price: 299,
      original: 599,
      blurb: "Campaign-ready set for teams and launches.",
      features: ["5 design pieces", "Unlimited revisions", "Source files (where applicable)", "Ad + organic variants", "Brand-consistent system"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/EGNL8KCCA4BTJ"
    }
  ],
  web: [
    {
      name: "Web Design Starter Package",
      price: 399,
      original: 799,
      blurb: "A clean, single-page layout for fast launches.",
      features: ["1-page website design (mockup)", "Responsive desktop + mobile", "Unlimited revisions", "Modern UI sections", "Handoff-ready layout"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/GATM2BZVNHCQC"
    },
    {
      name: "Web Design Professional Package",
      price: 699,
      original: 1299,
      blurb: "Most popular: multi-page design system.",
      features: ["Up to 5 pages (design)", "Responsive desktop + mobile", "Unlimited revisions", "Conversion-first layout", "Style guide components"],
      popular: true,
      customLink: "https://www.paypal.com/ncp/payment/7A7T3FGCAQD2E"
    },
    {
      name: "Web Design Premium Package",
      price: 999,
      original: 1899,
      blurb: "For brands needing deeper pages and polish.",
      features: ["Up to 10 pages (design)", "Responsive + UI component kit", "Unlimited revisions", "Enhanced sections + states", "Priority delivery + handoff notes"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/N6BHAZQ45FRXS"
    }
  ],
  ecommerce: [
    {
      name: "E-Commerce Starter Package",
      price: 699,
      original: 1199,
      blurb: "A clean storefront foundation for new shops.",
      features: ["Homepage + collection + PDP (design)", "Cart + checkout concept", "Responsive desktop + mobile", "Unlimited revisions", "Conversion-first layout"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/S3MRWPBQSBTPU"
    },
    {
      name: "E-Commerce Professional Package",
      price: 999,
      original: 1899,
      blurb: "Most popular: complete store design flow.",
      features: ["Up to 7 templates (design)", "Homepage, collection, PDP", "Cart + checkout + account", "Responsive views", "UI components + style guide"],
      popular: true,
      customLink: "https://www.paypal.com/ncp/payment/S3MRWPBQSBTPU"
    },
    {
      name: "E-Commerce Premium Package",
      price: 1499,
      original: 2799,
      blurb: "For brands scaling with stronger UX depth.",
      features: ["Up to 12 templates (design)", "Enhanced PDP modules", "Promo/upsell components", "UI kit + handoff notes", "Priority delivery"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/YA93ZCBAFHT9Y"
    }
  ]
};

const setMeta = ({ title, description, keywords, canonical }) => {
  document.title = title;
  const setOrCreate = (nameOrProp, value, isProp = false) => {
    let el = document.querySelector(`meta[${isProp ? 'property' : 'name'}="${nameOrProp}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(isProp ? 'property' : 'name', nameOrProp);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  };
  setOrCreate("description", description);
  setOrCreate("keywords", keywords);

  let canon = document.querySelector('link[rel="canonical"]');
  if (!canon) {
    canon = document.createElement('link');
    canon.rel = "canonical";
    document.head.appendChild(canon);
  }
  canon.href = canonical || "https://td-designs.com/";
};

const scrollToHash = () => {
  const { hash } = new URL(location.href);
  if (hash && hash.startsWith("#/pricing#")) {
    const anchor = hash.split("#/pricing")[1]; // like #logo-design
    setTimeout(() => {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
};

const openLightbox = (src, title = "Preview") => {
  $("#lightboxTitle").textContent = title;
  $("#lightboxImg").src = src || "";
  $("#lightbox").classList.remove("modal-hidden");
  document.body.style.overflow = "hidden";
};
const closeLightbox = () => {
  $("#lightbox").classList.add("modal-hidden");
  $("#lightboxImg").src = "";
  document.body.style.overflow = "";
};

// Close modal
document.addEventListener("click", (e) => {
  if (e.target && e.target.closest && e.target.closest("#lightbox [data-close]")) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// Dropdown (desktop)
const dropdownRoot = document.querySelector("[data-dropdown]");
const dropdownBtn = document.querySelector("[data-dropdown-btn]");
const dropdownMenu = document.querySelector("[data-dropdown-menu]");
const closeDropdown = () => {
  if (!dropdownMenu) return;
  dropdownMenu.classList.add("hidden");
  dropdownBtn?.setAttribute("aria-expanded", "false");
};
const openDropdown = () => {
  if (!dropdownMenu) return;
  dropdownMenu.classList.remove("hidden");
  dropdownBtn?.setAttribute("aria-expanded", "true");
};
dropdownBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  const isHidden = dropdownMenu.classList.contains("hidden");
  isHidden ? openDropdown() : closeDropdown();
});
document.addEventListener("click", (e) => {
  if (!dropdownRoot) return;
  if (!dropdownRoot.contains(e.target)) closeDropdown();
});

// Mobile menu
$("#mobileMenuBtn")?.addEventListener("click", () => {
  $("#mobileMenu")?.classList.toggle("hidden");
});
$("#mobileServicesBtn")?.addEventListener("click", () => {
  const menu = $("#mobileServicesMenu");
  const btn = $("#mobileServicesBtn");
  const isHidden = menu.classList.contains("hidden");
  menu.classList.toggle("hidden");
  btn.setAttribute("aria-expanded", String(isHidden));
});

// Close mobile menu on nav
const closeMobileMenu = () => {
  $("#mobileMenu")?.classList.add("hidden");
  $("#mobileServicesMenu")?.classList.add("hidden");
  $("#mobileServicesBtn")?.setAttribute("aria-expanded", "false");
};
window.addEventListener("hashchange", closeMobileMenu);

// Testimonials carousel
const initCarousel = () => {
  const track = $("#t-track");
  if (!track) return;
  const slides = $$("#t-track > .t-slide");
  let idx = 0;
  const render = () => {
    slides.forEach((s, i) => {
      s.classList.toggle("hidden", i !== idx);
    });
    $("#t-indicator").textContent = `${idx + 1} / ${slides.length}`;
  };
  render();
  $("#t-prev")?.addEventListener("click", () => { idx = (idx - 1 + slides.length) % slides.length; render(); });
  $("#t-next")?.addEventListener("click", () => { idx = (idx + 1) % slides.length; render(); });

  // Auto-advance
  const interval = setInterval(() => {
    if (!document.body.contains(track)) { clearInterval(interval); return; }
    idx = (idx + 1) % slides.length;
    render();
  }, 6500);
};

// FAQ accordion
const initAccordions = () => {
  $$("[data-accordion]").forEach((acc) => {
    const items = $$("[data-acc-item]", acc);
    items.forEach((item) => {
      const btn = $("[data-acc-btn]", item);
      const panel = $("[data-acc-panel]", item);
      btn?.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        // close others
        items.forEach((it) => {
          const b = $("[data-acc-btn]", it);
          const p = $("[data-acc-panel]", it);
          b?.setAttribute("aria-expanded", "false");
          p?.classList.add("hidden");
        });
        if (!expanded) {
          btn.setAttribute("aria-expanded", "true");
          panel.classList.remove("hidden");
        }
      });
    });
  });
};

// Gallery click to open lightbox
const initGalleries = () => {
  $$("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", () => {
      const src = el.getAttribute("data-src");
      const title = el.getAttribute("data-title") || "Preview";
      openLightbox(src, title);
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        el.click();
      }
    });
  });
};

// Anchor jump bar sticky behavior (pricing)
const initPricingJump = () => {
  const bar = $("#pricingJump");
  if (!bar) return;
  // no extra logic needed
};

// Portfolio filters
const initPortfolioFilters = () => {
  const tabs = $$("[data-portfolio-tab]");
  const panes = $$("[data-portfolio-pane]");
  if (!tabs.length) return;
  const activate = (key) => {
    tabs.forEach(t => {
      const active = t.getAttribute("data-portfolio-tab") === key;
      t.classList.toggle("bg-slate-900", active);
      t.classList.toggle("text-white", active);
      t.classList.toggle("bg-white", !active);
      t.classList.toggle("text-slate-800", !active);
      t.classList.toggle("border-slate-200/70", !active);
    });
    panes.forEach(p => p.classList.toggle("hidden", p.getAttribute("data-portfolio-pane") !== key));
  };
  tabs.forEach(t => t.addEventListener("click", () => activate(t.getAttribute("data-portfolio-tab"))));
  activate(tabs[0].getAttribute("data-portfolio-tab"));
};

// --------- UI Building Blocks ----------
const footerHTML = () => `
      <footer class="mt-20 border-t border-slate-200/70 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid gap-10 lg:grid-cols-12">
            <div class="lg:col-span-5">
              <div class="flex items-center gap-3">
                <a href="#/home" class="flex items-center gap-3 group" style="cursor: default;">
                  <img src="assets/images/logo.png" alt="True Designs Logo" class="h-10 w-auto rounded-xl">
                </a>
              </div>
              <p class="mt-5 max-w-md text-sm leading-6 text-slate-600">
                We help businesses look credible and convert faster with clean, modern design—serving clients across the USA, Canada, and worldwide.
                Get a quote today and receive a clear, fast plan you can act on.
              </p>
              <div class="mt-6 flex flex-wrap gap-3">
                <a href="#/pricing" class="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200/70 px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                  <i class="bi bi-tag"></i> View Pricing
                </a>
                <a href="#/contact" class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-orange-500 px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
                  Get a Free Quote
                </a>
              </div>
            </div>

            <div class="lg:col-span-3">
              <div class="text-sm font-extrabold text-slate-900">Links</div>
              <div class="mt-4 grid gap-2 text-sm text-slate-600 font-semibold">
                <a class="hover:text-slate-900 transition" href="#/home">Home</a>
                <a class="hover:text-slate-900 transition" href="#/pricing">Pricing</a>
                <a class="hover:text-slate-900 transition" href="#/portfolio">Portfolio</a>
                <a class="hover:text-slate-900 transition" href="#/about-us">About Us</a>
                <a class="hover:text-slate-900 transition" href="#/contact">Contact</a>
                <div class="mt-4 pt-4 border-t border-slate-200">
                  <a class="block hover:text-slate-900 transition" href="privacy-policy">Privacy Policy</a>
                  <a class="block hover:text-slate-900 transition mt-2" href="terms-conditions">Terms & Conditions</a>
                  <a class="block hover:text-slate-900 transition mt-2" href="cookie-policy">Cookie Policy</a>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4">
              <div class="text-sm font-extrabold text-slate-900">Contact</div>
              <div class="mt-4 text-sm text-slate-600">
                <div class="flex items-center gap-2">
                  <i class="bi bi-envelope"></i>
                  <a class="font-bold text-slate-800 hover:text-slate-900 transition" href="mailto:info@td-designs.com">info@td-designs.com</a>
                </div>
                <p class="mt-3 text-xs text-slate-500">
                  No phone support—email keeps everything documented, fast, and accurate.
                </p>
              </div>

              <div class="mt-8">
                <div class="text-sm font-extrabold text-slate-900">Social</div>
                <div class="mt-4 flex flex-wrap gap-2">
                  <a href="#/contact" class="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition">
                    <i class="bi bi-instagram"></i> Instagram
                  </a>
                  <a href="#/contact" class="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition">
                    <i class="bi bi-behance"></i> Behance
                  </a>
                  <a href="#/contact" class="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition">
                    <i class="bi bi-dribbble"></i> Dribbble
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-200/70 pt-8 text-xs text-slate-500">
            <div>© <span id="year"></span> True Designs — <span class="font-semibold text-slate-700">td-designs.com</span></div>
            <div class="font-semibold">Serving USA, Canada & Worldwide</div>
          </div>
        </div>
      </footer>
    `;

const trustRowHTML = () => `
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        ${[
    { icon: "bi-shield-check", title: "100% Satisfaction", desc: "We revise until you’re confident." },
    { icon: "bi-lightning-charge", title: "Fast Turnaround", desc: "Clear timelines + quick delivery." },
    { icon: "bi-file-earmark-check", title: "Print/Web Ready", desc: "Production files included." },
    { icon: "bi-globe2", title: "Worldwide Clients", desc: "USA, Canada & global support." },
  ].map(b => `
          <div class="rounded-2xl bg-white subtle-border p-5 hover:-translate-y-1 transition transform">
            <div class="flex items-start gap-3">
              <div class="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800">
                <i class="bi ${b.icon}"></i>
              </div>
              <div>
                <div class="text-sm font-extrabold text-slate-900">${b.title}</div>
                <div class="mt-1 text-sm text-slate-600 leading-6">${b.desc}</div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;

const pricingCard = ({ name, price, original, blurb, features, popular = false, customLink }) => `
      <div class="relative rounded-2xl bg-white subtle-border p-6 hover:-translate-y-1 transition transform ${popular ? 'ring-1 ring-teal-500/40 soft-shadow' : ''}">
        ${popular ? `
          <div class="absolute -top-3 left-6">
            <div class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-extrabold text-white shadow-sm">
              <i class="bi bi-stars"></i> Most Popular
            </div>
          </div>
        ` : ``}
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="text-sm font-extrabold text-slate-900">${name}</div>
            <div class="mt-1 text-sm text-slate-600 leading-6">${blurb}</div>
          </div>
          <div class="text-right">
            <div class="text-xs text-slate-500 line-through">$${original}.00</div>
            <div class="text-3xl font-extrabold text-slate-900">$${price}<span class="text-sm font-bold text-slate-500">.00</span></div>
          </div>
        </div>
        <ul class="mt-5 space-y-2 text-sm text-slate-700">
          ${features.map(f => `
            <li class="flex gap-2">
              <i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>
              <span>${f}</span>
            </li>
          `).join("")}
        </ul>
        <div class="mt-6 flex flex-col gap-3">
          <a href="${customLink || paypalUrl(name, price)}" target="_blank" class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-orange-500 px-4 py-3 text-sm font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
            Order Now <span class="ml-2 text-white/90 text-xs font-bold">(PayPal)</span>
          </a>
          <a href="#/contact" class="inline-flex items-center justify-center rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
            Get a Free Quote
          </a>
        </div>
      </div>
    `;

const heroBand = ({ kicker, title, subtitle, primaryHref, primaryText, secondaryHref, secondaryText, bgGenId }) => `
      <section class="relative overflow-hidden">
        <div data-bg-gen-id="${bgGenId}" class="absolute inset-0 bg-cover bg-center"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/85 to-white"></div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 lg:pb-16">
          <div class="grid gap-10 lg:grid-cols-12 items-center">
            <div class="lg:col-span-7">
              <div class="inline-flex items-center gap-2 rounded-full bg-white/80 subtle-border px-3 py-1.5 text-xs font-extrabold text-slate-700">
                <span class="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"></span>
                ${kicker}
              </div>
              <h1 class="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.03] text-slate-900">
                ${title}
              </h1>
              <p class="mt-5 text-lg sm:text-xl leading-8 text-slate-600 max-w-2xl">
                ${subtitle}
              </p>
              <div class="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="${primaryHref}" class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm sm:text-base font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
                  ${primaryText} <i class="bi bi-arrow-right-short text-xl ml-1"></i>
                </a>
                ${secondaryHref ? `
                  <a href="${secondaryHref}" class="inline-flex items-center justify-center rounded-2xl bg-white/90 subtle-border px-6 py-4 text-sm sm:text-base font-extrabold text-slate-900 hover:bg-white transition">
                    ${secondaryText} <i class="bi bi-arrow-up-right text-sm ml-2"></i>
                  </a>
                ` : ``}
              </div>

              <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
                ${[
    { label: "Avg. delivery", value: "24–72h" },
    { label: "Revisions", value: "Unlimited" },
    { label: "Clients served", value: "Worldwide" },
    { label: "Guarantee", value: "100%" },
  ].map(s => `
                  <div class="rounded-2xl bg-white/85 subtle-border p-3">
                    <div class="text-xs text-slate-500 font-bold">${s.label}</div>
                    <div class="mt-1 text-sm font-extrabold text-slate-900">${s.value}</div>
                  </div>
                `).join("")}
              </div>
            </div>

            <div class="lg:col-span-5">
              <div class="rounded-3xl bg-white/80 subtle-border soft-shadow overflow-hidden">
                <div class="p-5 sm:p-6">
                  <div class="flex items-center justify-between">
                    <div class="text-sm font-extrabold text-slate-900">What you get</div>
                    <div class="text-xs font-bold text-slate-500">USA • Canada • Worldwide</div>
                  </div>
                  <div class="mt-4 grid gap-3">
                    ${[
    { icon: "bi-magic", title: "Bespoke creative", desc: "Designed to match your market and brand tone." },
    { icon: "bi-check2-square", title: "Production-ready", desc: "Files prepared for web + print from day one." },
    { icon: "bi-graph-up-arrow", title: "Conversion-focused", desc: "Clear hierarchy that builds trust quickly." }
  ].map(x => `
                      <div class="rounded-2xl bg-white subtle-border p-4 hover:bg-slate-50 transition">
                        <div class="flex gap-3">
                          <div class="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800">
                            <i class="bi ${x.icon}"></i>
                          </div>
                          <div>
                            <div class="text-sm font-extrabold text-slate-900">${x.title}</div>
                            <div class="mt-0.5 text-sm text-slate-600 leading-6">${x.desc}</div>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>

                  <div class="mt-5 rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 border border-slate-200/60 p-4">
                    <div class="flex items-start gap-3">
                      <i class="bi bi-shield-check text-teal-700 mt-0.5"></i>
                      <div>
                        <div class="text-sm font-extrabold text-slate-900">Satisfaction Guarantee</div>
                        <div class="text-sm text-slate-700 leading-6">If you’re not happy, we keep refining until you are—simple and documented by email.</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="mt-4 grid grid-cols-3 gap-3">
                ${[
    { k: "Design-first", v: "Modern layout" },
    { k: "Fast", v: "Clear milestones" },
    { k: "Trusted", v: "Real deliverables" },
  ].map(m => `
                  <div class="rounded-2xl bg-white/85 subtle-border p-4 text-center hover:-translate-y-1 transition transform">
                    <div class="text-xs font-bold text-slate-500">${m.k}</div>
                    <div class="mt-1 text-sm font-extrabold text-slate-900">${m.v}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

const longSEOBlock = (html) => `
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div class="max-w-4xl">
          <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Designed to look premium—priced to be practical.</h2>
          <div class="mt-5 prose prose-slate max-w-none">
            <div class="text-slate-600 leading-8 text-[15px] sm:text-base">
              ${html}
            </div>
          </div>
        </div>
      </section>
    `;

const galleryGrid = (items, genPrefix) => `
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div class="flex items-end justify-between gap-6">
          <div>
            <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Recent work samples</h2>
            <p class="mt-3 text-slate-600 max-w-2xl leading-7">A curated gallery of diverse styles. Click any design to zoom.</p>
          </div>
          <a href="#/portfolio" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
            View Full Portfolio <i class="bi bi-arrow-right-short text-lg"></i>
          </a>
        </div>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${items.map((it, i) => `
            <button type="button"
              class="group rounded-2xl overflow-hidden bg-white subtle-border hover:-translate-y-1 transition transform text-left"
              data-lightbox data-title="${it.title}" data-src="${it.src || ''}"
              aria-label="Open preview: ${it.title}">
              <div class="relative aspect-[4/3] bg-slate-100">
                <img data-gen-id="${genPrefix}-${i + 1}" alt="${it.alt}" class="absolute inset-0 w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/0 to-slate-950/0 opacity-0 group-hover:opacity-100 transition"></div>
                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 opacity-0 group-hover:opacity-100 transition">
                  <div class="text-white">
                    <div class="text-sm font-extrabold">${it.title}</div>
                    <div class="text-xs text-white/80">${it.tag}</div>
                  </div>
                  <div class="h-10 w-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white">
                    <i class="bi bi-zoom-in"></i>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <div class="text-sm font-extrabold text-slate-900">${it.title}</div>
                <div class="mt-1 text-sm text-slate-600 leading-6">${it.caption}</div>
              </div>
            </button>
          `).join("")}
        </div>
      </section>
    `;

const faqHTML = (items) => `
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <h2 class="font-display text-3xl sm:text-4xl text-slate-900">FAQ</h2>
            <p class="mt-3 text-slate-600 leading-7">
              Clear answers to the questions we get most. If you have a unique request, email us and we’ll tailor a quote quickly.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a href="#/contact" class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-orange-500 px-4 py-3 text-sm font-extrabold text-white hover:opacity-95 transition">
                Get a Free Quote
              </a>
              <a href="#/pricing" class="inline-flex items-center justify-center rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                View All Pricing
              </a>
            </div>
          </div>
          <div class="lg:col-span-7">
            <div class="rounded-2xl bg-white subtle-border overflow-hidden" data-accordion>
              ${items.map((it, idx) => `
                <div class="border-b border-slate-200/70 last:border-b-0" data-acc-item>
                  <button class="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                    data-acc-btn aria-expanded="${idx === 0 ? 'true' : 'false'}" type="button">
                    <div class="text-sm sm:text-base font-extrabold text-slate-900">${it.q}</div>
                    <i class="bi bi-plus-lg text-slate-500"></i>
                  </button>
                  <div class="px-5 sm:px-6 pb-5 ${idx === 0 ? '' : 'hidden'}" data-acc-panel>
                    <div class="text-sm text-slate-600 leading-7">${it.a}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </section>
    `;

const ctaBand = ({ title, subtitle, primaryHref, primaryText, secondaryHref, secondaryText, bg = "from-teal-50 to-blue-50" }) => `
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div class="rounded-3xl border border-slate-200/70 bg-gradient-to-r ${bg} p-7 sm:p-10 overflow-hidden relative">
          <div class="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/40 blur-2xl"></div>
          <div class="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-white/35 blur-2xl"></div>

          <div class="relative grid gap-8 lg:grid-cols-12 items-center">
            <div class="lg:col-span-8">
              <h3 class="font-display text-3xl sm:text-4xl text-slate-900">${title}</h3>
              <p class="mt-3 text-slate-700 leading-7 max-w-2xl">${subtitle}</p>
            </div>
            <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:justify-end">
              <a href="${primaryHref}" class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
                ${primaryText} <i class="bi bi-arrow-right-short text-xl ml-1"></i>
              </a>
              <a href="${secondaryHref}" class="inline-flex items-center justify-center rounded-2xl bg-white/80 subtle-border px-6 py-4 text-sm font-extrabold text-slate-900 hover:bg-white transition">
                ${secondaryText} <i class="bi bi-arrow-up-right text-sm ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

// --------- Pages ----------
const HomePage = () => {
  setMeta({
    title: "True Designs - Affordable Custom Design Services | USA, Canada & Worldwide", description: "True Designs delivers affordable, high-quality custom design services—logos, digital ads & banner design, custom T‑shirt & merch design, graphics, web design, and e-commerce—serving clients in the USA, Canada, and worldwide. Fast turnaround and 100% satisfaction guaranteed.",
    keywords: "affordable custom design services USA Canada worldwide, professional logo design services, digital ads banner design, custom t-shirt merch design, graphic design, web design, e-commerce website", canonical: "https://td-designs.com/"
  });

  const logoPackages = PRICING_DATA.logo;

  const services = [
    {
      title: "Logo Design",
      desc: "Distinctive identity that looks credible everywhere.",
      href: "#/pricing#logo-design",
      img: "home-service-logo",
      icon: "bi-bezier2"
    }, {
      title: "Digital Ads &amp; Banner Design",
      desc: "Scroll-stopping creatives for campaigns and promotions.",
      href: "#/pricing#digital-ads-banner-design",
      img: "home-service-card",
      icon: "bi-badge-ad"
    }, {
      title: "Digital Ads &amp; Banner Design",
      desc: "High-converting ad creatives sized for every placement.",
      href: "#/pricing#digital-ads-banner-design",
      img: "home-service-card",
      icon: "bi-badge-ad"
    },
    {
      title: "Stationery Design",
      desc: "Cohesive brand collateral (letterhead, envelope, card).",
      href: "#/pricing#stationery-design",
      img: "home-service-stationery",
      icon: "bi-envelope-paper"
    },
    {
      title: "Custom T‑Shirt &amp; Merch Design",
      desc: "Bold, print-ready apparel graphics and merch visuals.",
      href: "#/pricing#custom-tshirt-merch-design",
      img: "home-service-merch",
      icon: "bi-tshirt"
    }, {
      title: "Graphic Design",
      desc: "Marketing visuals built for attention and clarity.",
      href: "#/pricing#graphic-design",
      img: "home-service-graphic",
      icon: "bi-layers"
    },
    {
      title: "Web Design",
      desc: "Conversion-first websites with polished UI.",
      href: "#/pricing#web-design",
      img: "home-service-web",
      icon: "bi-window"
    },
    {
      title: "E-Commerce Website",
      desc: "Storefronts, product pages, and checkout flows.",
      href: "#/pricing#e-commerce-website",
      img: "home-service-ecom",
      icon: "bi-bag-check"
    }
  ];

  const testimonials = [
    { name: "Alyssa M.", where: "Toronto, Canada", quote: "The logo concepts looked like they came from a top-tier studio. Revisions were fast and professional—our brand finally feels real." }, { name: "Jordan K.", where: "Austin, USA", quote: "The banner ads came out crisp and conversion-focused. Great hierarchy, clean typography, and sizes that worked across all placements." },
    { name: "Priya S.", where: "Vancouver, Canada", quote: "We needed custom merch designs for a new clinic launch—everything looked cohesive and premium. Communication was clear the entire time." }, { name: "Marcus T.", where: "New York, USA", quote: "Our landing page redesign increased inquiries within a week. The layout is clear and conversion-focused." },
    { name: "Elena R.", where: "Calgary, Canada", quote: "The social media graphics are consistently on-brand and sharp. Huge time saver for our marketing team." },
    { name: "Hannah D.", where: "Los Angeles, USA", quote: "E-commerce UI mockups were stunning and practical. Product pages feel premium and the checkout flow is clean." },
    { name: "Omar A.", where: "Worldwide", quote: "Quality exceeded expectations for the price. Very responsive and genuinely focused on getting it right." },
    { name: "Sam P.", where: "USA", quote: "Everything delivered exactly as promised—files, exports, and guidance. Easy process from start to finish." }
  ];

  return `
        ${heroBand({
    kicker: "Affordable, high-trust design for growing businesses",
    title: "Professional Custom Design Services for Businesses Worldwide",
    subtitle: "Affordable Prices • Fast Turnaround • 100% Satisfaction Guaranteed",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing",
    secondaryText: "View All Pricing",
    bgGenId: "home-hero-multi-mockup"
  })}

        <!-- Featured Logo Packages -->
        <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div class="flex items-end justify-between gap-6">
            <div>
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Featured: Logo Design packages</h2>
              <p class="mt-3 text-slate-600 max-w-2xl leading-7">
                Choose a package that matches your stage—startup, growth, or full brand launch. All packages include unlimited revisions.
              </p>
            </div>
            <a href="#/pricing#logo-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
              Compare All Packages <i class="bi bi-arrow-right-short text-lg"></i>
            </a>
          </div>

          <div class="mt-8 grid gap-5 lg:grid-cols-3">
            ${logoPackages.map(p => pricingCard(p)).join("")}
          </div>

          <div class="mt-10">
            ${trustRowHTML()}
          </div>
        </section>

        <!-- Services Grid -->
        <section class="bg-slate-50/60 border-y border-slate-200/60">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div class="max-w-3xl">
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Everything you need to look credible</h2>
              <p class="mt-3 text-slate-600 leading-7">
                From first impressions (logo + cards) to full digital presence (web + e-commerce), we deliver clean, production-ready design worldwide.
              </p>
            </div>

            <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              ${services.map((s) => `
                <div class="group rounded-2xl bg-white subtle-border overflow-hidden hover:-translate-y-1 transition transform">
                  <div class="relative aspect-[16/10] bg-slate-100">
                    <img data-gen-id="${s.img}" alt="${s.title} design mockup" class="absolute inset-0 w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/0 to-slate-950/0 opacity-0 group-hover:opacity-100 transition"></div>
                    <div class="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/85 subtle-border px-3 py-1.5 text-xs font-extrabold text-slate-800">
                      <i class="bi ${s.icon}"></i> ${s.title}
                    </div>
                  </div>
                  <div class="p-6">
                    <div class="text-sm text-slate-600 leading-7">${s.desc}</div>
                    <div class="mt-5 flex items-center justify-between">
                      <a href="${s.href}" class="inline-flex items-center justify-center rounded-xl bg-white border border-slate-200/70 px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                        View Pricing <i class="bi bi-arrow-up-right text-sm ml-2"></i>
                      </a>
                      <a href="#/contact" class="inline-flex items-center gap-2 text-sm font-extrabold text-teal-700 hover:text-teal-800 transition">
                        Get a Quote <i class="bi bi-arrow-right-short text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>

        <!-- How It Works -->
        <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div class="grid gap-10 lg:grid-cols-12 items-start">
            <div class="lg:col-span-5">
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">How it works</h2>
              <p class="mt-3 text-slate-600 leading-7">
                A simple, documented process that keeps timelines clear and results predictable—especially for remote USA/Canada/worldwide clients.
              </p>
              <div class="mt-6 flex gap-3">
                <a href="#/contact" class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-orange-500 px-4 py-3 text-sm font-extrabold text-white hover:opacity-95 transition">
                  Get a Free Quote
                </a>
                <a href="#/portfolio" class="inline-flex items-center justify-center rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                  View Portfolio
                </a>
              </div>
            </div>

            <div class="lg:col-span-7">
              <div class="grid gap-4">
                ${[
      { icon: "bi-chat-square-text", title: "1) Tell us what you need", desc: "Choose a service + package, share your goals, and send any inspiration or files by email." },
      { icon: "bi-palette2", title: "2) We design + refine", desc: "You get strong first drafts quickly. We revise until it feels right, with clear versioning." },
      { icon: "bi-send-check", title: "3) Receive final files", desc: "We deliver production-ready exports for web and print, plus any source files included in your package." },
    ].map((s, i) => `
                  <div class="rounded-2xl bg-white subtle-border p-6 hover:-translate-y-1 transition transform">
                    <div class="flex items-start gap-4">
                      <div class="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-500/15 to-blue-600/15 border border-slate-200/70 flex items-center justify-center text-slate-900">
                        <i class="bi ${s.icon}"></i>
                      </div>
                      <div>
                        <div class="text-sm font-extrabold text-slate-900">${s.title}</div>
                        <div class="mt-2 text-sm text-slate-600 leading-7">${s.desc}</div>
                      </div>
                      <div class="ml-auto text-xs font-extrabold text-slate-400">0${i + 1}</div>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </section>

        <!-- Testimonials Carousel -->
        <section class="bg-white border-y border-slate-200/60">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div class="flex items-end justify-between gap-6">
              <div class="max-w-2xl">
                <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Clients choose us for clarity and speed</h2>
                <p class="mt-3 text-slate-600 leading-7">A few words from businesses we’ve helped across the USA, Canada, and worldwide.</p>
              </div>
              <div class="hidden sm:flex items-center gap-2">
                <button id="t-prev" class="h-11 w-11 rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 transition inline-flex items-center justify-center" aria-label="Previous testimonial">
                  <i class="bi bi-arrow-left"></i>
                </button>
                <button id="t-next" class="h-11 w-11 rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 transition inline-flex items-center justify-center" aria-label="Next testimonial">
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>

            <div class="mt-8 rounded-3xl bg-gradient-to-r from-slate-50 to-white subtle-border soft-shadow overflow-hidden">
              <div class="p-7 sm:p-10">
                <div class="flex items-center justify-between gap-4">
                  <div class="inline-flex items-center gap-2 rounded-full bg-white subtle-border px-3 py-1.5 text-xs font-extrabold text-slate-700">
                    <i class="bi bi-star-fill text-amber-500"></i>
                    <i class="bi bi-star-fill text-amber-500"></i>
                    <i class="bi bi-star-fill text-amber-500"></i>
                    <i class="bi bi-star-fill text-amber-500"></i>
                    <i class="bi bi-star-fill text-amber-500"></i>
                    <span class="ml-1">5-star client feedback</span>
                  </div>
                  <div class="text-xs font-bold text-slate-500" id="t-indicator"></div>
                </div>

                <div class="mt-7" id="t-track">
                  ${testimonials.map((t, i) => `
                    <div class="t-slide ${i === 0 ? '' : 'hidden'}">
                      <div class="grid gap-7 lg:grid-cols-12 items-start">
                        <div class="lg:col-span-8">
                          <div class="text-xl sm:text-2xl font-extrabold text-slate-900 leading-9">
                            “${t.quote}”
                          </div>
                          <div class="mt-6 flex items-center gap-3">
                            <div class="h-11 w-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-extrabold">
                              ${t.name.split(" ")[0].slice(0, 1)}${t.name.split(" ")[1]?.slice(0, 1) || ""}
                            </div>
                            <div>
                              <div class="text-sm font-extrabold text-slate-900">${t.name}</div>
                              <div class="text-xs font-bold text-slate-500">${t.where}</div>
                            </div>
                          </div>
                        </div>
                        <div class="lg:col-span-4">
                          <div class="rounded-2xl bg-white subtle-border p-5">
                            <div class="text-sm font-extrabold text-slate-900">Why this matters</div>
                            <p class="mt-2 text-sm text-slate-600 leading-7">
                              We keep communication simple, revisions organized, and deliverables production-ready—so you can launch with confidence.
                            </p>
                            <a href="#/contact" class="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-teal-700 hover:text-teal-800 transition">
                              Request a quote <i class="bi bi-arrow-right-short text-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  `).join("")}
                </div>

                <div class="mt-8 flex sm:hidden items-center gap-2">
                  <button id="t-prev" class="h-11 w-11 rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 transition inline-flex items-center justify-center" aria-label="Previous testimonial">
                    <i class="bi bi-arrow-left"></i>
                  </button>
                  <button id="t-next" class="h-11 w-11 rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 transition inline-flex items-center justify-center" aria-label="Next testimonial">
                    <i class="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              ${[
      { icon: "bi-patch-check", title: "Trusted process", desc: "Clear briefs + versioned revisions." },
      { icon: "bi-award", title: "Premium feel", desc: "Editorial hierarchy, modern UI." },
      { icon: "bi-lock", title: "Secure checkout", desc: "PayPal Order Now buttons." },
      { icon: "bi-rocket-takeoff", title: "Launch-ready", desc: "Exports for web + print." },
    ].map(x => `
                <div class="rounded-2xl bg-white subtle-border p-5">
                  <div class="flex items-start gap-3">
                    <div class="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800"><i class="bi ${x.icon}"></i></div>
                    <div>
                      <div class="text-sm font-extrabold text-slate-900">${x.title}</div>
                      <div class="mt-1 text-sm text-slate-600 leading-6">${x.desc}</div>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>

        ${ctaBand({
      title: "Ready to upgrade your brand fast?",
      subtitle: "View packages, then request a free quote—no phone calls, just clear email communication and fast delivery.",
      primaryHref: "#/pricing",
      primaryText: "View All Pricing",
      secondaryHref: "#/contact",
      secondaryText: "Get a Free Quote",
      bg: "from-white to-slate-50"
    })}

        ${footerHTML()}
      `;
};

const LogoDesignPage = () => {
  setMeta({
    title: "Affordable Custom Logo Design | True Designs - USA & Canada",
    description: "Affordable custom logo design for USA, Canada, and worldwide clients. True Designs delivers professional logo concepts, unlimited revisions, and production-ready files with fast turnaround.",
    keywords: "affordable custom logo design USA Canada worldwide, professional logo design services, custom logo packages, vector logo files, brand identity",
    canonical: "https://td-designs.com/logo-design"
  });

  const packages = PRICING_DATA.logo;

  const seoHtml = `
        If you’re looking for <span class="font-semibold text-slate-900">affordable custom logo design</span> that still feels premium, True Designs was built for you. We work with businesses across the
        <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>—helping new brands launch confidently and established companies refresh their image without wasting time.
        <br/><br/>
        A logo is more than a symbol. It’s the first signal of trust. That’s why our process emphasizes <span class="font-semibold text-slate-900">clarity</span>, <span class="font-semibold text-slate-900">distinctiveness</span>, and <span class="font-semibold text-slate-900">real-world usability</span>. Your logo must look sharp on a website header, a business card, an invoice, packaging, and social profiles. We design with these real applications in mind, and we deliver exports you can actually use.
        <br/><br/>
        Every package includes <span class="font-semibold text-slate-900">unlimited revisions</span>—because results matter more than arbitrary limits. You’ll receive strong initial concepts quickly, then we refine the direction based on your feedback until it fits your brand voice. Need modern minimalist? Bold and energetic? Elegant and high-end? Vintage or emblem style? We can tailor the typography, icon language, spacing, and color approach to match your audience.
        <br/><br/>
        We keep communication streamlined through email, which helps us stay precise, track revisions, and deliver fast. You’ll always know what’s next and what you’ll receive at the end. If you’re ready for a <span class="font-semibold text-slate-900">professional logo design service</span> that’s affordable and reliable, request a free quote or choose a package below.
      `;

  const galleryItems = [
    { title: "Minimal Tech Wordmark", tag: "Tech • Minimal", caption: "Clean wordmark with geometric accent and modern spacing.", alt: "Minimal tech wordmark logo mockup" },
    { title: "Vintage Coffee Emblem", tag: "Food • Vintage", caption: "Badge-style emblem for cafés and roasters.", alt: "Vintage coffee shop emblem logo mockup" },
    { title: "Elegant Beauty Wordmark", tag: "Beauty • Elegant", caption: "High-contrast typography with refined curves.", alt: "Elegant beauty brand wordmark logo mockup" },
    { title: "Bold Fitness Icon", tag: "Fitness • Bold", caption: "Strong icon + impactful type for high energy brands.", alt: "Bold fitness logo icon mockup" },
    { title: "Abstract Finance Symbol", tag: "Finance • Abstract", caption: "Confident mark built for trust and scalability.", alt: "Abstract finance logo symbol mockup" },
    { title: "Playful Kids Brand", tag: "Kids • Playful", caption: "Friendly character mark with bright, balanced colors.", alt: "Playful kids brand logo mockup" },
    { title: "Luxury Real Estate Monogram", tag: "Real Estate • Luxury", caption: "Minimal monogram with premium layout.", alt: "Luxury real estate monogram logo mockup" },
    { title: "Eco-Friendly Leaf Mark", tag: "Eco • Green", caption: "Organic shapes with clean typography for sustainable brands.", alt: "Eco friendly logo leaf mockup" },
    { title: "Modern Abstract Gradient", tag: "Creative • Modern", caption: "Contemporary abstract mark with gradient system.", alt: "Modern abstract gradient logo mockup" },
    { title: "Classic Emblem Crest", tag: "Heritage • Emblem", caption: "Crest identity suited for legacy and premium services.", alt: "Classic emblem crest logo mockup" },
    { title: "Restaurant Signature Script", tag: "Restaurant • Script", caption: "Handwritten signature paired with clean subtext.", alt: "Restaurant signature script logo mockup" },
    { title: "Minimal Line Icon System", tag: "SaaS • System", caption: "A scalable icon language built from the logo geometry.", alt: "Minimal line icon system logo mockup" }
  ];

  const faqItems = [
    { q: "How fast will I receive my first logo concepts?", a: "Most projects deliver initial concepts within 24–72 hours depending on complexity. We confirm timeline in your quote email so expectations are clear." },
    { q: "Do you include vector/source files?", a: "Yes—our Professional and Premium packages include AI/EPS vector files. Premium also includes SVG and additional print-ready exports." },
    { q: "Can you match a specific style (minimal, vintage, luxury)?", a: "Absolutely. Share a few references (or competitors) and we’ll tailor typography, icon style, spacing, and color to your audience and niche." },
    { q: "What does unlimited revisions mean in practice?", a: "We revise the chosen direction until you’re satisfied—color, layout, icon refinements, and typography adjustments—so the final is truly usable." },
    { q: "Can you design a full brand identity too?", a: "Yes. Start with a logo package, then we can add business cards, stationery, social templates, and web design for a cohesive identity." },
  ];

  return `
        ${heroBand({
    kicker: "Logo Design • USA, Canada & Worldwide",
    title: "Affordable custom logo design that looks premium",
    subtitle: "Get distinct, market-aware logo concepts with unlimited revisions and production-ready files—delivered fast via clear email communication.",
    primaryHref: "#logo-packages",
    primaryText: "Order Now",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "logo-hero-banners"
  })}

        ${longSEOBlock(seoHtml)}

        <!-- Packages -->
        <section id="logo-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div class="flex items-end justify-between gap-6">
            <div>
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Logo Design packages</h2>
              <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Choose your package and check out securely via PayPal. Need something custom? Request a free quote.</p>
            </div>
            <a href="#/pricing#logo-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
              View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
            </a>
          </div>
          <div class="mt-8 grid gap-5 lg:grid-cols-3">
            ${packages.map(p => pricingCard(p)).join("")}
          </div>
        </section>

        ${galleryGrid(galleryItems, "logo-gallery")}

        ${faqHTML(faqItems)}

        ${ctaBand({
    title: "Want your logo to look credible everywhere?",
    subtitle: "Get a free quote or jump to transparent pricing. We serve USA, Canada, and worldwide businesses with fast delivery and unlimited revisions.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing#logo-design",
    secondaryText: "View Logo Pricing",
    bg: "from-teal-50 to-blue-50"
  })}

        ${footerHTML()}
      `;
};


const BusinessCardPage = () => {
  setMeta({
    title: "Affordable Digital Ads & Banner Design | True Designs - USA, Canada & Worldwide",
    description: "Affordable digital ads & banner design with high-converting creatives sized for web, display, and social placements. True Designs serves USA, Canada, and worldwide clients with fast turnaround and unlimited revisions.",
    keywords: "affordable digital ads banner design USA Canada worldwide, display ad design, banner ad design, social media ad creatives, high converting ad creative",
    canonical: "https://td-designs.com/digital-ads-banner-design"
  });

  const packages = PRICING_DATA.digitalAds;

  const seoHtml = `
        Your ad creative is often the first impression of your offer—so it needs to communicate value fast. True Designs provides
        <span class="font-semibold text-slate-900">affordable digital ads &amp; banner design</span> for businesses in the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>, with a workflow that’s simple and fast.
        <br/><br/>
        We design ad creatives that are built for performance: clear hierarchy, readable typography at small sizes, and strong CTAs. Whether you’re running
        Google Display, website hero banners, Facebook/Instagram promos, LinkedIn ads, or retargeting campaigns, we’ll deliver properly sized exports that match your placements.
        <br/><br/>
        Unlimited revisions are included so you don’t get stuck with “almost right.” We’ll refine the layout, messaging emphasis, colors, and CTA treatment until the creative feels sharp and conversion-ready.
        <br/><br/>
        Our goal is simple: deliver ad designs that look premium, read clearly, and stay consistent across multiple sizes—at an affordable price. Choose a package below or request a free quote for a custom campaign set.
      `;

  const galleryItems = [
    { title: "Google Display Banner Set", tag: "Display • Multi-size", caption: "Consistent system across common display sizes.", alt: "Google display banner set mockup" },
    { title: "Facebook/Instagram Promo", tag: "Social • Conversion", caption: "Scroll-stopping creative optimized for mobile feeds.", alt: "Social media ad creative mockup" },
    { title: "Website Hero Banner", tag: "Web • Hero", caption: "Clean headline hierarchy for above-the-fold impact.", alt: "Website hero banner design mockup" },
    { title: "Retargeting Ad Set", tag: "Ads • Retargeting", caption: "Clear offer-first layout with strong CTA.", alt: "Retargeting banner ad mockup" },
    { title: "Seasonal Sale Creative", tag: "Promo • Sale", caption: "High-contrast sale graphics with readable details.", alt: "Seasonal sale banner ad mockup" },
    { title: "Product Launch Ads", tag: "Launch • Product", caption: "Product-forward layout with benefit bullets.", alt: "Product launch ad creative mockup" },
    { title: "YouTube/Video Cover Banner", tag: "Video • Cover", caption: "Designed to pop at small sizes and stand out.", alt: "YouTube cover banner design mockup" },
    { title: "LinkedIn Ad Creative", tag: "B2B • Clean", caption: "Professional typography and structured messaging blocks.", alt: "LinkedIn ad creative mockup" },
    { title: "Carousel Ad Panels", tag: "Social • Carousel", caption: "Multi-panel system with consistent styling.", alt: "Carousel ad panels mockup" },
    { title: "Email Header Banner", tag: "Email • Header", caption: "Branded header banner for email campaigns.", alt: "Email header banner design mockup" }
  ];

  const faqItems = [
    { q: "What sizes will you deliver for my ads?", a: "Tell us your platform/placements (Google Display, Facebook/Instagram, website banners, etc.). Each package includes a set number of sizes and we can quote additional sizes if needed." },
    { q: "Do you design for both display and social ads?", a: "Yes. We can create banner sets for display placements and social media formats including feed, story, and carousel." },
    { q: "Can you match my brand guidelines?", a: "Absolutely. Share your logo, fonts, colors, and any examples, and we’ll keep the campaign consistent." },
    { q: "Will you include multiple versions for A/B testing?", a: "Premium packages can include variants for testing (headline/CTA/layout variations). If you need a larger test set, request a free quote." },
    { q: "How fast is turnaround?", a: "Most first drafts arrive within 24–72 hours depending on complexity and number of sizes." }
  ];

  return `
        ${heroBand({
    kicker: "Digital Ads &amp; Banner Design • High-converting creatives",
    title: "Digital ads and banners that read clearly and convert",
    subtitle: "Get scroll-stopping creatives with strong hierarchy, properly sized exports, fast turnaround, and unlimited revisions—serving USA, Canada & worldwide.",
    primaryHref: "#ads-packages",
    primaryText: "View Packages",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "ads-hero-banners"
  })}

        ${longSEOBlock(seoHtml)}

        <section id="ads-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div class="flex items-end justify-between gap-6">
            <div>
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Digital Ads &amp; Banner Design packages</h2>
              <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Transparent, affordable packages with PayPal checkout and unlimited revisions.</p>
            </div>
            <a href="#/pricing#digital-ads-banner-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
              View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
            </a>
          </div>
          <div class="mt-8 grid gap-5 lg:grid-cols-3">
            ${packages.map(p => pricingCard(p)).join("")}
          </div>
        </section>

        ${galleryGrid(galleryItems, "ads-gallery")}

        ${faqHTML(faqItems)}

        ${ctaBand({
    title: "Need a consistent banner set for your campaign?",
    subtitle: "Choose a package for fast checkout or request a free quote for additional sizes and A/B variants. We deliver worldwide.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing#digital-ads-banner-design",
    secondaryText: "View Ads Pricing",
    bg: "from-white to-slate-50"
  })}

        ${footerHTML()}
      `;
};
const StationeryPage = () => {
  setMeta({
    title: "Affordable Custom T‑Shirt & Merch Design | True Designs - USA, Canada & Worldwide",
    description: "Affordable custom T‑shirt & merch design—print-ready apparel graphics and merch visuals built for strong branding. True Designs serves USA, Canada, and worldwide clients.",
    keywords: "affordable custom t-shirt merch design USA Canada worldwide, t-shirt design, apparel graphics, merch design, print-ready t-shirt files",
    canonical: "https://td-designs.com/custom-tshirt-merch-design"
  }); const packages = PRICING_DATA.tshirt; const seoHtml = `
        Cohesive stationery can instantly make a business feel established. From proposals and invoices to client onboarding and thank-you notes, professional stationery reinforces your brand at every touchpoint.
        True Designs provides <span class="font-semibold text-slate-900">affordable stationery design</span> for clients in the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>.
        <br/><br/>
        Our stationery packages are designed to be practical and production-ready. We pay attention to spacing, type scale, and alignment so documents feel premium while remaining easy to read. We also set up layouts with the right margins and bleed requirements for professional printing. Whether your brand style is minimal and modern, elegant and high-end, or bold and energetic, we translate that tone into a consistent system.
        <br/><br/>
        Many clients start with a logo, then add stationery to keep their brand consistent across email signatures, printed letterheads, and office collateral. If you already have a logo and colors, we’ll match them precisely; if you’re building from scratch, we can recommend a direction that aligns with your market and audience.
        <br/><br/>
        With unlimited revisions and clear email communication, you’ll get a finished stationery set you can use immediately—no guesswork, no missing files, and no slow back-and-forth. Choose a package below or request a custom quote for additional items.
      `; const galleryItems = [
    { title: "Streetwear Back Print", tag: "Streetwear • Bold", caption: "Drop-style back graphic with strong contrast.", alt: "Streetwear t-shirt back print mockup" },
    { title: "Minimal Chest Logo", tag: "Minimal • Clean", caption: "Small front placement designed for crisp print.", alt: "Minimal chest logo t-shirt mockup" },
    { title: "Event Tee Design", tag: "Event • Merch", caption: "Typography-led design for staff and attendees.", alt: "Event t-shirt design mockup" },
    { title: "Band/Artist Merch", tag: "Music • Bold", caption: "High-impact merch graphic with strong focal point.", alt: "Band merch t-shirt design mockup" },
    { title: "Mascot Illustration", tag: "Illustration • Character", caption: "Mascot-style artwork built for apparel printing.", alt: "Mascot illustration t-shirt mockup" },
    { title: "Retro Badge Tee", tag: "Vintage • Badge", caption: "Vintage emblem/badge graphic for a classic look.", alt: "Retro badge t-shirt design mockup" },
    { title: "Team Apparel Set", tag: "Team • Consistent", caption: "Consistent front/back system across multiple tees.", alt: "Team apparel t-shirt set mockup" },
    { title: "Gym/Brand Statement Tee", tag: "Fitness • Type", caption: "Bold type layout designed for readability on fabric.", alt: "Gym statement t-shirt design mockup" },
    { title: "Clean Vector Graphic", tag: "Vector • Print-ready", caption: "Crisp vector-first graphic with clean edges.", alt: "Vector graphic t-shirt design mockup" },
    { title: "Merch Drop Variants", tag: "Drop • Variants", caption: "Multiple colorway/placement variants for collections.", alt: "Merch drop variants mockup" }
  ]; const faqItems = [
    { q: "What items are included in stationery design?", a: "Depending on the package, we design letterhead, envelope, and business cards as a cohesive set. Premium can include variants as well." },
    { q: "Do you provide print-ready files?", a: "Yes. You’ll receive print-ready PDFs prepared with proper margins and bleed when required." },
    { q: "Can you match my existing logo and brand colors?", a: "Yes. Send your logo files and any brand guidelines and we’ll build stationery that aligns perfectly." },
    { q: "Can you add more items (folders, invoices, email signature)?", a: "Yes. Request a free quote and list the items you need—our team will provide a clear estimate." },
    { q: "Is this service available worldwide?", a: "Yes. We work with clients in the USA, Canada, and worldwide. All communication and file delivery is handled by email." }
  ];

  return `${heroBand({
    kicker: "Custom T‑Shirt &amp; Merch Design • Print-ready apparel graphics",
    title: "Merch designs that look bold and print clean",
    subtitle: "Get custom apparel graphics and merch visuals designed for production—print-ready files, fast turnaround, and unlimited revisions for USA, Canada &amp; worldwide clients.",
    primaryHref: "#stationery-packages",
    primaryText: "Get Packages",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "stationery-hero-set"
  })}${longSEOBlock(seoHtml)}

        <section id="stationery-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div class="flex items-end justify-between gap-6">
            <div>
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Stationery Design packages</h2>
              <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Affordable packages with discounts, unlimited revisions, and PayPal checkout.</p>
            </div><a href="#/pricing#custom-tshirt-merch-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
              View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
            </a></div>
          <div class="mt-8 grid gap-5 lg:grid-cols-3">
            ${packages.map(p => pricingCard(p)).join("")}
          </div>
        </section>

        ${galleryGrid(galleryItems, "stationery-gallery")}

        ${faqHTML(faqItems)}${ctaBand({
    title: "Ready to launch merch that feels premium?",
    subtitle: "Jump to transparent pricing or request a free quote for multiple SKUs, placements, or a full merch drop. We deliver worldwide.",
    primaryHref: "#/pricing#custom-tshirt-merch-design",
    primaryText: "View Merch Pricing",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bg: "from-teal-50 to-blue-50"
  })}${footerHTML()}
      `;
};

const GraphicDesignPage = () => {
  setMeta({
    title: "Affordable Graphic Design Services | True Designs - USA, Canada & Worldwide",
    description: "Affordable graphic design services for flyers, posters, social media, menus, and more. True Designs serves USA, Canada, and worldwide clients with fast turnaround and unlimited revisions.",
    keywords: "affordable graphic design USA Canada worldwide, flyer design, poster design, social media graphics, infographic design, professional graphic design services",
    canonical: "https://td-designs.com/graphic-design"
  });

  const packages = PRICING_DATA.graphic;

  const seoHtml = `
        Marketing moves fast—and your visuals need to keep up. True Designs provides <span class="font-semibold text-slate-900">affordable graphic design</span> for businesses in the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>, with a focus on clarity, hierarchy, and results.
        <br/><br/>
        Whether you need event flyers, posters, social media banners, Instagram carousels, menus, YouTube thumbnails, or clean infographics, we design assets that grab attention while staying readable. Great graphics are not just “pretty”—they guide the eye, highlight the offer, and make your brand feel credible.
        <br/><br/>
        Our process is simple: you share your goal, audience, and any brand references; we deliver strong drafts quickly; then we refine based on feedback with unlimited revisions. You’ll receive files sized correctly for the platforms you’re using, plus high-resolution exports ready to publish or print.
        <br/><br/>
        If you’re running a promotion or launching something new, our multi-piece packages make it easy to keep a consistent look across all channels. Choose a package below or request a free quote for ongoing design support.
      `;

  const galleryItems = [
    { title: "Event Flyer", tag: "Flyer • Bold", caption: "High-impact headline hierarchy with clean details.", alt: "Event flyer graphic design mockup" },
    { title: "Instagram Carousel", tag: "Social • Modern", caption: "Multi-slide system designed for readability on mobile.", alt: "Instagram carousel graphic design mockup" },
    { title: "YouTube Thumbnail", tag: "Video • High CTR", caption: "Strong contrast and focal point for click-through.", alt: "YouTube thumbnail design mockup" },
    { title: "Infographic", tag: "Data • Clean", caption: "Structured information design with clear sections.", alt: "Infographic design mockup" },
    { title: "Restaurant Menu", tag: "Menu • Elegant", caption: "Readable layout with premium spacing and type pairing.", alt: "Restaurant menu design mockup" },
    { title: "Poster Design", tag: "Poster • Editorial", caption: "Editorial typography and bold imagery composition.", alt: "Poster design mockup" },
    { title: "Sale Banner Set", tag: "Ads • Campaign", caption: "Consistent system across multiple banner sizes.", alt: "Sale banner set design mockup" },
    { title: "Podcast Cover", tag: "Brand • Audio", caption: "Designed to pop at small sizes in apps.", alt: "Podcast cover design mockup" },
    { title: "Product Promo Flyer", tag: "Promo • Clean", caption: "Product-forward layout with clear benefits list.", alt: "Product promotional flyer design mockup" },
    { title: "Social Story Layout", tag: "Stories • Vertical", caption: "Vertical composition for story formats and swipe-ups.", alt: "Social story graphic design mockup" }
  ];

  const faqItems = [
    { q: "What types of graphic design do you offer?", a: "Flyers, posters, menus, social media graphics, ad creatives, infographics, thumbnails, and more. If it’s a visual asset, we can design it." },
    { q: "Do you deliver files sized for each platform?", a: "Yes. Tell us where you’ll use the designs (Instagram, Facebook, print size, etc.), and we’ll provide the correct dimensions." },
    { q: "Can you match my brand guidelines?", a: "Absolutely. Share your brand colors, fonts, and logo, and we’ll maintain consistent styling." },
    { q: "Do you include source files?", a: "Premium packages include source files where applicable. If you need a specific file type, request a free quote and we’ll confirm." },
    { q: "Can you design a full campaign set?", a: "Yes. Our Professional and Premium packages are ideal for multi-piece campaign assets with consistent styling across formats." }
  ];

  return `
        ${heroBand({
    kicker: "Graphic Design • Campaign-ready visuals",
    title: "Graphic design that looks clean and sells clearly",
    subtitle: "Flyers, posters, social media, menus, and more—designed with strong hierarchy, fast turnaround, and unlimited revisions for USA/Canada/worldwide clients.",
    primaryHref: "#graphic-packages",
    primaryText: "View Pricing",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "graphic-hero-layered"
  })}

        ${longSEOBlock(seoHtml)}

        <section id="graphic-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div class="flex items-end justify-between gap-6">
            <div>
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Graphic Design packages</h2>
              <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Choose a package for quick checkout or request a custom quote for ongoing design.</p>
            </div>
            <a href="#/pricing#graphic-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
              View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
            </a>
          </div>
          <div class="mt-8 grid gap-5 lg:grid-cols-3">
            ${packages.map(p => pricingCard(p)).join("")}
          </div>
        </section>

        ${galleryGrid(galleryItems, "graphic-gallery")}

        ${faqHTML(faqItems)}

        ${ctaBand({
    title: "Need a campaign that looks consistent everywhere?",
    subtitle: "Get a free quote and tell us what you’re promoting. We’ll deliver a clean, on-brand system sized for your channels.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing#graphic-design",
    secondaryText: "View Graphic Pricing",
    bg: "from-white to-slate-50"
  })}

        ${footerHTML()}
      `;
};

const WebDesignPage = () => {
  setMeta({
    title: "Affordable Web Design | True Designs - Conversion-Focused Worldwide",
    description: "Affordable web design built for trust and conversions. True Designs serves USA, Canada, and worldwide clients with modern UI, clear hierarchy, and fast turnaround.",
    keywords: "affordable web design USA Canada worldwide, conversion focused web design, professional website design services, responsive web design",
    canonical: "https://td-designs.com/web-design"
  });

  const packages = PRICING_DATA.web;

  const seoHtml = `
        A website is often the first “sales conversation” your business has with a new customer. If the layout feels cluttered or outdated, trust drops instantly. True Designs provides
        <span class="font-semibold text-slate-900">affordable web design</span> with a focus on clarity and conversion—serving clients in the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>.
        <br/><br/>
        Our approach is simple: we design pages that make it obvious what you do, who you help, and what action to take next. We use strong typography, generous spacing, and a clean visual rhythm so content is easy to scan. This is especially important for service businesses where credibility needs to be established quickly.
        <br/><br/>
        We can design single-page websites for fast launches or multi-page sites with clear navigation, service detail pages, pricing sections, testimonials, and contact flows. Every design is responsive and built to look great on mobile—where most customers will first find you.
        <br/><br/>
        While we focus on the design deliverable, our files are prepared for easy handoff to developers. You’ll receive organized layouts and guidance that helps your build go smoother. If you want a conversion-focused site that looks premium and stays affordable, choose a package below or request a free quote.
      `;

  const galleryItems = [
    { title: "Agency Homepage", tag: "Agency • Modern", caption: "Editorial hero, service grid, and strong CTAs.", alt: "Agency website homepage mockup in device frames" },
    { title: "Clinic Website", tag: "Healthcare • Trust", caption: "Clean hierarchy designed to build confidence quickly.", alt: "Clinic website mockup on desktop and mobile" },
    { title: "Restaurant Website", tag: "Food • Visual", caption: "Menu-forward layout with reservations CTA.", alt: "Restaurant website mockup on devices" },
    { title: "SaaS Landing Page", tag: "SaaS • Conversion", caption: "Feature-led sections with benefit clarity.", alt: "SaaS landing page mockup" },
    { title: "Portfolio Site", tag: "Portfolio • Minimal", caption: "Minimal grid with refined typography and whitespace.", alt: "Portfolio website mockup" },
    { title: "Consulting Website", tag: "Professional • Clean", caption: "Trust badges, testimonials, and clear service blocks.", alt: "Consulting website mockup" },
    { title: "Real Estate Site", tag: "Real Estate • Luxury", caption: "Premium listing layout with elegant spacing.", alt: "Real estate website mockup" },
    { title: "Fitness Studio Site", tag: "Fitness • Bold", caption: "High-energy visuals with a simple sign-up funnel.", alt: "Fitness studio website mockup" },
    { title: "Nonprofit Website", tag: "Nonprofit • Story", caption: "Story-driven layout with donation CTAs.", alt: "Nonprofit website mockup" },
    { title: "Creative Studio Site", tag: "Creative • Editorial", caption: "Editorial typography and modern motion cues.", alt: "Creative studio website mockup" }
  ];

  const faqItems = [
    { q: "Are these packages for design only or full development?", a: "These packages cover web design deliverables (mockups/layouts). If you need a custom build quote, request a free quote and we’ll advise based on your stack." },
    { q: "Will my design be mobile responsive?", a: "Yes. We design responsive layouts and provide desktop and mobile views so the site looks polished on all devices." },
    { q: "Can you design multiple pages?", a: "Yes. Our Professional and Premium packages are built for multi-page websites. If you need more pages, we can quote it." },
    { q: "Do you include conversion elements like CTAs and testimonials?", a: "Yes. We design with conversion in mind—clear CTAs, trust badges, testimonial placement, and scannable sections." },
    { q: "Can you match my brand style?", a: "Absolutely. Share your logo, brand colors, and examples you like, and we’ll build a cohesive visual direction." }
  ];

  return `
        ${heroBand({
    kicker: "Web Design • Conversion-first UI",
    title: "Web design built to convert and build trust",
    subtitle: "Modern, responsive page designs with clear hierarchy—crafted for USA, Canada & worldwide clients who want premium results without premium pricing.",
    primaryHref: "#web-packages",
    primaryText: "View Packages",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "web-hero-devices"
  })}

        ${longSEOBlock(seoHtml)}

        <section id="web-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div class="flex items-end justify-between gap-6">
            <div>
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Web Design packages</h2>
              <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Choose a package and check out via PayPal, or request a custom quote if your project is larger.</p>
            </div>
            <a href="#/pricing#web-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
              View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
            </a>
          </div>
          <div class="mt-8 grid gap-5 lg:grid-cols-3">
            ${packages.map(p => pricingCard(p)).join("")}
          </div>
        </section>

        ${galleryGrid(galleryItems, "web-gallery")}

        ${faqHTML(faqItems)}

        ${ctaBand({
    title: "Want a website that looks premium and reads clearly?",
    subtitle: "Request a free quote and share your industry + goals. We’ll recommend a package and deliver a conversion-focused design.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing#web-design",
    secondaryText: "View Web Pricing",
    bg: "from-teal-50 to-blue-50"
  })}

        ${footerHTML()}
      `;
};

const EcommercePage = () => {
  setMeta({
    title: "Affordable E-Commerce Website Design | True Designs - USA, Canada & Worldwide",
    description: "Affordable e-commerce website design with product, cart, and checkout-focused UX. True Designs serves USA, Canada, and worldwide businesses with conversion-first layouts.",
    keywords: "affordable e-commerce website design USA Canada worldwide, online store design, product page design, checkout flow UX, professional ecommerce design services",
    canonical: "https://td-designs.com/e-commerce-website"
  });

  const packages = PRICING_DATA.ecommerce;

  const seoHtml = `
        For online stores, design is directly tied to revenue. Product pages must feel trustworthy, collections must be easy to scan, and checkout must be frictionless. True Designs offers
        <span class="font-semibold text-slate-900">affordable e-commerce website design</span> for businesses in the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>, built around a conversion-first structure.
        <br/><br/>
        We design key templates such as your homepage, collection pages, product detail pages (PDP), cart, and checkout. Our layouts prioritize product clarity, strong hierarchy, trust signals (reviews, shipping/returns, guarantees), and a clean visual rhythm. Whether you sell fashion, food, electronics, beauty, or home goods, we tailor the UI to match your market and price point.
        <br/><br/>
        Unlimited revisions are included so you can refine details like product modules, image ratios, typography, badge placement, and call-to-action language. You’ll get responsive designs for desktop and mobile, plus a reusable component approach that makes development smoother.
        <br/><br/>
        If you want an e-commerce site that feels premium and converts better—without overpaying—choose a package below or request a free quote and tell us what you sell.
      `;

  const galleryItems = [
    { title: "Fashion Collection + PDP", tag: "Fashion • Premium", caption: "Editorial product layout with clean variants and CTAs.", alt: "Fashion e-commerce product page mockup" },
    { title: "Beauty Store PDP", tag: "Beauty • Clean", caption: "Ingredient highlights, trust badges, and clear purchase flow.", alt: "Beauty e-commerce product detail page mockup" },
    { title: "Electronics PDP", tag: "Electronics • Specs", caption: "Comparison-ready spec layout with structured modules.", alt: "Electronics e-commerce product page mockup" },
    { title: "Home Goods Collection", tag: "Home • Minimal", caption: "Scan-friendly grid and filtering UI.", alt: "Home goods e-commerce collection page mockup" },
    { title: "Food Brand Storefront", tag: "Food • Warm", caption: "Appetite-focused hero with subscription CTA.", alt: "Food e-commerce homepage mockup" },
    { title: "Cart + Checkout Flow", tag: "Checkout • UX", caption: "Clean steps, trust signals, and minimal friction.", alt: "E-commerce cart and checkout mockup" },
    { title: "Skincare Collection", tag: "Beauty • Soft", caption: "Soft palette with clear product categorization.", alt: "Skincare collection page mockup" },
    { title: "Streetwear PDP", tag: "Fashion • Bold", caption: "Bold typography and strong image focus.", alt: "Streetwear product page mockup" },
    { title: "Gadget Collection", tag: "Electronics • Modern", caption: "Modern UI components and filters.", alt: "Gadget collection page mockup" },
    { title: "Order Confirmation Screen", tag: "UX • Post-purchase", caption: "Polished confirmation with next-step guidance.", alt: "Order confirmation UI mockup" }
  ];

  const faqItems = [
    { q: "Do these packages include Shopify/WooCommerce development?", a: "These packages cover design deliverables (templates, layouts, UI system). If you need full development, request a free quote and we’ll scope it." },
    { q: "Will you design product, cart, and checkout pages?", a: "Yes. E-commerce design is more than a homepage—our packages cover PDP, cart, and checkout concepts depending on tier." },
    { q: "Can you design for different industries (fashion, beauty, electronics)?", a: "Absolutely. We tailor hierarchy, modules, and style to match your audience and pricing position." },
    { q: "Do you include mobile views?", a: "Yes. We provide responsive desktop and mobile designs so the store feels polished on all devices." },
    { q: "Can you improve conversions with trust signals?", a: "Yes. We incorporate reviews, shipping/returns placement, guarantees, and CTA hierarchy to reduce friction and build confidence." }
  ];

  return `
        ${heroBand({
    kicker: "E-Commerce Website • Product-to-checkout UX",
    title: "E-commerce design that sells with clarity",
    subtitle: "Product pages, collections, cart, and checkout layouts designed for trust and conversion—affordable for USA, Canada & worldwide brands.",
    primaryHref: "#ecom-packages",
    primaryText: "View Packages",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "ecom-hero-checkout"
  })}

        ${longSEOBlock(seoHtml)}

        <section id="ecom-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div class="flex items-end justify-between gap-6">
            <div>
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">E-Commerce Website packages</h2>
              <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Pick a package that matches your store size and checkout complexity.</p>
            </div>
            <a href="#/pricing#e-commerce-website" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
              View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
            </a>
          </div>
          <div class="mt-8 grid gap-5 lg:grid-cols-3">
            ${packages.map(p => pricingCard(p)).join("")}
          </div>
        </section>

        ${galleryGrid(galleryItems, "ecom-gallery")}

        ${faqHTML(faqItems)}

        ${ctaBand({
    title: "Ready to make your store feel premium?",
    subtitle: "Request a free quote and share your products, target audience, and platform. We’ll recommend the best package for your launch.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing#e-commerce-website",
    secondaryText: "View E-Commerce Pricing",
    bg: "from-white to-slate-50"
  })}

        ${footerHTML()}
      `;
};

const PricingPage = () => {
  setMeta({
    title: "All Design Packages & Pricing | True Designs",
    description: "View all True Designs packages and transparent pricing for logo design, digital ads & banner design, custom T‑shirt & merch design, graphic design, web design, and e-commerce—serving USA, Canada & worldwide clients.",
    keywords: "True Designs pricing, affordable custom design packages USA Canada worldwide, logo design pricing, digital ads banner design pricing, custom t-shirt merch design pricing, web design pricing, e-commerce pricing", canonical: "https://td-designs.com/pricing"
  });

  const sections = [
    {
      id: "logo-design",
      title: "Logo Design",
      subtitle: "Distinctive identities with production-ready exports.",
      cards: PRICING_DATA.logo
    }, {
      id: "digital-ads-banner-design",
      title: "Digital Ads &amp; Banner Design",
      subtitle: "High-converting ad creatives sized for every placement.",
      cards: PRICING_DATA.digitalAds
    }, {
      id: "business-card-design",
      title: "Business Card Design",
      subtitle: "Premium, print-ready layouts for modern brands.",
      cards: PRICING_DATA.businessCards
    },
    {
      id: "stationery-design",
      title: "Stationery Design",
      subtitle: "Letterhead, envelopes, and cohesive brand collateral.",
      cards: PRICING_DATA.stationery
    },
    {
      id: "custom-tshirt-merch-design",
      title: "Custom T‑Shirt &amp; Merch Design",
      subtitle: "Print-ready apparel graphics and merch visuals.",
      cards: PRICING_DATA.tshirt
    }, {
      id: "graphic-design",
      title: "Graphic Design",
      subtitle: "Marketing visuals for social, print, and campaigns.",
      cards: PRICING_DATA.graphic
    },
    {
      id: "web-design",
      title: "Web Design",
      subtitle: "Responsive, conversion-focused page designs.",
      cards: PRICING_DATA.web
    },
    {
      id: "e-commerce-website",
      title: "E-Commerce Website",
      subtitle: "Product-to-checkout UX that builds trust and sells.",
      cards: PRICING_DATA.ecommerce
    }
  ];

  return `
        <section class="relative overflow-hidden bg-white">
          <div class="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white"></div>
          <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10">
            <div class="max-w-3xl">
              <div class="inline-flex items-center gap-2 rounded-full bg-white subtle-border px-3 py-1.5 text-xs font-extrabold text-slate-700">
                <span class="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"></span>
                Transparent pricing • PayPal checkout • Unlimited revisions
              </div>
              <h1 class="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.03] text-slate-900">View All Packages & Transparent Pricing</h1>
              <p class="mt-5 text-lg sm:text-xl leading-8 text-slate-600">
                Affordable custom designs for USA, Canada & worldwide clients. Choose a package below or request a custom quote.
              </p>
              <div class="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="#/contact" class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-orange-500 px-6 py-4 text-sm sm:text-base font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
                  Get a Free Quote <i class="bi bi-arrow-right-short text-xl ml-1"></i>
                </a>
                <a href="#/portfolio" class="inline-flex items-center justify-center rounded-2xl bg-white subtle-border px-6 py-4 text-sm sm:text-base font-extrabold text-slate-900 hover:bg-slate-50 transition">
                  View Portfolio <i class="bi bi-arrow-up-right text-sm ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Sticky in-page jump bar -->
        <div class="sticky top-[92px] lg:top-[102px] z-40 bg-white/85 backdrop-blur border-y border-slate-200/60" id="pricingJump">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <div class="flex items-center gap-2 overflow-x-auto">
              ${sections.map(s => `
                <a href="#/pricing#${s.id}" class="shrink-0 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-4 py-2 text-xs font-extrabold text-slate-800 hover:bg-slate-50 transition">
                  <span class="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"></span>
                  ${s.title}
                </a>
              `).join("")}
            </div>
          </div>
        </div>

        ${sections.map((s, idx) => `
          <section id="${s.id}" class="scroll-mt-28">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
              <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div class="max-w-2xl">
                  <div class="text-xs font-extrabold text-teal-700">Pricing Section</div>
                  <h2 class="font-display mt-2 text-3xl sm:text-4xl text-slate-900">${s.title}</h2>
                  <p class="mt-3 text-slate-600 leading-7">${s.subtitle}</p>
                  <div class="mt-5 flex flex-wrap gap-2">
                    <a href="#/${s.id}" class="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                      View Service Page <i class="bi bi-arrow-up-right text-sm"></i>
                    </a>
                    <a href="#/contact" class="inline-flex items-center gap-2 text-sm font-extrabold text-teal-700 hover:text-teal-800 transition">
                      Get a free quote <i class="bi bi-arrow-right-short text-lg"></i>
                    </a>
                  </div>
                </div>
                <div class="rounded-2xl bg-slate-50 subtle-border p-5 lg:p-6 max-w-md">
                  <div class="text-sm font-extrabold text-slate-900">Included with every package</div>
                  <ul class="mt-3 space-y-2 text-sm text-slate-700">
                    <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Unlimited revisions</li>
                    <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Fast delivery via email</li>
                    <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Clear, organized files</li>
                  </ul>
                </div>
              </div>

              <div class="mt-8 grid gap-5 lg:grid-cols-3">
                ${s.cards.map(c => pricingCard(c)).join("")}
              </div>

              ${idx < sections.length - 1 ? `
                <div class="mt-12 border-b border-slate-200/70"></div>
              ` : ``}
            </div>
          </section>
        `).join("")}

        ${ctaBand({
    title: "Not sure which package fits?",
    subtitle: "Request a free quote and tell us your goals. We’ll recommend the best option and keep everything simple by email.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/portfolio",
    secondaryText: "View Portfolio",
    bg: "from-teal-50 to-blue-50"
  })}

        ${footerHTML()}
      `;
};

const PortfolioPage = () => {
  setMeta({
    title: "Design Portfolio | True Designs - Worldwide Clients", description: "Explore the True Designs portfolio: logos, digital ads & banner design, custom T‑shirt & merch design, graphic design, web design, and e-commerce UX mockups for clients in the USA, Canada & worldwide.",
    keywords: "design portfolio, logo portfolio, digital ads banner design portfolio, custom t-shirt merch design portfolio, graphic design portfolio, web design portfolio, e-commerce design portfolio, USA Canada worldwide", canonical: "https://td-designs.com/portfolio"
  });

  const buildGrid = (prefix, count, label) => `
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${Array.from({ length: count }).map((_, i) => `
            <button type="button"
              class="group rounded-2xl overflow-hidden bg-white subtle-border hover:-translate-y-1 transition transform text-left"
              data-lightbox data-title="${label} #${i + 1}" data-src=""
              aria-label="Open preview: ${label} ${i + 1}">
              <div class="relative aspect-[4/3] bg-slate-100">
                <img data-gen-id="${prefix}-${i + 1}" alt="${label} mockup ${i + 1}" class="absolute inset-0 w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/0 to-slate-950/0 opacity-0 group-hover:opacity-100 transition"></div>
                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 opacity-0 group-hover:opacity-100 transition">
                  <div class="text-white">
                    <div class="text-sm font-extrabold">${label}</div>
                    <div class="text-xs text-white/80">Click to zoom</div>
                  </div>
                  <div class="h-10 w-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white">
                    <i class="bi bi-zoom-in"></i>
                  </div>
                </div>
              </div>
              <div class="p-4">
                <div class="text-sm font-extrabold text-slate-900">${label} ${i + 1}</div>
                <div class="mt-1 text-sm text-slate-600 leading-6">Diverse style exploration with premium mockup presentation.</div>
              </div>
            </button>
          `).join("")}
        </div>
      `;

  return `
        <section class="relative overflow-hidden">
          <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('assets/images/wide_hero_background_collage_02bef7b3c7b393f1b036e3efe01b6679.png'); background-size: cover; background-position: center;"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-white/85 via-white/90 to-white"></div>

          <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
            <div class="max-w-4xl">
              <div class="inline-flex items-center gap-2 rounded-full bg-white/80 subtle-border px-3 py-1.5 text-xs font-extrabold text-slate-700">
                <span class="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"></span>
                Portfolio • USA • Canada • Worldwide
              </div>
              <h1 class="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.03] text-slate-900">
                Our Portfolio – Stunning Designs for Clients in USA, Canada & Worldwide
              </h1>
              <p class="mt-5 text-lg sm:text-xl leading-8 text-slate-600">
                Browse categorized work samples across our services. Use filters to jump between logo, print, graphics, and website UI.
              </p>
              <div class="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="#/pricing" class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm sm:text-base font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
                  View All Pricing <i class="bi bi-arrow-right-short text-xl ml-1"></i>
                </a>
                <a href="#/contact" class="inline-flex items-center justify-center rounded-2xl bg-white/90 subtle-border px-6 py-4 text-sm sm:text-base font-extrabold text-slate-900 hover:bg-white transition">
                  Get a Free Quote <i class="bi bi-arrow-up-right text-sm ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div class="flex flex-wrap gap-2">${[
      ["logos", "Logo Design"],
      ["ads", "Digital Ads &amp; Banners"],
      ["merch", "T‑Shirt &amp; Merch"],
      ["graphics", "Graphic Design"],
      ["web", "Web Design"],
      ["ecom", "E-Commerce UI"]
    ].map(([key, label]) => `<button type="button" data-portfolio-tab="${key}"
                class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold border transition bg-white text-slate-800 border-slate-200/70 hover:bg-slate-50">
                <span class="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"></span>
                ${label}
              </button>
            `).join("")}
          </div>

          <div class="mt-8 space-y-12">
            <div data-portfolio-pane="logos">
              <div class="flex items-end justify-between gap-6">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Logo Design</h2>
                  <p class="mt-3 text-slate-600 leading-7">
                    Modern minimalist tech logos, vintage emblems, elegant wordmarks, bold fitness icons, abstract finance marks, playful kids brands, luxury real estate, eco-friendly marks, and more.
                  </p>
                </div>
                <a href="#/logo-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                  View Logo Service <i class="bi bi-arrow-up-right text-sm"></i>
                </a>
              </div>
              <div class="mt-8">
                ${buildGrid("portfolio-logo", 15, "Logo Mockup")}
              </div>
              <div class="mt-10">
                ${ctaBand({
      title: "Want a logo like these?",
      subtitle: "Pick a package and check out securely, or request a free quote for a tailored recommendation.",
      primaryHref: "#/pricing#logo-design",
      primaryText: "View Logo Pricing",
      secondaryHref: "#/contact",
      secondaryText: "Get a Free Quote",
      bg: "from-white to-slate-50"
    })}
              </div>
            </div><div data-portfolio-pane="ads" class="hidden">
              <div class="flex items-end justify-between gap-6">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Digital Ads &amp; Banner Design</h2>
                  <p class="mt-3 text-slate-600 leading-7">
                    Banner sets for display, social, and web placements—built for readability, strong CTAs, and consistent campaign styling.
                  </p>
                </div>
                <a href="#/digital-ads-banner-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                  View Ads Service <i class="bi bi-arrow-up-right text-sm"></i>
                </a>
              </div>
              <div class="mt-8">
                ${buildGrid("portfolio-ads", 12, "Digital Ad / Banner")}
              </div>
              <div class="mt-10">
                ${ctaBand({
      title: "Need ad creatives sized for every placement?",
      subtitle: "Choose a package and we’ll deliver a consistent banner set with strong hierarchy and clean typography.",
      primaryHref: "#/pricing#digital-ads-banner-design",
      primaryText: "View Ads Pricing",
      secondaryHref: "#/contact",
      secondaryText: "Get a Free Quote",
      bg: "from-teal-50 to-blue-50"
    })}
              </div>
            </div>

            <div data-portfolio-pane="merch" class="hidden">
              <div class="flex items-end justify-between gap-6">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Custom T‑Shirt &amp; Merch Design</h2>
                  <p class="mt-3 text-slate-600 leading-7">
                    Apparel graphics, merch prints, and drop-ready variations—designed for print clarity and brand consistency.
                  </p>
                </div>
                <a href="#/custom-tshirt-merch-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                  View Merch Service <i class="bi bi-arrow-up-right text-sm"></i>
                </a>
              </div>
              <div class="mt-8">
                ${buildGrid("portfolio-merch", 12, "T‑Shirt / Merch Design")}
              </div>
              <div class="mt-10">
                ${ctaBand({
      title: "Want merch designs that look premium and print clean?",
      subtitle: "Pick a package for print-ready files or request a free quote for a full collection/drop.",
      primaryHref: "#/pricing#custom-tshirt-merch-design",
      primaryText: "View Merch Pricing",
      secondaryHref: "#/contact",
      secondaryText: "Get a Free Quote",
      bg: "from-white to-slate-50"
    })}
              </div>
            </div><div data-portfolio-pane="graphics" class="hidden">
              <div class="flex items-end justify-between gap-6">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Graphic Design</h2>
                  <p class="mt-3 text-slate-600 leading-7">
                    Flyers, posters, social banners, carousels, thumbnails, menus, and infographics—designed for clarity and impact.
                  </p>
                </div>
                <a href="#/graphic-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                  View Graphic Service <i class="bi bi-arrow-up-right text-sm"></i>
                </a>
              </div>
              <div class="mt-8">
                ${buildGrid("portfolio-graphic", 12, "Graphic Design")}
              </div>
              <div class="mt-10">
                ${ctaBand({
      title: "Need a campaign set fast?",
      subtitle: "Tell us the goal, platform, and deadline. We’ll deliver designs that are readable and on-brand.",
      primaryHref: "#/pricing#graphic-design",
      primaryText: "View Graphic Pricing",
      secondaryHref: "#/contact",
      secondaryText: "Get a Free Quote",
      bg: "from-teal-50 to-blue-50"
    })}
              </div>
            </div>

            <div data-portfolio-pane="web" class="hidden">
              <div class="flex items-end justify-between gap-6">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Web Design</h2>
                  <p class="mt-3 text-slate-600 leading-7">
                    Responsive desktop/mobile website mockups for agencies, clinics, restaurants, SaaS, and portfolios—designed to convert.
                  </p>
                </div>
                <a href="#/web-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                  View Web Service <i class="bi bi-arrow-up-right text-sm"></i>
                </a>
              </div>
              <div class="mt-8">
                ${buildGrid("portfolio-web", 12, "Website Mockup")}
              </div>
              <div class="mt-10">
                ${ctaBand({
      title: "Want a website that builds trust instantly?",
      subtitle: "Choose a web design package and we’ll deliver clean, conversion-first layouts for desktop and mobile.",
      primaryHref: "#/pricing#web-design",
      primaryText: "View Web Pricing",
      secondaryHref: "#/contact",
      secondaryText: "Get a Free Quote",
      bg: "from-white to-slate-50"
    })}
              </div>
            </div>

            <div data-portfolio-pane="ecom" class="hidden">
              <div class="flex items-end justify-between gap-6">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-slate-900">E-Commerce Website</h2>
                  <p class="mt-3 text-slate-600 leading-7">
                    E-commerce flows across fashion, food, electronics, beauty, and home goods—including PDP, collection, cart, and checkout screens.
                  </p>
                </div>
                <a href="#/e-commerce-website" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                  View E-Commerce Service <i class="bi bi-arrow-up-right text-sm"></i>
                </a>
              </div>
              <div class="mt-8">
                ${buildGrid("portfolio-ecom", 12, "E-Commerce UI")}
              </div>
              <div class="mt-10">
                ${ctaBand({
      title: "Ready to improve product-to-checkout UX?",
      subtitle: "We’ll design a clean storefront experience with strong hierarchy and trust signals that support conversions.",
      primaryHref: "#/pricing#e-commerce-website",
      primaryText: "View E-Commerce Pricing",
      secondaryHref: "#/contact",
      secondaryText: "Get a Free Quote",
      bg: "from-teal-50 to-blue-50"
    })}
              </div>
            </div>
          </div>
        </section>

        ${footerHTML()}
      `;
};

const AboutPage = () => {
  setMeta({
    title: "About True Designs - Your Global Design Partner",
    description: "Learn about True Designs: our mission, expertise, and process for delivering affordable, high-quality custom design services to clients in the USA, Canada, and worldwide.",
    keywords: "about True Designs, global design partner, affordable design agency USA Canada worldwide, professional design services",
    canonical: "https://td-designs.com/about-us"
  });

  const narrative = `
        True Designs is a conversion-focused design agency built for businesses that want premium-looking creative without premium complexity.
        We work with founders, marketing teams, and service providers across the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>—helping them show up with clarity, credibility, and consistent branding.
        <br/><br/>
        Our mission is simple: <span class="font-semibold text-slate-900">make professional design accessible</span>. Many businesses either overspend on branding they can’t maintain, or underinvest and lose trust before a customer ever contacts them. We bridge that gap with streamlined packages, fast turnaround, and a reliable revision process—so you can launch quickly and look established.
        <br/><br/>
        We design with a practical mindset. A logo should scale from a tiny favicon to a storefront sign. A business card should print cleanly and communicate the essentials at a glance. Stationery should support daily operations and reinforce your brand in every document. Websites and e-commerce experiences should guide visitors with strong hierarchy, confident spacing, and clear calls to action.
        <br/><br/>
        You’ll notice a consistent theme across our work: <span class="font-semibold text-slate-900">clean structure</span>, <span class="font-semibold text-slate-900">modern typography</span>, and <span class="font-semibold text-slate-900">conversion-first layouts</span>. We keep communication email-based to stay organized, document decisions, and deliver fast—especially for remote and international clients.
        <br/><br/>
        Whether you need a single design deliverable or a complete brand system, our goal is to make the process calm and effective. If you’re ready to upgrade how your business looks and converts, request a free quote and we’ll recommend the most efficient path.
      `;

  return `
        ${heroBand({
    kicker: "About True Designs",
    title: "A global design partner built for speed and trust",
    subtitle: "We deliver affordable, high-quality design that helps businesses look credible and convert—serving the USA, Canada, and clients worldwide.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing",
    secondaryText: "View All Pricing",
    bgGenId: "about-hero-agency"
  })}

        <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div class="max-w-4xl">
            <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Our mission & expertise</h2>
            <p class="mt-5 text-slate-600 leading-8 text-[15px] sm:text-base">
              ${narrative}
            </p>
          </div>

          <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            ${[
      { icon: "bi-patch-check", title: "High-trust design", desc: "Crisp hierarchy and premium spacing that looks credible." },
      { icon: "bi-arrow-repeat", title: "Unlimited revisions", desc: "We refine until it’s right—no revision anxiety." },
      { icon: "bi-clock-history", title: "Fast delivery", desc: "Timelines that respect your launch schedule." },
      { icon: "bi-globe-americas", title: "Worldwide support", desc: "Clear, email-based workflow across time zones." },
    ].map(x => `
              <div class="rounded-2xl bg-white subtle-border p-6 hover:-translate-y-1 transition transform">
                <div class="h-11 w-11 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900">
                  <i class="bi ${x.icon}"></i>
                </div>
                <div class="mt-4 text-sm font-extrabold text-slate-900">${x.title}</div>
                <div class="mt-2 text-sm text-slate-600 leading-7">${x.desc}</div>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- Team strip -->
        <section class="bg-slate-50/60 border-y border-slate-200/60">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div class="flex items-end justify-between gap-6">
              <div class="max-w-2xl">
                <h2 class="font-display text-3xl sm:text-4xl text-slate-900">A small team, big output</h2>
                <p class="mt-3 text-slate-600 leading-7">
                  Diverse perspectives and consistent quality. We focus on clean execution and reliable delivery.
                </p>
              </div>
              <a href="#/contact" class="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-orange-500 px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-95 transition">
                Get a Free Quote <i class="bi bi-arrow-right-short text-lg"></i>
              </a>
            </div>

            <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              ${[
      { name: "Creative Director", role: "Brand systems & logo identity", gen: "team-1" },
      { name: "Graphic Designer", role: "Campaign visuals & print-ready files", gen: "team-2" },
      { name: "UI/UX Designer", role: "Web + e-commerce conversion layouts", gen: "team-3" },
      { name: "Production Designer", role: "Exporting, prepress, and delivery", gen: "team-4" },
      { name: "Client Support", role: "Clear communication by email", gen: "team-5" },
    ].map(p => `
                <div class="rounded-2xl bg-white subtle-border overflow-hidden hover:-translate-y-1 transition transform">
                  <div class="aspect-[4/5] bg-slate-100">
                    <img data-gen-id="${p.gen}" alt="Agency team portrait: ${p.name}" class="w-full h-full object-cover" />
                  </div>
                  <div class="p-4">
                    <div class="text-sm font-extrabold text-slate-900">${p.name}</div>
                    <div class="mt-1 text-sm text-slate-600 leading-6">${p.role}</div>
                  </div>
                </div>
              `).join("")}
            </div>

            <div class="mt-10 rounded-3xl bg-white subtle-border p-7 sm:p-10">
              <div class="grid gap-7 lg:grid-cols-12 items-start">
                <div class="lg:col-span-5">
                  <div class="text-xs font-extrabold text-teal-700">Process</div>
                  <h3 class="font-display mt-2 text-2xl sm:text-3xl text-slate-900">A timeline you can count on</h3>
                  <p class="mt-3 text-slate-600 leading-7">
                    Our workflow is designed to keep your project moving: clear brief → fast first drafts → organized revisions → production-ready delivery.
                  </p>
                </div>
                <div class="lg:col-span-7">
                  <ol class="grid gap-4 sm:grid-cols-3">
                    ${[
      { t: "Brief", d: "We confirm goals, style, and deliverables." },
      { t: "Design", d: "You receive draft options fast; we refine." },
      { t: "Delivery", d: "Final files + exports delivered by email." },
    ].map((s, i) => `
                      <li class="rounded-2xl bg-slate-50 subtle-border p-5">
                        <div class="text-xs font-extrabold text-slate-500">0${i + 1}</div>
                        <div class="mt-2 text-sm font-extrabold text-slate-900">${s.t}</div>
                        <div class="mt-1 text-sm text-slate-600 leading-7">${s.d}</div>
                      </li>
                    `).join("")}
                  </ol>
                </div>
              </div>
            </div>

          </div>
        </section>

        ${ctaBand({
      title: "Let’s make your brand look established—fast.",
      subtitle: "View packages and pricing, or request a free quote. We’ll respond by email with a clear plan and timeline.",
      primaryHref: "#/pricing",
      primaryText: "View All Pricing",
      secondaryHref: "#/contact",
      secondaryText: "Get a Free Quote",
      bg: "from-teal-50 to-blue-50"
    })}

        ${footerHTML()}
      `;
};

const ContactPage = () => {
  setMeta({
    title: "Contact True Designs | Get a Free Quote",
    description: "Contact True Designs to get a free quote for logo design, business cards, stationery, graphic design, web design, or e-commerce. Serving USA, Canada & worldwide clients. Email: info@td-designs.com.",
    keywords: "contact True Designs, get a free quote, affordable custom design USA Canada worldwide, logo design quote, web design quote",
    canonical: "https://td-designs.com/contact"
  });

  const serviceOptions = [
    "Logo Design", "Digital Ads & Banner Design",
    "Custom T‑Shirt & Merch Design", "Graphic Design",
    "Web Design",
    "E-Commerce Website"
  ];

  const packageOptions = [
    "Logo Design Starter Package",
    "Logo Design Professional Package",
    "Logo Design Premium Package", "Digital Ads & Banner Starter Package",
    "Digital Ads & Banner Professional Package",
    "Digital Ads & Banner Premium Package",
    "Custom T‑Shirt & Merch Starter Package",
    "Custom T‑Shirt & Merch Professional Package",
    "Custom T‑Shirt & Merch Premium Package", "Graphic Design Starter Package",
    "Graphic Design Professional Package",
    "Graphic Design Premium Package",
    "Web Design Starter Package",
    "Web Design Professional Package",
    "Web Design Premium Package",
    "E-Commerce Starter Package",
    "E-Commerce Professional Package",
    "E-Commerce Premium Package"
  ];

  return `
        <section class="relative overflow-hidden">
          <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('assets/images/wide_hero_background_clean_mi_8e6469d7aa8082ee55f889a7fb611990.png'); background-size: cover; background-position: center;"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white"></div>

          <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10">
            <div class="grid gap-10 lg:grid-cols-12 items-start">
              <div class="lg:col-span-5">
                <div class="inline-flex items-center gap-2 rounded-full bg-white/80 subtle-border px-3 py-1.5 text-xs font-extrabold text-slate-700">
                  <span class="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"></span>
                  Contact • Fast response by email
                </div>
                <h1 class="font-display mt-4 text-4xl sm:text-5xl leading-[1.05] text-slate-900">Get Your Free Quote Today</h1>
                <p class="mt-5 text-lg leading-8 text-slate-600">
                  Tell us what you need, your timeline, and any style references. We’ll reply with a clear recommendation and next steps.
                </p>

                <div class="mt-7 rounded-2xl bg-white/85 subtle-border p-5">
                  <div class="flex items-start gap-3">
                    <div class="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900">
                      <i class="bi bi-envelope"></i>
                    </div>
                    <div>
                      <div class="text-sm font-extrabold text-slate-900">Email only</div>
                      <div class="mt-1 text-sm text-slate-600 leading-7">Send details to:</div>
                      <a class="mt-2 inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-extrabold text-slate-900 hover:bg-slate-50 transition" href="mailto:info@td-designs.com">
                        info@td-designs.com <i class="bi bi-arrow-up-right text-sm"></i>
                      </a>
                      <div class="mt-3 text-xs text-slate-500">No phone numbers—everything stays clear, documented, and fast.</div>
                    </div>
                  </div>
                </div>

                <div class="mt-6 grid gap-3 sm:grid-cols-2">
                  <div class="rounded-2xl bg-white/85 subtle-border p-5">
                    <div class="text-sm font-extrabold text-slate-900">Turnaround</div>
                    <p class="mt-2 text-sm text-slate-600 leading-7">Most first drafts are delivered within 24–72 hours depending on scope.</p>
                  </div>
                  <div class="rounded-2xl bg-white/85 subtle-border p-5">
                    <div class="text-sm font-extrabold text-slate-900">Guarantee</div>
                    <p class="mt-2 text-sm text-slate-600 leading-7">Unlimited revisions so you can finalize with confidence.</p>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-7">
                <div class="rounded-3xl bg-white subtle-border soft-shadow overflow-hidden">
                  <div class="px-6 sm:px-8 py-6 border-b border-slate-200/70">
                    <div class="text-sm font-extrabold text-slate-900">Request a free quote</div>
                    <div class="mt-1 text-sm text-slate-600">This form sends directly to <span class="font-semibold">info@td-designs.com</span>.</div>
                  </div>

                  <form class="px-6 sm:px-8 py-6 grid gap-4" action="mailto:info@td-designs.com" method="post" enctype="multipart/form-data">
                    <div class="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label class="text-xs font-extrabold text-slate-700">Name</label>
                        <input name="name" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring" placeholder="Your name" />
                      </div>
                      <div>
                        <label class="text-xs font-extrabold text-slate-700">Email</label>
                        <input name="email" type="email" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring" placeholder="you@company.com" />
                      </div>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label class="text-xs font-extrabold text-slate-700">Service</label>
                        <select name="service" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring">
                          <option value="" selected disabled>Select a service</option>
                          ${serviceOptions.map(s => `<option value="${s}">${s}</option>`).join("")}
                        </select>
                      </div>
                      <div>
                        <label class="text-xs font-extrabold text-slate-700">Package</label>
                        <select name="package" class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring">
                          <option value="" selected>Not sure yet</option>
                          ${packageOptions.map(p => `<option value="${p}">${p}</option>`).join("")}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label class="text-xs font-extrabold text-slate-700">Message</label>
                      <textarea name="message" rows="6" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring" placeholder="Tell us what you need, your style preferences, and your deadline."></textarea>
                      <div class="mt-2 text-xs text-slate-500">Tip: Include industry, preferred style (minimal/bold/luxury/vintage), and any competitors.</div>
                    </div>

                    <div>
                      <label class="text-xs font-extrabold text-slate-700">File upload (optional)</label>
                      <input name="file" type="file" class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring" />
                      <div class="mt-2 text-xs text-slate-500">You can attach your logo, references, or existing brand assets.</div>
                    </div>

                    <div class="mt-2 flex flex-col sm:flex-row gap-3">
                      <button type="submit" class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-orange-500 px-6 py-4 text-sm font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
                        Send Request <i class="bi bi-send ms-2"></i>
                      </button>
                      <a href="#/pricing" class="inline-flex items-center justify-center rounded-2xl bg-white subtle-border px-6 py-4 text-sm font-extrabold text-slate-900 hover:bg-slate-50 transition">
                        View All Pricing <i class="bi bi-arrow-up-right text-sm ml-2"></i>
                      </a>
                    </div>

                    <div class="rounded-2xl bg-slate-50 subtle-border p-5 mt-2">
                      <div class="text-sm font-extrabold text-slate-900">Reassurance</div>
                      <ul class="mt-3 space-y-2 text-sm text-slate-700">
                        <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Unlimited revisions on selected direction</li>
                        <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Fast email-based updates (no phone calls)</li>
                        <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Production-ready files and exports</li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        ${footerHTML()}
      `;
};

// --------- Router ----------
const routes = {
  "/home": HomePage,
  "/": HomePage,
  "/logo-design": LogoDesignPage, "/digital-ads-banner-design": BusinessCardPage, "/custom-tshirt-merch-design": StationeryPage, "/graphic-design": GraphicDesignPage, "/web-design": WebDesignPage,
  "/e-commerce-website": EcommercePage,
  "/pricing": PricingPage,
  "/portfolio": PortfolioPage,
  "/about-us": AboutPage,
  "/contact": ContactPage
};

const parseRoute = () => {
  const hash = location.hash || "#/home";
  // Support anchors like #/pricing#logo-design
  const parts = hash.split("#");
  // parts[0] is empty due to starting '#'
  // hash like "#/pricing#logo-design" => ["", "/pricing", "logo-design"]
  const path = parts[1] ? `/${parts[1].replace(/^\/?/, "")}` : "/home";
  // Ensure route path like "/pricing"
  return { path: path === "//home" ? "/home" : path.replace("//", "/"), raw: hash };
};

// Safe render check
const render = () => {
  const app = $("#app");
  if (!app) return;

  const { path } = parseRoute();
  const page = routes[path] || HomePage;
  app.innerHTML = page();

  // Set year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize interactive components on each render
  initCarousel();
  initAccordions();
  initGalleries();
  initPricingJump();
  initPortfolioFilters();

  // For lightbox: map generated images to modal src by cloning actual rendered src if any.
  // Since images are generated externally from data-gen-id, src might be empty; we set a fallback:
  // Use current displayed image's src when opening, if available.
  $$("[data-lightbox]").forEach(btn => {
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");
      const src = img?.getAttribute("src") || img?.src || "";
      btn.setAttribute("data-src", src);
    }, { once: false });
  });

  // Scroll to pricing anchor if present
  scrollToHash();

  // Close dropdown after navigation
  closeDropdown();
  // Close mobile menus
  closeMobileMenu();
  // Scroll to top on new page route (but not when it's an in-page pricing anchor change)
  if (!(location.hash || "").includes("#/pricing#")) window.scrollTo({ top: 0, behavior: "smooth" });
};


// --------- Cookie Consent Banner ----------
const cookieBannerHTML = `
  <!-- Cookie Banner -->
  <div id="cookie-banner" class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[400px] z-50 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200/80 hidden transform transition-all duration-300 ease-in-out translate-y-full opacity-0">
    <div class="flex items-start gap-4">
      <div class="h-10 w-10 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800">
        <i class="bi bi-cookie"></i>
      </div>
      <div>
        <div class="text-sm font-extrabold text-slate-900">Cookie Preferences</div>
        <p class="mt-2 text-xs text-slate-600 leading-5">
          We use cookies to improve your experience, analyze traffic, and protect our forms.
          <a href="cookie-policy" class="underline hover:text-slate-900">Read Policy</a>.
        </p>
      </div>
    </div>
    <div class="mt-5 flex flex-col gap-2">
      <button id="cookie-accept" class="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-extrabold text-white hover:opacity-95 transition">
        Accept All
      </button>
      <div class="grid grid-cols-2 gap-2">
        <button id="cookie-reject" class="w-full rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
          Reject Non-Essential
        </button>
        <button id="cookie-settings" class="w-full rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
          Preferences
        </button>
      </div>
    </div>
  </div>

  <!-- Cookie Modal -->
  <div id="cookie-modal" class="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm hidden flex items-center justify-center px-4">
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
      <div class="p-6 border-b border-slate-100 flex items-center justify-between">
        <h3 class="text-lg font-extrabold text-slate-900">Cookie Preferences</h3>
        <button id="cookie-modal-close" class="text-slate-400 hover:text-slate-600">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
      <div class="p-6 space-y-4">
        <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50 cursor-not-allowed">
          <input type="checkbox" checked disabled class="mt-1 accent-slate-900">
          <div>
            <div class="text-sm font-bold text-slate-900">Necessary (Required)</div>
            <div class="text-xs text-slate-500 mt-1">Essential for the website to function correctly. Cannot be disabled.</div>
          </div>
        </label>
        
        <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition cursor-pointer">
          <input type="checkbox" id="analytics-consent" class="mt-1 accent-slate-900 h-4 w-4">
          <div>
            <div class="text-sm font-bold text-slate-900">Analytics</div>
            <div class="text-xs text-slate-500 mt-1">Helps us understand how visitors interact with our website.</div>
          </div>
        </label>

        <label class="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition cursor-pointer">
          <input type="checkbox" id="marketing-consent" class="mt-1 accent-slate-900 h-4 w-4">
          <div>
            <div class="text-sm font-bold text-slate-900">Marketing</div>
            <div class="text-xs text-slate-500 mt-1">Used to deliver relevant ads and track campaign performance.</div>
          </div>
        </label>
      </div>
      <div class="p-6 border-t border-slate-100 bg-slate-50/30">
        <button id="save-preferences" class="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-extrabold text-white hover:opacity-95 transition">
          Save Preferences
        </button>
      </div>
    </div>
  </div>
`;

const initCookieBanner = () => {
  const consent = localStorage.getItem("cookie_consent");

  // Inject HTML
  if (!document.getElementById("cookie-banner")) {
    const div = document.createElement("div");
    div.innerHTML = cookieBannerHTML;
    document.body.appendChild(div);
  }

  const banner = $("#cookie-banner");
  const modal = $("#cookie-modal");

  // Elements
  const btnAccept = $("#cookie-accept");
  const btnReject = $("#cookie-reject");
  const btnSettings = $("#cookie-settings");
  const btnCloseModal = $("#cookie-modal-close");
  const btnSave = $("#save-preferences");

  const analyticsCheck = $("#analytics-consent");
  const marketingCheck = $("#marketing-consent");

  // Show banner if no consent
  if (!consent) {
    if (banner) {
      banner.classList.remove("hidden");
      // Small delay for animation
      setTimeout(() => {
        banner.classList.remove("translate-y-full", "opacity-0");
      }, 100);
    }
  }

  const hideBanner = () => {
    banner?.classList.add("translate-y-full", "opacity-0");
    setTimeout(() => banner?.classList.add("hidden"), 300);
  };

  const closeModal = () => modal?.classList.add("hidden");
  const openModal = () => modal?.classList.remove("hidden");

  // Handlers
  btnAccept?.addEventListener("click", () => {
    localStorage.setItem("cookie_consent", JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    hideBanner();
  });

  btnReject?.addEventListener("click", () => {
    localStorage.setItem("cookie_consent", JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    hideBanner();
  });

  btnSettings?.addEventListener("click", openModal);
  btnCloseModal?.addEventListener("click", closeModal);

  btnSave?.addEventListener("click", () => {
    const prefs = {
      necessary: true,
      analytics: analyticsCheck?.checked || false,
      marketing: marketingCheck?.checked || false
    };
    localStorage.setItem("cookie_consent", JSON.stringify(prefs));
    closeModal();
    hideBanner();
  });
};

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("app")) {
    if (!location.hash) location.hash = "#/home";
    render();
  }
  initCookieBanner();
});