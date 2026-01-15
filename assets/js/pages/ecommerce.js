// pages/ecommerce.js - E-Commerce Website service page

import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';
import { heroBand } from '../components/hero.js';
import { pricingCard } from '../components/pricing.js';
import { galleryGrid } from '../components/gallery.js';
import { faqHTML } from '../components/faq.js';
import { ctaBand } from '../components/cta.js';
import { longSEOBlock } from '../components/seo.js';

export default function EcommercePage() {
    setMeta({
        title: "Affordable E-Commerce Website Design | True Designs - USA, Canada & Worldwide",
        description: "Affordable e-commerce website design with product, cart, and checkout-focused UX. True Designs serves USA, Canada, and worldwide businesses with conversion-first layouts.",
        keywords: "affordable e-commerce website design USA Canada worldwide, online store design, product page design, checkout flow UX, professional ecommerce design services",
        canonical: "https://td-designs.com/e-commerce-website"
    });

    const packages = [
        {
            name: "E-Commerce Starter Package",
            price: 599,
            original: 1199,
            blurb: "A clean storefront foundation for new shops.",
            features: ["Homepage + collection + PDP (design)", "Cart + checkout concept", "Responsive desktop + mobile", "Unlimited revisions", "Conversion-first layout"],
            popular: false
        },
        {
            name: "E-Commerce Professional Package",
            price: 999,
            original: 1899,
            blurb: "Most popular: complete store design flow.",
            features: ["Up to 7 templates (design)", "Homepage, collection, PDP", "Cart + checkout + account", "Responsive views", "UI components + style guide"],
            popular: true
        },
        {
            name: "E-Commerce Premium Package",
            price: 1499,
            original: 2799,
            blurb: "For brands scaling with stronger UX depth.",
            features: ["Up to 12 templates (design)", "Enhanced PDP modules", "Promo/upsell components", "UI kit + handoff notes", "Priority delivery"],
            popular: false
        }
    ];

    const seoHtml = `
    For online stores, design is directly tied to revenue. Product pages must feel trustworthy, collections must be easy to scan, and checkout must be frictionless. True Designs offers
    <span class="font-semibold text-slate-900">affordable e-commerce website design</span> for businesses in the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>, built around a conversion-first structure.
    <br/><br/>
    We design key templates such as your homepage, collection pages, product detail pages (PDP), cart, and checkout. Our layouts prioritize product clarity, strong hierarchy, trust signals (reviews, shipping/returns, guarantees), and a clean visual rhythm. Whether you sell fashion, food, electronics, beauty, or home goods, we tailor the UI to match your market and price point.
    <br/><br/>
    Unlimited revisions are included so you can refine details like product modules, image ratios, typography, badge placement, and call-to-action language. You'll get responsive designs for desktop and mobile, plus a reusable component approach that makes development smoother.
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
        { q: "Do these packages include Shopify/WooCommerce development?", a: "These packages cover design deliverables (templates, layouts, UI system). If you need full development, request a free quote and we'll scope it." },
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
        ${packages.map(p => pricingCard(p)).join('')}
      </div>
    </section>

    ${galleryGrid(galleryItems, "ecom-gallery")}

    ${faqHTML(faqItems)}

    ${ctaBand({
        title: "Ready to make your store feel premium?",
        subtitle: "Request a free quote and share your products, target audience, and platform. We'll recommend the best package for your launch.",
        primaryHref: "#/contact",
        primaryText: "Get a Free Quote",
        secondaryHref: "#/pricing#e-commerce-website",
        secondaryText: "View E-Commerce Pricing",
        bg: "from-white to-slate-50"
    })}

    ${footerHTML()}
  `;
}