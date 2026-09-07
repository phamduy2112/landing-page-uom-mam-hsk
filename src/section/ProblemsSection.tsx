import React from "react";

import image1 from "../assets/15.png";
import image2 from "../assets/16.png";
import image3 from "../assets/17.png";
import image4 from "../assets/18.png";

/* =========================
   DATA
========================= */

const roadmapSteps = [
  {
    number: "01",
    title: "Xác Định Điểm Bắt Đầu",
    description:
      "Trao đổi về nền tảng hiện tại, mục tiêu học tiếng Trung và thời gian bạn có thể dành cho việc học.",
    note: "Xác định bạn phù hợp với lớp Từ Số 0, HSK 3 hay HSK 4.",
    noteIcon: "✓",
    image: image1,
    theme: "green",
  },

  {
    number: "02",
    title: "Xây Chắc Nền Tảng Tiếng Trung",
    description:
      "Học đúng thứ tự từ phát âm, Pinyin đến từ vựng, ngữ pháp và cách hình thành câu.",
    note: "Nền tảng chắc giúp bạn học lên các trình độ HSK sau dễ dàng hơn.",
    noteIcon: "🌱",
    image: image2,
    theme: "yellow",
  },

  {
    number: "03",
    title: "Học Theo Lộ Trình HSK",
    description:
      "Kiến thức được chia theo từng chặng rõ ràng, kết hợp nội dung HSK với khả năng sử dụng tiếng Trung thực tế.",
    note: "Học có hệ thống • Đúng trọng tâm • Không học lan man.",
    noteIcon: "▣",
    image: image3,
    theme: "purple",
  },

  {
    number: "04",
    title: "Theo Sát Tiến Độ Học Tập",
    description:
      "Giảng viên đồng hành trong quá trình học, hỗ trợ củng cố những phần chưa chắc và từng bước tiến đến mục tiêu HSK.",
    note: "Theo sát quá trình học và áp dụng chính sách cam kết của chương trình.",
    noteIcon: "★",
    image: image4,
    theme: "red",
  },
];

/* =========================
   BRAND THEMES
========================= */

const themeStyles = {
  green: {
    number: "bg-[#686F1F]",
    title: "text-[#686F1F]",

    iconBg:
      "bg-[radial-gradient(circle_at_center,#ffffff_0%,#F4F6E9_65%,#E8EDD4_100%)]",

    noteBg: "bg-[#F3F5E6]",
    noteText: "text-[#62691F]",
    noteIconBg: "bg-[#E5E9C8]",
    noteIconText: "text-[#686F1F]",
  },

  yellow: {
    number: "bg-[#D5A61B]",
    title: "text-[#A27C06]",

    iconBg:
      "bg-[radial-gradient(circle_at_center,#ffffff_0%,#FFF9DF_65%,#FEE997_100%)]",

    noteBg: "bg-[#FFF8D9]",
    noteText: "text-[#8A6900]",
    noteIconBg: "bg-[#FEE997]",
    noteIconText: "text-[#686F1F]",
  },

  purple: {
    number: "bg-[#37076D]",
    title: "text-[#37076D]",

    iconBg:
      "bg-[radial-gradient(circle_at_center,#ffffff_0%,#F3EFF9_65%,#E5DFF1_100%)]",

    noteBg: "bg-[#F3EFF9]",
    noteText: "text-[#5E3A82]",
    noteIconBg: "bg-[#E0D8F0]",
    noteIconText: "text-[#37076D]",
  },

  red: {
    number: "bg-[#74070E]",
    title: "text-[#74070E]",

    iconBg:
      "bg-[radial-gradient(circle_at_center,#ffffff_0%,#FBF1F1_65%,#F4DFE1_100%)]",

    noteBg: "bg-[#FAF0F0]",
    noteText: "text-[#74070E]",
    noteIconBg: "bg-[#F1DCDD]",
    noteIconText: "text-[#74070E]",
  },
};

