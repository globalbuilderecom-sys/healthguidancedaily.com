const CTA_URL = "https://loraritual.com/products/nrx";

export function StickyCtaBar() {
  return (
    <div className="sticky-cta sticky items-stretch bg-[#F3EDE4] flex flex-wrap justify-center max-w-full z-50 px-2.5 py-[15px] bottom-0 md:flex-nowrap shadow-[0_-4px_16px_rgba(0,0,0,0.12)] border-t border-[#DDD8CE]">
      <div className="relative items-center flex basis-full flex-row-reverse grow justify-center max-w-[1200px] min-h-[25px] w-min md:basis-0">
        <a
          href={CTA_URL}
          className="group relative text-white text-[18px] font-semibold bg-[#8B6914] shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] block tracking-[0.3px] leading-[28px] max-w-full text-center px-8 py-3 rounded font-dm-sans md:text-xl md:leading-10 md:px-12 md:py-4 transition-all duration-200 hover:bg-[#6B4F0E] active:scale-[0.98] animate-pulse-glow-gold overflow-hidden"
        >
          <span className="relative z-10">Learn More About NRX NMN® →</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none" />
        </a>
      </div>
    </div>
  );
}
