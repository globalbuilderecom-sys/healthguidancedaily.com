export function TrendingBar() {
  return (
    <div className="trending-bar items-stretch bg-zinc-800 flex flex-wrap justify-start max-w-full px-2.5 py-px md:flex-nowrap md:py-2.5">
      <div className="relative flex basis-full grow max-w-[1170px] min-h-[25px] w-min mx-auto px-px md:basis-0 md:px-2.5">
        <div className="self-center flex justify-start min-h-[auto] min-w-[auto] w-[30%] px-px py-3" />
        <div className="items-center self-center flex justify-end min-h-[auto] min-w-[auto] w-full px-px py-3">
          <span className="text-2xl leading-none">🔥</span>
          <div className="text-white text-[13px] font-bold leading-[13px] pl-2.5 pr-px py-2.5 font-montserrat md:text-base md:leading-4 md:pl-5">
            Trending in the US
          </div>
        </div>
      </div>
    </div>
  );
}
