const CTA_URL = "https://loraritual.com/products/nrx";
const BASE = "/nrx-nmn";

export function Sidebar() {
  return (
    <div className="relative items-center hidden basis-full flex-col grow justify-start max-w-full min-h-[25px] w-min md:flex md:basis-3/12">
      <div className="items-start block h-full justify-start w-full px-px py-3 md:flex md:px-2.5">
        <div className="bg-zinc-100 w-full mt-2.5 p-2.5 rounded sticky top-[20px]">
          <div className="text-[#8B6914] text-xl font-bold hidden mt-[5px] font-playfair md:block leading-tight">
            <div>Finally Restore</div>
            <div>Your Energy</div>
          </div>
          {/* Product image */}
          <div className="hidden md:block w-[200px] mt-2.5 mb-[15px] rounded overflow-hidden">
            <img
              src={`${BASE}/images/product-bottle.webp`}
              alt="NRX NMN® by Løra Ritual"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <a
            href={CTA_URL}
            className="group text-white items-center self-center bg-[#8B6914] hidden justify-center max-w-full text-center w-[95%] border-[#6B4F0E] pl-5 pr-2.5 py-2.5 rounded-[5px] border-b-4 border-solid font-dm-sans md:block transition-all duration-200 hover:bg-[#6B4F0E] active:scale-[0.98]"
          >
            <div className="text-white text-[15px] font-bold flex items-center justify-center leading-[22px] mb-px font-dm-sans">
              Learn More About<br />NRX NMN® →
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
