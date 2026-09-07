"use client";

import { useState } from "react";
import Button from "../ui/button";
import logo from "../assets/logo.png";

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
    label: "CAM KẾT",
    href: "#cam-ket",
  },
  {
    label: "GIẢNG VIÊN",
    href: "#giang-vien",
  },

  {
    label: "FEEDBACK HỌC VIÊN",
    href: "#feedback",
  },
 
  {
    label: "CÂU HỎI",
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

          border-t-[3px]
          border-[#686F1F]
          border-b
          border-[#E7DAC6]

          bg-[#FFF9EF]/95

          backdrop-blur-md

          shadow-[0_4px_18px_rgba(55,7,109,0.04)]
        "
      >
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
                w-[80px]
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