// pages/stationery.js - Custom T-Shirt & Merch Design service page

import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';
import { heroBand } from '../components/hero.js';
import { pricingCard } from '../components/pricing.js';
import { galleryGrid } from '../components/gallery.js';
import { faqHTML } from '../components/faq.js';
import { ctaBand } from '../components/cta.js';
import { longSEOBlock } from '../components/seo.js';

export default function StationeryPage() {
    setMeta({
        title: "Affordable Custom T‑Shirt & Merch Design | True Designs - USA, Canada & Worldwide",
        description: "Affordable custom T‑shirt & merch design—print-ready apparel graphics and merch visuals built for strong branding. True Designs serves USA, Canada, and worldwide clients.",
        keywords: "affordable custom t-shirt merch design USA Canada worldwide, t-shirt design, apparel graphics, merch design, print-ready t-shirt files",
        canonical: "https://td-designs.com/custom-tshirt-merch-design"
    });

    const packages = [
        {
            name: "Custom T‑Shirt & Merch Starter Package",
            price: 149,
            original: 299,
            blurb: "One strong shirt graphic, ready for print.",
            features: ["1 concept", "Unlimited revisions", "Front (or back) design", "Print-ready PNG (transparent)", "1-color or full-color option"],
            popular: false
        },
        {
            name: "Custom T‑Shirt & Merch Professional Package",
            price: 229,
            original: 449,
            blurb: "Most popular: front + back or 2 variations.",
            features: ["2 concepts", "Unlimited revisions", "Front + back (or 2 variants)", "Print-ready files (PNG/PDF)", "Placement + sizing guidance"],
            popular: true
        },
        {
            name: "Custom T‑Shirt & Merch Premium Package",
            price: 329,
            original: 649,
            blurb: "Merch-ready set for collections and drops.",
            features: ["3 concepts", "Unlimited revisions", "Up to 3 placements/variants", "Print-ready exports + mockup previews", "Priority turnaround"],
            popular: false
        }
    ];

    const seoHtml = `
    Custom apparel and merch are powerful branding tools—they turn customers into walking advertisements and create a sense of community around your brand.
    True Designs provides <span class="font-semibold text-slate-900">affordable custom T‑shirt &amp; merch design</span> for clients in the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>.
    <br/><br/>
    Our merch designs are built for production: clean vector graphics, proper sizing for different placements (front, back, chest, sleeve), and print-ready file formats. Whether you need streetwear-style graphics, minimal chest logos, event tees, band merch, mascot illustrations, vintage badges, team apparel, or gym statement shirts, we tailor the design to your brand voice and target audience.
    <br/><br/>
    We work with screen printers, DTG services, and POD platforms, so we understand what files you need and how to prepare them. Every design includes unlimited revisions so you can refine colors, typography, placement, and sizing until it's perfect.
    <br/><br/>
    If you're launching a merch line, creating team uniforms, or need custom graphics for an event or promotion, choose a package below or request a free quote for a tailored merch collection.
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
        { q: "What file formats will I receive?", a: "You'll receive print-ready PNG files with transparent backgrounds. Premium packages also include vector files (AI/EPS) if you need them for scalability." },
        { q: "Can you design for different placements (front, back, sleeve)?", a: "Yes. Tell us which placements you need and we'll design accordingly with proper sizing guidance for each location." },
        { q: "Do you work with specific printers or POD platforms?", a: "We design files that work with most screen printers, DTG services, and print-on-demand platforms like Printful, Printify, and CustomCat." },
        { q: "Can you create multiple color variants?", a: "Yes. Premium packages can include colorway variants. For larger collections, request a free quote." },
        { q: "How do I know the sizing will be correct?", a: "We provide placement and sizing guidance with your files, including recommended dimensions for front/back/chest prints based on standard garment sizes." }
    ];

    return `
    ${heroBand({
        kicker: "Custom T‑Shirt &amp; Merch Design • Print-ready apparel graphics",
        title: "Merch designs that look bold and print clean",
        subtitle: "Get custom apparel graphics and merch visuals designed for production—print-ready files, fast turnaround, and unlimited revisions for USA, Canada &amp; worldwide clients.",
        primaryHref: "#merch-packages",
        primaryText: "View Packages",
        secondaryHref: "#/contact",
        secondaryText: "Get a Free Quote",
        bgGenId: "merch-hero-tees"
    })}

    ${longSEOBlock(seoHtml)}

    <section id="merch-packages" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
      <div class="flex items-end justify-between gap-6">
        <div>
          <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Custom T‑Shirt &amp; Merch Design packages</h2>
          <p class="mt-3 text-slate-600 leading-7 max-w-2xl">Affordable packages with print-ready files, unlimited revisions, and PayPal checkout.</p>
        </div>
        <a href="#/pricing#custom-tshirt-merch-design" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
          View all pricing <i class="bi bi-arrow-up-right text-sm"></i>
        </a>
      </div>
      <div class="mt-8 grid gap-5 lg:grid-cols-3">
        ${packages.map(p => pricingCard(p)).join('')}
      </div>
    </section>

    ${galleryGrid(galleryItems, "merch-gallery")}

    ${faqHTML(faqItems)}

    ${ctaBand({
        title: "Ready to launch merch that feels premium?",
        subtitle: "Jump to transparent pricing or request a free quote for multiple SKUs, placements, or a full merch drop. We deliver worldwide.",
        primaryHref: "#/pricing#custom-tshirt-merch-design",
        primaryText: "View Merch Pricing",
        secondaryHref: "#/contact",
        secondaryText: "Get a Free Quote",
        bg: "from-teal-50 to-blue-50"
    })}

    ${footerHTML()}
  `;
}