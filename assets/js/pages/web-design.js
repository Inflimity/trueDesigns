// pages/web-design.js - Web Design service page

import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';
import { heroBand } from '../components/hero.js';
import { pricingCard } from '../components/pricing.js';
import { galleryGrid } from '../components/gallery.js';
import { faqHTML } from '../components/faq.js';
import { ctaBand } from '../components/cta.js';
import { longSEOBlock } from '../components/seo.js';

export default function WebDesignPage() {
    setMeta({
        title: "Affordable Web Design | True Designs - Conversion-Focused Worldwide",
        description: "Affordable web design built for trust and conversions. True Designs serves USA, Canada, and worldwide clients with modern UI, clear hierarchy, and fast turnaround.",
        keywords: "affordable web design USA Canada worldwide, conversion focused web design, professional website design services, responsive web design",
        canonical: "https://td-designs.com/web-design"
    });

    const packages = [
        {
            name: "Web Design Starter Package",
            price: 399,
            original: 799,
            blurb: "A clean, single-page layout for fast launches.",
            features: ["1-page website design (mockup)", "Responsive desktop + mobile", "Unlimited revisions", "Modern UI sections", "Handoff-ready layout"],
            popular: false
        },
        {
            name: "Web Design Professional Package",
            price: 699,
            original: 1299,
            blurb: "Most popular: multi-page design system.",
            features: ["Up to 5 pages (design)", "Responsive desktop + mobile", "Unlimited revisions", "Conversion-first layout", "Style guide components"],
            popular: true
        },
        {
            name: "Web Design Premium Package",
            price: 999,
            original: 1899,
            blurb: "For brands needing deeper pages and polish.",
            features: ["Up to 10 pages (design)", "Responsive + UI component kit", "Unlimited revisions", "Enhanced sections + states", "Priority delivery + handoff notes"],
            popular: false
        }
    ];

    const seoHtml = `
    A website is often the first "sales conversation" your business has with a new customer. If the layout feels cluttered or outdated, trust drops instantly. True Designs provides
    <span class="font-semibold text-slate-900">affordable web design</span> with a focus on clarity and conversion—serving clients in the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>.
    <br/><br/>
    Our approach is simple: we design pages that make it obvious what you do, who you help, and what action to take next. We use strong typography, generous spacing, and a clean visual rhythm so content is easy to scan. This is especially important for service businesses where credibility needs to be established quickly.
    <br/><br/>
    We can design single-page websites for fast launches or multi-page sites with clear navigation, service detail pages, pricing sections, testimonials, and contact flows. Every design is responsive and built to look great on mobile—where most customers will first find you.
    <br/><br/>
    While we focus on the design deliverable, our files are prepared for easy handoff to developers. You'll receive organized layouts and guidance that helps your build go smoother. If you want a conversion-focused site that looks premium and stays affordable, choose a package below or request a free quote.
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
        { q: "Are these packages for design only or full development?", a: "These packages cover web design deliverables (mockups/layouts). If you need a custom build quote, request a free quote and we'll advise based on your stack." },
        { q: "Will my design be mobile responsive?", a: "Yes. We design responsive layouts and provide desktop and mobile views so the site looks polished on all devices." },
        { q: "Can you design multiple pages?", a: "Yes. Our Professional and Premium packages are built for multi-page websites. If you need more pages, we can quote it." },
        { q: "Do you include conversion elements like CTAs and testimonials?", a: "Yes. We design with conversion in mind—clear CTAs, trust badges, testimonial placement, and scannable sections." },
        { q: "Can you match my brand style?", a: "Absolutely. Share your logo, brand colors, and examples you like, and we'll build a cohesive visual direction." }
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
        ${packages.map(p => pricingCard(p)).join('')}
      </div>
    </section>

    ${galleryGrid(galleryItems, "web-gallery")}

    ${faqHTML(faqItems)}

    ${ctaBand({
        title: "Want a website that looks premium and reads clearly?",
        subtitle: "Request a free quote and share your industry + goals. We'll recommend a package and deliver a conversion-focused design.",
        primaryHref: "#/contact",
        primaryText: "Get a Free Quote",
        secondaryHref: "#/pricing#web-design",
        secondaryText: "View Web Pricing",
        bg: "from-teal-50 to-blue-50"
    })}

    ${footerHTML()}
  `;
}