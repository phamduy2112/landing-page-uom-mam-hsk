"use client";

import { useState } from "react";
import Button from "../ui/button";
import logo from "../assets/logo.png";

/* Thay số Zalo tại đây nếu cần */
const ZALO_PHONE = "0328884696";
const ZALO_PHONE_DISPLAY = "032 888 4696";
const ZALO_URL = `https://zalo.me/${ZALO_PHONE}`;

const navItems = [
  {
    label: "LỘ TRÌNH HỌC",
    href: "#lo-trinh",
  },
  {
    label: "KHÓA HỌC",
    href: "#khoa-hoc",
  },
    {
    label: "HỆ THỐNG HỌC",
    href: "#he-thong-hoc",
  },
  {
    label: "FEEDBACK HỌC VIÊN",
    href: "#feedback",
  },
  {
    label: "CÂU HỎI THƯỜNG GẶP",
    href: "#cau-hoi",
  },
];

/* =========================
   ICONS
========================= */

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    className="h-6 w-6"
  >
    <path
      d="M4 7h16M4 12h16M4 17h16"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    className="h-6 w-6"
  >
    <path
      d="m6 6 12 12M18 6 6 18"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-4 w-4"
  >
    <path d="M3 10h13" strokeLinecap="round" />

    <path
      d="m11 5 5 5-5 5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ZaloIcon = () => (
  <svg
    viewBox="0 0 40 40"
    className="h-6 w-6 sm:h-8 sm:w-8 shrink-0"
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

