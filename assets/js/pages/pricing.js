// pages/pricing.js - Pricing overview page

import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';
import { pricingCard } from '../components/pricing.js';
import { ctaBand } from '../components/cta.js';

export default function PricingPage() {
    setMeta({
        title: "All Design Packages & Pricing | True Designs",
        description: "View all True Designs packages and transparent pricing for logo design, digital ads & banner design, custom T‑shirt & merch design, graphic design, web design, and e-commerce—serving USA, Canada & worldwide clients.",
        keywords: "True Designs pricing, affordable custom design packages USA Canada worldwide, logo design pricing, digital ads banner design pricing, custom t-shirt merch design pricing, web design pricing, e-commerce pricing",
        canonical: "https://td-designs.com/pricing"
    });

    const sections = [
        {
            id: "logo-design",
            title: "Logo Design",
            subtitle: "Distinctive identities with production-ready exports.",
            cards: [
                { name: "Logo Design Starter Package", price: 99, original: 199, blurb: "Fast, clean logo concepts for new brands.", features: ["2 logo concepts", "Unlimited revisions", "PNG + JPG", "Color variations", "24–72h turnaround"], popular: false },
                { name: "Logo Design Professional Package", price: 199, original: 399, blurb: "Best for serious brands and stronger options.", features: ["4 logo concepts", "Unlimited revisions", "AI/EPS vector files", "Black/white + color", "Social exports"], popular: true },
                { name: "Logo Design Premium Package", price: 299, original: 599, blurb: "Launch-ready logo system + guidelines.", features: ["6 logo concepts", "Unlimited revisions", "AI/EPS + SVG", "Typography recommendations", "Mini brand guidelines PDF"], popular: false }
            ]
        },
        {
            id: "digital-ads-banner-design",
            title: "Digital Ads & Banner Design",
            subtitle: "High-converting ad creatives sized for every placement.",
            cards: [
                { name: "Digital Ads & Banner Starter Package", price: 99, original: 199, blurb: "One polished ad creative in standard sizes.", features: ["1 ad concept", "Unlimited revisions", "Up to 3 standard sizes", "High-res PNG/JPG exports", "Fast turnaround"], popular: false },
                { name: "Digital Ads & Banner Professional Package", price: 179, original: 349, blurb: "Most popular: a mini banner set for campaigns.", features: ["2 ad concepts", "Unlimited revisions", "Up to 6 sizes (display/social)", "CTA + hierarchy optimization", "Web-ready exports"], popular: true },
                { name: "Digital Ads & Banner Premium Package", price: 249, original: 499, blurb: "For bigger promotions and multi-placement needs.", features: ["3 ad concepts", "Unlimited revisions", "Up to 10 sizes + variants", "Ad set consistency system", "Priority delivery"], popular: false }
            ]
        },
        {
            id: "custom-tshirt-merch-design",
            title: "Custom T‑Shirt & Merch Design",
            subtitle: "Print-ready apparel graphics and merch visuals.",
            cards: [
                { name: "Custom T‑Shirt & Merch Starter Package", price: 149, original: 299, blurb: "One strong shirt graphic, ready for print.", features: ["1 concept", "Unlimited revisions", "Front (or back) design", "Print-ready PNG (transparent)", "1-color or full-color option"], popular: false },
                { name: "Custom T‑Shirt & Merch Professional Package", price: 229, original: 449, blurb: "Most popular: front + back or 2 variations.", features: ["2 concepts", "Unlimited revisions", "Front + back (or 2 variants)", "Print-ready files (PNG/PDF)", "Placement + sizing guidance"], popular: true },
                { name: "Custom T‑Shirt & Merch Premium Package", price: 329, original: 649, blurb: "Merch-ready set for collections and drops.", features: ["3 concepts", "Unlimited revisions", "Up to 3 placements/variants", "Print-ready exports + mockup previews", "Priority turnaround"], popular: false }
            ]
        },
        {
            id: "graphic-design",
            title: "Graphic Design",
            subtitle: "Marketing visuals for social, print, and campaigns.",
            cards: [
                { name: "Graphic Design Starter Package", price: 99, original: 199, blurb: "One polished design asset.", features: ["1 design piece", "Unlimited revisions", "Print/digital sizing", "High-res exports", "Fast delivery"], popular: false },
                { name: "Graphic Design Professional Package", price: 199, original: 399, blurb: "Most popular mini campaign set.", features: ["3 design pieces", "Unlimited revisions", "Multi-format exports", "Consistent styling", "Priority delivery"], popular: true },
                { name: "Graphic Design Premium Package", price: 299, original: 599, blurb: "Campaign-ready set for launches.", features: ["5 design pieces", "Unlimited revisions", "Source files (where applicable)", "Ad + organic variants", "Brand-consistent system"], popular: false }
            ]
        },
        {
            id: "web-design",
            title: "Web Design",
            subtitle: "Responsive, conversion-focused page designs.",
            cards: [
                { name: "Web Design Starter Package", price: 399, original: 799, blurb: "Single-page design for quick launches.", features: ["1-page website design", "Responsive views", "Unlimited revisions", "Modern UI sections", "Handoff-ready"], popular: false },
                { name: "Web Design Professional Package", price: 699, original: 1299, blurb: "Most popular multi-page design system.", features: ["Up to 5 pages (design)", "Responsive views", "Unlimited revisions", "Conversion-first layout", "Component guide"], popular: true },
                { name: "Web Design Premium Package", price: 999, original: 1899, blurb: "Deeper site design with extra polish.", features: ["Up to 10 pages (design)", "UI component kit", "Unlimited revisions", "Enhanced states", "Priority delivery"], popular: false }
            ]
        },
        {
            id: "e-commerce-website",
            title: "E-Commerce Website",
            subtitle: "Product-to-checkout UX that builds trust and sells.",
            cards: [
                { name: "E-Commerce Starter Package", price: 599, original: 1199, blurb: "Core templates for new shops.", features: ["Homepage + collection + PDP", "Cart + checkout concept", "Responsive views", "Unlimited revisions", "Conversion-first layout"], popular: false },
                { name: "E-Commerce Professional Package", price: 999, original: 1899, blurb: "Most popular full store design flow.", features: ["Up to 7 templates (design)", "Homepage, collection, PDP", "Cart + checkout + account", "Responsive views", "UI kit + style guide"], popular: true },
                { name: "E-Commerce Premium Package", price: 1499, original: 2799, blurb: "Scaling-ready UX depth.", features: ["Up to 12 templates (design)", "Enhanced PDP modules", "Promo/upsell components", "UI kit + handoff notes", "Priority delivery"], popular: false }
            ]
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
          `).join('')}
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
            ${s.cards.map(c => pricingCard(c)).join('')}
          </div>

          ${idx < sections.length - 1 ? '<div class="mt-12 border-b border-slate-200/70"></div>' : ''}
        </div>
      </section>
    `).join('')}

    ${ctaBand({
        title: "Not sure which package fits?",
        subtitle: "Request a free quote and tell us your goals. We'll recommend the best option and keep everything simple by email.",
        primaryHref: "#/contact",
        primaryText: "Get a Free Quote",
        secondaryHref: "#/portfolio",
        secondaryText: "View Portfolio",
        bg: "from-teal-50 to-blue-50"
    })}

    ${footerHTML()}
  `;
}