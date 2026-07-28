const Footer = () => (
  <footer className="bg-[#34261f] px-5 py-12 text-white sm:px-8">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
      <div><h3 className="mb-2 text-2xl font-bold">Scoopease</h3><p className="text-sm text-white/50">© 2026 Scoopease. Happiness by the scoop.</p></div>
      <div className="flex gap-6 text-sm text-white/60">
        <a href="/our-story" className="transition hover:text-[#f6c957]">Our story</a>
        <a href="/flavours" className="transition hover:text-[#f6c957]">Flavours</a>
        <a href="/reviews" className="transition hover:text-[#f6c957]">Reviews</a>
      </div>
    </div>
  </footer>
);
export default Footer;
