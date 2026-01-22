// components/cta.js - CTA band component

export const ctaBand = ({ title, subtitle, primaryHref, primaryText, secondaryHref, secondaryText, bg = "from-teal-50 to-teal-100" }) => `
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
    <div class="rounded-3xl border border-slate-200/70 bg-gradient-to-r ${bg} p-7 sm:p-10 overflow-hidden relative">
      <div class="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/40 blur-2xl"></div>
      <div class="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-white/35 blur-2xl"></div>

      <div class="relative grid gap-8 lg:grid-cols-12 items-center">
        <div class="lg:col-span-8">
          <h3 class="font-display text-3xl sm:text-4xl text-slate-900">${title}</h3>
          <p class="mt-3 text-slate-700 leading-7 max-w-2xl">${subtitle}</p>
        </div>
        <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:justify-end">
          <a href="${primaryHref}" class="inline-flex items-center justify-center rounded-2xl bg-[#00a99d] px-6 py-4 text-sm font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
            ${primaryText} <i class="bi bi-arrow-right-short text-xl ml-1"></i>
          </a>
          <a href="${secondaryHref}" class="inline-flex items-center justify-center rounded-2xl bg-white/80 subtle-border px-6 py-4 text-sm font-extrabold text-slate-900 hover:bg-white transition">
            ${secondaryText} <i class="bi bi-arrow-up-right text-sm ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
`;