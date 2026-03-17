"use client";

import { useState } from "react";

type Reply = {
  avatar: string;
  name: string;
  text: string;
  likes: string;
  time: string;
};

type Comment = {
  avatar: string;
  name: string;
  text: string;
  likes: string;
  time: string;
  hasIcon?: boolean;
  replies?: Reply[];
};

const COMMENTS: Comment[] = [
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412380307_1733617084175_Marcella_Hastings.webp",
    name: "Barbara Miller",
    text: "It is amazing how much better I feel already. Week 2 and I'm noticing a real difference in my afternoon energy. No more 3pm crash!",
    likes: "4",
    time: "51 min",
    hasIcon: true,
  },
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412394878_1733617237015_Richard_Wilson.webp",
    name: "Richard Wilson",
    text: "Just ordered mine. My wife has been on it for a month and the difference in her energy and focus is undeniable. Time I tried it too.",
    likes: "6",
    time: "1 h",
    hasIcon: true,
  },
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412432968_1733617234876_Doug_Johnson.webp",
    name: "Doug Johnson",
    text: "Has anyone been using this for 6+ months? Would love to hear what the long-term results look like before committing.",
    likes: "2",
    time: "2 h",
    hasIcon: true,
    replies: [
      {
        avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412457193_1733617232938_Franklin_Monroe.webp",
        name: "Jose Martinez",
        text: "Doug Johnson I'm at the 4-month mark and the difference is real. My workout recovery went from 3 days to 1. My mental clarity is sharper than it was in my 30s. That alone is worth it.",
        likes: "3",
        time: "1 h",
      },
    ],
  },
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412479053_1712227680885_Screenshot_2024_04_04_at_6.47.28_PM.webp",
    name: "Lionel Beckett",
    text: "Really informative article. I've tried B vitamins and adaptogens but never heard NAD+ decline explained this clearly before. It all makes sense now.",
    likes: "1",
    time: "3 h",
  },
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412504031_1733617143932_Winston_Harper.webp",
    name: "Mark Owens",
    text: "I want to order but I'm 67, is this still beneficial at my age?",
    likes: "1",
    time: "3 h",
    replies: [
      {
        avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412523799_1733616910188_Zelda_Montgomery.webp",
        name: "Rowena Barron",
        text: "Mark Owens I'm 69 and this is the only supplement I will never stop taking. The research actually shows even greater NAD+ decline in older adults. Order it!",
        likes: "3",
        time: "2 h",
      },
    ],
  },
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412555020_1733617318212_Cecillia_Pruitt.webp",
    name: "Cecelia Pruitt",
    text: "I'm truly amazed at how our bodies respond when given the right building blocks. Five weeks in and the mental clarity is unlike anything I've experienced from a supplement. Grateful for the science behind this.",
    likes: "8",
    time: "3 h",
  },
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412678573_1733617055645_Rowena_Baron.webp",
    name: "Lucille Langley",
    text: "Just got mine a few days ago. Love that there's no caffeine — I have enough anxiety without stimulants. The capsules are easy to take and I already feel something subtle happening.",
    likes: "1",
    time: "4 h",
    replies: [
      {
        avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412699835_1733617058554_Sharon_Harper.webp",
        name: "Sharon Harper",
        text: "Same here. Three weeks in and my 3pm slump is basically gone. I used to need a second coffee just to get through the afternoon.",
        likes: "2",
        time: "2 h",
      },
      {
        avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412721421_1733617019729_Barbara_Miller.webp",
        name: "Zelda Montgomery",
        text: "Yes same, the afternoon energy difference is very real.",
        likes: "2",
        time: "1 h",
      },
    ],
  },
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412744174_1733617003166_Curtis_Reynolds.webp",
    name: "Curtis Reynolds",
    text: "Really informative. I've had low energy for years and my doctor keeps saying my bloodwork is 'normal.' This article explains exactly why that is so frustrating. Ordered.",
    likes: "3",
    time: "4 h",
  },
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412763183_1733616985161_Desmond_Vaughn.webp",
    name: "Winston Harper",
    text: "Just received mine and the instructions were clear. Starting today. Excited to finally try something that actually addresses the root cause instead of masking symptoms.",
    likes: "3",
    time: "4 h",
  },
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412786476_1733616961643_Mark_Owens.webp",
    name: "Franklin Monroe",
    text: "When you understand the mechanism — NAD+ powering mitochondria, sirtuins needing NAD+ to function — it all clicks. The science here is legitimate. This isn't snake oil.",
    likes: "3",
    time: "5 h",
  },
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412803043_1733616940914_Betty_Martinez.webp",
    name: "Marcella Hastings",
    text: "Six weeks in. I didn't want to say anything until I was sure, but the difference is real. More energy, cleaner thinking, better sleep. I feel more like myself than I have in years. Happy customer.",
    likes: "2",
    time: "5 h",
    replies: [
      {
        avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412819884_1733617139898_Lucille_Langley.webp",
        name: "Gwendolyn McPherson",
        text: "This is exactly what I needed to hear. Just ordered!",
        likes: "5",
        time: "2 h",
      },
    ],
  },
  {
    avatar: "https://c.animaapp.com/mmt9badjPB5AWm/assets/1750412838535_1733616887966_Lionel_Beckett.webp",
    name: "Desmond Vaughn",
    text: "Had a great experience with customer service. I called to ask about interactions with my medication and they were honest that I should check with my doctor. Really appreciated the transparency — feels like a company that actually cares.",
    likes: "3",
    time: "5 h",
  },
];

