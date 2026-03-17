"use client";

import { useEffect } from "react";
import { MainContent } from "./MainContent";
import { Sidebar } from "./Sidebar";

export function ArticleLayout() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    const run = () =>
      document.querySelectorAll(".reveal, .reveal-fast").forEach((el) => observer.observe(el));

    run();
    const mo = new MutationObserver(run);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <div className="items-center flex flex-wrap justify-center max-w-full pt-[5px] pb-[15px] px-0 md:flex-nowrap md:px-2.5 animate-slide-down">
      <div className="relative basis-full grow max-w-[1200px] min-h-[25px] w-min pt-0 pb-2.5 px-2.5 md:basis-0 md:pt-2.5">

        {/* UPDATE alert banner */}
        <div className="items-stretch flex flex-wrap justify-start max-w-full md:flex-nowrap">
          <div className="relative bg-[#FFF8E7] basis-full grow max-w-full min-h-[25px] w-min border-[#C4940A] pt-0 pb-2.5 px-2.5 rounded border-y-[3px] border-l border-r border-solid md:basis-0 md:pt-2.5">
            <div className="text-zinc-800 text-[17px] leading-[25.5px] text-left px-px py-2.5 font-montserrat md:text-[23px] md:leading-[34.5px]">
              <b>
                <span className="text-red-600">UPDATE:</span>
              </b>{" "}
              NRX NMN® by Løra Ritual SELLING OUT faster than expected! Lock in your order NOW to get
              30% OFF + FREE SHIPPING to the US
            </div>
          </div>
        </div>

        {/* Article + Sidebar layout */}
        <div className="items-stretch flex flex-wrap justify-start max-w-full mt-1.5 md:flex-nowrap md:mt-5">
          <MainContent />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
