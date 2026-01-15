// pages/contact.js - Contact page

import { setMeta } from '../utils/helper.js';
import { footerHTML } from '../components/footer.js';

export default function ContactPage() {
    setMeta({
        title: "Contact True Designs | Get a Free Quote",
        description: "Contact True Designs to get a free quote for logo design, business cards, stationery, graphic design, web design, or e-commerce. Serving USA, Canada & worldwide clients. Email: info@td-designs.com.",
        keywords: "contact True Designs, get a free quote, affordable custom design USA Canada worldwide, logo design quote, web design quote",
        canonical: "https://td-designs.com/contact"
    });

    const serviceOptions = [
        "Logo Design",
        "Digital Ads & Banner Design",
        "Custom T‑Shirt & Merch Design",
        "Graphic Design",
        "Web Design",
        "E-Commerce Website"
    ];

    const packageOptions = [
        "Logo Design Starter Package",
        "Logo Design Professional Package",
        "Logo Design Premium Package",
        "Digital Ads & Banner Starter Package",
        "Digital Ads & Banner Professional Package",
        "Digital Ads & Banner Premium Package",
        "Custom T‑Shirt & Merch Starter Package",
        "Custom T‑Shirt & Merch Professional Package",
        "Custom T‑Shirt & Merch Premium Package",
        "Graphic Design Starter Package",
        "Graphic Design Professional Package",
        "Graphic Design Premium Package",
        "Web Design Starter Package",
        "Web Design Professional Package",
        "Web Design Premium Package",
        "E-Commerce Starter Package",
        "E-Commerce Professional Package",
        "E-Commerce Premium Package"
    ];

    return `
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('assets/images/wide_hero_background_clean_mi_8e6469d7aa8082ee55f889a7fb611990.png'); background-size: cover; background-position: center;"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10">
        <div class="grid gap-10 lg:grid-cols-12 items-start">
          <div class="lg:col-span-5">
            <div class="inline-flex items-center gap-2 rounded-full bg-white/80 subtle-border px-3 py-1.5 text-xs font-extrabold text-slate-700">
              <span class="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"></span>
              Contact • Fast response by email
            </div>
            <h1 class="font-display mt-4 text-4xl sm:text-5xl leading-[1.05] text-slate-900">Get Your Free Quote Today</h1>
            <p class="mt-5 text-lg leading-8 text-slate-600">
              Tell us what you need, your timeline, and any style references. We'll reply with a clear recommendation and next steps.
            </p>

            <div class="mt-7 rounded-2xl bg-white/85 subtle-border p-5">
              <div class="flex items-start gap-3">
                <div class="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900">
                  <i class="bi bi-envelope"></i>
                </div>
                <div>
                  <div class="text-sm font-extrabold text-slate-900">Email only</div>
                  <div class="mt-1 text-sm text-slate-600 leading-7">Send details to:</div>
                  <a class="mt-2 inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-extrabold text-slate-900 hover:bg-slate-50 transition" href="mailto:info@td-designs.com">
                    info@td-designs.com <i class="bi bi-arrow-up-right text-sm"></i>
                  </a>
                  <div class="mt-3 text-xs text-slate-500">No phone numbers—everything stays clear, documented, and fast.</div>
                </div>
              </div>
            </div>

            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              <div class="rounded-2xl bg-white/85 subtle-border p-5">
                <div class="text-sm font-extrabold text-slate-900">Turnaround</div>
                <p class="mt-2 text-sm text-slate-600 leading-7">Most first drafts are delivered within 24–72 hours depending on scope.</p>
              </div>
              <div class="rounded-2xl bg-white/85 subtle-border p-5">
                <div class="text-sm font-extrabold text-slate-900">Guarantee</div>
                <p class="mt-2 text-sm text-slate-600 leading-7">Unlimited revisions so you can finalize with confidence.</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="rounded-3xl bg-white subtle-border soft-shadow overflow-hidden">
              <div class="px-6 sm:px-8 py-6 border-b border-slate-200/70">
                <div class="text-sm font-extrabold text-slate-900">Request a free quote</div>
                <div class="mt-1 text-sm text-slate-600">This form sends directly to <span class="font-semibold">info@td-designs.com</span>.</div>
              </div>

              <form class="px-6 sm:px-8 py-6 grid gap-4" action="mailto:info@td-designs.com" method="post" enctype="multipart/form-data">
                <div class="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label class="text-xs font-extrabold text-slate-700">Name</label>
                    <input name="name" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring" placeholder="Your name" />
                  </div>
                  <div>
                    <label class="text-xs font-extrabold text-slate-700">Email</label>
                    <input name="email" type="email" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring" placeholder="you@company.com" />
                  </div>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label class="text-xs font-extrabold text-slate-700">Service</label>
                    <select name="service" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring">
                      <option value="" selected disabled>Select a service</option>
                      ${serviceOptions.map(s => `<option value="${s}">${s}</option>`).join('')}
                    </select>
                  </div>
                  <div>
                    <label class="text-xs font-extrabold text-slate-700">Package</label>
                    <select name="package" class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring">
                      <option value="" selected>Not sure yet</option>
                      ${packageOptions.map(p => `<option value="${p}">${p}</option>`).join('')}
                    </select>
                  </div>
                </div>

                <div>
                  <label class="text-xs font-extrabold text-slate-700">Message</label>
                  <textarea name="message" rows="6" required class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring" placeholder="Tell us what you need, your style preferences, and your deadline."></textarea>
                  <div class="mt-2 text-xs text-slate-500">Tip: Include industry, preferred style (minimal/bold/luxury/vintage), and any competitors.</div>
                </div>

                <div>
                  <label class="text-xs font-extrabold text-slate-700">File upload (optional)</label>
                  <input name="file" type="file" class="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm td-ring" />
                  <div class="mt-2 text-xs text-slate-500">You can attach your logo, references, or existing brand assets.</div>
                </div>

                <div class="mt-2 flex flex-col sm:flex-row gap-3">
                  <button type="submit" class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-orange-500 px-6 py-4 text-sm font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
                    Send Request <i class="bi bi-send ms-2"></i>
                  </button>
                  <a href="#/pricing" class="inline-flex items-center justify-center rounded-2xl bg-white subtle-border px-6 py-4 text-sm font-extrabold text-slate-900 hover:bg-slate-50 transition">
                    View All Pricing <i class="bi bi-arrow-up-right text-sm ml-2"></i>
                  </a>
                </div>

                <div class="rounded-2xl bg-slate-50 subtle-border p-5 mt-2">
                  <div class="text-sm font-extrabold text-slate-900">Reassurance</div>
                  <ul class="mt-3 space-y-2 text-sm text-slate-700">
                    <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Unlimited revisions on selected direction</li>
                    <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Fast email-based updates (no phone calls)</li>
                    <li class="flex gap-2"><i class="bi bi-check2-circle text-emerald-600 mt-0.5"></i>Production-ready files and exports</li>
                  </ul>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

    ${footerHTML()}
  `;
}