"use client";

const CTA_URL = "https://loraritual.com/products/nrx";
const BASE = "/nrx-nmn";

// ── Shared helpers ─────────────────────────────────────────────────────────────

function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-[#4A4A42] text-[17px] leading-[27px] text-left mt-[15px] px-px py-2.5 font-montserrat ${className}`}>
      {children}
    </div>
  );
}

function Heading({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      className={`text-[#1A1A18] font-bold text-left px-px py-[5px] font-playfair reveal ${className || "text-[26px] leading-8 mt-[30px] md:text-[32px] md:leading-[44.8px]"}`}
    >
      {text}
    </div>
  );
}

function CtaBtn({ text, href = CTA_URL }: { text: string; href?: string }) {
  return (
    <div className="text-center my-10 reveal">
      <a
        href={href}
        className="group relative inline-block text-white text-[17px] font-semibold bg-[#8B6914] shadow-[rgba(0,0,0,0.19)_0px_4px_7px_1px] tracking-[0.3px] leading-6 max-w-full text-center px-10 py-4 rounded font-dm-sans md:text-xl transition-all duration-200 hover:bg-[#6B4F0E] active:scale-[0.98] animate-pulse-glow-gold overflow-hidden"
      >
        <span className="relative z-10">{text}</span>
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none" />
      </a>
    </div>
  );
}

