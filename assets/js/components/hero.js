// components/hero.js - Hero band component

export const heroBand = ({ kicker, title, subtitle, primaryHref, primaryText, secondaryHref, secondaryText, bgGenId }) => `
  <section class="relative overflow-hidden">
    <div data-bg-gen-id="${bgGenId}" class="absolute inset-0 bg-cover bg-center"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/85 to-white"></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 lg:pb-16">
      <div class="grid gap-10 lg:grid-cols-12 items-center">
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 rounded-full bg-white/80 subtle-border px-3 py-1.5 text-xs font-extrabold text-slate-700">
            <span class="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"></span>
            ${kicker}
          </div>
          <h1 class="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.03] text-slate-900">
            ${title}
          </h1>
          <p class="mt-5 text-lg sm:text-xl leading-8 text-slate-600 max-w-2xl">
            ${subtitle}
          </p>
          <div class="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="${primaryHref}" class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-orange-500 px-6 py-4 text-sm sm:text-base font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
              ${primaryText} <i class="bi bi-arrow-right-short text-xl ml-1"></i>
            </a>
            ${secondaryHref ? `
              <a href="${secondaryHref}" class="inline-flex items-center justify-center rounded-2xl bg-white/90 subtle-border px-6 py-4 text-sm sm:text-base font-extrabold text-slate-900 hover:bg-white transition">
                ${secondaryText} <i class="bi bi-arrow-up-right text-sm ml-2"></i>
              </a>
            ` : ''}
          </div>

          <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
            ${[
        { label: "Avg. delivery", value: "24–72h" },
        { label: "Revisions", value: "Unlimited" },
        { label: "Clients served", value: "Worldwide" },
        { label: "Guarantee", value: "100%" },
    ].map(s => `
              <div class="rounded-2xl bg-white/85 subtle-border p-3">
                <div class="text-xs text-slate-500 font-bold">${s.label}</div>
                <div class="mt-1 text-sm font-extrabold text-slate-900">${s.value}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="rounded-3xl bg-white/80 subtle-border soft-shadow overflow-hidden">
            <div class="p-5 sm:p-6">
              <div class="flex items-center justify-between">
                <div class="text-sm font-extrabold text-slate-900">What you get</div>
                <div class="text-xs font-bold text-slate-500">USA • Canada • Worldwide</div>
              </div>
              <div class="mt-4 grid gap-3">
                ${[
        { icon: "bi-magic", title: "Bespoke creative", desc: "Designed to match your market and brand tone." },
        { icon: "bi-check2-square", title: "Production-ready", desc: "Files prepared for web + print from day one." },
        { icon: "bi-graph-up-arrow", title: "Conversion-focused", desc: "Clear hierarchy that builds trust quickly." }
    ].map(x => `
                  <div class="rounded-2xl bg-white subtle-border p-4 hover:bg-slate-50 transition">
                    <div class="flex gap-3">
                      <div class="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-800">
                        <i class="bi ${x.icon}"></i>
                      </div>
                      <div>
                        <div class="text-sm font-extrabold text-slate-900">${x.title}</div>
                        <div class="mt-0.5 text-sm text-slate-600 leading-6">${x.desc}</div>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="mt-5 rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 border border-slate-200/60 p-4">
                <div class="flex items-start gap-3">
                  <i class="bi bi-shield-check text-teal-700 mt-0.5"></i>
                  <div>
                    <div class="text-sm font-extrabold text-slate-900">Satisfaction Guarantee</div>
                    <div class="text-sm text-slate-700 leading-6">If you're not happy, we keep refining until you are—simple and documented by email.</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="mt-4 grid grid-cols-3 gap-3">
            ${[
        { k: "Design-first", v: "Modern layout" },
        { k: "Fast", v: "Clear milestones" },
        { k: "Trusted", v: "Real deliverables" },
    ].map(m => `
              <div class="rounded-2xl bg-white/85 subtle-border p-4 text-center hover:-translate-y-1 transition transform">
                <div class="text-xs font-bold text-slate-500">${m.k}</div>
                <div class="mt-1 text-sm font-extrabold text-slate-900">${m.v}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>
`;