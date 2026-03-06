
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

      customLink: "https://www.paypal.com/ncp/payment/PXRAX5F83RSZ6"
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
      customLink: "https://www.paypal.com/ncp/payment/ZWCJLMETV9Z4W"
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
  ],
  photoToArt: [
    {
      name: "Artistic Photo Conversion",
      price: 99,
      original: 199,
      blurb: "Simple transformations & stylized art.",
      features: ["High-resolution digital art", "Print-ready file formats (PNG/JPG)", "Perfect for wall art, gifts, and web use", "Unlimited revisions"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/ZVYVMHZFNDA6L"
    },
    {
      name: "Watercolor Style Artwork",
      price: 45,
      original: 89,
      blurb: "Elegant, artistic decor pieces.",
      features: ["Soft, painterly watercolor effect", "Ideal for portraits, travel photos, scenery", "Print-ready & digital delivery", "Unlimited revisions"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/UW5ANMSWM559W"
    },
    {
      name: "Oil Painting Style Artwork",
      price: 59,
      original: 119,
      blurb: "Timeless, gallery-quality art.",
      features: ["Detailed oil-style texture & tones", "Great for portraits, family photos, keepsakes", "Digital file + optional canvas prep guidance", "Unlimited revisions"],
      popular: true,
      customLink: "https://www.paypal.com/ncp/payment/QJBWCADMAMQ9E"
    },
    {
      name: "Canvas-Ready & Premium Artwork",
      price: 169,
      original: 339,
      blurb: "Home décor & professional display.",
      features: ["Premium finish + optional sizing advice", "Works with multi-subject or complex edits", "Prioritized support & revisions", "Full fine-art creation"],
      popular: false,
      customLink: "https://www.paypal.com/ncp/payment/TX9QR95YLQFXG"
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
                  <a class="block hover:text-slate-900 transition" href="privacy-policy.html">Privacy Policy</a>
                  <a class="block hover:text-slate-900 transition mt-2" href="terms-conditions.html">Terms & Conditions</a>
                  <a class="block hover:text-slate-900 transition mt-2" href="cookie-policy.html">Cookie Policy</a>
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




const HomePage = () => {
  setMeta({
    title: "Professional Custom Design Services | Logo, Ads, Web & More | True Designs",
    description: "Affordable custom design services for logos, ads, websites, e-commerce & more. High-quality visual design with fast turnaround for businesses worldwide. Get a free quote today.",
    keywords: "affordable custom design services USA Canada worldwide, professional logo design services, digital ads banner design, custom t-shirt merch design, graphic design, web design, e-commerce website",
    canonical: "https://td-designs.com/"
  });

  const logoPackages = PRICING_DATA.logo;

  const services = [
    {
      title: "Logo Design",
      desc: "Distinctive identity that looks credible everywhere.",
      href: "#/pricing#logo-design",
      img: "home-service-logo",
      icon: "bi-bezier2",
      accent: "border-blue-500"
    }, {
      title: "Book Cover Design",
      desc: "Professional book cover design for your book.",
      href: "#/pricing#book-cover-design",
      img: "home-service-card",
      icon: "bi-badge-ad",
      accent: "border-orange-500"
    }, {
      title: "Digital Ads &amp; Banner Design",
      desc: "High-converting ad creatives sized for every placement.",
      href: "#/pricing#digital-ads-banner-design",
      img: "home-service-card-2",
      icon: "bi-badge-ad",
      accent: "border-emerald-500"
    },
    {
      title: "Stationery Design",
      desc: "Cohesive brand collateral (letterhead, envelope, card).",
      href: "#/pricing#stationery-design",
      img: "home-service-stationery",
      icon: "bi-envelope-paper",
      accent: "border-blue-500"
    },
    {
      title: "Custom T‑Shirt &amp; Merch Design",
      desc: "Bold, print-ready apparel graphics and merch visuals.",
      href: "#/pricing#custom-tshirt-merch-design",
      img: "home-service-merch",
      icon: "bi-tshirt",
      accent: "border-orange-500"
    }, {
      title: "Graphic Design",
      desc: "Marketing visuals built for attention and clarity.",
      href: "#/pricing#graphic-design",
      img: "home-service-graphic",
      icon: "bi-layers",
      accent: "border-emerald-500"
    },
    {
      title: "Web Design",
      desc: "Conversion-first websites with polished UI.",
      href: "#/pricing#web-design",
      img: "home-service-web",
      icon: "bi-window",
      accent: "border-blue-500"
    },
    {
      title: "E-Commerce Website",
      desc: "Storefronts, product pages, and checkout flows.",
      href: "#/pricing#e-commerce-website",
      img: "home-service-ecom",
      icon: "bi-bag-check",
      accent: "border-emerald-500"
    },
    {
      title: "Photo to Art",
      desc: "Turn your favorite pictures into custom digital paintings.",
      href: "#/photo-to-art",
      img: "home-service-photo-art",
      icon: "bi-palette2",
      accent: "border-pink-500"
    }
  ];

  const testimonials = [
    { name: "Alyssa M.", where: "Toronto, Canada", quote: "The logo concepts looked like they came from a top-tier studio. Revisions were fast and professional—our brand finally feels real." },
    { name: "Jordan K.", where: "Austin, USA", quote: "The banner ads came out crisp and conversion-focused. Great hierarchy, clean typography, and sizes that worked across all placements." },
    { name: "Priya S.", where: "Vancouver, Canada", quote: "We needed custom merch designs for a new clinic launch—everything looked cohesive and premium. Communication was clear the entire time." },
    { name: "Marcus T.", where: "New York, USA", quote: "Our landing page redesign increased inquiries within a week. The layout is clear and conversion-focused." },
    { name: "Elena R.", where: "Calgary, Canada", quote: "The social media graphics are consistently on-brand and sharp. Huge time saver for our marketing team." },
    { name: "Hannah D.", where: "Los Angeles, USA", quote: "E-commerce UI mockups were stunning and practical. Product pages feel premium and the checkout flow is clean." },
    { name: "Omar A.", where: "Worldwide", quote: "Quality exceeded expectations for the price. Very responsive and genuinely focused on getting it right." },
    { name: "Sam P.", where: "USA", quote: "Everything delivered exactly as promised—files, exports, and guidance. Easy process from start to finish." }
  ];

  return `
    <style>
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-reveal { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      .delay-1 { animation-delay: 0.2s; }
      .delay-2 { animation-delay: 0.4s; }
      .delay-3 { animation-delay: 0.6s; }
      .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); }
    </style>

    <section class="relative overflow-hidden">
      <div data-bg-gen-id="home-hero-multi-mockup" class="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"></div>
      <div class="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 lg:pb-16">
        <div class="grid gap-10 lg:grid-cols-12 items-center">

          <div class="lg:col-span-7 animate-reveal">
            <div class="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm">
              <span class="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span class="text-blue-600">High-Trust</span> design for growing businesses
            </div>

            <h1 class="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.03] text-slate-900 tracking-tight">
              <span class="text-orange-500">Professional</span> Custom Design Services for Businesses <span class="text-emerald-600">Worldwide</span>
            </h1>

            <p class="mt-5 text-lg sm:text-xl leading-8 text-slate-600 max-w-2xl animate-reveal delay-1">
              Affordable Prices • Fast Turnaround • 100% Satisfaction Guaranteed
            </p>

            <div class="mt-7 flex flex-col sm:flex-row gap-3 animate-reveal delay-1">
              <a href="#/contact" class="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-sm sm:text-base font-extrabold text-white hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-emerald-500/20">
                Get a Free Quote <i class="bi bi-arrow-right-short text-xl ml-1"></i>
              </a>

              <a href="#/pricing" class="inline-flex items-center justify-center rounded-2xl bg-white border-2 border-orange-500 px-6 py-4 text-sm sm:text-base font-extrabold text-orange-600 hover:bg-orange-50 transition-all duration-300">
                View All Pricing <i class="bi bi-arrow-up-right text-sm ml-2"></i>
              </a>
            </div>

            <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl animate-reveal delay-2">
              <div class="rounded-2xl bg-white border border-slate-100 p-3 shadow-sm hover:border-blue-500 transition-colors">
                <div class="text-xs text-slate-500 font-bold">Avg. delivery</div>
                <div class="mt-1 text-sm font-extrabold text-blue-600">24–72h</div>
              </div>

              <div class="rounded-2xl bg-white border border-slate-100 p-3 shadow-sm hover:border-emerald-500 transition-colors">
                <div class="text-xs text-slate-500 font-bold">Revisions</div>
                <div class="mt-1 text-sm font-extrabold text-emerald-600">Unlimited</div>
              </div>

              <div class="rounded-2xl bg-white border border-slate-100 p-3 shadow-sm hover:border-orange-500 transition-colors">
                <div class="text-xs text-slate-500 font-bold">Clients served</div>
                <div class="mt-1 text-sm font-extrabold text-orange-500">Worldwide</div>
              </div>

              <div class="rounded-2xl bg-white border border-slate-100 p-3 shadow-sm hover:border-blue-500 transition-colors">
                <div class="text-xs text-slate-500 font-bold">Guarantee</div>
                <div class="mt-1 text-sm font-extrabold text-blue-600">100%</div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 animate-reveal delay-2">
            <div class="rounded-3xl bg-white border border-slate-100 shadow-2xl overflow-hidden">
              <div class="p-5 sm:p-6">
                <div class="flex items-center justify-between border-b border-slate-50 pb-4">
                  <div class="text-sm font-extrabold text-slate-900">What you <span class="text-blue-600">get</span></div>
                  <div class="text-xs font-bold text-orange-500 uppercase tracking-widest">USA • Canada • Global</div>
                </div>

                <div class="mt-4 grid gap-3">
                  <div class="rounded-2xl bg-slate-50/50 border border-transparent hover:border-blue-500 hover:bg-white transition-all p-4 group">
                    <div class="flex gap-3">
                      <div class="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                        <i class="bi bi-magic"></i>
                      </div>
                      <div>
                        <div class="text-sm font-extrabold text-slate-900">Bespoke <span class="text-blue-600">creative</span></div>
                        <div class="mt-0.5 text-sm text-slate-500 leading-6">Designed to match your market and brand tone.</div>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-2xl bg-slate-50/50 border border-transparent hover:border-emerald-500 hover:bg-white transition-all p-4 group">
                    <div class="flex gap-3">
                      <div class="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
                        <i class="bi bi-check2-square"></i>
                      </div>
                      <div>
                        <div class="text-sm font-extrabold text-slate-900">Production <span class="text-emerald-600">ready</span></div>
                        <div class="mt-0.5 text-sm text-slate-500 leading-6">Files prepared for web + print from day one.</div>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-2xl bg-slate-50/50 border border-transparent hover:border-orange-500 hover:bg-white transition-all p-4 group">
                    <div class="flex gap-3">
                      <div class="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-orange-500 shadow-sm group-hover:scale-110 transition-transform">
                        <i class="bi bi-graph-up-arrow"></i>
                      </div>
                      <div>
                        <div class="text-sm font-extrabold text-slate-900">Conversion <span class="text-orange-500">focused</span></div>
                        <div class="mt-0.5 text-sm text-slate-500 leading-6">Clear hierarchy that builds trust quickly.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-5 rounded-2xl bg-blue-50 border border-blue-100 p-4">
                  <div class="flex items-start gap-3">
                    <i class="bi bi-shield-check text-blue-600 mt-0.5 text-lg"></i>
                    <div>
                      <div class="text-sm font-extrabold text-slate-900">Satisfaction <span class="text-blue-600">Guarantee</span></div>
                      <div class="text-sm text-slate-600 leading-6">If you’re not happy, we keep refining until you are—simple and documented.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4 grid grid-cols-3 gap-3 animate-reveal delay-3">
              <div class="rounded-2xl bg-white border border-slate-100 p-4 text-center hover:-translate-y-1 transition-all">
                <div class="text-xs font-bold text-blue-600">Design-first</div>
                <div class="mt-1 text-sm font-extrabold text-slate-900">Modern</div>
              </div>

              <div class="rounded-2xl bg-white border border-slate-100 p-4 text-center hover:-translate-y-1 transition-all">
                <div class="text-xs font-bold text-orange-500">Fast</div>
                <div class="mt-1 text-sm font-extrabold text-slate-900">Milestones</div>
              </div>

              <div class="rounded-2xl bg-white border border-slate-100 p-4 text-center hover:-translate-y-1 transition-all">
                <div class="text-xs font-bold text-emerald-600">Trusted</div>
                <div class="mt-1 text-sm font-extrabold text-slate-900">Deliverables</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        <section class="bg-slate-50 border-y border-slate-200/60 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -ml-48 -mb-48"></div>

          <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16 reveal">
            <div class="max-w-3xl">
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Everything you need to <span class="text-emerald-600">look credible</span></h2>
              <p class="mt-3 text-slate-600 leading-7">
                From first impressions (logo + cards) to full digital presence (web + e-commerce), we deliver clean, production-ready design worldwide.
              </p>
            </div>

            <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 delay-1">
              ${services.map((s) => `
                <div class="group rounded-2xl bg-white border border-slate-200/60 overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
                  <div class="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img data-gen-id="${s.img}" alt="${s.title} design mockup" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 glass-card border border-slate-200 px-3 py-1.5 text-xs font-extrabold text-slate-800">
                      <i class="bi ${s.icon} text-blue-600"></i> ${s.title}
                    </div>
                  </div>
                  <div class="p-6">
                    <div class="text-sm text-slate-600 leading-7">${s.desc}</div>
                    <div class="mt-5 flex items-center justify-between">
                      <a href="${s.href}" class="inline-flex items-center justify-center rounded-xl bg-white border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                        View Pricing <i class="bi bi-arrow-up-right text-sm ml-2"></i>
                      </a>
                      <a href="#/contact" class="inline-flex items-center gap-2 text-sm font-extrabold text-emerald-600 hover:text-emerald-700 transition">
                        Get a Quote <i class="bi bi-arrow-right-short text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16 reveal">
          <div class="grid gap-10 lg:grid-cols-12 items-start">
            <div class="lg:col-span-5">
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">How it <span class="text-orange-600">works</span></h2>
              <p class="mt-3 text-slate-600 leading-7">
                A simple, documented process that keeps timelines clear and results predictable—especially for remote USA/Canada/worldwide clients.
              </p>
              <div class="mt-6 flex gap-3">
                <a href="#/contact" class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 via-blue-600 to-orange-500 px-5 py-3 text-sm font-extrabold text-white hover:scale-105 transition-transform shadow-lg shadow-blue-500/20">
                  Get a Free Quote
                </a>
                <a href="#/portfolio" class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                  View Portfolio
                </a>
              </div>
            </div>

            <div class="lg:col-span-7 delay-1">
              <div class="grid gap-4">
                ${[
      { icon: "bi-chat-square-text", color: "text-blue-600", bg: "bg-blue-50", title: "1) Tell us what you need", desc: "Choose a service + package, share your goals, and send any inspiration or files by email." },
      { icon: "bi-palette2", color: "text-emerald-600", bg: "bg-emerald-50", title: "2) We design + refine", desc: "You get strong first drafts quickly. We revise until it feels right, with clear versioning." },
      { icon: "bi-send-check", color: "text-orange-600", bg: "bg-orange-50", title: "3) Receive final files", desc: "We deliver production-ready exports for web and print, plus any source files included in your package." },
    ].map((s, i) => `
                  <div class="group rounded-2xl bg-white border border-slate-200/70 p-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                    <div class="flex items-start gap-4">
                      <div class="h-12 w-12 rounded-2xl ${s.bg} border border-slate-100 flex items-center justify-center ${s.color} transition-transform group-hover:rotate-12">
                        <i class="bi ${s.icon} text-xl"></i>
                      </div>
                      <div>
                        <div class="text-sm font-extrabold text-slate-900">${s.title}</div>
                        <div class="mt-2 text-sm text-slate-600 leading-7">${s.desc}</div>
                      </div>
                      <div class="ml-auto text-xs font-extrabold text-slate-300">0${i + 1}</div>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white border-y border-slate-200/60 reveal">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div class="flex items-end justify-between gap-6">
              <div class="max-w-2xl">
                <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Clients choose us for <span class="text-blue-600">clarity and speed</span></h2>
                <p class="mt-3 text-slate-600 leading-7">A few words from businesses we’ve helped across the USA, Canada, and worldwide.</p>
              </div>
              <div class="hidden sm:flex items-center gap-2">
                <button id="t-prev" class="h-11 w-11 rounded-xl border border-slate-200 bg-white hover:border-blue-500 hover:text-blue-600 transition inline-flex items-center justify-center">
                  <i class="bi bi-arrow-left"></i>
                </button>
                <button id="t-next" class="h-11 w-11 rounded-xl border border-slate-200 bg-white hover:border-blue-500 hover:text-blue-600 transition inline-flex items-center justify-center">
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>

            <div class="mt-8 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200/60 shadow-lg overflow-hidden">
              <div class="p-7 sm:p-10">
                <div class="flex items-center justify-between gap-4">
                  <div class="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm">
                    <i class="bi bi-star-fill text-orange-500"></i>
                    <i class="bi bi-star-fill text-orange-500"></i>
                    <i class="bi bi-star-fill text-orange-500"></i>
                    <i class="bi bi-star-fill text-orange-500"></i>
                    <i class="bi bi-star-fill text-orange-500"></i>
                    <span class="ml-1">5-star client feedback</span>
                  </div>
                  <div class="text-xs font-bold text-slate-400" id="t-indicator"></div>
                </div>

                <div class="mt-7" id="t-track">
                  ${testimonials.map((t, i) => `
                    <div class="t-slide animate-in fade-in slide-in-from-right-5 duration-700 ${i === 0 ? '' : 'hidden'}">
                      <div class="grid gap-7 lg:grid-cols-12 items-start">
                        <div class="lg:col-span-8">
                          <div class="text-xl sm:text-2xl font-extrabold text-slate-900 leading-relaxed italic">
                            “${t.quote}”
                          </div>
                          <div class="mt-6 flex items-center gap-3">
                            <div class="h-11 w-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold shadow-lg shadow-blue-500/30">
                              ${t.name.split(" ")[0].slice(0, 1)}${t.name.split(" ")[1]?.slice(0, 1) || ""}
                            </div>
                            <div>
                              <div class="text-sm font-extrabold text-slate-900">${t.name}</div>
                              <div class="text-xs font-bold text-slate-500">${t.where}</div>
                            </div>
                          </div>
                        </div>
                        <div class="lg:col-span-4">
                          <div class="rounded-2xl bg-white/60 glass-card border border-slate-200/60 p-5 shadow-sm">
                            <div class="text-sm font-extrabold text-blue-600">Why this matters</div>
                            <p class="mt-2 text-sm text-slate-600 leading-7">
                              We keep communication simple, revisions organized, and deliverables production-ready—so you can launch with confidence.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>

            <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 delay-2">
              ${[
      { icon: "bi-patch-check", color: "text-blue-600", title: "Trusted process", desc: "Clear briefs + versioned revisions." },
      { icon: "bi-award", color: "text-emerald-600", title: "Premium feel", desc: "Editorial hierarchy, modern UI." },
      { icon: "bi-lock", color: "text-orange-600", title: "Secure checkout", desc: "PayPal Order Now buttons." },
      { icon: "bi-rocket-takeoff", color: "text-blue-600", title: "Launch-ready", desc: "Exports for web + print." },
    ].map(x => `
                <div class="group rounded-2xl bg-white border border-slate-200/60 p-5 hover:border-blue-500/30 transition-all">
                  <div class="flex items-start gap-3">
                    <div class="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center ${x.color} group-hover:scale-110 transition-transform"><i class="bi ${x.icon}"></i></div>
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

        <div class="reveal delay-2">
          ${ctaBand({
      title: "Ready to upgrade your brand fast?",
      subtitle: "View packages, then request a free quote—no phone calls, just clear email communication and fast delivery.",
      primaryHref: "#/pricing",
      primaryText: "View All Pricing",
      secondaryHref: "#/contact",
      secondaryText: "Get a Free Quote",
      bg: "from-white via-slate-50 to-emerald-50/30"
    })}
        </div>

        ${footerHTML()}
      `;
};




const LogoDesignPage = () => {
  setMeta({
    title: "Logo Design Services | Custom Brand Identity | True Designs",
    description: "Professional custom logo design services with modern, versatile concepts tailored to your brand. Choose your package and get production-ready logo files quickly.",
    keywords: "affordable custom logo design USA Canada worldwide, professional logo design services, custom logo packages, vector logo files, brand identity",
    canonical: "https://td-designs.com/logo-design"
  });

  const packages = PRICING_DATA.logo;

  // Updated SEO text with colourful accents
  const seoHtml = `
        If you’re looking for <span class="font-extrabold text-blue-600">affordable custom logo design</span> that still feels premium, True Designs was built for you. We work with businesses across the
        <span class="font-extrabold text-orange-500">USA</span>, <span class="font-extrabold text-emerald-600">Canada</span>, and <span class="font-extrabold text-blue-600">worldwide</span>—helping new brands launch confidently and established companies refresh their image without wasting time.
        <br/><br/>
        A logo is more than a symbol. It’s the first signal of trust. That’s why our process emphasizes <span class="font-extrabold text-emerald-600">clarity</span>, <span class="font-extrabold text-blue-600">distinctiveness</span>, and <span class="font-extrabold text-orange-500">real-world usability</span>. Your logo must look sharp on a website header, a business card, an invoice, packaging, and social profiles. We design with these real applications in mind, and we deliver exports you can actually use.
        <br/><br/>
        Every package includes <span class="font-extrabold text-blue-600">unlimited revisions</span>—because results matter more than arbitrary limits. You’ll receive strong initial concepts quickly, then we refine the direction based on your feedback until it fits your brand voice. Need modern minimalist? Bold and energetic? Elegant and high-end? Vintage or emblem style? We can tailor the typography, icon language, spacing, and color approach to match your audience.
        <br/><br/>
        We keep communication streamlined through email, which helps us stay precise, track revisions, and deliver fast. You’ll always know what’s next and what you’ll receive at the end. If you’re ready for a <span class="font-extrabold text-emerald-600">professional logo design service</span> that’s affordable and reliable, request a free quote or choose a package below.
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
        <style>
          @keyframes slideUpFade {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-logo-page { opacity: 0; animation: slideUpFade 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.3s; }
          .stagger-3 { animation-delay: 0.5s; }
          
          .gradient-text-blue { background: linear-gradient(to right, #2563eb, #3b82f6); -webkit-background-clip: text; color: transparent; }
          .gradient-text-emerald { background: linear-gradient(to right, #059669, #10b981); -webkit-background-clip: text; color: transparent; }
          
          .logo-card-hover { transition: all 0.4s ease; }
          .logo-card-hover:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 40px -15px rgba(59, 130, 246, 0.15); }
        </style>

        <div class="animate-logo-page">
          ${heroBand({
    kicker: "Logo Design • USA, Canada & Worldwide",
    title: "Affordable custom <span class='gradient-text-blue'>logo design</span> that looks premium",
    subtitle: "Get distinct, market-aware logo concepts with unlimited revisions and production-ready files—delivered fast via clear email communication.",
    primaryHref: "#logo-packages",
    primaryText: "Order Now",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "logo-hero-banners"
  })}
        </div>

        <div class="animate-logo-page stagger-1">
          ${longSEOBlock(seoHtml)}
        </div>

        <section id="logo-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16 animate-logo-page stagger-2">
          <div class="flex items-end justify-between gap-6 border-l-4 border-blue-500 pl-6">
            <div>
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Logo Design <span class="text-blue-600">packages</span></h2>
              <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Choose your package and check out securely via PayPal. Need something custom? <span class="text-orange-500 font-bold">Request a free quote.</span></p>
            </div>
            <a href="#/pricing#logo-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100 transition-all">
              View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
            </a>
          </div>
          <div class="mt-8 grid gap-5 lg:grid-cols-3">
            ${packages.map(p => `
              <div class="logo-card-hover">
                ${pricingCard(p)}
              </div>
            `).join("")}
          </div>
        </section>

        <div class="animate-logo-page stagger-3">
          ${galleryGrid(galleryItems, "logo-gallery")}
        </div>

        <div class="bg-slate-50/50 animate-logo-page stagger-1">
          ${faqHTML(faqItems)}
        </div>

        <div class="animate-logo-page">
          ${ctaBand({
    title: "Want your logo to look <span class='text-orange-500'>credible everywhere?</span>",
    subtitle: "Get a free quote or jump to transparent pricing. We serve USA, Canada, and worldwide businesses with fast delivery and unlimited revisions.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing#logo-design",
    secondaryText: "View Logo Pricing",
    bg: "from-blue-50 via-white to-emerald-50"
  })}
        </div>

        ${footerHTML()}
      `;
};



const BusinessCardPage = () => {
  setMeta({
    title: "Digital Ads & Banner Design | High-Converting Visual Creatives",
    description: "Scroll-stopping digital ads and banner graphics designed to boost engagement and drive conversions. Professional creative support for campaigns and promotions.",
    keywords: "affordable digital ads banner design USA Canada worldwide, display ad design, banner ad design, social media ad creatives, high converting ad creative",
    canonical: "https://td-designs.com/digital-ads-banner-design"
  });

  const packages = PRICING_DATA.digitalAds;

  // Updated SEO text with beautiful colourful spans
  const seoHtml = `
        Your ad creative is often the first impression of your offer—so it needs to communicate value fast. True Designs provides
        <span class="font-extrabold text-blue-600 underline decoration-blue-200 underline-offset-4">affordable digital ads &amp; banner design</span> for businesses in the <span class="font-extrabold text-orange-500">USA</span>, <span class="font-extrabold text-emerald-600">Canada</span>, and <span class="font-extrabold text-blue-600">worldwide</span>, with a workflow that’s simple and fast.
        <br/><br/>
        We design ad creatives that are built for performance: <span class="text-blue-700 font-bold">clear hierarchy</span>, readable typography at small sizes, and <span class="text-orange-600 font-bold">strong CTAs</span>. Whether you’re running
        Google Display, website hero banners, Facebook/Instagram promos, LinkedIn ads, or retargeting campaigns, we’ll deliver properly sized exports that match your placements.
        <br/><br/>
        <span class="text-emerald-600 font-extrabold">Unlimited revisions</span> are included so you don’t get stuck with “almost right.” We’ll refine the layout, messaging emphasis, colors, and CTA treatment until the creative feels sharp and conversion-ready.
        <br/><br/>
        Our goal is simple: deliver ad designs that look <span class="text-blue-600 font-bold">premium</span>, read clearly, and stay consistent across multiple sizes—at an affordable price. Choose a package below or request a free quote for a custom campaign set.
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
        <style>
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade { opacity: 0; animation: fadeInUp 0.8s ease-out forwards; }
          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }
          
          .color-title-blue { color: #2563eb; }
          .color-title-orange { color: #f97316; }
          .color-title-emerald { color: #059669; }
        </style>

        <div class="animate-fade">
          ${heroBand({
    kicker: "Digital Ads &amp; Banner Design • High-converting creatives",
    title: "Digital <span class='color-title-blue'>ads</span> and <span class='color-title-emerald'>banners</span> that convert",
    subtitle: "Get scroll-stopping creatives with strong hierarchy, properly sized exports, fast turnaround, and unlimited revisions—serving USA, Canada & worldwide.",
    primaryHref: "#ads-packages",
    primaryText: "View Packages",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "ads-hero-banners"
  })}
        </div>

        <div class="animate-fade delay-1">
          ${longSEOBlock(seoHtml)}
        </div>

        <section id="ads-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16 animate-fade delay-2">
          <div class="flex items-end justify-between gap-6 border-l-4 border-orange-500 pl-6">
            <div>
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Digital Ads &amp; <span class="color-title-orange">Banner Design</span> packages</h2>
              <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Transparent, affordable packages with PayPal checkout and <span class="text-emerald-600 font-bold">unlimited revisions</span>.</p>
            </div>
            <a href="#/pricing#digital-ads-banner-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition-all">
              View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
            </a>
          </div>
          <div class="mt-8 grid gap-5 lg:grid-cols-3">
            ${packages.map(p => pricingCard(p)).join("")}
          </div>
        </section>

        <div class="animate-fade delay-3">
          ${galleryGrid(galleryItems, "ads-gallery")}
        </div>

        <div class="animate-fade delay-1">
          ${faqHTML(faqItems)}
        </div>

        <div class="animate-fade">
          ${ctaBand({
    title: "Need a <span class='color-title-blue'>consistent</span> banner set for your campaign?",
    subtitle: "Choose a package for fast checkout or request a free quote for additional sizes and A/B variants. We deliver worldwide.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing#digital-ads-banner-design",
    secondaryText: "View Ads Pricing",
    bg: "from-blue-50 via-white to-orange-50/30"
  })}
        </div>

        ${footerHTML()}
      `;
};


const StationeryPage = () => {
  setMeta({
    title: "Custom T-Shirt & Merch Design | Print-Ready Apparel Graphics",
    description: "Create bold, professional apparel and merch visuals for tees, hoodies, hats & more. Premium graphics that elevate merchandise branding and sales.",
    keywords: "affordable custom t-shirt merch design USA Canada worldwide, t-shirt design, apparel graphics, merch design, print-ready t-shirt files",
    canonical: "https://td-designs.com/custom-tshirt-merch-design"
  });

  const packages = PRICING_DATA.tshirt;

  const seoHtml = `
        Cohesive stationery can instantly make a business feel established. From proposals and invoices to client onboarding and thank-you notes, professional stationery reinforces your brand at every touchpoint.
        True Designs provides <span class="font-extrabold text-emerald-600">affordable stationery design</span> for clients in the <span class="font-extrabold text-blue-600">USA</span>, <span class="font-extrabold text-orange-500">Canada</span>, and <span class="font-extrabold text-emerald-600">worldwide</span>.
        <br/><br/>
        Our stationery packages are designed to be practical and production-ready. We pay attention to spacing, type scale, and alignment so documents feel premium while remaining easy to read. We also set up layouts with the right margins and bleed requirements for professional printing. Whether your brand style is minimal and modern, elegant and high-end, or bold and energetic, we translate that tone into a consistent system.
        <br/><br/>
        Many clients start with a logo, then add stationery to keep their brand consistent across email signatures, printed letterheads, and office collateral. If you already have a logo and colors, we’ll match them precisely; if you’re building from scratch, we can recommend a direction that aligns with your market and audience.
        <br/><br/>
        With <span class="font-bold text-blue-600">unlimited revisions</span> and clear email communication, you’ll get a finished stationery set you can use immediately—no guesswork, no missing files, and no slow back-and-forth. Choose a package below or request a custom quote for additional items.
      `;

  const galleryItems = [
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
  ];

  const faqItems = [
    { q: "What items are included in stationery design?", a: "Depending on the package, we design letterhead, envelope, and business cards as a cohesive set. Premium can include variants as well." },
    { q: "Do you provide print-ready files?", a: "Yes. You’ll receive print-ready PDFs prepared with proper margins and bleed when required." },
    { q: "Can you match my existing logo and brand colors?", a: "Yes. Send your logo files and any brand guidelines and we’ll build stationery that aligns perfectly." },
    { q: "Can you add more items (folders, invoices, email signature)?", a: "Yes. Request a free quote and list the items you need—our team will provide a clear estimate." },
    { q: "Is this service available worldwide?", a: "Yes. We work with clients in the USA, Canada. All communication and file delivery is handled by email." }
  ];

  return `
    <style>
      @keyframes revealUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      .reveal { opacity: 0; animation: revealUp 0.8s ease-out forwards; }
      .d-1 { animation-delay: 0.2s; } .d-2 { animation-delay: 0.4s; }
    </style>

    <div class="reveal">
      ${heroBand({
    kicker: "Custom T‑Shirt &amp; Merch Design • Print-ready apparel graphics",
    title: "<span class='text-blue-600'>Merch designs that look bold</span> and <span class='text-emerald-600'>print perfectly clean every time.</span>",
    subtitle: "Get custom apparel graphics and merch visuals designed for production—print-ready files, fast turnaround, and unlimited revisions for USA, Canada &amp; worldwide clients.",
    primaryHref: "#stationery-packages",
    primaryText: "Get Packages",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "stationery-hero-set"
  })}
    </div>

    <div class="reveal d-1">
      ${longSEOBlock(seoHtml)}
    </div>

    <section id="stationery-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16 reveal d-2">
      <div class="flex items-end justify-between gap-6 border-l-4 border-blue-500 pl-6">
        <div>
          <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Stationery <span class="text-blue-600">Design packages</span></h2>
          <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Affordable packages with discounts, <span class="text-emerald-600 font-bold">unlimited revisions</span>, and PayPal checkout.</p>
        </div>
        <a href="#/pricing#custom-tshirt-merch-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition">
          View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
        </a>
      </div>
      <div class="mt-8 grid gap-5 lg:grid-cols-3">
        ${packages.map(p => pricingCard(p)).join("")}
      </div>
    </section>

    <div class="reveal d-2">
      ${galleryGrid(galleryItems, "stationery-gallery")}
    </div>

    <div class="reveal">
      ${faqHTML(faqItems)}
    </div>

    <div class="reveal">
      ${ctaBand({
    title: "<span class='text-emerald-600'>Ready to launch merch</span> that <span class='text-blue-600'>feels truly premium?</span>",
    subtitle: "Jump to transparent pricing or request a free quote for multiple SKUs, placements, or a full merch drop. We deliver worldwide.",
    primaryHref: "#/pricing#custom-tshirt-merch-design",
    primaryText: "View Merch Pricing",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bg: "from-teal-50 via-white to-blue-50"
  })}
    </div>

    ${footerHTML()}
  `;
};

const GraphicDesignPage = () => {
  setMeta({
    title: "Graphic Design Services | Marketing & Brand Visuals",
    description: "Expert graphic design for marketing materials, social graphics, flyers, brochures & more. Clean, attention-focused visuals built to communicate your message clearly.",
    keywords: "affordable graphic design USA Canada worldwide, flyer design, poster design, social media graphics, infographic design, professional graphic design services",
    canonical: "https://td-designs.com/graphic-design"
  });

  const packages = PRICING_DATA.graphic;

  const seoHtml = `
        Marketing moves fast—and your visuals need to keep up. True Designs provides <span class="font-extrabold text-orange-500">affordable graphic design</span> for businesses in the <span class="font-extrabold text-blue-600">USA</span>, <span class="font-extrabold text-emerald-600">Canada</span>, and <span class="font-extrabold text-orange-500">worldwide</span>, with a focus on clarity, hierarchy, and results.
        <br/><br/>
        Whether you need event flyers, posters, social media banners, Instagram carousels, menus, YouTube thumbnails, or clean infographics, we design assets that grab attention while staying readable. Great graphics are not just “pretty”—they guide the eye, highlight the offer, and make your brand feel credible.
        <br/><br/>
        Our process is simple: you share your goal, audience, and any brand references; we deliver strong drafts quickly; then we refine based on feedback with <span class="text-blue-600 font-bold">unlimited revisions</span>. You’ll receive files sized correctly for the platforms you’re using, plus high-resolution exports ready to publish or print.
        <br/><br/>
        If you’re running a promotion or launching something new, our multi-piece packages make it easy to keep a <span class="text-emerald-600 font-bold">consistent look</span> across all channels. Choose a package below or request a free quote for ongoing design support.
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
    { q: "What types of graphic design do you offer?", a: "Flyers, posters, menus, social media graphics, ad creatives, infographics, thumbnails, and more." },
    { q: "Do you deliver files sized for each platform?", a: "Yes. Tell us where you’ll use the designs and we’ll provide the correct dimensions." },
    { q: "Can you match my brand guidelines?", a: "Absolutely. Share your brand colors, fonts, and logo, and we’ll maintain consistent styling." },
    { q: "Do you include source files?", a: "Premium packages include source files where applicable." },
    { q: "Can you design a full campaign set?", a: "Yes. Our Professional and Premium packages are ideal for multi-piece campaign assets." }
  ];

  return `
    <style>
      @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      .reveal { opacity: 0; animation: fadeIn 0.8s ease forwards; }
      .delay-1 { animation-delay: 0.2s; } .delay-2 { animation-delay: 0.4s; }
    </style>

    <div class="reveal">
      ${heroBand({
    kicker: "Graphic Design • Campaign-ready visuals",
    title: "<span class='text-orange-500'>Graphic design that looks clean</span> and <span class='text-blue-600'>sells your message with clarity.</span>",
    subtitle: "Flyers, posters, social media, menus, and more—designed with strong hierarchy, fast turnaround, and unlimited revisions for USA/Canada/worldwide clients.",
    primaryHref: "#graphic-packages",
    primaryText: "View Pricing",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "graphic-hero-layered"
  })}
    </div>

    <div class="reveal delay-1">
      ${longSEOBlock(seoHtml)}
    </div>

    <section id="graphic-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16 reveal delay-2">
      <div class="flex items-end justify-between gap-6 border-l-4 border-orange-500 pl-6">
        <div>
          <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Graphic <span class="text-orange-600">Design packages</span></h2>
          <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Choose a package for quick checkout or <span class="text-blue-600 font-bold">request a custom quote</span> for ongoing design.</p>
        </div>
        <a href="#/pricing#graphic-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:text-orange-600 transition">
          View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
        </a>
      </div>
      <div class="mt-8 grid gap-5 lg:grid-cols-3">
        ${packages.map(p => pricingCard(p)).join("")}
      </div>
    </section>

    <div class="reveal delay-2">
      ${galleryGrid(galleryItems, "graphic-gallery")}
    </div>

    <div class="reveal">
      ${faqHTML(faqItems)}
    </div>

    <div class="reveal">
      ${ctaBand({
    title: "<span class='text-blue-600'>Need a campaign</span> that looks <span class='text-orange-500'>consistent across all platforms?</span>",
    subtitle: "Get a free quote and tell us what you’re promoting. We’ll deliver a clean, on-brand system sized for your channels.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing#graphic-design",
    secondaryText: "View Graphic Pricing",
    bg: "from-orange-50 via-white to-blue-50"
  })}
    </div>

    ${footerHTML()}
  `;
};

const WebDesignPage = () => {
  setMeta({
    title: "Web Design Services | Conversion-Focused UI/UX | True Designs",
    description: "Custom website design with polished user interfaces and strategic layouts for conversions. Modern, responsive designs tailored to your business needs.",
    keywords: "affordable web design USA Canada worldwide, conversion focused web design, professional website design services, responsive web design",
    canonical: "https://td-designs.com/web-design"
  });

  const packages = PRICING_DATA.web;

  const seoHtml = `
        A website is often the first “sales conversation” your business has with a new customer. If the layout feels cluttered or outdated, trust drops instantly. True Designs provides
        <span class="font-extrabold text-blue-600">affordable web design</span> with a focus on clarity and conversion—serving clients in the <span class="font-extrabold text-orange-500">USA</span>, <span class="font-extrabold text-emerald-600">Canada</span>, and <span class="font-extrabold text-blue-600">worldwide</span>.
        <br/><br/>
        Our approach is simple: we design pages that make it obvious what you do, who you help, and what action to take next. We use strong typography, generous spacing, and a clean visual rhythm so content is easy to scan. This is especially important for service businesses where credibility needs to be established quickly.
        <br/><br/>
        We can design <span class="text-emerald-600 font-bold">single-page websites</span> for fast launches or multi-page sites with clear navigation, service detail pages, pricing sections, testimonials, and contact flows. Every design is responsive and built to look great on mobile—where most customers will first find you.
        <br/><br/>
        While we focus on the design deliverable, our files are prepared for easy handoff to developers. You’ll receive organized layouts and guidance that helps your build go smoother. If you want a <span class="text-blue-600 font-bold">conversion-focused site</span> that looks premium and stays affordable, choose a package below or request a free quote.
      `;

  const galleryItems = [
    { title: "Agency Homepage", tag: "Agency • Modern", caption: "Editorial hero, service grid, and strong CTAs.", alt: "Agency website homepage mockup" },
    { title: "Clinic Website", tag: "Healthcare • Trust", caption: "Clean hierarchy designed to build confidence quickly.", alt: "Clinic website mockup" },
    { title: "Restaurant Website", tag: "Food • Visual", caption: "Menu-forward layout with reservations CTA.", alt: "Restaurant website mockup" },
    { title: "SaaS Landing Page", tag: "SaaS • Conversion", caption: "Feature-led sections with benefit clarity.", alt: "SaaS landing page mockup" },
    { title: "Portfolio Site", tag: "Portfolio • Minimal", caption: "Minimal grid with refined typography and whitespace.", alt: "Portfolio website mockup" },
    { title: "Consulting Website", tag: "Professional • Clean", caption: "Trust badges, testimonials, and clear service blocks.", alt: "Consulting website mockup" },
    { title: "Real Estate Site", tag: "Real Estate • Luxury", caption: "Premium listing layout with elegant spacing.", alt: "Real estate website mockup" },
    { title: "Fitness Studio Site", tag: "Fitness • Bold", caption: "High-energy visuals with a simple sign-up funnel.", alt: "Fitness studio website mockup" },
    { title: "Nonprofit Website", tag: "Nonprofit • Story", caption: "Story-driven layout with donation CTAs.", alt: "Nonprofit website mockup" },
    { title: "Creative Studio Site", tag: "Creative • Editorial", caption: "Editorial typography and modern motion cues.", alt: "Creative studio website mockup" }
  ];

  const faqItems = [
    { q: "Are these packages for design only or full development?", a: "These packages cover web design deliverables (mockups/layouts). If you need a custom build quote, request a free quote." },
    { q: "Will my design be mobile responsive?", a: "Yes. We design responsive layouts and provide desktop and mobile views." },
    { q: "Can you design multiple pages?", a: "Yes. Our Professional and Premium packages are built for multi-page websites." },
    { q: "Do you include conversion elements like CTAs and testimonials?", a: "Yes. We design with conversion in mind." },
    { q: "Can you match my brand style?", a: "Absolutely. Share your logo, brand colors, and examples you like." }
  ];

  return `
    <style>
      @keyframes revealIn { from { opacity: 0; transform: scale(0.98) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
      .reveal { opacity: 0; animation: revealIn 0.8s cubic-bezier(0.1, 0.9, 0.2, 1) forwards; }
      .stagger-1 { animation-delay: 0.2s; } .stagger-2 { animation-delay: 0.4s; }
    </style>

    <div class="reveal">
      ${heroBand({
    kicker: "Web Design • Conversion-first UI",
    title: "<span class='text-blue-600'>Web design built to convert visitors</span> into <span class='text-emerald-600'>customers who trust your brand.</span>",
    subtitle: "Modern, responsive page designs with clear hierarchy—crafted for USA, Canada & worldwide clients who want premium results without premium pricing.",
    primaryHref: "#web-packages",
    primaryText: "View Packages",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "web-hero-devices"
  })}
    </div>

    <div class="reveal stagger-1">
      ${longSEOBlock(seoHtml)}
    </div>

    <section id="web-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16 reveal stagger-2">
      <div class="flex items-end justify-between gap-6 border-l-4 border-emerald-500 pl-6">
        <div>
          <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Web <span class="text-emerald-600">Design packages</span></h2>
          <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Choose a package and check out via PayPal, or <span class="text-blue-600 font-bold">request a custom quote</span> if your project is larger.</p>
        </div>
        <a href="#/pricing#web-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:text-emerald-600 transition">
          View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
        </a>
      </div>
      <div class="mt-8 grid gap-5 lg:grid-cols-3">
        ${packages.map(p => pricingCard(p)).join("")}
      </div>
    </section>

    <div class="reveal stagger-2">
      ${galleryGrid(galleryItems, "web-gallery")}
    </div>

    <div class="reveal">
      ${faqHTML(faqItems)}
    </div>

    <div class="reveal">
      ${ctaBand({
    title: "<span class='text-emerald-600'>Want a website</span> that <span class='text-blue-600'>looks premium and reads clearly?</span>",
    subtitle: "Request a free quote and share your industry + goals. We’ll recommend a package and deliver a conversion-focused design.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing#web-design",
    secondaryText: "View Web Pricing",
    bg: "from-blue-50 via-white to-emerald-50"
  })}
    </div>

    ${footerHTML()}
  `;
};


const EcommercePage = () => {
  setMeta({
    title: "E-Commerce Website Design | Online Storefronts That Convert",
    description: "Professional e-commerce site design including storefronts, product pages & checkout flows optimized for sales. Build your brand’s online shop with expert support.",
    keywords: "affordable e-commerce website design USA Canada worldwide, online store design, product page design, checkout flow UX, professional ecommerce design services",
    canonical: "https://td-designs.com/e-commerce-website"
  });

  const packages = PRICING_DATA.ecommerce;

  const seoHtml = `
        For online stores, design is directly tied to revenue. Product pages must feel trustworthy, collections must be easy to scan, and checkout must be frictionless. True Designs offers
        <span class="font-extrabold text-blue-600">affordable</span> e-commerce website design for businesses in the <span class="font-extrabold text-orange-500">USA</span>, <span class="font-extrabold text-emerald-600">Canada</span>, and <span class="font-extrabold text-blue-600">worldwide</span>, built around a conversion-first structure.
        <br/><br/>
        We design key templates such as your homepage, collection pages, product detail pages (PDP), cart, and checkout. Our layouts prioritize product <span class="text-emerald-600 font-bold">clarity</span>, strong hierarchy, trust signals (reviews, shipping/returns, guarantees), and a clean visual rhythm. Whether you sell fashion, food, electronics, beauty, or home goods, we tailor the UI to match your market and price point.
        <br/><br/>
        <span class="text-blue-600 font-bold">Unlimited</span> revisions are included so you can refine details like product modules, image ratios, typography, badge placement, and call-to-action language. You’ll get responsive designs for desktop and mobile, plus a reusable component approach that makes development smoother.
        <br/><br/>
        If you want an e-commerce site that feels <span class="text-orange-500 font-bold">premium</span> and converts better—without overpaying—choose a package below or request a free quote and tell us what you sell.
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
        <style>
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-reveal { opacity: 0; animation: fadeInUp 0.8s ease-out forwards; }
          .stagger-1 { animation-delay: 0.2s; }
          .stagger-2 { animation-delay: 0.4s; }
          .stagger-3 { animation-delay: 0.6s; }
        </style>

        <div class="animate-reveal">
          ${heroBand({
    kicker: "E-Commerce Website • Product-to-checkout UX",
    title: "E-commerce design that <span class='text-blue-600'>sells</span> with <span class='text-emerald-600'>clarity</span>",
    subtitle: "Product pages, collections, cart, and checkout layouts designed for trust and conversion—affordable for USA, Canada & worldwide brands.",
    primaryHref: "#ecom-packages",
    primaryText: "View Packages",
    secondaryHref: "#/contact",
    secondaryText: "Get a Free Quote",
    bgGenId: "ecom-hero-checkout"
  })}
        </div>

        <div class="animate-reveal stagger-1">
          ${longSEOBlock(seoHtml)}
        </div>

        <section id="ecom-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16 animate-reveal stagger-2">
          <div class="flex items-end justify-between gap-6 border-l-4 border-blue-500 pl-6">
            <div>
              <h2 class="font-display text-3xl sm:text-4xl text-slate-900">E-Commerce <span class="text-blue-600">Website</span> packages</h2>
              <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Pick a package that matches your store <span class="text-orange-500 font-bold">size</span> and checkout complexity.</p>
            </div>
            <a href="#/pricing#e-commerce-website" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:text-emerald-600 transition-all">
              View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
            </a>
          </div>
          <div class="mt-8 grid gap-5 lg:grid-cols-3">
            ${packages.map(p => pricingCard(p)).join("")}
          </div>
        </section>

        <div class="animate-reveal stagger-3">
          ${galleryGrid(galleryItems, "ecom-gallery")}
        </div>

        <div class="animate-reveal stagger-1">
          ${faqHTML(faqItems)}
        </div>

        <div class="animate-reveal">
          ${ctaBand({
    title: "Ready to make your store feel <span class='text-emerald-600'>premium</span>?",
    subtitle: "Request a free quote and share your products, target audience, and platform. We’ll recommend the best package for your launch.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing#e-commerce-website",
    secondaryText: "View E-Commerce Pricing",
    bg: "from-white via-slate-50 to-emerald-50/30"
  })}
        </div>

        ${footerHTML()}
      `;
};


const PricingPage = () => {
  setMeta({
    title: "True Designs Pricing | Logo, Web, Graphic & Design Packages",
    description: "Explore transparent design pricing for logo, branding, web, e-commerce & graphic services. Packages start at affordable rates with unlimited revisions included.",
    keywords: "True Designs pricing, affordable custom design packages USA Canada worldwide, logo design pricing, digital ads banner design pricing, custom t-shirt merch design pricing, web design pricing, e-commerce pricing",
    canonical: "https://td-designs.com/pricing"
  });

  const sections = [
    {
      id: "logo-design",
      title: "Logo Design",
      subtitle: "Distinctive identities with production-ready exports.",
      cards: PRICING_DATA.logo,
      color: "text-blue-600",
      border: "border-blue-500"
    }, {
      id: "digital-ads-banner-design",
      title: "Digital Ads &amp; Banner Design",
      subtitle: "High-converting ad creatives sized for every placement.",
      cards: PRICING_DATA.digitalAds,
      color: "text-orange-500",
      border: "border-orange-500"
    }, {
      id: "business-card-design",
      title: "Business Card Design",
      subtitle: "Premium, print-ready layouts for modern brands.",
      cards: PRICING_DATA.businessCards,
      color: "text-emerald-600",
      border: "border-emerald-500"
    },
    {
      id: "stationery-design",
      title: "Stationery Design",
      subtitle: "Letterhead, envelopes, and cohesive brand collateral.",
      cards: PRICING_DATA.stationery,
      color: "text-blue-600",
      border: "border-blue-500"
    },
    {
      id: "custom-tshirt-merch-design",
      title: "Custom T‑Shirt &amp; Merch Design",
      subtitle: "Print-ready apparel graphics and merch visuals.",
      cards: PRICING_DATA.tshirt,
      color: "text-orange-500",
      border: "border-orange-500"
    }, {
      id: "graphic-design",
      title: "Graphic Design",
      subtitle: "Marketing visuals for social, print, and campaigns.",
      cards: PRICING_DATA.graphic,
      color: "text-emerald-600",
      border: "border-emerald-500"
    },
    {
      id: "web-design",
      title: "Web Design",
      subtitle: "Responsive, conversion-focused page designs.",
      cards: PRICING_DATA.web,
      color: "text-blue-600",
      border: "border-blue-500"
    },
    {
      id: "e-commerce-website",
      title: "E-Commerce Website",
      subtitle: "Product-to-checkout UX that builds trust and sells.",
      cards: PRICING_DATA.ecommerce,
      color: "text-orange-500",
      border: "border-orange-500"
    },
    {
      id: "photo-to-art",
      title: "Photo-to-Art",
      subtitle: "Custom Artwork Packages.",
      cards: PRICING_DATA.photoToArt,
      color: "text-pink-600",
      border: "border-pink-500"
    }
  ];

  return `
        <style>
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-reveal { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          
          #pricingJump::-webkit-scrollbar { display: none; }
          #pricingJump { -ms-overflow-style: none; scrollbar-width: none; }
        </style>

        <section class="relative overflow-hidden bg-white animate-reveal">
          <div class="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white"></div>
          <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10">
            <div class="max-w-3xl">
              <div class="inline-flex items-center gap-2 rounded-full bg-white subtle-border px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm">
                <span class="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 animate-pulse"></span>
                Transparent pricing • PayPal checkout • Unlimited revisions
              </div>
              <h1 class="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.03] text-slate-900 tracking-tight">
                View All Packages & <span class="text-blue-600">Transparent</span> Pricing
              </h1>
              <p class="mt-5 text-lg sm:text-xl leading-8 text-slate-600">
                Affordable custom designs for USA, Canada & worldwide clients. Choose a <span class="text-orange-500 font-bold">package</span> below or request a custom quote.
              </p>
              <div class="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="#/contact" class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-orange-500 px-6 py-4 text-sm sm:text-base font-extrabold text-white hover:opacity-95 hover:-translate-y-1 transition shadow-lg shadow-emerald-500/20">
                  Get a Free Quote <i class="bi bi-arrow-right-short text-xl ml-1"></i>
                </a>
                <a href="#/portfolio" class="inline-flex items-center justify-center rounded-2xl bg-white border border-slate-200 px-6 py-4 text-sm sm:text-base font-extrabold text-slate-900 hover:bg-slate-50 transition">
                  View Portfolio <i class="bi bi-arrow-up-right text-sm ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div class="sticky top-[92px] lg:top-[102px] z-40 bg-white/90 backdrop-blur-md border-y border-slate-200/60 animate-reveal stagger-1" id="pricingJump">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <div class="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
              ${sections.map((s, idx) => {
    const colors = ['from-blue-500 to-blue-600', 'from-orange-500 to-orange-600', 'from-emerald-500 to-emerald-600'];
    const dotColor = colors[idx % 3];
    return `
                  <a href="#/pricing#${s.id}" class="shrink-0 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-800 hover:border-blue-500 transition-all active:scale-95">
                    <span class="h-2 w-2 rounded-full bg-gradient-to-r ${dotColor}"></span>
                    ${s.title}
                  </a>
                `;
  }).join("")}
            </div>
          </div>
        </div>

        ${sections.map((s, idx) => `
          <section id="${s.id}" class="scroll-mt-28 animate-reveal stagger-2">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
              <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-l-4 ${s.border} pl-6">
                <div class="max-w-2xl">
                  <div class="text-xs font-extrabold uppercase tracking-widest ${s.color}">Pricing Section</div>
                  <h2 class="font-display mt-2 text-3xl sm:text-4xl text-slate-900">
                    ${s.title.split(' ').map((word, i, arr) => i === arr.length - 1 ? `<span class="${s.color}">${word}</span>` : word).join(' ')}
                  </h2>
                  <p class="mt-3 text-slate-600 leading-7">${s.subtitle}</p>
                  <div class="mt-5 flex flex-wrap gap-2">
                    <a href="#/${s.id}" class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
                      View Service Page <i class="bi bi-arrow-up-right text-sm"></i>
                    </a>
                    <a href="#/contact" class="inline-flex items-center gap-2 text-sm font-extrabold ${s.color} hover:opacity-80 transition">
                      Get a free quote <i class="bi bi-arrow-right-short text-lg"></i>
                    </a>
                  </div>
                </div>
                <div class="rounded-2xl bg-slate-50 border border-slate-100 p-5 lg:p-6 max-w-md shadow-sm">
                  <div class="text-sm font-extrabold text-slate-900">Included with <span class="text-emerald-600">every</span> package</div>
                  <ul class="mt-3 space-y-2 text-sm text-slate-700">
                    <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Unlimited revisions</li>
                    <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Fast delivery via email</li>
                    <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Clear, organized files</li>
                  </ul>
                </div>
              </div>

              <div class="mt-10 grid gap-6 lg:grid-cols-3">
                ${s.cards.map(c => pricingCard(c)).join("")}
              </div>

              ${idx < sections.length - 1 ? `
                <div class="mt-12 border-b border-slate-100"></div>
              ` : ``}
            </div>
          </section>
        `).join("")}

        <div class="animate-reveal">
          ${ctaBand({
    title: "Not sure which <span class='text-blue-600'>package</span> fits?",
    subtitle: "Request a free quote and tell us your goals. We’ll recommend the best option and keep everything simple by email.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/portfolio",
    secondaryText: "View Portfolio",
    bg: "from-blue-50 via-white to-orange-50/30"
  })}
        </div>

        ${footerHTML()}
      `;
};



const PortfolioPage = () => {
  setMeta({
    title: "Design Portfolio | True Designs - Worldwide Clients",
    description: "Explore the True Designs portfolio: logos, digital ads & banner design, custom T‑shirt & merch design, graphic design, web design, and e-commerce UX mockups for clients in the USA, Canada & worldwide.",
    keywords: "design portfolio, logo portfolio, digital ads banner design portfolio, custom t-shirt merch design portfolio, graphic design portfolio, web design portfolio, e-commerce design portfolio, USA Canada worldwide",
    canonical: "https://td-designs.com/portfolio"
  });

  // Updated buildGrid with staggered entrance animations
  const buildGrid = (prefix, count, label) => `
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${Array.from({ length: count }).map((_, i) => `
            <button type="button"
              class="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-left animate-reveal"
              style="animation-delay: ${0.1 * (i % 6)}s"
              data-lightbox data-title="${label} #${i + 1}" data-src=""
              aria-label="Open preview: ${label} ${i + 1}">
              <div class="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img data-gen-id="${prefix}-${i + 1}" alt="${label} mockup ${i + 1}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div class="text-white">
                    <div class="text-sm font-extrabold">${label}</div>
                    <div class="text-xs text-white/80">Click to zoom</div>
                  </div>
                  <div class="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    <i class="bi bi-zoom-in"></i>
                  </div>
                </div>
              </div>
              <div class="p-4 bg-white">
                <div class="text-sm font-extrabold text-[#0f172a]">${label} ${i + 1}</div>
                <div class="mt-1 text-sm text-slate-500 leading-6">Diverse style exploration with premium mockup presentation.</div>
              </div>
            </button>
          `).join("")}
        </div>
      `;

  return `
        <style>
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-reveal { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          
          .tab-active { background: #eff6ff; border-color: #3b82f6; color: #1d4ed8; }
        </style>

        <section class="relative overflow-hidden">
          <div class="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105" style="background-image: url('assets/images/wide_hero_background_collage_02bef7b3c7b393f1b036e3efe01b6679.png');"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-white/85 via-white/95 to-white"></div>

          <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 animate-reveal">
            <div class="max-w-4xl">
              <div class="inline-flex items-center gap-2 rounded-full bg-white/80 border border-slate-200 px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm">
                <span class="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 animate-pulse"></span>
                Portfolio • USA • Canada • Worldwide
              </div>
              <h1 class="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.03] text-[#0f172a] tracking-tight">
                Our <span class="text-blue-600">Portfolio</span> – Stunning Designs for Clients <span class="text-orange-500">Worldwide</span>
              </h1>
              <p class="mt-5 text-lg sm:text-xl leading-8 text-slate-600">
                Browse categorized work samples across our services. Use <span class="text-emerald-600 font-bold">filters</span> to jump between logo, print, graphics, and website UI.
              </p>
              <div class="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="#/pricing" class="inline-flex items-center justify-center rounded-2xl bg-[#fff] px-6 py-4 text-sm sm:text-base font-extrabold text-white hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-blue-500/10">
                  View All Pricing <i class="bi bi-arrow-right-short text-xl ml-1"></i>
                </a>
                <a href="#/contact" class="inline-flex items-center justify-center rounded-2xl bg-white border border-slate-200 px-6 py-4 text-sm sm:text-base font-extrabold text-slate-900 hover:bg-slate-50 hover:border-emerald-500/50 transition-all duration-300">
                  Get a Free Quote <i class="bi bi-arrow-up-right text-sm ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-14 animate-reveal delay-1">
          <div class="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide">
            ${[
      ["logos", "Logo Design", "text-blue-500"],
      ["ads", "Digital Ads &amp; Banners", "text-orange-500"],
      ["merch", "T‑Shirt &amp; Merch", "text-emerald-500"],
      ["graphics", "Graphic Design", "text-blue-500"],
      ["web", "Web Design", "text-orange-500"],
      ["ecom", "E-Commerce UI", "text-emerald-500"]
    ].map(([key, label, color]) => `
              <button type="button" data-portfolio-tab="${key}"
                class="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold border transition-all duration-300 bg-white text-slate-800 border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 active:scale-95 whitespace-nowrap">
                <span class="h-2 w-2 rounded-full bg-current ${color}"></span>
                ${label}
              </button>
            `).join("")}
          </div>

          <div class="space-y-16">
            <div data-portfolio-pane="logos" class="animate-reveal delay-2">
              <div class="flex items-end justify-between gap-6 border-l-4 border-blue-500 pl-6 mb-8">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-[#0f172a]">Logo <span class="text-blue-600">Design</span></h2>
                  <p class="mt-3 text-slate-600 leading-7">Modern minimalist tech logos, vintage emblems, and market-aware identities built for real-world impact.</p>
                </div>
                <a href="#/logo-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition-all">
                  View Service <i class="bi bi-arrow-up-right text-sm"></i>
                </a>
              </div>
              ${buildGrid("portfolio-logo", 15, "Logo Mockup")}
              <div class="mt-12">${ctaBand({
      title: "Want a <span class='text-blue-600'>logo</span> like these?",
      subtitle: "Pick a package and check out securely, or request a free quote for a tailored recommendation.",
      primaryHref: "#/pricing#logo-design",
      primaryText: "View Logo Pricing",
      secondaryHref: "#/contact",
      secondaryText: "Get a Free Quote",
      bg: "from-blue-50 via-white to-slate-50"
    })}</div>
            </div>

            <div data-portfolio-pane="ads" class="hidden">
              <div class="flex items-end justify-between gap-6 border-l-4 border-orange-500 pl-6 mb-8">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-[#0f172a]">Digital <span class="text-orange-500">Ads</span></h2>
                  <p class="mt-3 text-slate-600 leading-7">Banner sets for display, social, and web placements—built for high conversion and readability.</p>
                </div>
                <a href="#/digital-ads-banner-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:text-orange-600 transition-all">
                  View Ads Service <i class="bi bi-arrow-up-right text-sm"></i>
                </a>
              </div>
              ${buildGrid("portfolio-ads", 12, "Digital Ad / Banner")}
            </div>

            <div data-portfolio-pane="merch" class="hidden">
              <div class="flex items-end justify-between gap-6 border-l-4 border-emerald-500 pl-6 mb-8">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-[#0f172a]">Custom <span class="text-emerald-600">Merch</span></h2>
                  <p class="mt-3 text-slate-600 leading-7">Apparel graphics and drop-ready variations designed for clean production and bold branding.</p>
                </div>
                <a href="#/custom-tshirt-merch-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:text-emerald-600 transition-all">
                  View Merch Service <i class="bi bi-arrow-up-right text-sm"></i>
                </a>
              </div>
              ${buildGrid("portfolio-merch", 12, "T‑Shirt / Merch Design")}
            </div>

            <div data-portfolio-pane="graphics" class="hidden">
              <div class="flex items-end justify-between gap-6 border-l-4 border-blue-500 pl-6 mb-8">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-[#0f172a]">Graphic <span class="text-blue-600">Design</span></h2>
                  <p class="mt-3 text-slate-600 leading-7">Flyers, posters, and social graphics designed with strong hierarchy and professional clarity.</p>
                </div>
              </div>
              ${buildGrid("portfolio-graphic", 12, "Graphic Design")}
            </div>

            <div data-portfolio-pane="web" class="hidden">
              <div class="flex items-end justify-between gap-6 border-l-4 border-orange-500 pl-6 mb-8">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-[#0f172a]">Web <span class="text-orange-500">Design</span></h2>
                  <p class="mt-3 text-slate-600 leading-7">Responsive desktop and mobile mockups designed to build trust and drive user action.</p>
                </div>
              </div>
              ${buildGrid("portfolio-web", 12, "Website Mockup")}
            </div>

            <div data-portfolio-pane="ecom" class="hidden">
              <div class="flex items-end justify-between gap-6 border-l-4 border-emerald-500 pl-6 mb-8">
                <div class="max-w-2xl">
                  <h2 class="font-display text-3xl sm:text-4xl text-[#0f172a]">E-Commerce <span class="text-emerald-600">UI</span></h2>
                  <p class="mt-3 text-slate-600 leading-7">Product-to-checkout experiences across beauty, fashion, and tech industries.</p>
                </div>
              </div>
              ${buildGrid("portfolio-ecom", 12, "E-Commerce UI")}
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
        We work with founders, marketing teams, and service providers across the <span class="font-extrabold text-blue-600">USA</span>, <span class="font-extrabold text-orange-500">Canada</span>, and <span class="font-extrabold text-emerald-600">worldwide</span>—helping them show up with clarity, credibility, and consistent branding.
        <br/><br/>
        Our mission is simple: <span class="font-bold text-blue-600">make professional design accessible</span>. Many businesses either overspend on branding they can’t maintain, or underinvest and lose trust before a customer ever contacts them. We bridge that gap with streamlined packages, fast turnaround, and a reliable revision process—so you can launch quickly and look established.
        <br/><br/>
        We design with a practical mindset. A logo should scale from a tiny favicon to a storefront sign. A business card should print cleanly and communicate the essentials at a glance. Stationery should support daily operations and reinforce your brand in every document. Websites and e-commerce experiences should guide visitors with strong hierarchy, confident spacing, and clear calls to action.
        <br/><br/>
        You’ll notice a consistent theme across our work: <span class="text-emerald-600 font-bold">clean structure</span>, <span class="text-blue-600 font-bold">modern typography</span>, and <span class="text-orange-500 font-bold">conversion-first layouts</span>. We keep communication email-based to stay organized, document decisions, and deliver fast—especially for remote and international clients.
        <br/><br/>
        Whether you need a single design deliverable or a complete brand system, our goal is to make the process calm and effective. If you’re ready to upgrade how your business looks and converts, request a free quote and we’ll recommend the most efficient path.
      `;

  return `
        <style>
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-reveal { opacity: 0; animation: fadeInUp 0.8s ease-out forwards; }
          .stagger-1 { animation-delay: 0.2s; }
          .stagger-2 { animation-delay: 0.4s; }
          .stagger-3 { animation-delay: 0.6s; }
        </style>

        <div class="animate-reveal">
          ${heroBand({
    kicker: "About True Designs",
    title: "A global design partner built for speed and <span class='text-blue-600'>trust</span>",
    subtitle: "We deliver affordable, high-quality design that helps businesses look credible and convert—serving the USA, Canada, and clients worldwide.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#/pricing",
    secondaryText: "View All Pricing",
    bgGenId: "about-hero-agency"
  })}
        </div>



        <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16 animate-reveal stagger-1">
          <div class="max-w-4xl border-l-4 border-emerald-500 pl-6">
            <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Our mission & <span class="text-emerald-600">expertise</span></h2>
            <p class="mt-5 text-slate-600 leading-8 text-[15px] sm:text-base">
              ${narrative}
            </p>
          </div>

          <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 stagger-2 animate-reveal">
            ${[
      { icon: "bi-patch-check", color: "text-blue-600", title: "High-trust design", desc: "Crisp hierarchy and premium spacing that looks credible." },
      { icon: "bi-arrow-repeat", color: "text-emerald-600", title: "Unlimited revisions", desc: "We refine until it’s right—no revision anxiety." },
      { icon: "bi-clock-history", color: "text-orange-500", title: "Fast delivery", desc: "Timelines that respect your launch schedule." },
      { icon: "bi-globe-americas", color: "text-blue-600", title: "Worldwide support", desc: "Clear, email-based workflow across time zones." },
    ].map(x => `
              <div class="rounded-2xl bg-white border border-slate-100 p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div class="h-11 w-11 rounded-2xl bg-slate-50 flex items-center justify-center ${x.color}">
                  <i class="bi ${x.icon} text-lg"></i>
                </div>
                <div class="mt-4 text-sm font-extrabold text-slate-900">${x.title}</div>
                <div class="mt-2 text-sm text-slate-600 leading-7">${x.desc}</div>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="bg-slate-50/60 border-y border-slate-200/60 animate-reveal stagger-2">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div class="flex items-end justify-between gap-6">
              <div class="max-w-2xl border-l-4 border-orange-500 pl-6">
                <h2 class="font-display text-3xl sm:text-4xl text-slate-900">A small team, big <span class="text-orange-500">output</span></h2>
                <p class="mt-3 text-slate-600 leading-7">
                  Diverse perspectives and consistent quality. We focus on clean execution and reliable delivery.
                </p>
              </div>
              <a href="#/contact" class="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-extrabold text-white hover:opacity-95 shadow-lg shadow-blue-500/20 transition-all">
                Get a Free Quote <i class="bi bi-arrow-right-short text-lg"></i>
              </a>
            </div>

            <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 stagger-3 animate-reveal">
              ${[
      { name: "Creative Director", role: "Brand systems & logo identity", gen: "team-1" },
      { name: "Graphic Designer", role: "Campaign visuals & print-ready files", gen: "team-2" },
      { name: "UI/UX Designer", role: "Web + e-commerce conversion layouts", gen: "team-3" },
      { name: "Production Designer", role: "Exporting, prepress, and delivery", gen: "team-4" },
      { name: "Client Support", role: "Clear communication by email", gen: "team-5" },
    ].map(p => `
                <div class="rounded-2xl bg-white border border-slate-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
                  <div class="aspect-[4/5] bg-slate-100 overflow-hidden">
                    <img data-gen-id="${p.gen}" alt="Agency team portrait: ${p.name}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                  <div class="p-4">
                    <div class="text-sm font-extrabold text-slate-900">${p.name}</div>
                    <div class="mt-1 text-sm text-slate-600 leading-6">${p.role}</div>
                  </div>
                </div>
              `).join("")}
            </div>

            <div class="mt-10 rounded-3xl bg-white border border-slate-100 p-7 sm:p-10 shadow-sm animate-reveal stagger-1">
              <div class="grid gap-7 lg:grid-cols-12 items-start">
                <div class="lg:col-span-5 border-l-4 border-blue-500 pl-6">
                  <div class="text-xs font-extrabold text-blue-600 uppercase tracking-widest">Process</div>
                  <h3 class="font-display mt-2 text-2xl sm:text-3xl text-slate-900">A timeline you can count <span class="text-blue-600">on</span></h3>
                  <p class="mt-3 text-slate-600 leading-7">
                    Our workflow is designed to keep your project moving: clear brief → fast first drafts → organized revisions → production-ready delivery.
                  </p>
                </div>
                <div class="lg:col-span-7">
                  
                  <ol class="grid gap-4 sm:grid-cols-3">
                    ${[
      { t: "Brief", d: "We confirm goals, style, and deliverables.", color: "text-blue-600" },
      { t: "Design", d: "You receive draft options fast; we refine.", color: "text-emerald-600" },
      { t: "Delivery", d: "Final files + exports delivered by email.", color: "text-orange-500" },
    ].map((s, i) => `
                      <li class="rounded-2xl bg-slate-50 border border-slate-100 p-5 group hover:bg-white hover:shadow-md transition-all">
                        <div class="text-xs font-extrabold text-slate-400">0${i + 1}</div>
                        <div class="mt-2 text-sm font-extrabold ${s.color}">${s.t}</div>
                        <div class="mt-1 text-sm text-slate-600 leading-7">${s.d}</div>
                      </li>
                    `).join("")}
                  </ol>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div class="animate-reveal">
          ${ctaBand({
      title: "Let’s make your brand look established—<span class='text-blue-600'>fast.</span>",
      subtitle: "View packages and pricing, or request a free quote. We’ll respond by email with a clear plan and timeline.",
      primaryHref: "#/pricing",
      primaryText: "View All Pricing",
      secondaryHref: "#/contact",
      secondaryText: "Get a Free Quote",
      bg: "from-blue-50 via-white to-orange-50/20"
    })}
        </div>

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

  // Logic for opening/closing the modal
  window.toggleModal = (show) => {
    const modal = document.getElementById('success-modal');
    if (show) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    } else {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = 'auto';
    }
  };

  // Submission logic for Cloudinary + Web3Forms
  window.handleContactFormSubmission = async (event) => {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnContent = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `Sending... <i class="bi bi-hourglass-split ms-2"></i>`;

    try {
      const formData = new FormData(form);
      const fileInput = form.querySelector('input[name="file"]');
      let uploadedFileUrl = "No file attached";

      if (fileInput.files.length > 0) {
        const cloudData = new FormData();
        cloudData.append("file", fileInput.files[0]);
        cloudData.append("upload_preset", "true_designs");

        const cloudRes = await fetch("https://api.cloudinary.com/v1_1/dqfddjoji/image/upload", {
          method: "POST",
          body: cloudData
        });

        if (cloudRes.ok) {
          const cloudJson = await cloudRes.json();
          uploadedFileUrl = cloudJson.secure_url;
        } else {
          throw new Error("Cloudinary upload failed");
        }
      }

      formData.delete("file");
      formData.append("cloudinary_file_url", uploadedFileUrl);
      formData.append("subject", `New Quote Request from ${formData.get("name")}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        form.reset();
        // Track the Lead event with Meta Pixel
        if (typeof fbq === 'function') {
          fbq('track', 'Lead');
          console.log('Meta Pixel: Lead event tracked');
        }
        window.toggleModal(true);
      } else {
        alert("Something went wrong with the submission. Please try again.");
      }

    } catch (error) {
      console.error("Submission Error:", error);
      alert("Error: Could not send message. Please check your connection.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
    }
  };

  return `
        <style>
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            opacity: 0;
            animation: fadeUp 0.8s ease-out forwards;
          }
          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }
        </style>

        <div id="success-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4">
          <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onclick="toggleModal(false)"></div>
          <div class="relative w-full max-w-md transform rounded-3xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div class="flex flex-col items-center text-center">
              <div class="h-20 w-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-6 shadow-inner">
                <i class="bi bi-check-circle-fill text-5xl"></i>
              </div>
              <h3 class="font-display text-2xl font-extrabold text-slate-900">Request Received!</h3>
              <p class="mt-4 text-slate-600 leading-relaxed">
                Thank you for reaching out. We've received your details and will get back to you within 24–72 hours via email.
              </p>
              <button onclick="toggleModal(false)" class="mt-8 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-orange-500 px-6 py-4 text-sm font-extrabold text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                Got it, Thanks!
              </button>
            </div>
          </div>
        </div>

        <section class="relative overflow-hidden min-h-screen">
          <div class="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110" style="background-image: url('assets/images/wide_hero_background_clean_mi_8e6469d7aa8082ee55f889a7fb611990.png');"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white"></div>

          <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10">
            <div class="grid gap-10 lg:grid-cols-12 items-start">
              
              <div class="lg:col-span-5 animate-fade-up">
                <div class="inline-flex items-center gap-2 rounded-full bg-white/80 border border-slate-200/50 px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm">
                  <span class="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 animate-pulse"></span>
                  Contact • Fast response by email
                </div>
                <h1 class="font-display mt-4 text-4xl sm:text-5xl leading-[1.05] text-[#0f172a] tracking-tight">
                  Get Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Free Quote</span> Today
                </h1>
                <p class="mt-5 text-lg leading-8 text-slate-600 animate-fade-up delay-1">
                  Tell us what you need, your timeline, and any style references. We’ll reply with a clear recommendation and next steps.
                </p>

                <div class="mt-7 rounded-2xl bg-white/85 border border-slate-200/60 p-5 shadow-sm animate-fade-up delay-2">
                  <div class="flex items-start gap-3">
                    <div class="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#0f172a]">
                      <i class="bi bi-envelope"></i>
                    </div>
                    <div>
                      <div class="text-sm font-extrabold text-[#0f172a]">Email only</div>
                      <div class="mt-1 text-sm text-slate-600 leading-7">Send details to:</div>
                      <a class="mt-2 inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-extrabold text-[#0f172a] hover:bg-slate-50 hover:border-emerald-500/50 transition-all duration-300" href="mailto:info@td-designs.com">
                        info@td-designs.com <i class="bi bi-arrow-up-right text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="mt-6 grid gap-3 sm:grid-cols-2 animate-fade-up delay-3">
                  <div class="rounded-2xl bg-white/85 border border-slate-200/60 p-5 shadow-sm">
                    <div class="text-sm font-extrabold text-[#0f172a]">Turnaround</div>
                    <p class="mt-2 text-sm text-slate-600 leading-7">Most first drafts are delivered within 24–72 hours.</p>
                  </div>
                  <div class="rounded-2xl bg-white/85 border border-slate-200/60 p-5 shadow-sm">
                    <div class="text-sm font-extrabold text-[#0f172a]">Guarantee</div>
                    <p class="mt-2 text-sm text-slate-600 leading-7">Unlimited revisions so you can finalize with confidence.</p>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-7 animate-fade-up delay-2">
                <div class="rounded-3xl bg-white border border-slate-200/60 shadow-xl overflow-hidden">
                  <div class="px-6 sm:px-8 py-6 border-b border-slate-100 bg-slate-50/30">
                    <div class="text-sm font-extrabold text-[#0f172a]">Request a free quote</div>
                    <div class="mt-1 text-sm text-slate-500">This form sends directly to <span class="font-semibold text-emerald-600">info@td-designs.com</span>.</div>
                  </div>

                  <form class="px-6 sm:px-8 py-6 grid gap-4" onsubmit="handleContactFormSubmission(event)">
                    <input type="hidden" name="access_key" value="dfe2e88d-8860-41d4-a67b-cc2dfe7e9ec6">
                    
                    <div class="grid gap-4 sm:grid-cols-2">
                      <div class="group">
                        <label class="text-xs font-extrabold text-slate-700 group-focus-within:text-emerald-600 transition-colors">Name</label>
                        <input name="name" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="Your name" />
                      </div>
                      <div class="group">
                        <label class="text-xs font-extrabold text-slate-700 group-focus-within:text-emerald-600 transition-colors">Email</label>
                        <input name="email" type="email" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="you@company.com" />
                      </div>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-2">
                      <div class="group">
                        <label class="text-xs font-extrabold text-slate-700 group-focus-within:text-emerald-600 transition-colors">Service</label>
                        <select name="service" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all appearance-none">
                          <option value="" selected disabled>Select a service</option>
                          ${serviceOptions.map(s => `<option value="${s}">${s}</option>`).join("")}
                        </select>
                      </div>
                      <div class="group">
                        <label class="text-xs font-extrabold text-slate-700 group-focus-within:text-emerald-600 transition-colors">Package</label>
                        <select name="package" class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all appearance-none">
                          <option value="" selected>Not sure yet</option>
                          ${packageOptions.map(p => `<option value="${p}">${p}</option>`).join("")}
                        </select>
                      </div>
                    </div>

                    <div class="group">
                      <label class="text-xs font-extrabold text-slate-700 group-focus-within:text-emerald-600 transition-colors">Message</label>
                      <textarea name="message" rows="5" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="Tell us what you need..."></textarea>
                    </div>

                    <div class="group">
                      <label class="text-xs font-extrabold text-slate-700 group-focus-within:text-emerald-600 transition-colors">File upload (optional)</label>
                      <div class="relative mt-2">
                        <input name="file" type="file" class="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 transition-all cursor-pointer" />
                      </div>
                    </div>

                    <div class="mt-2 flex flex-col sm:flex-row gap-4">
                      <button type="submit" class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-orange-500 px-8 py-4 text-sm font-extrabold text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all duration-300 active:scale-95">
                        Send Request <i class="bi bi-send ms-2"></i>
                      </button>
                      <a href="#/pricing" class="inline-flex items-center justify-center rounded-2xl bg-white border border-slate-200 px-8 py-4 text-sm font-extrabold text-[#0f172a] hover:bg-slate-50 transition-all">
                        View All Pricing <i class="bi bi-arrow-up-right text-sm ml-2"></i>
                      </a>
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

// --------- Inlined Components ----------


function PhotoToArtPage() {
  setMeta({
    title: "Turn Your Photos Into Art | Custom Photo to Painting Service",
    description: "Transform your photos into stunning artwork — portraits, pets, weddings, travel & vintage styles. Artist-crafted digital art perfect for gifts and décor. Start now.",
    keywords: "photo to art, picture into painting, custom oil painting from photo, watercolor from photo, pet portraits, wedding photo art, turn photo into canvas",
    canonical: "https://td-designs.com/photo-to-art"
  });

  const photoArtGallery = [
    { title: "Travel Watercolor", src: "assets/images/travel-art.jpg", alt: "Watercolor painting of a beach sunset", tag: "Watercolor", caption: "A serene beach memory turned into soft, painterly art." },
    { title: "Classic Portrait", src: "assets/images/portrait-art.jpg", alt: "Oil painting style portrait", tag: "Oil Style", caption: "Timeless portrait with rich textures and classic lighting." },
    { title: "Pet Pop Art", src: "assets/images/pet-art.jpg", alt: "Colorful pop art dog portrait", tag: "Pop Art", caption: "Vibrant and fun artwork celebrating a beloved pet." },
    { title: "Wedding Fine Art", src: "assets/images/wedding-art.jpg", alt: "Romantic wedding painting", tag: "Fine Art", caption: "Capturing the romance of the big day in elegant brushstrokes." },
    { title: "Vintage Restoration", src: "assets/images/vintage-art.jpg", alt: "Vintage style photo effect", tag: "Vintage", caption: "Nostalgic 1920s style editing for a timeless look." },
    { title: "Scenic Landscape", src: "assets/images/travel-art.jpg", alt: "Landscape painting", tag: "Acrylic", caption: "Transforming nature shots into vibrant acrylic masterpieces." },
    { title: "Family Water Color Painting", src: "assets/images/portrait-art.jpg", alt: "Pencil sketch of family", tag: "Sketch", caption: "Watercolor style digital painting perfect for framing." },
    { title: "Modern Pet Portrait", src: "assets/images/pet-art.jpg", alt: "Modern style pet art", tag: "Modern", caption: "Turn your pet into Origami Style art." },
    { title: "Anniversary Moment", src: "assets/images/wedding-art.jpg", alt: "Anniversary painting", tag: "Oil Style", caption: "Turn your photo into Pixar Style art." }
  ];

  const servicesList = [
    { icon: "bi-airplane", title: "Travel & Scenery", desc: "Turn vacation photos into breathtaking landscapes—watercolors for beaches, oils for mountains." },
    { icon: "bi-person-heart", title: "Portraits & Family", desc: "Museum-quality digital paintings of your loved ones, perfect for framing and gifting." },
    { icon: "bi-paw", title: "Pet Portraits", desc: "Celebrate your furry friends with fun pop art or dignified classic oil styles." },
    { icon: "bi-heart", title: "Weddings", desc: "Preserve your most romantic moments as fine art pieces for your home." },
    { icon: "bi-clock-history", title: "Vintage Style", desc: "Give modern photos a nostalgic, timeless feel inspired by past decades." },
    { icon: "bi-stars", title: "Custom Requests", desc: "Have a unique idea? We can blend styles or create something totally new." }
  ];

  return `
    <main class="page photo-to-art">
      <style>
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal { opacity: 0; animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .hero-gradient-art { background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%); }
      </style>

      <div class="hero-gradient-art">
        ${heroBand({
    kicker: "Turn Memories Into Masterpieces",
    title: "Custom <span class='text-transparent bg-clip-text bg-gradient-to-r from-[#00a99d] to-[#4fd1c5]'>Crafted Digital</span> Art from Your Photos",
    subtitle: "Transform any picture into a stunning oil painting, watercolor, or pop art piece. Professionally designed styling—not just a filter.",
    primaryHref: "#/contact",
    primaryText: "Get a Free Quote",
    secondaryHref: "#portfolio",
    secondaryText: "View Gallery",
    bgGenId: "photo-to-art-hero"
  })}
      </div>

      <!-- Gallery Section -->
      <div id="styles" class="animate-reveal delay-1">
        ${galleryGrid(photoArtGallery, "photo-art")}
      </div>

      <!-- Services & Features -->
      <section class="section py-16 bg-slate-50 border-t border-slate-200 animate-reveal">
        <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="font-display text-3xl sm:text-4xl text-slate-900 mb-4">Art styles for <span class="text-pink-600">every occasion</span></h2>
            <p class="text-lg text-slate-600">Whether it’s a gift, a memory, or decor, we have a style that fits.</p>
          </div>
          
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 delay-1">
            ${servicesList.map(s => `
              <div class="bg-white rounded-2xl p-6 subtle-border hover:-translate-y-1 transition text-left">
                <div class="h-12 w-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl mb-4">
                  <i class="bi ${s.icon}"></i>
                </div>
                <h3 class="font-bold text-slate-900 text-lg mb-2">${s.title}</h3>
                <p class="text-slate-600 text-sm leading-6">${s.desc}</p>
              </div>
            `).join('')}
          </div>

          <div class="mt-16 delay-2">
            ${trustRowHTML()}
          </div>
        </div>
      </section>

      <!-- ================= PRICING ================= -->
      <section class="section pricing py-16 bg-white border-t border-slate-200 animate-reveal">
        <div class="container mx-auto max-w-7xl px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl sm:text-4xl text-slate-900 mb-4">Transparent <span class="text-emerald-600">Pricing Packages</span></h2>
            <p class="text-lg text-slate-600">Choose the perfect style for your custom artwork.</p>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 delay-1">
             ${PRICING_DATA.photoToArt.map(c => pricingCard(c)).join('')}
          </div>
          <p class="text-center mt-8 text-sm text-slate-500">
            Need a custom size or style? 
            <a href="#/contact" class="font-bold text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-2 transition">Get a custom quote</a>
          </p>
        </div>
      </section>
      <!-- ================= WHY US ================= -->
      <section class="section why-us py-16 bg-white">
        <div class="container mx-auto max-w-3xl px-4">
          <h2 class="font-display text-3xl sm:text-4xl text-slate-900 text-center mb-8">Why Choose True Designs?</h2>
          <ul class="space-y-4">
            <li class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <i class="bi bi-check-circle-fill text-emerald-500 text-xl mt-0.5"></i>
              <span class="text-slate-700 font-medium">Professionally crafted artwork — not auto-filters.</span>
            </li>
            <li class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <i class="bi bi-check-circle-fill text-emerald-500 text-xl mt-0.5"></i>
              <span class="text-slate-700 font-medium">Multiple art styles to choose from (Oil, Watercolor, Pop Art, etc).</span>
            </li>
            <li class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <i class="bi bi-check-circle-fill text-emerald-500 text-xl mt-0.5"></i>
              <span class="text-slate-700 font-medium">High-quality, print-ready results delivered digitally.</span>
            </li>
            <li class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <i class="bi bi-check-circle-fill text-emerald-500 text-xl mt-0.5"></i>
              <span class="text-slate-700 font-medium">Ideal for gifts, décor, and personal projects.</span>
            </li>
             <li class="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <i class="bi bi-check-circle-fill text-emerald-500 text-xl mt-0.5"></i>
              <span class="text-slate-700 font-medium">Fast turnaround with attention to detail.</span>
            </li>
          </ul>
          <p class="text-center mt-6 text-slate-600 italic">We don’t just transform photos — we turn memories into art.</p>
        </div>
      </section>

      <!-- ================= FAQ ================= -->
      ${faqHTML([
    { q: "What kinds of photos can be turned into art?", a: "We can transform travel photos, family portraits, couple photos, pets, weddings, vintage shots, and landscape images into custom artwork. It works on almost any clear photo you upload." },
    { q: "What art styles do you offer?", a: "Choose from classic oil-painting styles, expressive watercolors, acrylic flair, digital illustration, pop art, or vintage art effects. You can request a specific art style or ask our artist for creative suggestions." },
    { q: "How do I order my custom artwork?", a: "Simply upload your photo, choose your preferred style and format, and submit your order. We’ll review and create your custom art piece, then deliver the final digital file — and physical canvas print if selected." },
    { q: "What file formats do I receive?", a: "You’ll receive high-resolution digital files (PNG, JPEG, or PDF) suitable for printing, framing, or online sharing. Canvas and print options can be included at checkout." },
    { q: "How long does it take to get my artwork?", a: "Most custom art pieces are completed within 3–7 business days for digital artwork. Physical prints and canvases may take additional time depending on shipping and production." },
    { q: "Can I request changes to my artwork?", a: "Yes — we offer revisions to ensure your artwork matches your vision. Revision policies vary by order tier, and some services include a certain number of adjustments." },
    { q: "Are there size options for canvas prints?", a: "Yes — if you choose a printed canvas, we offer multiple sizes to fit your space and budget. Larger sizes have upgraded pricing." },
    { q: "What makes True Designs’ photo art unique?", a: "Unlike automatic filters, our artwork is crafted by experienced artists who manually interpret your photo into a true art piece — capturing emotion, style, and detail." }
  ])}

      <!-- ================= FINAL CTA ================= -->
      <section class="cta-final py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 border-t border-slate-200">
        <div class="container mx-auto max-w-4xl px-4 text-center">
          <h2 class="font-display text-3xl sm:text-5xl text-slate-900 mb-6">Ready to Turn Your Photo Into Art?</h2>
          <p class="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Upload your photo, choose your preferred style, and let our artists do the rest.<br>
            Create something meaningful, personal, and truly unforgettable.
          </p>
          <a href="#/contact" class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-extrabold text-white hover:bg-black transition shadow-lg">
            Start Your Photo-to-Art Project Today
          </a>
        </div>
      </section>

      ${footerHTML()}
    </main>
    `;
}

// --------- Router ----------
const routes = {
  "/home": HomePage,
  "/": HomePage,
  "/logo-design": LogoDesignPage, "/digital-ads-banner-design": BusinessCardPage, "/custom-tshirt-merch-design": StationeryPage, "/graphic-design": GraphicDesignPage, "/web-design": WebDesignPage,
  "/e-commerce-website": EcommercePage,
  "/photo-to-art": PhotoToArtPage,
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

  // Track SPA page view with Facebook Meta Pixel
  if (typeof fbq === 'function') {
    fbq('track', 'PageView');
  }

  // Set year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize interactive components on each render
  initCarousel();
  initAccordions();
  initGalleries();
  initPricingJump();
  initPortfolioFilters();

  // Inject images (Hero backgrounds, galleries)
  window.injectImages?.();

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

// Global App Controller
window.initAppLogic = () => {
  // 1. Portfolio Tab Switcher Logic
  const tabs = document.querySelectorAll('[data-portfolio-tab]');
  const panes = document.querySelectorAll('[data-portfolio-pane]');

  tabs.forEach(tab => {
    tab.onclick = () => {
      const target = tab.getAttribute('data-portfolio-tab');

      // Reset Tabs
      tabs.forEach(t => t.classList.remove('bg-blue-50', 'border-blue-500', 'text-blue-600'));
      tab.classList.add('bg-blue-50', 'border-blue-500', 'text-blue-600');

      // Switch Panes
      panes.forEach(pane => {
        if (pane.getAttribute('data-portfolio-pane') === target) {
          pane.classList.remove('hidden');
          pane.classList.add('animate-reveal'); // Re-trigger animation
        } else {
          pane.classList.add('hidden');
        }
      });
    };
  });
};

// Call this every time your router changes the page
// Example: document.getElementById('app').innerHTML = PortfolioPage(); window.initAppLogic();
