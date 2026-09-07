import React from "react";

type MobileContactBarProps = {
  phone?: string;
  zaloUrl?: string;
  messengerUrl?: string;
};

export default function MobileContactBar({
  phone = "0909383358",
  zaloUrl = "https://zalo.me/0909383358",
  messengerUrl = "https://m.me/pmpenglish.edu.vn",
}: MobileContactBarProps) {
  return (
    <>
      <div
        className="
          fixed
          inset-x-0
          bottom-0
          z-[9998]

          block
          bg-[#FFFDF8]

          shadow-[0_-4px_20px_rgba(55,7,109,.08)]

          md:hidden
        "
      >
        {/* =====================================================
            ĐƯỜNG CONG
        ===================================================== */}

        <svg
          className="
            pointer-events-none
            absolute
            left-0
            top-[-8px]

            h-[30px]
            w-full
          "
          viewBox="0 0 400 65"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M 0 12
              H 145

              C 160 12,
                160 52,
                200 52

              C 240 52,
                240 12,
                255 12

              H 400
            "
            fill="none"
            stroke="#B0A5DF"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* =====================================================
            BAR
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            flex
            h-[72px]
            max-w-[500px]

            items-center
            justify-between

            px-8

            pb-[env(safe-area-inset-bottom)]
          "
        >
          {/* =================================================
              ZALO
          ================================================= */}

          <a
            href={zaloUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Liên hệ qua Zalo"
            className="
              relative
              z-20

              flex
              min-w-[70px]
              flex-col

              items-center
              justify-center

              gap-1

              text-[12px]
              font-semibold
              text-[#37076D]
            "
          >
            <span
              className="
                flex
                h-7
                w-7

                items-center
                justify-center

                rounded-full

                bg-[#37076D]

                text-[10px]
                font-bold
                text-white

                shadow-[0_4px_12px_rgba(55,7,109,.18)]
              "
            >
              Zalo
            </span>

            <span>Zalo</span>
          </a>

          {/* =================================================
              PHONE AREA
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-[-34px]
              z-30

              h-[68px]
              w-[68px]

              -translate-x-1/2
            "
          >
            {/* =================================================
                RIPPLE
            ================================================= */}

            <div
              className="
                pointer-events-none

                absolute
                left-1/2
                top-1/2
                z-0

                h-0
                w-0
              "
            >
              <span
                className="
                  hotline-ripple
                  hotline-ripple-1

                  absolute
                  left-1/2
                  top-1/2

                  h-[82px]
                  w-[82px]

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full

                  border-2
                  border-[#B0A5DF]/45
                "
              />

              <span
                className="
                  hotline-ripple
                  hotline-ripple-2

                  absolute
                  left-1/2
                  top-1/2

                  h-[82px]
                  w-[82px]

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full

                  border-2
                  border-[#B0A5DF]/30
                "
              />

              <span
                className="
                  hotline-ripple
                  hotline-ripple-3

                  absolute
                  left-1/2
                  top-1/2

                  h-[82px]
                  w-[82px]

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full

                  border
                  border-[#37076D]/20
                "
              />
            </div>

            {/* =================================================
                PHONE BUTTON
            ================================================= */}

            <a
              href={`tel:${phone}`}
              aria-label="Gọi điện"
              className="
                relative
                z-20

                flex
                h-[68px]
                w-[68px]

                items-center
                justify-center

                rounded-full

                border-[5px]
                border-[#FFFDF8]

                bg-[#37076D]

                shadow-[0_6px_22px_rgba(55,7,109,.28)]

                transition-transform
                duration-200

                active:scale-95
              "
            >
              <svg
                className="
                  h-7
                  w-7
                  text-white
                "
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="
                    M6.62 10.79
                    a15.46 15.46 0 006.59 6.59
                    l2.2-2.2
                    a1 1 0 011.02-.24
                    c1.12.37 2.33.57 3.57.57
                    a1 1 0 011 1V20
                    a1 1 0 01-1 1
                    C10.61 21 3 13.39 3 4
                    a1 1 0 011-1h3.5
                    a1 1 0 011 1
                    c0 1.25.2 2.45.57 3.57
                    a1 1 0 01-.25 1.02
                    l-2.2 2.2z
                  "
                />
              </svg>
            </a>
          </div>

          {/* =================================================
              MESSENGER
          ================================================= */}

          <a
            href={messengerUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Liên hệ qua Messenger"
            className="
              relative
              z-20

              flex
              min-w-[100px]
              flex-col

              items-center
              justify-center

              gap-1

              text-[12px]
              font-semibold
              text-[#37076D]
            "
          >
            <span
              className="
                flex
                h-7
                w-7

                items-center
                justify-center

                rounded-full

                bg-[#37076D]

                text-white

                shadow-[0_4px_12px_rgba(55,7,109,.18)]
              "
            >
              <svg
                className="h-[17px] w-[17px]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="
                    M12 2
                    C6.477 2 2 6.145 2 11.259
                    c0 2.914 1.454 5.512 3.727 7.21
                    V22
                    l3.406-1.87
                    c.91.252 1.873.388 2.867.388
                    5.523 0 10-4.145 10-9.259
                    S17.523 2 12 2

                    zm1.006 12.47
                    l-2.547-2.718
                    -4.97 2.718
                    5.466-5.804
                    2.61 2.718
                    4.908-2.718
                    -5.467 5.804z
                  "
                />
              </svg>
            </span>

            <span>Messenger</span>
          </a>
        </div>
      </div>

      {/* =====================================================
          RIPPLE CSS
      ===================================================== */}

      <style>{`
        @keyframes hotlineRipple {
          0% {
            scale: 0.82;
            opacity: 0.7;
          }

          70% {
            opacity: 0.16;
          }

          100% {
            scale: 1.45;
            opacity: 0;
          }
        }

        .hotline-ripple {
          pointer-events: none;
          transform-origin: center;
          animation: hotlineRipple 2.1s ease-out infinite;
        }

        .hotline-ripple-1 {
          animation-delay: 0s;
        }

        .hotline-ripple-2 {
          animation-delay: 0.7s;
        }

        .hotline-ripple-3 {
          animation-delay: 1.4s;
        }
      `}</style>
    </>
  );
}