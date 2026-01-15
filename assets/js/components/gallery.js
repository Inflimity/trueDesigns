// components/gallery.js - Gallery grid component

export const galleryGrid = (items, genPrefix) => `
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
    <div class="flex items-end justify-between gap-6">
      <div>
        <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Recent work samples</h2>
        <p class="mt-3 text-slate-600 max-w-2xl leading-7">A curated gallery of diverse styles. Click any design to zoom.</p>
      </div>
      <a href="#/portfolio" class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
        View Full Portfolio <i class="bi bi-arrow-right-short text-lg"></i>
      </a>
    </div>
    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${items.map((it, i) => `
        <button type="button"
          class="group rounded-2xl overflow-hidden bg-white subtle-border hover:-translate-y-1 transition transform text-left"
          data-lightbox data-title="${it.title}" data-src="${it.src || ''}"
          aria-label="Open preview: ${it.title}">
          <div class="relative aspect-[4/3] bg-slate-100">
            <img data-gen-id="${genPrefix}-${i + 1}" alt="${it.alt}" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/0 to-slate-950/0 opacity-0 group-hover:opacity-100 transition"></div>
            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 opacity-0 group-hover:opacity-100 transition">
              <div class="text-white">
                <div class="text-sm font-extrabold">${it.title}</div>
                <div class="text-xs text-white/80">${it.tag}</div>
              </div>
              <div class="h-10 w-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white">
                <i class="bi bi-zoom-in"></i>
              </div>
            </div>
          </div>
          <div class="p-4">
            <div class="text-sm font-extrabold text-slate-900">${it.title}</div>
            <div class="mt-1 text-sm text-slate-600 leading-6">${it.caption}</div>
          </div>
        </button>
      `).join('')}
    </div>
  </section>
`;