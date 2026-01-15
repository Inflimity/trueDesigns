// pages/about.js - About page

import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';
import { heroBand } from '../components/hero.js';
import { ctaBand } from '../components/cta.js';

export default function AboutPage() {
    setMeta({
        title: "About True Designs - Your Global Design Partner",
        description: "Learn about True Designs: our mission, expertise, and process for delivering affordable, high-quality custom design services to clients in the USA, Canada, and worldwide.",
        keywords: "about True Designs, global design partner, affordable design agency USA Canada worldwide, professional design services",
        canonical: "https://td-designs.com/about-us"
    });

    const narrative = `
    True Designs is a conversion-focused design agency built for businesses that want premium-looking creative without premium complexity.
    We work with founders, marketing teams, and service providers across the <span class="font-semibold text-slate-900">USA</span>, <span class="font-semibold text-slate-900">Canada</span>, and <span class="font-semibold text-slate-900">worldwide</span>—helping them show up with clarity, credibility, and consistent branding.
    <br/><br/>
    Our mission is simple: <span class="font-semibold text-slate-900">make professional design accessible</span>. Many businesses either overspend on branding they can't maintain, or underinvest and lose trust before a customer ever contacts them. We bridge that gap with streamlined packages, fast turnaround, and a reliable revision process—so you can launch quickly and look established.
    <br/><br/>
    We design with a practical mindset. A logo should scale from a tiny favicon to a storefront sign. A business card should print cleanly and communicate the essentials at a glance. Stationery should support daily operations and reinforce your brand in every document. Websites and e-commerce experiences should guide visitors with strong hierarchy, confident spacing, and clear calls to action.
    <br/><br/>
    You'll notice a consistent theme across our work: <span class="font-semibold text-slate-900">clean structure</span>, <span class="font-semibold text-slate-900">modern typography</span>, and <span class="font-semibold text-slate-900">conversion-first layouts</span>. We keep communication email-based to stay organized, document decisions, and deliver fast—especially for remote and international clients.
    <br/><br/>
    Whether you need a single design deliverable or a complete brand system, our goal is to make the process calm and effective. If you're ready to upgrade how your business looks and converts, request a free quote and we'll recommend the most efficient path.
  `;

    return `
    ${heroBand({
        kicker: "About True Designs",
        title: "A global design partner built for speed and trust",
        subtitle: "We deliver affordable, high-quality design that helps businesses look credible and convert—serving the USA, Canada, and clients worldwide.",
        primaryHref: "#/contact",
        primaryText: "Get a Free Quote",
        secondaryHref: "#/pricing",
        secondaryText: "View All Pricing",
        bgGenId: "about-hero-agency"
    })}

    <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
      <div class="max-w-4xl">
        <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Our mission & expertise</h2>
        <p class="mt-5 text-slate-600 leading-8 text-[15px] sm:text-base">
          ${narrative}
        </p>
      </div>

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        ${[
            { icon: "bi-patch-check", title: "High-trust design", desc: "Crisp hierarchy and premium spacing that looks credible." },
            { icon: "bi-arrow-repeat", title: "Unlimited revisions", desc: "We refine until it's right—no revision anxiety." },
            { icon: "bi-clock-history", title: "Fast delivery", desc: "Timelines that respect your launch schedule." },
            { icon: "bi-globe-americas", title: "Worldwide support", desc: "Clear, email-based workflow across time zones." },
        ].map(x => `
          <div class="rounded-2xl bg-white subtle-border p-6 hover:-translate-y-1 transition transform">
            <div class="h-11 w-11 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900">
              <i class="bi ${x.icon}"></i>
            </div>
            <div class="mt-4 text-sm font-extrabold text-slate-900">${x.title}</div>
            <div class="mt-2 text-sm text-slate-600 leading-7">${x.desc}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Team strip -->
    <section class="bg-slate-50/60 border-y border-slate-200/60">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div class="flex items-end justify-between gap-6">
          <div class="max-w-2xl">
            <h2 class="font-display text-3xl sm:text-4xl text-slate-900">A small team, big output</h2>
            <p class="mt-3 text-slate-600 leading-7">
              Diverse perspectives and consistent quality. We focus on clean execution and reliable delivery.
            </p>
          </div>
          <a href="#/contact" class="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-orange-500 px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-95 transition">
            Get a Free Quote <i class="bi bi-arrow-right-short text-lg"></i>
          </a>
        </div>

        <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          ${[
            { name: "Creative Director", role: "Brand systems & logo identity", gen: "team-1" },
            { name: "Graphic Designer", role: "Campaign visuals & print-ready files", gen: "team-2" },
            { name: "UI/UX Designer", role: "Web + e-commerce conversion layouts", gen: "team-3" },
            { name: "Production Designer", role: "Exporting, prepress, and delivery", gen: "team-4" },
            { name: "Client Support", role: "Clear communication by email", gen: "team-5" },
        ].map(p => `
            <div class="rounded-2xl bg-white subtle-border overflow-hidden hover:-translate-y-1 transition transform">
              <div class="aspect-[4/5] bg-slate-100">
                <img data-gen-id="${p.gen}" alt="Agency team portrait: ${p.name}" class="w-full h-full object-cover" />
              </div>
              <div class="p-4">
                <div class="text-sm font-extrabold text-slate-900">${p.name}</div>
                <div class="mt-1 text-sm text-slate-600 leading-6">${p.role}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="mt-10 rounded-3xl bg-white subtle-border p-7 sm:p-10">
          <div class="grid gap-7 lg:grid-cols-12 items-start">
            <div class="lg:col-span-5">
              <div class="text-xs font-extrabold text-teal-700">Process</div>
              <h3 class="font-display mt-2 text-2xl sm:text-3xl text-slate-900">A timeline you can count on</h3>
              <p class="mt-3 text-slate-600 leading-7">
                Our workflow is designed to keep your project moving: clear brief → fast first drafts → organized revisions → production-ready delivery.
              </p>
            </div>
            <div class="lg:col-span-7">
              <ol class="grid gap-4 sm:grid-cols-3">
                ${[
            { t: "Brief", d: "We confirm goals, style, and deliverables." },
            { t: "Design", d: "You receive draft options fast; we refine." },
            { t: "Delivery", d: "Final files + exports delivered by email." },
        ].map((s, i) => `
                  <li class="rounded-2xl bg-slate-50 subtle-border p-5">
                    <div class="text-xs font-extrabold text-slate-500">0${i + 1}</div>
                    <div class="mt-2 text-sm font-extrabold text-slate-900">${s.t}</div>
                    <div class="mt-1 text-sm text-slate-600 leading-7">${s.d}</div>
                  </li>
                `).join('')}
              </ol>
            </div>
          </div>
        </div>

      </div>
    </section>

    ${ctaBand({
            title: "Let's make your brand look established—fast.",
            subtitle: "View packages and pricing, or request a free quote. We'll respond by email with a clear plan and timeline.",
            primaryHref: "#/pricing",
            primaryText: "View All Pricing",
            secondaryHref: "#/contact",
            secondaryText: "Get a Free Quote",
            bg: "from-teal-50 to-blue-50"
        })}

    ${footerHTML()}
  `;
}