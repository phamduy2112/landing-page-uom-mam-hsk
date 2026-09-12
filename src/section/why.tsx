import React, { useRef, useState } from "react";

/* =========================================================
   DATA
========================================================= */

const items = [
  {
    title: "Lộ Trình Rõ Từ Nền Tảng",
    desc: "Học đúng thứ tự từ Pinyin, phát âm đến từ vựng, ngữ pháp và phản xạ.",
    icon: "route",
  },
  {
    title: "Giáo Viên Sửa Lỗi Trực Tiếp",
    desc: "Không chỉ chỉ ra lỗi mà còn theo sát để học viên sửa đúng.",
    icon: "level",
  },
  {
    title: "APP Đồng Hành Giữa Hai Buổi",
    desc: "Ôn bài, luyện phát âm, Pinyin, chữ Hán và theo dõi tiến độ.",
    icon: "clipboard",
  },
  {
    title: "Mục Tiêu Từng Chặng Rõ Ràng",
    desc: "Biết mình đang ở đâu và cần đạt gì ở bước tiếp theo.",
    icon: "deadline",
  },
  {
    title: "Video Xem Lại & Học Liệu Hỗ Trợ",
    desc: "Tiếp tục ôn luyện sau buổi học, hạn chế đứt nhịp giữa các buổi.",
    icon: "book",
  },
  {
    title: "Học Theo Đúng Mục Tiêu Của Bạn",
    desc: "Xác định học để thi HSK, du học, đi làm hay giao tiếp trước khi tư vấn lộ trình phù hợp.",
    icon: "target",
  },
];

/* =========================================================
   ICONS
========================================================= */

const ClipboardIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="
      h-[64px]
      w-[64px]
      md:h-[72px]
      md:w-[72px]
    "
  >
    <circle cx="32" cy="30" r="21" fill="#FEE997" />

    <path
      d="M23 20h27v37H23z"
      fill="#FFF9EF"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <path
      d="M29 16h15c2 0 4 2 4 4v3H25v-3c0-2 2-4 4-4Z"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <path
      d="m28 32 3 3 5-6M28 43l3 3 5-6M40 33h8M40 44h8"
      stroke="#686F1F"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M54 27v25M51 32h6M51 52h6"
      stroke="#37076D"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const LevelIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="
      h-[64px]
      w-[64px]
      md:h-[72px]
      md:w-[72px]
    "
  >
    <circle cx="31" cy="40" r="19" fill="#B0A5DF" />

    <rect
      x="27"
      y="18"
      width="32"
      height="18"
      rx="1"
      fill="#FFF9EF"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <path
      d="M33 24h18M33 29h11"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <circle
      cx="31"
      cy="40"
      r="8"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <circle
      cx="51"
      cy="40"
      r="8"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <circle
      cx="65"
      cy="40"
      r="8"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <path
      d="M21 58v-7c0-6 5-10 10-10s10 4 10 10v7M41 58v-6c0-5 4-9 10-9s10 4 10 9v6M57 58v-5c0-4 3-8 8-8s8 4 8 8v5"
      stroke="#37076D"
      strokeWidth="2.5"
    />
  </svg>
);

const DeadlineIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="
      h-[64px]
      w-[64px]
      md:h-[72px]
      md:w-[72px]
    "
  >
    <circle cx="55" cy="42" r="19" fill="#FEE997" />

    <circle
      cx="43"
      cy="27"
      r="17"
      fill="#FFF9EF"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <path
      d="M43 15v13l8 5M43 6v6M27 27h-7M59 27h7"
      stroke="#74070E"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M25 48c-5 1-8 5-8 10v8M30 43c-5 0-9 4-9 9M54 48c5 1 8 5 8 10v8"
      stroke="#37076D"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const BookIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="
      h-[64px]
      w-[64px]
      md:h-[72px]
      md:w-[72px]
    "
  >
    <circle cx="29" cy="48" r="20" fill="#B0A5DF" />

    <path
      d="M17 26c10-4 20-2 23 3v31c-7-5-14-6-23-2V26Z"
      fill="#FFF9EF"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <path
      d="M40 29c4-5 13-7 23-3v32c-9-4-16-3-23 2V29Z"
      fill="#FFF9EF"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <path
      d="M22 34c6-2 11-1 15 1M22 42c6-2 11-1 15 1M45 35c5-2 10-2 15 0M45 43c5-2 10-2 15 0"
      stroke="#686F1F"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M15 60h50l-4 6H19l-4-6Z"
      stroke="#37076D"
      strokeWidth="2.5"
    />
  </svg>
);

const RouteIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="
      h-[64px]
      w-[64px]
      md:h-[72px]
      md:w-[72px]
    "
  >
    <circle cx="34" cy="28" r="20" fill="#FEE997" />

    <path
      d="M27 15h31l10 10v35H27V15Z"
      fill="#FFF9EF"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <path
      d="M58 15v11h10M34 33h21M34 41h16M34 49h12"
      stroke="#37076D"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <circle
      cx="61"
      cy="49"
      r="11"
      fill="#FFF9EF"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <path
      d="m56 49 4 4 7-9"
      stroke="#686F1F"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M61 60v8l4-3 4 3v-12"
      stroke="#74070E"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TargetIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    className="
      h-[64px]
      w-[64px]
      md:h-[72px]
      md:w-[72px]
    "
  >
    <circle cx="30" cy="46" r="21" fill="#B0A5DF" />

    <circle
      cx="40"
      cy="40"
      r="24"
      fill="#FFF9EF"
      stroke="#37076D"
      strokeWidth="2.5"
    />

    <circle
      cx="40"
      cy="40"
      r="15"
      stroke="#686F1F"
      strokeWidth="2.5"
    />

    <circle cx="40" cy="40" r="5" fill="#FEE997" stroke="#37076D" strokeWidth="2.5" />

    <path
      d="M43 37 61 19M52 19h9v9"
      stroke="#74070E"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
    <path
      d="m7 4 6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PrevIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="m15 6-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="m9 6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Icon = ({ type }: { type: string }) => {
  if (type === "clipboard") return <ClipboardIcon />;
  if (type === "level") return <LevelIcon />;
  if (type === "deadline") return <DeadlineIcon />;
  if (type === "route") return <RouteIcon />;
  if (type === "target") return <TargetIcon />;

  return <BookIcon />;
};

/* =========================================================
   MOBILE TITLE SIZE

   Dưới 30 ký tự   : 20px
   30 - 44 ký tự   : 18px
   Trên 44 ký tự   : 17px
========================================================= */

const getMobileTitleSize = (title: string) => {
  const length = title.trim().length;

  if (length <= 30) {
    return "text-[17px]";
  }

  if (length <= 44) {
    return "text-[18px]";
  }

  return "text-[17px]";
};

/* =========================================================
   CARD
========================================================= */

type CardProps = {
  item: {
    title: string;
    desc: string;
    icon: string;
  };
  mobile?: boolean;
};

