// components/faq.js - FAQ component

export const faqHTML = (items) => `
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
    <div class="grid gap-10 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <h2 class="font-display text-3xl sm:text-4xl text-slate-900">FAQ</h2>
        <p class="mt-3 text-slate-600 leading-7">
          Clear answers to the questions we get most. If you have a unique request, email us and we'll tailor a quote quickly.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="#/contact" class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-orange-500 px-4 py-3 text-sm font-extrabold text-white hover:opacity-95 transition">
            Get a Free Quote
          </a>
          <a href="#/pricing" class="inline-flex items-center justify-center rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
            View All Pricing
          </a>
        </div>
      </div>
      <div class="lg:col-span-7">
        <div class="rounded-2xl bg-white subtle-border overflow-hidden" data-accordion>
          ${items.map((it, idx) => `
            <div class="border-b border-slate-200/70 last:border-b-0" data-acc-item>
              <button class="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                data-acc-btn aria-expanded="${idx === 0 ? 'true' : 'false'}" type="button">
                <div class="text-sm sm:text-base font-extrabold text-slate-900">${it.q}</div>
                <i class="bi bi-plus-lg text-slate-500"></i>
              </button>
              <div class="px-5 sm:px-6 pb-5 ${idx === 0 ? '' : 'hidden'}" data-acc-panel>
                <div class="text-sm text-slate-600 leading-7">${it.a}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </section>
`;