function StatBlock({ stats }: { stats: { number: string; label: string }[] }) {
  return (
    <div className="bg-[#2C3E2D] rounded-md px-6 py-10 my-10 grid grid-cols-3 gap-4 text-center reveal">
      {stats.map((s, i) => (
        <div key={i}>
          <span className="font-playfair text-[28px] font-bold text-[#C4940A] block mb-2 md:text-[36px]">
            {s.number}
          </span>
          <span className="font-dm-sans text-[12px] leading-[1.5] text-white/80 md:text-[13px]">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function Pullquote({ quote, cite }: { quote: string; cite: string }) {
  return (
    <blockquote className="pullquote reveal">
      <p>{quote}</p>
      <cite>{cite}</cite>
    </blockquote>
  );
}

function ImgPlaceholder({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`reveal w-full mt-4 mb-2 ${className}`}>
      <img
        src={`${BASE}${src}`}
        alt={alt}
        className="max-w-full w-full rounded"
        onError={(e) => {
          const el = e.target as HTMLImageElement;
          el.style.display = "none";
          const ph = document.createElement("div");
          ph.className =
            "w-full aspect-video bg-[#F3EDE4] rounded flex items-center justify-center text-[#7A7A70] font-dm-sans text-sm";
          ph.textContent = alt;
          el.parentNode?.insertBefore(ph, el);
        }}
      />
    </div>
  );
}

// ── Article sections ──────────────────────────────────────────────────────────

const IntroStory = () => (
  <BodyText>
    <p className="drop-cap">
      Something strange happens to most people in their early 40s. It doesn&apos;t arrive with fanfare or a
      diagnosis. There&apos;s no single morning when everything changes. Instead, it accumulates — quietly, almost
      politely — until one day you realize the person staring back from the mirror doesn&apos;t match the version
      of yourself living inside your head.
    </p>
    <p>
      The energy you once took for granted now requires management. Recovery from a workout that used to take a day
      now takes three. The mental sharpness you relied on in meetings has a new, unwelcome companion: fog. And the
      worst part? Your doctor says everything looks &ldquo;normal.&rdquo;
    </p>
    <p>
      This is the experience of millions of adults over 40. And for decades, the explanation has been maddeningly
      vague: <em>it&apos;s just aging.</em>
    </p>
    <p>
      But a growing body of research suggests something far more specific is happening — something measurable,
      something that begins in your 30s, accelerates after 40, and has a name most people have never heard.
    </p>
    <p>
      It&apos;s called NAD+ decline. And understanding it might change how you think about energy, aging, and what
      your body actually needs.
    </p>
  </BodyText>
);

const NadMolecule = () => (
  <BodyText>
    <p>
      NAD+ — nicotinamide adenine dinucleotide — is not a vitamin. It&apos;s not a mineral. It&apos;s a coenzyme
      that exists in every single living cell in your body, and it is essential for converting the food you eat into
      the energy your cells use to function.
    </p>
    <p>
      Think of it this way: if your cells are engines, NAD+ is the ignition system. Without sufficient NAD+, those
      engines don&apos;t stop completely — they just run poorly. Sluggish mitochondria. Slower repair cycles.
      Diminished cellular communication.
    </p>
    <p>
      The result doesn&apos;t look like disease. It looks like &ldquo;getting older.&rdquo; Low-grade fatigue.
      Brain fog that wasn&apos;t there five years ago. Recovery that takes longer than it should. A general feeling
      that your body has quietly downshifted into a lower gear.
    </p>
  </BodyText>
);

const NumbersBehindDecline = () => (
  <BodyText>
    <p>
      The research is sobering. NAD+ levels begin declining as early as your 30s — and by the time most adults
      reach their 50s, they may have lost roughly half of the NAD+ they had at peak levels.
    </p>
  </BodyText>
);

const NumbersContinued = () => (
  <BodyText>
    <p>
      This decline doesn&apos;t just affect how you feel. NAD+ is involved in over 500 enzymatic reactions in the
      body. It plays a direct role in DNA repair, mitochondrial function, cellular stress response, and the
      regulation of your circadian rhythm. When NAD+ drops, the downstream effects touch virtually every system.
    </p>
    <p>
      And here&apos;s the part that frustrates most people: standard blood panels don&apos;t measure NAD+. You can
      visit your doctor, get a full workup, hear that everything is &ldquo;within range,&rdquo; and walk out with
      the same fatigue you walked in with — because the underlying cellular issue was never tested for.
    </p>
  </BodyText>
);

const CoffeeNotAnswer = () => (
  <BodyText>
    <p>
      Most adults respond to declining energy the way they&apos;ve been conditioned to: more caffeine, more
      discipline, more pushing through. But the energy deficit caused by NAD+ decline is not a motivation problem.
      It&apos;s not a sleep problem (though sleep quality often suffers as a downstream effect). It&apos;s a
      cellular production problem.
    </p>
    <p>
      Caffeine masks it. NAD+ support addresses it.
    </p>
    <p>
      This distinction matters because the solutions are fundamentally different. Stimulants borrow energy from the
      future — they trigger adrenaline and cortisol to create a temporary feeling of alertness. But they don&apos;t
      restore the underlying cellular machinery. When the stimulant wears off, you crash, because nothing has
      actually changed at the cellular level.
    </p>
    <p>
      NAD+ precursors work differently. They provide the raw material your cells need to produce more NAD+ on their
      own. It&apos;s not a spike. It&apos;s a restoration.
    </p>
  </BodyText>
);

const EnterNmn = () => (
  <BodyText>
    <p>
      NMN — nicotinamide mononucleotide — is a naturally occurring molecule and a direct precursor to NAD+. Your
      body already uses NMN in its NAD+ production pathway. Supplementing with it doesn&apos;t introduce something
      foreign; it provides more of something your body already knows how to use — but is running low on.
    </p>
    <p>
      The research into NMN has accelerated dramatically over the past decade. Studies have explored its effects on
      mitochondrial function, metabolic health, insulin sensitivity, and physical endurance. While much of the early
      work was done in animal models, human clinical trials have expanded significantly, with results that have
      generated serious attention in the longevity research community.
    </p>
    <p>
      What makes NMN particularly compelling is its position in the NAD+ biosynthesis pathway. Unlike some other
      precursors, NMN is one enzymatic step away from becoming NAD+ — meaning the conversion process is efficient
      and direct.
    </p>
  </BodyText>
);

const ResveratrolPairing = () => (
  <BodyText>
    <p>
      If NMN provides the fuel, resveratrol helps activate the machinery that uses it.
    </p>
    <p>
      Resveratrol is a polyphenol — a plant compound found naturally in red grape skins, berries, and certain nuts.
      It has been studied extensively for its role in supporting sirtuin activation. Sirtuins are a family of
      proteins involved in cellular stress response, metabolic regulation, and longevity pathways. But here&apos;s
      the critical detail: sirtuins require NAD+ to function.
    </p>
    <p>
      This creates a powerful synergy. NMN supports NAD+ production. Resveratrol supports the activation of
      pathways that depend on NAD+. Together, they address both sides of the equation — supply and utilization.
    </p>
    <p>
      It&apos;s the difference between filling a car&apos;s gas tank and also tuning the engine.
    </p>
  </BodyText>
);

const WhatNrxIs = () => (
  <BodyText>
    <p>
      NRX NMN® by Løra Ritual is a daily supplement that combines 1,200mg of NMN with resveratrol in a formula
      designed specifically for adults who refuse to accept early decline as &ldquo;normal aging.&rdquo;
    </p>
    <p>
      It is not a stimulant. It does not contain caffeine. It does not create a rush followed by a crash. It
      supports the biological infrastructure that powers how you feel, think, and recover — at the cellular level.
    </p>
    <p>
      The formula uses advanced liposomal delivery technology designed to improve absorption. It is third-party
      tested, transparently dosed, and manufactured to premium standards.
    </p>
    <p>
      And it was created for a specific kind of person: someone who invests in prevention rather than waiting for
      problems to become crises. Someone who has noticed the shift — the slower mornings, the foggy afternoons,
      the recovery that takes too long — and refuses to accept &ldquo;that&apos;s just how it is now&rdquo; as an
      answer.
    </p>
  </BodyText>
);

const WhatToExpect = () => (
  <BodyText>
    <p>
      NRX is not a miracle pill, and any brand that promises overnight transformation is selling fantasy. Cellular
      support is cumulative. It builds. Here&apos;s what most people report:
    </p>
    <div className="space-y-6 mt-4">
      {[
        { label: "Days 1–7", text: "Adjustment period. Your body is receiving increased NAD+ precursor support. Most people don't notice dramatic changes yet, and that's expected." },
        { label: "Weeks 2–3", text: "Subtle shifts begin. Many users report steadier energy through the afternoon, improved focus during demanding tasks, and slightly better sleep quality." },
        { label: "Weeks 4–8", text: "The compounding effect becomes noticeable. Users frequently describe feeling \"more like themselves\" — a phrase that comes up repeatedly in feedback. Energy feels more sustained. Recovery improves. The fog lifts." },
        { label: "Months 2–3+", text: "Long-term support. This is where the consistent users separate from the one-bottle testers. Cumulative NAD+ support over months is where the research suggests the most meaningful benefits to metabolic health and cellular resilience." },
      ].map((item) => (
        <div key={item.label}>
          <div className="font-dm-sans font-semibold text-[14px] tracking-[0.5px] text-[#8B6914] uppercase mb-1">
            {item.label}
          </div>
          <p className="!mt-0 !mb-0">{item.text}</p>
        </div>
      ))}
    </div>
  </BodyText>
);

const WhoItFor = () => (
  <BodyText>
    <p>
      NRX was designed for adults — typically 35 and older — who are experiencing the early or mid-stage effects of
      cellular energy decline. People who are active, health-aware, and proactive about aging well.
    </p>
    <p>
      It&apos;s for the person who has tried B-vitamins and magnesium and better sleep hygiene and still feels like
      something is missing. It&apos;s for the person whose doctor says &ldquo;everything looks fine&rdquo; but
      whose body says otherwise.
    </p>
    <p>
      It is not for someone looking for a caffeine replacement or an energy drink alternative. It is not a quick
      fix. It is foundational cellular support designed for consistent, long-term use.
    </p>
  </BodyText>
);

const Guarantee = () => (
  <BodyText>
    <p>
      Løra Ritual offers a straightforward promise: take NRX consistently for 30 days. If you don&apos;t notice a
      meaningful difference in your energy, clarity, or daily performance — return it for a full refund, even if
      the bottle is opened.
    </p>
    <p>
      No complicated process. No pressure. No asterisks.
    </p>
    <p>
      The guarantee exists because the brand believes in what consistent NAD+ support can do when someone actually
      commits to it. Most people who start don&apos;t stop — because by day 30, they feel the difference.
    </p>
  </BodyText>
);

const BottomLine = () => (
  <BodyText>
    <p>
      NAD+ decline is real, measurable, and progressive. It begins earlier than most people realize, and it affects
      more systems than most people understand. The standard advice — sleep more, eat better, exercise harder — is
      necessary but insufficient if the cellular infrastructure those habits depend on is compromised.
    </p>
    <p>
      NMN represents a targeted approach to supporting that infrastructure. Resveratrol complements it by
      activating the pathways NAD+ powers. Together, they offer something most wellness products don&apos;t: a
      mechanism-level strategy for how you age, not just how you feel today.
    </p>
    <p>
      NRX NMN® by Løra Ritual is one formulation built on this research. It&apos;s not the only option on the
      market — but it&apos;s one of the few that combines premium dosing, advanced delivery, third-party testing,
      and a genuine 30-day guarantee.
    </p>
    <p>
      If you&apos;ve been feeling the shift — the slower recovery, the afternoon fog, the sense that your body has
      quietly changed the rules — this might be worth 30 days of your time.
    </p>
  </BodyText>
);

// ── Main export ────────────────────────────────────────────────────────────────

export function MainContent() {
  return (
    <div className="relative basis-full grow max-w-full min-h-[25px] w-min pb-3 md:basis-9/12 md:pb-[58px]">

      {/* Breadcrumb */}
      <div className="text-zinc-400 font-medium hidden leading-4 text-left px-px font-dm-sans md:block animate-fade-in">
        Home &gt; Longevity
      </div>

      {/* Hero headline */}
      <div className="text-[26px] font-semibold leading-9 text-left mt-px p-px font-playfair text-[#1A1A18] md:text-[40px] md:leading-[52px] md:mt-5 animate-fade-up">
        <b>The Cellular Energy Discovery That&apos;s Rewriting the Rules on Aging After 40</b>
      </div>

      {/* Deck */}
      <div className="text-[#4A4A42] text-[17px] italic leading-7 text-left mt-[5px] mb-px pt-[5px] pb-px px-px font-montserrat md:text-[20px] md:leading-8 md:mb-[5px] md:pb-[5px] animate-fade-up">
        New research into NAD+ decline is helping adults understand why they feel &ldquo;off&rdquo; — and what a
        little-known molecule called NMN might do about it.
      </div>

      {/* Byline */}
      <div className="text-[#7A7A70] font-dm-sans text-[13px] tracking-[0.3px] mt-3 px-px animate-fade-in">
        By Sarah Mitchell, Health &amp; Longevity Editor &nbsp;·&nbsp; 9 min read &nbsp;·&nbsp; March 14, 2026
      </div>

      {/* Decorative divider */}
      <div className="w-12 h-[2px] bg-[#8B6914] my-6 mx-px" />

      {/* Hero image */}
      <ImgPlaceholder
        src="/images/hero.webp"
        alt="Beauty isn't applied — it's built from within. NRX NMN® by Løra Ritual"
      />

      {/* ── Intro ── */}
      <div className="reveal article-body">
        <IntroStory />
      </div>

      {/* ── NAD+ Molecule ── */}
      <Heading text="The Molecule Your Cells Can't Function Without" />
      <div className="reveal article-body">
        <NadMolecule />
      </div>

      <Pullquote
        quote="&ldquo;NAD+ levels decline significantly with age, and this decline is associated with numerous age-related conditions including metabolic dysfunction, neurodegeneration, and loss of cellular resilience.&rdquo;"
        cite="— Dr. David Sinclair, Harvard Medical School, Department of Genetics"
      />

      {/* ── Numbers ── */}
      <Heading text="The Numbers Behind the Decline" />
      <div className="reveal article-body">
        <NumbersBehindDecline />
      </div>

      <ImgPlaceholder
        src="/images/gempages_537282813339108432-c6ad7e2f-25f6-461c-8d51-1d6e66ec5c22.webp"
        alt="Up to 90% decline in NAD+ levels with age — NRX NMN supports longevity and healthy aging"
      />

      <StatBlock
        stats={[
          { number: "50%", label: "Estimated NAD+ decline by age 50 compared to peak levels" },
          { number: "1 in 3", label: "Adults over 40 who report persistent low energy despite 'normal' bloodwork" },
          { number: "30s", label: "The decade when measurable NAD+ decline typically begins" },
        ]}
      />

      <div className="reveal article-body">
        <NumbersContinued />
      </div>

      {/* ── Coffee ── */}
      <Heading text="Why Coffee and Willpower Aren't the Answer" />
      <div className="reveal article-body">
        <CoffeeNotAnswer />
      </div>

      {/* ── NMN ── */}
      <Heading text="Enter NMN: The Precursor Your Body Recognizes" />
      <ImgPlaceholder
        src="/images/gempages_537282813339108432-d8abc8b6-db3e-4a2f-91c8-662e733c6139.webp"
        alt="Scientifically backed — NMN 600mg, 100% proven safe daily, 75% increase in NAD+ levels"
      />
      <div className="reveal article-body">
        <EnterNmn />
      </div>

      {/* ── Resveratrol ── */}
      <Heading text="The Resveratrol Pairing — And Why It Matters" />
      <div className="reveal article-body">
        <ResveratrolPairing />
      </div>

      {/* CTA #1 */}
      <CtaBtn text="See the full NRX NMN® formula →" />

      {/* ── What NRX Is ── */}
      <Heading text="What NRX NMN® Actually Is" />
      <ImgPlaceholder
        src="/images/gempages_537282813339108432-f9c7a4a8-7c45-4b95-b730-f6da3ca96b2f.webp"
        alt="Løra NMN + Resveratrol — developed to support cellular energy, NAD+ levels, muscle function, cognitive health"
      />
      <ImgPlaceholder
        src="/images/makes-different_5.jpg"
        alt="NRX NMN supplement facts — NMN 600mg, Trans-Resveratrol 600mg per serving"
      />
      <div className="reveal article-body">
        <WhatNrxIs />
      </div>

      <Pullquote
        quote="&ldquo;I didn&apos;t expect much — I&apos;ve tried a lot of supplements. But around week three, something shifted. I wasn&apos;t dragging through my afternoons anymore. My workouts felt easier. It was subtle at first, then undeniable.&rdquo;"
        cite="— Margaret, 54, Austin, TX"
      />

      {/* ── Timeline ── */}
      <Heading text="What to Expect — Honestly" />
      <div className="reveal article-body">
        <WhatToExpect />
      </div>

      {/* CTA #2 */}
      <CtaBtn text="Try NRX NMN® Risk-Free for 30 Days →" />

      {/* ── Who It's For ── */}
      <Heading text="Who This Is For (And Who It Isn't)" />
      <ImgPlaceholder
        src="/images/makes-different_7.webp"
        alt="Save your money — get complete NMN + NAD+ support in one formula for $89 vs $209+ stacking separately"
      />
      <div className="reveal article-body">
        <WhoItFor />
      </div>

      <StatBlock
        stats={[
          { number: "1,200mg", label: "NMN + Resveratrol per daily serving" },
          { number: "100,000+", label: "Units sold since launch" },
          { number: "30 days", label: "Risk-free guarantee, even if opened" },
        ]}
      />

      {/* ── Guarantee ── */}
      <Heading text="The 30-Day Longevity Guarantee" />
      <div className="reveal article-body">
        <Guarantee />
      </div>

      {/* ── Bottom Line ── */}
      <Heading text="The Bottom Line" />
      <ImgPlaceholder
        src="/images/makes-different_8.jpg"
        alt="Løra NMN + Resveratrol — NRX NMN by Løra Ritual"
      />
      <div className="reveal article-body">
        <BottomLine />
      </div>

      {/* CTA #3 */}
      <div className="reveal text-[#1A1A18] text-[26px] font-bold leading-8 text-left mt-10 px-px py-[5px] font-playfair md:text-[33px] md:leading-[46.2px]">
        Try NRX NMN® by Løra Ritual — Risk Free for 30 Days
      </div>
      <CtaBtn text="Learn More About NRX NMN® →" />

      <CtaBtn text="Learn More About NRX NMN® →" />

      {/* Support */}
      <div className="text-[#4A4A42] text-[15px] leading-[22px] text-left mt-[15px] px-px py-2.5 font-dm-sans reveal">
        <b>Not satisfied? Return it within 30 days for a full refund — even if opened.</b>
        <div className="mt-2">
          Questions? Contact our support team:{" "}
          <a href="mailto:support@loraritual.com" className="text-[#8B6914] underline">
            support@loraritual.com
          </a>
        </div>
      </div>
    </div>
  );
}
