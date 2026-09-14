import React from "react";

type MobileContactBarProps = {
  phone?: string;
  zaloUrl?: string;
};

const ZaloIcon = () => (
  <svg
    viewBox="0 0 40 40"
    className="h-12 w-12"
    aria-hidden="true"
  >
    <circle cx="20" cy="20" r="20" fill="#0068FF" />

    <path
      d="M10.5 11.5h19a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H19l-5.5 3.5 1-3.5h-4a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3Z"
      fill="white"
    />

    <text
      x="20"
      y="22.8"
      fill="#0068FF"
      fontSize="8.5"
      fontWeight="800"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
    >
      Zalo
    </text>
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-[22px] w-[22px]"
    aria-hidden="true"
  >
    <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
  </svg>
);

export default function MobileContactBar({
  phone = "0909383358",
  zaloUrl = "https://zalo.me/0909383358",
}: MobileContactBarProps) {
  const phoneLink = phone.replace(/\s/g, "");

  return (
    <div
      className="
        fixed
        inset-x-0
        bottom-0
        z-[9998]
        px-4
        pb-[calc(10px+env(safe-area-inset-bottom))]
        md:hidden
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[440px]
          items-center
          gap-3
          rounded-[22px]
          border
          border-[#E6DDEF]
          bg-[#FFFDF8]/95
          p-2.5
          shadow-[0_-6px_30px_rgba(55,7,109,0.14)]
          backdrop-blur-md
        "
      >
        {/* ZALO */}
        <a
          href={zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Liên hệ qua Zalo"
          className="
            flex
            h-[54px]
            flex-1
            items-center
            justify-center
            gap-3
            rounded-[16px]
            border
            border-[#DCEBFF]
            bg-[#F4F8FF]
            font-semibold
            text-[#0068FF]
            transition-all
            active:scale-[0.97]
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#0068FF]
              text-white
              shadow-[0_5px_14px_rgba(0,104,255,0.24)]
            "
          >
            <ZaloIcon />
          </span>

          <span className="text-[14px]">Chat Zalo</span>
        </a>

        {/* GỌI ĐIỆN */}
        <a
          href={`tel:${phoneLink}`}
          aria-label={`Gọi ${phone}`}
          className="
            flex
            h-[54px]
            flex-1
            items-center
            justify-center
            gap-3
            rounded-[16px]
            bg-[#37076D]
            font-semibold
            text-white
            shadow-[0_8px_18px_rgba(55,7,109,0.22)]
            transition-all
            active:scale-[0.97]
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#FEE997]
              text-[#37076D]
            "
          >
            <PhoneIcon />
          </span>

          <span className="text-[14px]">Gọi ngay</span>
        </a>
      </div>
    </div>
  );
}