const Card = ({ item, mobile = false }: CardProps) => {
  return (
    <article
      className={`
        group
        relative
        flex
        flex-col
        items-center
        justify-center
        bg-[#FFF9EF]
        text-center
        transition-all
        duration-300

        hover:bg-[#F4E5CB]/50

        ${
          mobile
            ? `
              min-h-[300px]
              w-full
              shrink-0
              snap-center

              rounded-[18px]
              border
              border-[#E1D6C5]

              px-5
              py-6
            `
            : `
              min-h-[280px]
              px-8
              py-7
            `
        }
      `}
    >
      {/* ================= ICON ================= */}

      <div
        className={`
          flex
          items-center
          justify-center
          transition-transform
          duration-300
          group-hover:-translate-y-1

          ${
            mobile
              ? "mb-3 h-[68px]"
              : "mb-4 h-[78px]"
          }
        `}
      >
        <Icon type={item.icon} />
      </div>

      {/* ================= TITLE ================= */}

      <h3
        className={`
          font-bold
          text-[#37076D]

          ${
            mobile
              ? `
                ${getMobileTitleSize(item.title)}
                max-w-[310px]
                leading-[1.35]
                tracking-[-0.25px]
              `
              : `
                text-[17px]
                leading-[1.45]
              `
          }
        `}
      >
        {item.title}
      </h3>

      {/* ================= DESCRIPTION ================= */}

      <p
        className={`
          mx-auto
          text-[#5F5365]

          ${
            mobile
              ? `
                mt-2.5
                max-w-[320px]
                text-[14px]
                leading-[1.55]
              `
              : `
                mt-3
                max-w-[350px]
                text-[14px]
                leading-[1.65]
              `
          }
        `}
      >
        {item.desc}
      </p>

      {/* ================= CTA ================= */}

      <a
        href="#dang-ky"
        className={`
          inline-flex
          items-center
          gap-1
          font-bold
          text-[#686F1F]
          transition-all
          duration-200

          hover:gap-2
          hover:text-[#37076D]

          ${
            mobile
              ? `
                mt-4
                text-[14px]
              `
              : `
                mt-4
                text-[13px]
              `
          }
        `}
      >
        Tìm Hiểu Lộ Trình
        <ArrowIcon />
      </a>
    </article>
  );
};

/* =========================================================
   SECTION
========================================================= */

export default function WhySection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  /* =======================================================
     GO TO SLIDE
  ======================================================= */

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const newIndex = Math.max(
      0,
      Math.min(index, items.length - 1)
    );

    const cards = slider.children;

    const target = cards[newIndex] as HTMLElement;

    if (!target) return;

    slider.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);
  };

  /* =======================================================
     PREV
  ======================================================= */

  const handlePrev = () => {
    goToSlide(currentIndex - 1);
  };

  /* =======================================================
     NEXT
  ======================================================= */

  const handleNext = () => {
    goToSlide(currentIndex + 1);
  };

  /* =======================================================
     DETECT CURRENT SLIDE
  ======================================================= */

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = Array.from(
      slider.children
    ) as HTMLElement[];

    let closestIndex = 0;

    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        slider.scrollLeft - card.offsetLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#FFF9EF]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1270px]

          py-8

          md:px-8
          md:py-14

          lg:py-[64px]
        "
      >
        {/* =================================================
            SECTION TITLE
        ================================================= */}

       <h2
  className="
    mx-auto
    mb-6
    max-w-[370px]
    px-5
    text-center
    text-[26px]
    font-bold
    leading-[1.25]
    tracking-[-0.6px]
    text-[#37076D]

    sm:max-w-[520px]
    sm:text-[28px]

    md:mb-10
    md:max-w-none
    md:px-0
    md:text-[32px]
    md:leading-[1.3]

    lg:text-[40px]
  "
>
  Vì Sao Học Viên Chọn{" "}
  <span className="text-[#74070E]">
    Ươm Mầm HSK?
  </span>
</h2>
        {/* =================================================
            MOBILE
            < 768PX
        ================================================= */}

        <div className="md:hidden">

          {/* ================= SLIDER WRAPPER ================= */}

          <div className="px-4">

            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="
                flex
                w-full

                snap-x
                snap-mandatory

                gap-4

                overflow-x-auto
                scroll-smooth

                [scrollbar-width:none]
                [-ms-overflow-style:none]

                [&::-webkit-scrollbar]:hidden
              "
            >
              {items.map((item, index) => (
                <Card
                  key={index}
                  item={item}
                  mobile
                />
              ))}
            </div>

          </div>

          {/* =================================================
              MOBILE CONTROLS
          ================================================= */}

          <div
            className="
              mt-4
              flex
              items-center
              justify-center
              gap-3
            "
          >

            {/* ================= PREV ================= */}

            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Slide trước"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center

                rounded-full
                border
                border-[#37076D]

                text-[#37076D]

                transition-all
                duration-200

                hover:bg-[#37076D]
                hover:text-white

                disabled:cursor-not-allowed
                disabled:opacity-30

                disabled:hover:bg-transparent
                disabled:hover:text-[#37076D]
              "
            >
              <PrevIcon />
            </button>

            {/* ================= PAGE NUMBER ================= */}

            <span
              className="
                min-w-[50px]
                text-center
                text-[13px]
                font-bold
                text-[#686F1F]
              "
            >
              {currentIndex + 1} / {items.length}
            </span>

            {/* ================= NEXT ================= */}

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === items.length - 1}
              aria-label="Slide tiếp theo"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center

                rounded-full
                border
                border-[#37076D]

                text-[#37076D]

                transition-all
                duration-200

                hover:bg-[#37076D]
                hover:text-white

                disabled:cursor-not-allowed
                disabled:opacity-30

                disabled:hover:bg-transparent
                disabled:hover:text-[#37076D]
              "
            >
              <NextIcon />
            </button>

          </div>
        </div>

        {/* =================================================
            TABLET + DESKTOP
        ================================================= */}

        <div
          className="
            hidden

            md:grid
            md:grid-cols-2
            md:gap-[1px]
            md:bg-[#D8CBB7]

            lg:grid-cols-3
          "
        >
          {items.map((item, index) => (
            <Card
              key={index}
              item={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
