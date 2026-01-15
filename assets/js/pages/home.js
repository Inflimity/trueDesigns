// pages/home.js - Home page

import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';
import { heroBand } from '../components/hero.js';
import { pricingCard, trustRowHTML } from '../components/pricing.js';
import { ctaBand } from '../components/cta.js';

export default function HomePage() {
    setMeta({
        title: "True Designs - Affordable Custom Design Services | USA, Canada & Worldwide",
        description: "True Designs delivers affordable, high-quality custom design services—logos, digital ads & banner design, custom T‑shirt & merch design, graphics, web design, and e-commerce—serving clients in the USA, Canada, and worldwide. Fast turnaround and 100% satisfaction guaranteed.",
        keywords: "affordable custom design services USA Canada worldwide, professional logo design services, digital ads banner design, custom t-shirt merch design, graphic design, web design, e-commerce website",
        canonical: "https://td-designs.com/"
    });

    const logoPackages = [
        {
            name: "Logo Design Starter Package",
            price: 99,
            original: 199,
            blurb: "Clean, modern logo concepts—fast and affordable.",
            features: [
                "2 custom logo concepts",
                "Unlimited revisions",
                "High-res PNG + JPG",
                "Color variations",
                "Delivery in 24–72 hours"
            ],
            popular: false
        },
        {
            name: "Logo Design Professional Package",
            price: 199,
            original: 399,
            blurb: "Best for growing brands that need stronger options.",
            features: [
                "4 custom logo concepts",
                "Unlimited revisions",
                "AI / EPS vector + PNG + JPG",
                "Brand color palette guidance",
                "Social media-ready exports"
            ],
            popular: true
        },
        {
            name: "Logo Design Premium Package",
            price: 299,
            original: 599,
            blurb: "Full identity-ready deliverables for serious launches.",
            features: [
                "6 custom logo concepts",
                "Unlimited revisions",
                "AI / EPS + SVG + print files",
                "Typography recommendations",
                "Mini brand guidelines PDF"
            ],
            popular: false
        }
    ];

    const services = [
        {
            title: "Logo Design",
            desc: "Distinctive identity that looks credible everywhere.",
            href: "#/pricing#logo-design",
            img: "home-service-logo",
            icon: "bi-bezier2"
        },
        {
            title: "Digital Ads &amp; Banner Design",
            desc: "Scroll-stopping creatives for campaigns and promotions.",
            href: "#/pricing#digital-ads-banner-design",
            img: "home-service-card",
            icon: "bi-badge-ad"
        },
        {
            title: "Custom T‑Shirt &amp; Merch Design",
            desc: "Bold, print-ready apparel graphics and merch visuals.",
            href: "#/pricing#custom-tshirt-merch-design",
            img: "home-service-merch",
            icon: "bi-tshirt"
        },
        {
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
        ${logoPackages.map(p => pricingCard(p)).join('')}
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
          `).join('')}
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
            `).join('')}
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
            <p class="mt-3 text-slate-600 leading-7">A few words from businesses we've helped across the USA, Canada, and worldwide.</p>
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
                        "${t.quote}"
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
              `).join('')}
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
          `).join('')}
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
}