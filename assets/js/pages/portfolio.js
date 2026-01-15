// pages/portfolio.js - Portfolio page

import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';
import { ctaBand } from '../components/cta.js';

export default function PortfolioPage() {
    setMeta({
        title: "Design Portfolio | True Designs - Worldwide Clients",
        description: "Explore the True Designs portfolio: logos, digital ads & banner design, custom T‑shirt & merch design, graphic design, web design, and e-commerce UX mockups for clients in the USA, Canada & worldwide.",
        keywords: "design portfolio, logo portfolio, digital ads banner design portfolio, custom t-shirt merch design portfolio, graphic design portfolio, web design portfolio, e-commerce design portfolio, USA Canada worldwide",
        canonical: "https://td-designs.com/portfolio"
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
      `).join('')}
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
            <a href="#/pricing" class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-orange-500 px-6 py-4 text-sm sm:text-base font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
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
      <div class="flex flex-wrap gap-2">
        ${[
            ["logos", "Logo Design"],
            ["ads", "Digital Ads &amp; Banners"],
            ["merch", "T‑Shirt &amp; Merch"],
            ["graphics", "Graphic Design"],
            ["web", "Web Design"],
            ["ecom", "E-Commerce UI"]
        ].map(([key, label]) => `
          <button type="button" data-portfolio-tab="${key}"
            class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold border transition bg-white text-slate-800 border-slate-200/70 hover:bg-slate-50">
            <span class="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"></span>
            ${label}
          </button>
        `).join('')}
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
        </div>

        <div data-portfolio-pane="ads" class="hidden">
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
            subtitle: "Choose a package and we'll deliver a consistent banner set with strong hierarchy and clean typography.",
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
        </div>

        <div data-portfolio-pane="graphics" class="hidden">
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
            subtitle: "Tell us the goal, platform, and deadline. We'll deliver designs that are readable and on-brand.",
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
            subtitle: "Choose a web design package and we'll deliver clean, conversion-first layouts for desktop and mobile.",
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
            subtitle: "We'll design a clean storefront experience with strong hierarchy and trust signals that support conversions.",
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
}