/* =========================
   HEADER
========================= */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          w-full

          border-[#686F1F]
          border-b
          border-[#E7DAC6]

          bg-[#FFF9EF]/95

          backdrop-blur-md

          shadow-[0_4px_18px_rgba(55,7,109,0.04)]
        "
      >
        {/* =========================
            ZALO CONTACT BAR
        ========================= */}
        <div className="bg-[#37076D] text-white">
          <div
            className="
              mx-auto
              flex
              min-h-[42px]
              max-w-[1280px]
              items-center
              justify-center
              gap-2
              px-3
              py-1.5

              md:min-h-[46px]
              md:gap-3
              md:px-8
            "
          >
            <span
              className="
                relative
                flex
                h-2.5
                w-2.5
                shrink-0
              "
              aria-hidden="true"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FEE997] opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FEE997]" />
            </span>

            <p className="text-[11px] font-medium leading-tight md:text-[13px]">
              <span className="hidden sm:inline">
                Ưu tiên liên hệ Zalo để được tư vấn ngay
              </span>
              <span className="sm:hidden">Tư vấn nhanh qua Zalo</span>
            </p>

          <a
  href={ZALO_URL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Liên hệ Zalo ${ZALO_PHONE_DISPLAY}`}
  className="
    animate-zalo-pulse
    ml-1
    inline-flex
    min-h-[32px]
    shrink-0
    items-center
    gap-1.5
    rounded-full
    bg-[#FEE997]
    px-2.5
    text-[12px]
    font-bold
    text-[#37076D]
    transition-colors
    duration-200
    hover:bg-white

    md:min-h-[36px]
    md:gap-2
    md:px-4
    md:text-[14px]
  "
>
  <ZaloIcon />
  <span>{ZALO_PHONE_DISPLAY}</span>
  <span className="hidden lg:inline">• TƯ VẤN NGAY</span>
</a>
          </div>
        </div>

        <div
          className="
            mx-auto
            flex
            h-[72px]
            max-w-[1280px]
            items-center
            px-5

            md:h-[78px]
            md:px-8

            xl:h-[82px]
            justify-between
          "
        >
          {/* =========================
              LOGO
          ========================= */}
          <a
            href="/"
            aria-label="Ươm Mầm HSK"
            className="
              flex
              shrink-0
              items-center
            "
          >
            <img
              src={logo}
              alt="Tiếng Trung Ươm Mầm HSK"
              className="
                h-auto
                sm:w-[80px]
                w-[60px]
                object-contain

            
              "
            />
          </a>

          {/* =========================
              DESKTOP MENU
          ========================= */}
          <nav
            className="
              ml-auto
              hidden
              items-center
              gap-5

              xl:flex
              xl:gap-7
            "
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  group
                  relative
                  py-3

                  text-[12px]
                  font-bold
                  tracking-[0.025em]
                  text-[#37076D]

                  transition-colors
                  duration-200

                  hover:text-[#686F1F]
                "
              >
                {item.label}

                {/* underline */}
                <span
                  className="
                    absolute
                    bottom-[6px]
                    left-0

                    h-[2px]
                    w-0

                    rounded-full
                    bg-[#FEE997]

                    transition-all
                    duration-300

                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* =========================
              DESKTOP CTA
          ========================= */}
          <div
            className="
              ml-7
              hidden

              xl:block
            "
          >
            <a href="#dang-ky">
              <Button
                size="md"
                className="
                  min-h-[46px]
                  rounded-full

                  bg-[#37076D]

                  px-6

                  text-[12px]
                  font-bold
                  uppercase
                  text-white

                  shadow-[0_8px_20px_rgba(55,7,109,0.15)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:bg-[#4A0A88]
                  hover:shadow-[0_12px_26px_rgba(55,7,109,0.20)]
                "
              >
                NHẬN TƯ VẤN
              </Button>
            </a>
          </div>

          {/* =========================
              TABLET CTA
          ========================= */}
          <a
            href="#dang-ky"
            className="
              ml-auto
              hidden
              min-h-[42px]
              items-center
              justify-center

              rounded-full
              bg-[#FEE997]

              px-5

              text-[11px]
             font-bold
              uppercase
              text-[#37076D]

              transition-all

              hover:bg-[#37076D]
              hover:text-white

              md:inline-flex
              xl:hidden
            "
          >
            TƯ VẤN
          </a>

          {/* =========================
              MOBILE BUTTON
          ========================= */}
          <button
            type="button"
            aria-label={
              mobileOpen ? "Đóng menu" : "Mở menu"
            }
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            className="
              ml-3

              flex
              h-[44px]
              w-[44px]
              items-center
              justify-center

              rounded-[12px]

              bg-[#F4E5CB]
              text-[#37076D]

              transition-colors

              hover:bg-[#FEE997]

              xl:hidden
            "
          >
            {mobileOpen ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}
          </button>
        </div>

        {/* =========================
            MOBILE / TABLET MENU
        ========================= */}
        <div
          className={`
            overflow-hidden
            border-t
            border-[#E7DAC6]
            bg-[#FFF9EF]

            transition-all
            duration-300

            xl:hidden

            ${
              mobileOpen
                ? "max-h-[620px] opacity-100"
                : "max-h-0 border-transparent opacity-0"
            }
          `}
        >
          <div
            className="
              mx-auto
              max-w-[1280px]
              px-5
              py-5

              md:px-8
            "
          >
            {/* mobile top title */}
            <div
              className="
                mb-4
                flex
                items-center
                justify-between

                rounded-[14px]
                bg-[#F4E5CB]

                px-4
                py-3
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#686F1F]
                  "
                >
                  Tiếng Trung
                </p>

                <p
                  className="
                    mt-[2px]
                    text-[14px]
                   font-bold
                    text-[#37076D]
                  "
                >
                  Ươm Mầm HSK 🌱
                </p>
              </div>

              <span
                className="
                  rounded-full
                  bg-[#FEE997]

                  px-3
                  py-[6px]

                  text-[10px]
                  font-bold
                  text-[#74070E]
                "
              >
                HỌC QUA ZOOM
              </span>
            </div>

            {/* menu */}
            <nav className="flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`
                    flex
                    min-h-[50px]
                    items-center
                    justify-between

                    text-[13px]
                    font-bold
                    text-[#37076D]

                    transition-all

                    hover:pl-2
                    hover:text-[#686F1F]

                    ${
                      index !== navItems.length - 1
                        ? "border-b border-[#E8DDCD]"
                        : ""
                    }
                  `}
                >
                  <span>{item.label}</span>

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center

                      rounded-full

                      bg-[#F4E5CB]

                      text-[#686F1F]
                    "
                  >
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </nav>

            {/* MOBILE CTA */}
            <a
              href="#dang-ky"
              onClick={closeMenu}
              className="
                mt-5
                flex
                min-h-[50px]
                w-full
                items-center
                justify-center
                gap-2

                rounded-full

                bg-[#37076D]

                px-5

                text-[12px]
                font-bold
                uppercase
                text-white

                shadow-[0_10px_24px_rgba(55,7,109,0.16)]

                transition-all

                hover:bg-[#4A0A88]
              "
            >
              NHẬN TƯ VẤN LỘ TRÌNH

              <ArrowIcon />
            </a>

            <p
              className="
                mt-3
                text-center
                text-[11px]
                text-[#776B7A]
              "
            >
              Học trực tuyến cùng giảng viên qua Zoom
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
