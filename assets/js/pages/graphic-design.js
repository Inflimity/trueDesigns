// pages/graphic-design.js - Graphic Design service page

import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';
import { heroBand } from '../components/hero.js';
import { pricingCard } from '../components/pricing.js';
import { galleryGrid } from '../components/gallery.js';
import { faqHTML } from '../components/faq.js';
import { ctaBand } from '../components/cta.js';
import { longSEOBlock } from '../components/seo.js';

export default function GraphicDesignPage() {
    setMeta({
        title: "Affordable Graphic Design Services | True Designs - USA, Canada & Worldwide",
        description: "Affordable graphic design services for flyers, posters, social media, menus, and more. True Designs serves USA, Canada, and worldwide clients with fast turnaround and unlimited revisions.",
        keywords: "affordable graphic design USA Canada worldwide, flyer design, poster design, social media graphics, infographic design, professional graphic design services",
        canonical: "https://td-designs.com/graphic-design"
    });

    const packages = [
        {
            name: "Graphic Design Starter Package",
            price: 99,
            original: 199,
            blurb: "One design asset, delivered fast and polished.",
            features: ["1 design piece (flyer/post/social)", "Unlimited revisions", "Print or digital sizing", "High-res exports", "Fast turnaround"],
            popular: false
        },
        {
            name: "Graphic Design Professional Package",
            price: 199,
            original: 399,
            blurb: "Most popular: a mini set for campaigns.",
            features: ["3 design pieces", "Unlimited revisions", "Multiple formats (IG/FB/web/print)", "Consistent campaign styling", "Priority delivery"],
            popular: true
        },
        {
            name: "Graphic Design Premium Package",
            price: 299,
            original: 599,
            blurb: "Campaign-ready set for teams and launches.",
            features: ["5 design pieces", "Unlimited revisions", "Source files (where applicable)", "Ad + organic variants", "Brand-consistent system"],
            popular: false
        }
    ];

    const seoHtml = `
    Marketing moves fast—and your visuals need to keep up. True Designs provides <span class="font-semibold text-slate-900">affordable graphic design</span> for businesses in the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>, with a focus on clarity, hierarchy, and results.
    <br/><br/>
    Whether you need event flyers, posters, social media banners, Instagram carousels, menus, YouTube thumbnails, or clean infographics, we design assets that grab attention while staying readable. Great graphics are not just "pretty"—they guide the eye, highlight the offer, and make your brand feel credible.
    <br/><br/>
    Our process is simple: you share your goal, audience, and any brand references; we deliver strong drafts quickly; then we refine based on feedback with unlimited revisions. You'll receive files sized correctly for the platforms you're using, plus high-resolution exports ready to publish or print.
    <br/><br/>
    If you're running a promotion or launching something new, our multi-piece packages make it easy to keep a consistent look across all channels. Choose a package below or request a free quote for ongoing design support.
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
        { q: "What types of graphic design do you offer?", a: "Flyers, posters, menus, social media graphics, ad creatives, infographics, thumbnails, and more. If it's a visual asset, we can design it." },
        { q: "Do you deliver files sized for each platform?", a: "Yes. Tell us where you'll use the designs (Instagram, Facebook, print size, etc.), and we'll provide the correct dimensions." },
        { q: "Can you match my brand guidelines?", a: "Absolutely. Share your brand colors, fonts, and logo, and we'll maintain consistent styling." },
        { q: "Do you include source files?", a: "Premium packages include source files where applicable. If you need a specific file type, request a free quote and we'll confirm." },
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
        ${packages.map(p => pricingCard(p)).join('')}
      </div>
    </section>

    ${galleryGrid(galleryItems, "graphic-gallery")}

    ${faqHTML(faqItems)}

    ${ctaBand({
        title: "Need a campaign that looks consistent everywhere?",
        subtitle: "Get a free quote and tell us what you're promoting. We'll deliver a clean, on-brand system sized for your channels.",
        primaryHref: "#/contact",
        primaryText: "Get a Free Quote",
        secondaryHref: "#/pricing#graphic-design",
        secondaryText: "View Graphic Pricing",
        bg: "from-white to-slate-50"
    })}

    ${footerHTML()}
  `;
}