import React from "react";
import logo from "../assets/logo.png";

const brandInfo = {
  company: "TIẾNG TRUNG ƯƠM MẦM HSK",
  phone: "0123 456 789",
  phoneLink: "0123456789",
  zaloLink: "https://zalo.me/0123456789",
  email: "hello@uommanhhsk.vn",
};

const courses = [
  {
    name: "LỚP TỪ SỐ 0",
    href: "#tu-so-0",
  },
  {
    name: "LỚP HSK 3",
    href: "#hsk-3",
  },
  {
    name: "LỚP HSK 4",
    href: "#hsk-4",
  },
];

/* =========================
   ICONS
========================= */

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-[17px] w-[17px] shrink-0"
  >
    <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-[17px] w-[17px] shrink-0"
  >
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const ZoomIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-6 w-6"
  >
    <rect x="3" y="6" width="12" height="12" rx="2" />
    <path
      d="m15 10 5-3v10l-5-3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-[20px] w-[20px]"
  >
    <path d="M13.5 21v-8h2.8l.42-3.2H13.5V7.75c0-.93.26-1.56 1.6-1.56h1.7V3.33A22.8 22.8 0 0 0 14.32 3c-2.45 0-4.12 1.5-4.12 4.25V9.8H7.43V13h2.77v8h3.3Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-[21px] w-[21px]"
  >
    <path d="M23 12s0-3.5-.45-5.2a3 3 0 0 0-2.1-2.1C18.75 4.25 12 4.25 12 4.25s-6.75 0-8.45.45a3 3 0 0 0-2.1 2.1C1 8.5 1 12 1 12s0 3.5.45 5.2a3 3 0 0 0 2.1 2.1c1.7.45 8.45.45 8.45.45s6.75 0 8.45-.45a3 3 0 0 0 2.1-2.1C23 15.5 23 12 23 12Zm-13.2 3.4V8.6l6 3.4-6 3.4Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-[19px] w-[19px]"
  >
    <path d="M15.5 3c.4 2.2 1.7 3.6 4 4v3.1c-1.5 0-2.8-.4-4-1.2v6.2a6 6 0 1 1-5.2-6v3.2a2.8 2.8 0 1 0 2 2.7V3h3.2Z" />
  </svg>
);

const ZaloIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className="h-[23px] w-[23px]"
    aria-hidden="true"
  >
    <path
      d="M7.2 5.5h17.6A3.7 3.7 0 0 1 28.5 9.2v11.6a3.7 3.7 0 0 1-3.7 3.7H14.2l-5.9 3.8.9-3.8h-2A3.7 3.7 0 0 1 3.5 20.8V9.2a3.7 3.7 0 0 1 3.7-3.7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <text
      x="16"
      y="18.7"
      fill="currentColor"
      fontSize="8.2"
      fontWeight="800"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
    >
      Zalo
    </text>
  </svg>
);

const ArrowUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    className="h-5 w-5"
  >
    <path
      d="m6 14 6-6 6 6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* =========================
   FOOTER
========================= */

