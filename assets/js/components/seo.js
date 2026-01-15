// components/seo.js - SEO content block component

export const longSEOBlock = (html) => `
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
    <div class="max-w-4xl">
      <h2 class="font-display text-3xl sm:text-4xl text-slate-900">Designed to look premium—priced to be practical.</h2>
      <div class="mt-5 prose prose-slate max-w-none">
        <div class="text-slate-600 leading-8 text-[15px] sm:text-base">
          ${html}
        </div>
      </div>
    </div>
  </section>
`;