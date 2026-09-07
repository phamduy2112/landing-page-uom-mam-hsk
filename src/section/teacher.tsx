import React, { useRef, useState } from "react";

const teachers = [
  {
    initials: "B",
    name: "Cô Bội",
    role: "FOUNDER & GIẢNG VIÊN",
    highlights: [
      "6 năm kinh nghiệm",
      "I-Shou University",
      "Sinh ra trong gia đình người Hoa",
    ],
    accent: "#686F1F",
    avatarBg: "#E8F0DD",
  },
  {
    initials: "MP",
    name: "Cô Mai Phương",
    role: "GIẢNG VIÊN TIẾNG TRUNG",
    highlights: [
      "HSK 6",
      "Giải nhất Tài năng Hán Ngữ",
      "3 năm kinh nghiệm",
    ],
    accent: "#37076D",
    avatarBg: "#EAE5F6",
  },
  {
    initials: "NA",
    name: "Cô Ngọc Anh",
    role: "GIẢNG VIÊN TIẾNG TRUNG",
    highlights: [
      "HSK 5",
      "Học bổng Đại học Đại Liên, Trung Quốc",
      "2 năm kinh nghiệm",
    ],
    accent: "#74070E",
    avatarBg: "#F5E3E3",
  },
  {
    initials: "HA",
    name: "Thầy Hùng Anh",
    role: "GIẢNG VIÊN TIẾNG TRUNG",
    highlights: [
      "HSK 5",
      "2 năm kinh nghiệm",
      "Trợ thủ đắc lực của cô Bội",
    ],
    accent: "#686F1F",
    avatarBg: "#E8F0DD",
  },
];

/* =========================================================
   ICONS
========================================================= */

const PrevIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
  >
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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
  >
    <path
      d="m9 6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* =========================================================
   TEACHER CARD
========================================================= */

function TeacherCard({
  teacher,
  mobile = false,
}: {
  teacher: (typeof teachers)[number];
  mobile?: boolean;
}) {
  return (
    <article
      className={`
        group
        relative

        flex
        flex-col
        items-center
        justify-center

        overflow-hidden

        rounded-[20px]
        border
        border-[#DDDCCF]
        bg-[#FFFDF8]

        text-center

        shadow-[0_8px_25px_rgba(55,7,109,0.04)]

        transition-all
        duration-300

        hover:-translate-y-[4px]
        hover:border-[#B0A5DF]
        hover:shadow-[0_16px_35px_rgba(55,7,109,0.09)]

        ${
          mobile
            ? `
              min-h-[320px]
              w-full
              shrink-0
              snap-center

              px-5
              py-7
            `
            : `
              min-h-[280px]
              px-5
              py-7
            `
        }
      `}
    >
      {/* DECOR */}

      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -top-8

          h-[90px]
          w-[90px]

          rounded-full
          bg-[#FEE997]/35
        "
      />

      {/* =====================================================
          INITIAL AVATAR
      ===================================================== */}

      <div
        style={{
          backgroundColor: teacher.avatarBg,
          color: teacher.accent,
        }}
        className="
          relative

          flex
          h-[72px]
          w-[72px]
          items-center
          justify-center

          rounded-full

          text-[22px]
          font-bold

          transition-transform
          duration-300

          group-hover:scale-105

          md:h-[68px]
          md:w-[68px]
          md:text-[21px]
        "
      >
        {teacher.initials}
      </div>

      {/* =====================================================
          NAME
      ===================================================== */}

      <h3
        className="
          mt-4

          text-[18px]
          font-bold
          leading-[1.35]
          tracking-[-0.2px]

          text-[#37076D]

          md:text-[17px]
        "
      >
        {teacher.name}
      </h3>

      {/* =====================================================
          ROLE
      ===================================================== */}

      <p
        style={{
          color: teacher.accent,
        }}
        className="
          mt-[6px]

          text-[11px]
          font-bold

          uppercase
          tracking-[0.1em]

          md:text-[10px]
        "
      >
        {teacher.role}
      </p>

      {/* =====================================================
          SEPARATOR
      ===================================================== */}

      <div
        style={{
          backgroundColor: teacher.accent,
        }}
        className="
          my-4

          h-[2px]
          w-[32px]

          rounded-full
          opacity-50
        "
      />

      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <div className="space-y-[6px]">
        {teacher.highlights.map((item, index) => (
          <p
            key={index}
            className="
              text-[14px]
              leading-[1.55]
              text-[#62566A]

              md:text-[13px]
            "
          >
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function TeachersSection() {
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
      Math.min(index, teachers.length - 1)
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
     PREVIOUS
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
     HANDLE SWIPE / SCROLL
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
        relative
        w-full
        overflow-hidden

        bg-[#FFF9EF]

        pt-8
        pb-10

        md:py-16
        lg:py-[72px]
      "
      id="giang-vien"
    >
      {/* =====================================================
          BACKGROUND DECOR
      ===================================================== */}

      {/* <div
        className="
          pointer-events-none
          absolute

          -left-[120px]
          -top-[130px]

          h-[320px]
          w-[320px]

          rounded-full
          bg-[#FEE997]/40
        "
      /> */}



      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1280px]

          md:px-8
        "
      >
        {/* ===================================================
            HEADING
        =================================================== */}

        <div
          className="
            mx-auto
            mb-5
            max-w-[390px]
            px-5
            text-center

            sm:max-w-[560px]

            md:mb-5
            md:max-w-none
            md:px-0
          "
        >
          <h2
            className="
              text-[26px]
              font-bold
              leading-[1.25]
              tracking-[-0.6px]
              text-[#37076D]

              sm:text-[28px]

              md:text-[32px]
              md:leading-[1.3]

              lg:text-[40px]
            "
          >
            Giáo Viên Gen Z Tận Tâm

            <br />

            <span className="text-[#74070E]">
              Truyền Cảm Hứng
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[355px]

              text-center
              text-[14px]
              leading-[1.6]
              text-[#62566A]

              sm:max-w-[560px]

              md:max-w-[680px]
              md:text-[15px]
              md:leading-[1.7]
            "
          >
            Không chỉ truyền đạt kiến thức, đội ngũ giảng viên
            Ươm Mầm HSK đồng hành cùng học viên để mỗi chặng
            học tiếng Trung trở nên dễ hiểu và gần gũi hơn.
          </p>
        </div>

        {/* ===================================================
            MOBILE SLIDER
            < 768PX
        =================================================== */}

        <div className="md:hidden">
          {/* SLIDER */}

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
              {teachers.map((teacher, index) => (
                <TeacherCard
                  key={index}
                  teacher={teacher}
                  mobile
                />
              ))}
            </div>
          </div>

          {/* =================================================
              CONTROLS
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
            {/* PREV */}

            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Giáo viên trước"
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

            {/* NUMBER */}

            <span
              className="
                min-w-[50px]

                text-center
                text-[13px]
                font-bold

                text-[#686F1F]
              "
            >
              {currentIndex + 1} / {teachers.length}
            </span>

            {/* NEXT */}

            <button
              type="button"
              onClick={handleNext}
              disabled={
                currentIndex === teachers.length - 1
              }
              aria-label="Giáo viên tiếp theo"
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

        {/* ===================================================
            TABLET + DESKTOP
            >= 768PX
        =================================================== */}

        <div
          className="
            hidden

            md:grid
            md:grid-cols-2
            md:gap-4

            lg:grid-cols-4
            lg:gap-4
          "
        >
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              teacher={teacher}
            />
          ))}
        </div>
      </div>
    </section>
  );
}