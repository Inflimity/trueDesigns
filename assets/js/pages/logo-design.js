// pages/logo-design.js - Logo Design service page

import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';
import { heroBand } from '../components/hero.js';
import { pricingCard } from '../components/pricing.js';
import { galleryGrid } from '../components/gallery.js';
import { faqHTML } from '../components/faq.js';
import { ctaBand } from '../components/cta.js';
import { longSEOBlock } from '../components/seo.js';

export default function LogoDesignPage() {
    setMeta({
        title: "Affordable Custom Logo Design | True Designs - USA & Canada",
        description: "Affordable custom logo design for USA, Canada, and worldwide clients. True Designs delivers professional logo concepts, unlimited revisions, and production-ready files with fast turnaround.",
        keywords: "affordable custom logo design USA Canada worldwide, professional logo design services, custom logo packages, vector logo files, brand identity",
        canonical: "https://td-designs.com/logo-design"
    });

    const packages = [
        {
            name: "Logo Design Starter Package",
            price: 99,
            original: 199,
            blurb: "Best for startups that need a clean identity quickly.",
            features: ["2 logo concepts", "Unlimited revisions", "PNG + JPG exports", "1 color palette direction", "24–72h turnaround"],
            popular: false
        },
        {
            name: "Logo Design Professional Package",
            price: 199,
            original: 399,
            blurb: "Ideal balance of variety + strategic refinement.",
            features: ["4 logo concepts", "Unlimited revisions", "AI/EPS vector files", "Black/white + color variants", "Social profile exports"],
            popular: true
        },
        {
            name: "Logo Design Premium Package",
            price: 299,
            original: 599,
            blurb: "For brands that want full launch-ready assets.",
            features: ["6 logo concepts", "Unlimited revisions", "AI/EPS + SVG + print-ready files", "Typography recommendations", "Mini brand guidelines PDF"],
            popular: false
        }
    ];

    const seoHtml = `
    If you're looking for <span class="font-semibold text-slate-900">affordable custom logo design</span> that still feels premium, True Designs was built for you. We work with businesses across the
    <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>—helping new brands launch confidently and established companies refresh their image without wasting time.
    <br/><br/>
    A logo is more than a symbol. It's the first signal of trust. That's why our process emphasizes <span class="font-semibold text-slate-900">clarity</span>, <span class="font-semibold text-slate-900">distinctiveness</span>, and <span class="font-semibold text-slate-900">real-world usability</span>. Your logo must look sharp on a website header, a business card, an invoice, packaging, and social profiles. We design with these real applications in mind, and we deliver exports you can actually use.
    <br/><br/>
    Every package includes <span class="font-semibold text-slate-900">unlimited revisions</span>—because results matter more than arbitrary limits. You'll receive strong initial concepts quickly, then we refine the direction based on your feedback until it fits your brand voice. Need modern minimalist? Bold and energetic? Elegant and high-end? Vintage or emblem style? We can tailor the typography, icon language, spacing, and color approach to match your audience.
    <br/><br/>
    We keep communication streamlined through email, which helps us stay precise, track revisions, and deliver fast. You'll always know what's next and what you'll receive at the end. If you're ready for a <span class="font-semibold text-slate-900">professional logo design service</span> that's affordable and reliable, request a free quote or choose a package below.
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
        { q: "Can you match a specific style (minimal, vintage, luxury)?", a: "Absolutely. Share a few references (or competitors) and we'll tailor typography, icon style, spacing, and color to your audience and niche." },
        { q: "What does unlimited revisions mean in practice?", a: "We revise the chosen direction until you're satisfied—color, layout, icon refinements, and typography adjustments—so the final is truly usable." },
        { q: "Can you design a full brand identity too?", a: "Yes. Start with a logo package, then we can add business cards, stationery, social templates, and web design for a cohesive identity." }
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
        bgGenId: "logo-hero-collage"
    })}

    ${longSEOBlock(seoHtml)}

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
        ${packages.map(p => pricingCard(p)).join('')}
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
}