export default function Footer() {
  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-[#37076D]
        text-[#FFF9EF]
      "
    >
      {/* DECOR */}
      {/* <div
        className="
          pointer-events-none
          absolute
          -right-[100px]
          -top-[120px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#B0A5DF]/10
        "
      /> */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[180px]
          left-[8%]
          h-[330px]
          w-[330px]
          rounded-full
          bg-[#686F1F]/10
        "
      />

      {/* MAIN */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1280px]
          grid-cols-1
          gap-10
          px-5
          py-12

          sm:px-8

          md:grid-cols-2
          md:gap-x-12
          md:gap-y-12
          md:py-14

          lg:grid-cols-[1.2fr_1fr_0.85fr_0.8fr]
          lg:gap-x-14
          lg:py-[64px]
        "
      >
        {/* COLUMN 1 */}
        <div>
          <a href="/" className="inline-block">
            <img
              src={logo}
              alt="Tiếng Trung Ươm Mầm HSK"
              className="
                h-auto
                w-[150px]
                object-contain
              "
            />
          </a>

          <p
            className="
              mb-5
              max-w-[300px]
              text-[13px]
              leading-[1.7]
              text-[#E4DDF0]
            "
          >
            Đồng hành cùng bạn từ những nền tảng đầu tiên
            đến hành trình chinh phục tiếng Trung và HSK.
          </p>

          <div className="space-y-[10px] text-[13px]">
            <p
              className="
                font-bold
                uppercase
                text-[#FEE997]
              "
            >
              {brandInfo.company}
            </p>

            <a
              href={`tel:${brandInfo.phoneLink}`}
              className="
                flex
                w-fit
                items-center
                gap-[10px]
                transition-colors
                hover:text-[#FEE997]
              "
            >
              <PhoneIcon />
              {brandInfo.phone}
            </a>

            <a
              href={`mailto:${brandInfo.email}`}
              className="
                flex
                w-fit
                items-center
                gap-[10px]
                transition-colors
                hover:text-[#FEE997]
              "
            >
              <MailIcon />
              {brandInfo.email}
            </a>
          </div>
        </div>

        {/* COLUMN 2 - LEARNING FORMAT */}
        <div>
          <h3
            className="
              mb-[24px]
              text-[14px]
             font-bold
              uppercase
              tracking-[0.08em]
              text-[#FEE997]
            "
          >
            Hình Thức Học
          </h3>

          <div
            className="
              rounded-[18px]
              border
              border-white/10
              bg-white/[0.06]
              p-5
            "
          >
            <div
              className="
                flex
                h-[48px]
                w-[48px]
                items-center
                justify-center
                rounded-[14px]
                bg-[#FEE997]
                text-[#37076D]
              "
            >
              <ZoomIcon />
            </div>

            <h4
              className="
                mt-4
                text-[16px]
               font-bold
                text-white
              "
            >
              Học Trực Tuyến Qua Zoom
            </h4>

            <p
              className="
                mt-2
                text-[13px]
                leading-[1.7]
                text-[#DDD4E7]
              "
            >
              Học trực tiếp cùng giảng viên qua Zoom,
              thuận tiện tham gia dù bạn đang ở bất kỳ đâu.
            </p>

            <p
              className="
                mt-3
                text-[12px]
                font-semibold
                leading-[1.6]
                text-[#FEE997]
              "
            >
              Có lớp học và giảng viên đồng hành theo từng
              lộ trình HSK.
            </p>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3
            className="
              mb-[24px]
              text-[14px]
             font-bold
              uppercase
              tracking-[0.08em]
              text-[#FEE997]
            "
          >
            Khóa Học
          </h3>

          <ul
            className="
              space-y-[14px]
              text-[13px]
              font-semibold
            "
          >
            {courses.map((course, index) => (
              <li key={index}>
                <a
                  href={course.href}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[#E7DFEE]

                    transition-all
                    duration-200

                    before:h-[5px]
                    before:w-[5px]
                    before:rounded-full
                    before:bg-[#686F1F]

                    hover:translate-x-1
                    hover:text-[#FEE997]
                  "
                >
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3
            className="
              mb-[24px]
              text-[14px]
             font-bold
              uppercase
              tracking-[0.08em]
              text-[#FEE997]
            "
          >
            Theo Dõi Ươm Mầm HSK
          </h3>

          <p
            className="
              mb-5
              text-[12px]
              leading-[1.65]
              text-[#D9D0E3]
            "
          >
            Cùng học tiếng Trung mỗi ngày và cập nhật
            các lớp tuyển sinh mới.
          </p>

          <div className="flex items-center gap-[10px]">
   

            <a
              href={brandInfo.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zalo"
              className="
                flex
                h-[40px]
                w-[40px]
                items-center
                justify-center
                rounded-full
                bg-[#FEE997]
                text-[#37076D]
                transition-all
                hover:-translate-y-1
                hover:bg-white
              "
            >
              <ZaloIcon />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 border-t border-white/10">
        <div
          className="
            mx-auto
            flex
            max-w-[1280px]
            flex-col
            gap-2
            px-5
            py-5
            text-[11px]
            text-[#CFC3DA]

            sm:px-8

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Tiếng Trung Ươm Mầm HSK.
            All rights reserved.
          </p>

          <p className="text-[#FEE997]">
            Học đúng nền tảng · Đi xa hơn cùng tiếng Trung 🌱
          </p>
        </div>
      </div>

      {/* SCROLL TOP */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          fixed
          bottom-4
          right-4
          z-50

          flex
          h-[46px]
          w-[46px]
          items-center
          justify-center

          rounded-full
          bg-[#FEE997]
          text-[#37076D]

          shadow-[0_10px_24px_rgba(55,7,109,0.20)]

          transition-all

          hover:-translate-y-1
          hover:bg-white
        "
      >
        <ArrowUpIcon />
      </button>
    </footer>
  );
}