/* =========================
   CARD
========================= */

function RoadmapCard({
  step,
}: {
  step: (typeof roadmapSteps)[number];
}) {
  const theme =
    themeStyles[step.theme as keyof typeof themeStyles];

  return (
    <article
      className="
        relative
        z-[1]

        min-w-0
        max-w-full

        pt-[20px]

        min-[769px]:h-full
        min-[769px]:pt-[24px]
      "
    >
      {/* =========================
          STEP NUMBER
      ========================= */}

      <div
        className={`
          absolute
          left-1/2
          top-0
          z-10

          flex
          h-[40px]
          w-[40px]
          -translate-x-1/2
          items-center
          justify-center

          rounded-full

          ${theme.number}

          text-[12px]
          font-bold
          text-white

          shadow-[0_0_0_5px_#F4E5CB,0_5px_12px_rgba(55,7,109,0.12)]

          min-[577px]:h-[42px]
          min-[577px]:w-[42px]
          min-[577px]:text-[13px]

          min-[769px]:top-[2px]
          min-[769px]:h-[44px]
          min-[769px]:w-[44px]
          min-[769px]:text-[13px]
        `}
      >
        {step.number}
      </div>

      {/* =========================
          CARD
      ========================= */}

      <div
        className="
          grid
          min-h-0
          min-w-0
          max-w-full

          grid-cols-[90px_minmax(0,1fr)]
          items-center
          gap-[13px]

          rounded-[18px]

          bg-[#FFFDF8]

          p-[14px]
          pt-[30px]

          shadow-[0_10px_28px_rgba(55,7,109,0.05)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-[0_18px_40px_rgba(55,7,109,0.09)]

          max-[400px]:grid-cols-[72px_minmax(0,1fr)]

          min-[577px]:grid-cols-[125px_minmax(0,1fr)]
          min-[577px]:gap-5
          min-[577px]:p-[18px]
          min-[577px]:pt-[32px]

          min-[769px]:flex
          min-[769px]:h-full
          min-[769px]:flex-col
          min-[769px]:items-center
          min-[769px]:gap-0

          min-[769px]:rounded-[20px]

          min-[769px]:px-4
          min-[769px]:pb-[24px]
          min-[769px]:pt-[30px]

          min-[769px]:text-center
        "
      >
        {/* =========================
            IMAGE
        ========================= */}

        <div
          className={`
            flex
            h-20
            w-20
            shrink-0
            items-center
            justify-center

            overflow-hidden
            rounded-full

            ${theme.iconBg}

            max-[400px]:h-[68px]
            max-[400px]:w-[68px]

            min-[577px]:h-[108px]
            min-[577px]:w-[108px]

            min-[769px]:mb-[16px]
            min-[769px]:h-[104px]
            min-[769px]:w-[104px]
          `}
        >
          <img
            src={step.image}
            alt={step.title}
            className="
              h-auto
              w-auto
              object-contain

              max-h-[54px]
              max-w-[54px]

              max-[400px]:max-h-[42px]
              max-[400px]:max-w-[42px]

              min-[577px]:max-h-[82px]
              min-[577px]:max-w-[82px]

              min-[769px]:max-h-[68px]
              min-[769px]:max-w-[68px]
            "
          />
        </div>

        {/* =========================
            CONTENT
        ========================= */}

        <div
          className="
            flex
            h-full
            min-w-0
            flex-col

            min-[769px]:w-full
          "
        >
          {/* TITLE */}

          <h3
            className={`
              mb-[7px]

              text-[13px]
              font-bold
              
              leading-[1.4]

              ${theme.title}

              max-[400px]:text-[11px]

              min-[577px]:text-[15px]

              min-[769px]:mb-2
              min-[769px]:flex
              min-[769px]:items-center
              min-[769px]:justify-center

              min-[769px]:text-[14px]
              min-[769px]:leading-[1.35]
            `}
          >
            {step.title}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              mb-2

              text-[10px]
              leading-[1.6]
              text-[#62566A]

              max-[400px]:text-[9px]

              min-[577px]:text-[13px]
              min-[577px]:leading-[1.65]

              min-[769px]:mb-4
              min-[769px]:text-center
              min-[769px]:text-[12px]
              min-[769px]:leading-[1.6]
            "
          >
            {step.description}
          </p>

          {/* =========================
              NOTE
          ========================= */}

          <div
            className={`
              flex
              w-full
              items-center
              gap-[7px]

              rounded-[10px]

              ${theme.noteBg}

              px-2
              py-[8px]

              text-[8.5px]
              font-medium
              leading-[1.45]

              ${theme.noteText}

              min-[577px]:gap-[10px]
              min-[577px]:px-[14px]
              min-[577px]:py-[10px]
              min-[577px]:text-[11px]

              min-[769px]:mt-auto
              min-[769px]:gap-[7px]
              min-[769px]:px-[10px]
              min-[769px]:py-[9px]
              min-[769px]:text-left
              min-[769px]:text-[9px]
            `}
          >
            {/* NOTE ICON */}

            <div
              className={`
                flex
                h-[23px]
                w-[23px]
                shrink-0
                items-center
                justify-center

                rounded-[7px]

                ${theme.noteIconBg}
                ${theme.noteIconText}

                text-[12px]
                font-bold

                min-[577px]:h-[28px]
                min-[577px]:w-[28px]

                min-[769px]:h-[25px]
                min-[769px]:w-[25px]
              `}
            >
              {step.noteIcon}
            </div>

            <span className="min-w-0 sm:text-[10px]">
              {step.note}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================
   MAIN SECTION
========================= */

export default function HSKRoadmapSection() {
  return (
    <section
      id="lo-trinh"
      className="
        relative
        w-full
        overflow-hidden

        bg-[#F4E5CB]

        px-3
py-8        min-[577px]:px-5
        min-[577px]:py-12

        min-[769px]:px-6
        min-[769px]:py-[68px]
      "
    >
      {/* =========================
          BACKGROUND DECOR
      ========================= */}

      {/* <div
        className="
          pointer-events-none
          absolute
          -left-[120px]
          -top-[130px]

          h-[300px]
          w-[300px]

          rounded-full
          bg-[#FEE997]/35
        "
      /> */}



      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1200px]
        "
      >
        {/* =========================
            HEADING
        ========================= */}

        <div
          className="
            mx-auto
            mb-2
          
            text-center
          "
        >
          <h2
            className="
              mt-3
 text-[26px]
              font-bold
              leading-[1.2]
              tracking-[-0.7px]
              text-[#37076D]

                md:text-[32px]

            lg:text-[40px]
            "
          >
            Lộ Trình{" "}

            <span className="text-[#74070E]">
              4 Bước
            </span>

            <br className="sm:hidden" />

            {" "}Học Tiếng Trung
          </h2>

          <p
            className="
              mx-auto
              mt-2
            

              text-[13px]
              leading-[1.7]
              text-[#62566A]

              md:text-[15px]
            "
          >
            Từ xác định điểm bắt đầu, xây nền đúng đến học theo
            lộ trình HSK và được theo sát trong suốt quá trình.
          </p>
        </div>

        {/* =========================
            ROADMAP
        ========================= */}

        <div
          className="
            relative

            flex
            w-full
            min-w-0
            flex-col
            gap-[18px]

            min-[769px]:grid
            min-[769px]:grid-cols-4
            min-[769px]:items-stretch
            min-[769px]:gap-[18px]
          "
        >
          {roadmapSteps.map((step) => (
            <RoadmapCard
              key={step.number}
              step={step}
            />
          ))}
        </div>

        {/* =========================
            BOTTOM MESSAGE
        ========================= */}

      </div>
    </section>
  );
}