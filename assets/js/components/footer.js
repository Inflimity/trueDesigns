// components/footer.js - Footer component

export const footerHTML = () => `
  <footer class="mt-20 border-t border-slate-200/70 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <div class="flex items-center gap-3">
            <div class="h-11 w-11 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white soft-shadow">
              <i class="bi bi-triangle-fill text-sm"></i>
            </div>
            <div>
              <div class="font-display text-xl">True Designs</div>
              <div class="text-sm text-slate-500 -mt-0.5">Premium custom design, priced for growth.</div>
            </div>
          </div>
          <p class="mt-5 max-w-md text-sm leading-6 text-slate-600">
            We help businesses look credible and convert faster with clean, modern design—serving clients across the USA, Canada, and worldwide.
            Get a quote today and receive a clear, fast plan you can act on.
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a href="#/pricing" class="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200/70 px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 transition">
              <i class="bi bi-tag"></i> View Pricing
            </a>
            <a href="#/contact" class="inline-flex items-center justify-center rounded-xl bg-[#00a99d] px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-95 hover:-translate-y-0.5 transition transform">
              Get a Free Quote
            </a>
          </div>
        </div>

        <div class="lg:col-span-3">
          <div class="text-sm font-extrabold text-slate-900">Links</div>
          <div class="mt-4 grid gap-2 text-sm text-slate-600 font-semibold">
            <a class="hover:text-slate-900 transition" href="#/home">Home</a>
            <a class="hover:text-slate-900 transition" href="#/pricing">Pricing</a>
            <a class="hover:text-slate-900 transition" href="#/portfolio">Portfolio</a>
            <a class="hover:text-slate-900 transition" href="#/about-us">About Us</a>
            <a class="hover:text-slate-900 transition" href="#/contact">Contact</a>
          </div>
        </div>

        <div class="lg:col-span-4">
          <div class="text-sm font-extrabold text-slate-900">Contact</div>
          <div class="mt-4 text-sm text-slate-600">
            <div class="flex items-center gap-2">
              <i class="bi bi-envelope"></i>
              <a class="font-bold text-slate-800 hover:text-slate-900 transition" href="mailto:info@td-designs.com">info@td-designs.com</a>
            </div>
            <p class="mt-3 text-xs text-slate-500">
              No phone support—email keeps everything documented, fast, and accurate.
            </p>
          </div>

          <div class="mt-8">
            <div class="text-sm font-extrabold text-slate-900">Social</div>
            <div class="mt-4 flex flex-wrap gap-2">
              <a href="#/contact" class="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition">
                <i class="bi bi-instagram"></i> Instagram
              </a>
              <a href="#/contact" class="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition">
                <i class="bi bi-behance"></i> Behance
              </a>
              <a href="#/contact" class="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition">
                <i class="bi bi-dribbble"></i> Dribbble
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-200/70 pt-8 text-xs text-slate-500">
        <div>© <span id="year"></span> True Designs — <span class="font-semibold text-slate-700">td-designs.com</span></div>
        <div class="font-semibold">Serving USA, Canada & Worldwide</div>
      </div>
    </div>
  </footer>
`;