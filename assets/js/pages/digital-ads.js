// pages/digital-ads.js - Digital Ads & Banner Design service page

import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';
import { heroBand } from '../components/hero.js';
import { pricingCard } from '../components/pricing.js';
import { galleryGrid } from '../components/gallery.js';
import { faqHTML } from '../components/faq.js';
import { ctaBand } from '../components/cta.js';
import { longSEOBlock } from '../components/seo.js';

export default function DigitalAdsPage() {
    setMeta({
        title: "Affordable Digital Ads & Banner Design | True Designs - USA, Canada & Worldwide",
        description: "Affordable digital ads & banner design with high-converting creatives sized for web, display, and social placements. True Designs serves USA, Canada, and worldwide clients with fast turnaround and unlimited revisions.",
        keywords: "affordable digital ads banner design USA Canada worldwide, display ad design, banner ad design, social media ad creatives, high converting ad creative",
        canonical: "https://td-designs.com/digital-ads-banner-design"
    });

    const packages = [
        {
            name: "Digital Ads & Banner Starter Package",
            price: 99,
            original: 199,
            blurb: "One polished ad creative in standard sizes.",
            features: ["1 ad concept", "Unlimited revisions", "Up to 3 standard sizes", "High-res PNG/JPG exports", "Fast turnaround"],
            popular: false
        },
        {
            name: "Digital Ads & Banner Professional Package",
            price: 179,
            original: 349,
            blurb: "Most popular: a mini banner set for campaigns.",
            features: ["2 ad concepts", "Unlimited revisions", "Up to 6 sizes (display/social)", "CTA + hierarchy optimization", "Web-ready exports"],
            popular: true
        },
        {
            name: "Digital Ads & Banner Premium Package",
            price: 249,
            original: 499,
            blurb: "For bigger promotions and multi-placement needs.",
            features: ["3 ad concepts", "Unlimited revisions", "Up to 10 sizes + variants", "Ad set consistency system", "Priority delivery"],
            popular: false
        }
    ];

    const seoHtml = `
    Your ad creative is often the first impression of your offer—so it needs to communicate value fast. True Designs provides
    <span class="font-semibold text-slate-900">affordable digital ads &amp; banner design</span> for businesses in the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>, with a workflow that's simple and fast.
    <br/><br/>
    We design ad creatives that are built for performance: clear hierarchy, readable typography at small sizes, and strong CTAs. Whether you're running
    Google Display, website hero banners, Facebook/Instagram promos, LinkedIn ads, or retargeting campaigns, we'll deliver properly sized exports that match your placements.
    <br/><br/>
    Unlimited revisions are included so you don't get stuck with "almost right." We'll refine the layout, messaging emphasis, colors, and CTA treatment until the creative feels sharp and conversion-ready.
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
        { q: "Can you match my brand guidelines?", a: "Absolutely. Share your logo, fonts, colors, and any examples, and we'll keep the campaign consistent." },
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
        ${packages.map(p => pricingCard(p)).join('')}
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
}