function CommentEntry({ c }: { c: Comment }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(parseInt(c.likes, 10));

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <li className="items-start flex mt-2.5 reveal-fast">
      <img
        src={c.avatar}
        alt={c.name}
        className="float-left h-12 w-[50px] mr-2 mt-[5px] rounded-full object-cover"
      />
      <div className="ml-2.5 flex-1" style={{ fontFamily: "system-ui, sans-serif" }}>
        <h3 className="text-indigo-800 font-bold leading-[16.8px] mb-1">{c.name}</h3>
        <p className="text-black text-sm leading-[1.5] mb-1">{c.text}</p>
        <div className="h-[25px] flex items-center gap-1 text-xs">
          <button
            onClick={handleLike}
            className={`font-semibold transition-colors duration-150 ${liked ? "text-blue-700" : "text-indigo-800"} hover:underline`}
          >
            Like
          </button>
          <span className="text-gray-400">·</span>
          <span className="text-indigo-800 hover:underline cursor-pointer">Reply</span>
          <span className="text-gray-400">·</span>
          {c.hasIcon && (
            <span className="text-[#8B6914] font-bold text-[11px]">✓</span>
          )}
          <span className={`font-semibold transition-colors duration-150 ${liked ? "text-blue-700" : "text-black"}`}>
            {likeCount}
          </span>
          <span className="text-gray-400">·</span>
          <span className="text-gray-500">{c.time}</span>
        </div>

        {c.replies && c.replies.length > 0 && (
          <ul className="pl-0 mt-1 border-l-2 border-gray-200 ml-1">
            {c.replies.map((r, i) => (
              <li key={i} className="items-start flex mt-2 pl-2">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="float-left h-9 w-10 mr-2 mt-[5px] rounded-full object-cover"
                />
                <div className="ml-2 flex-1">
                  <h3 className="text-indigo-800 font-bold text-sm leading-[16.8px] mb-1">{r.name}</h3>
                  <p className="text-black text-sm leading-[1.5] mb-1">{r.text}</p>
                  <div className="h-[22px] flex items-center gap-1 text-xs">
                    <span className="text-indigo-800 hover:underline cursor-pointer">Like</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-indigo-800 hover:underline cursor-pointer">Reply</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-black">{r.likes}</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-500">{r.time}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

function CommentInputBox() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (value.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setValue("");
    }
  };

  return (
    <div className="bg-white mx-2.5 mb-2">
      <div className="flex flex-col w-full mx-auto pl-0 pr-2.5 py-2.5 gap-2">
        <input
          type="text"
          placeholder="Add a comment ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="text-black block w-full border border-neutral-200 p-4 rounded focus:outline-none focus:border-[#8B6914] focus:ring-1 focus:ring-[#C4940A] transition-all duration-200"
          style={{ fontFamily: "system-ui, sans-serif" }}
        />
        <button
          onClick={handleSubmit}
          className="self-start bg-[#8B6914] hover:bg-[#6B4F0E] active:scale-[0.98] text-white text-sm font-bold px-5 py-2 rounded transition-all duration-150"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          {submitted ? "✓ Posted!" : "Post"}
        </button>
        {submitted && (
          <p className="text-green-600 text-xs animate-fade-in" style={{ fontFamily: "system-ui, sans-serif" }}>
            Comment posted!
          </p>
        )}
      </div>
    </div>
  );
}

export function CommentsSection() {
  return (
    <div className="items-stretch flex flex-wrap justify-start max-w-full min-h-full p-2.5 md:flex-nowrap">
      <div className="relative bg-white basis-full grow max-w-[1200px] min-h-[25px] w-min mx-auto px-0 py-2.5 md:basis-0 md:px-2.5">
        <div className="text-black mb-2" style={{ fontFamily: "system-ui, sans-serif" }}>
          <b className="text-lg font-bold leading-[27px]">Comments</b>
        </div>
        <CommentInputBox />
        <div className="relative mb-[15px] top-2.5 md:mb-0 md:top-auto">
          <ul className="pl-0">
            {COMMENTS.map((c, i) => (
              <CommentEntry key={i} c={c} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
