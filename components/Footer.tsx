export function Footer() {
  return (
    <div className="items-stretch bg-white flex flex-wrap justify-center max-w-full border-zinc-300 mt-12 px-2.5 py-3 border-t border-solid md:flex-nowrap">
      <div className="relative items-center basis-full flex-col grow justify-between max-w-[1200px] min-h-[25px] w-min px-[7px] py-2.5 md:basis-0 md:px-2.5">
        <div
          className="text-neutral-500 leading-5 text-center mt-2.5 p-2.5 text-sm"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          <b>MEDICAL &amp; HEALTH DISCLOSURE</b>: This article is sponsored content produced in partnership with
          Løra Ritual. The statements in this article have not been evaluated by the Food and Drug Administration.
          This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may
          vary. Consult your healthcare provider before starting any supplement regimen.
        </div>
        <div
          className="text-neutral-500 text-xs leading-[22px] mt-[15px] px-px py-2.5 md:text-sm md:px-2.5"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          HEALTH GUIDANCE DAILY — Copyright 2026 — All Rights Reserved.
          <div className="text-[#8B6914] text-xs md:text-sm flex flex-wrap gap-1 mt-1">
            <a href="https://loraritual.com/policies/privacy-policy" className="hover:underline transition-colors duration-150">
              <u>Privacy Policy</u>
            </a>
            <span>-</span>
            <a href="https://loraritual.com/policies/terms-of-service" className="hover:underline transition-colors duration-150">
              <u>Terms Of Service</u>
            </a>
            <span>-</span>
            <a href="https://loraritual.com/policies/refund-policy" className="hover:underline transition-colors duration-150">
              <u>Refund Policy</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
