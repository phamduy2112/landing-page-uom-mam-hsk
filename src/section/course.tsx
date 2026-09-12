import React from "react";
import image1 from "../assets/BÀI-LANDINGPAGE-UOMMAM-HSK-3_upscayl_5x_upscayl-standard-4x.png";
import image2 from "../assets/12.png";
import image3 from "../assets/3.png";
const courses = [
  {
    id: "tu-so-0",
    level: "NHẬP MÔN",
    name: "Từ Số 0",
    color: "#686F1F",
    border: "#DCE5CA",
    softBg: "#F5F7E9",
    badgeBg: "#FEE997",

    image: image1,

    suitableTitle: "Phù hợp với bạn nếu:",
    features: [
      "Bắt đầu hoàn toàn từ số 0",
      "Chưa biết Pinyin và cách phát âm tiếng Trung",
      "Muốn xây nền từ vựng, ngữ pháp bài bản",
      "Muốn hình thành khả năng giao tiếp cơ bản",
    ],

    noteTitle: "Đầu Ra",
    note: "Hoàn thành nền tảng và hướng đến HSK 2.",

    button: "TÌM HIỂU LỚP TỪ SỐ 0",
  },

  {
    id: "hsk-3",
    level: "TRUNG CẤP",
    name: "Lớp HSK 3",
    color: "#37076D",
    border: "#D8D0E8",
    softBg: "#F6F3FA",
    badgeBg: "#E8E2F5",

    image: image2,

    suitableTitle: "Phù hợp với bạn nếu:",
    features: [
      "Đã có nền tảng tương đương HSK 2",
      "Muốn mở rộng vốn từ vựng tiếng Trung",
      "Cần củng cố và nâng cao ngữ pháp",
      "Cải thiện khả năng hội thoại và phản xạ thực tế",
    ],

    noteTitle: "Đầu Ra",
    note: "Củng cố năng lực và hướng đến HSK 3.",

    button: "TÌM HIỂU LỚP HSK 3",
  },

  {
    id: "hsk-4",
    level: "NÂNG CAO",
    name: "Lớp HSK 4",
    color: "#74070E",
    border: "#E8D0D1",
    softBg: "#FAF2F2",
    badgeBg: "#F5DEDF",

    image: image3,

    suitableTitle: "Phù hợp với bạn nếu:",
    features: [
      "Đã có nền tảng tiếng Trung tương đối chắc",
      "Muốn nâng cao từ vựng và ngữ pháp HSK 4",
      "Cần phát triển khả năng sử dụng tiếng Trung",
      "Đang chuẩn bị cho kỳ thi HSK chính thức",
    ],

    noteTitle: "Đầu Ra",
    note: "Nâng cao năng lực và chinh phục HSK 4.",

    button: "TÌM HIỂU LỚP HSK 4",
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <span
      style={{ backgroundColor: color }}
      className="
        mt-[2px]
        flex
        h-[19px]
        w-[19px]
        shrink-0
        items-center
        justify-center
        rounded-full
        text-[11px]
        font-bold
        text-white
      "
    >
      ✓
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="m7 4 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CourseCard({
  course,
}: {
  course: (typeof courses)[number];
}) {
  return (
    <article
      style={{
        borderColor: course.border,
      }}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        bg-[#FFFDF8]
        p-[10px]
        shadow-[0_12px_34px_rgba(55,7,109,0.06)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_20px_45px_rgba(55,7,109,0.10)]
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-[18px]">
        <img
          src={course.image}
          alt={course.name}
          className="
            sm:h-[210px]
            w-full
            object-fill
            transition-transform
            duration-500
        
            group-hover:scale-[1.03]

          
          "
        />

        {/* LEVEL BADGE */}
        <div
          style={{
            backgroundColor: course.badgeBg,
            color: course.color,
          }}
          className="
            absolute
            hidden
            sm:block
            left-4
            top-4
            rounded-full
            px-3
            py-[7px]
            text-[11px]
           font-bold
            
            tracking-[0.12em]
          "
        >
          {course.level}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col px-5 pb-3 pt-5">
        {/* COURSE NAME */}
        <h3
          style={{ color: course.color }}
          className="
            text-[18px]
           font-bold
            leading-[1.25]
            tracking-[-0.4px]

            md:text-[24px]
          "
        >
          {course.name}
        </h3>

        {/* SUITABLE */}
        <p
          className="
            mt-1
            text-[13px]
            font-bold
            text-[#37076D]
          "
        >
          {course.suitableTitle}
        </p>

        {/* FEATURES */}
        <ul className="mt-4 space-y-[12px]">
          {course.features.map((item, index) => (
            <li
              key={index}
              className="
                flex
                items-start
                gap-[10px]
                text-[13px]
                leading-[1.6]
                text-[#5B5060]

                md:text-[14px]
              "
            >
              <CheckIcon color={course.color} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* BOTTOM */}
        <div className="mt-auto pt-7">
          {/* OUTCOME BOX */}
          <div
            style={{
              backgroundColor: course.softBg,
              borderColor: course.border,
            }}
            className="
              rounded-[15px]
              border
              px-4
              py-4
            "
          >
            <p
              style={{ color: course.color }}
              className="
                text-[12px]
               font-bold
                
                tracking-[0.08em]
              "
            >
              {course.noteTitle}
            </p>

            <p
              className="
                mt-1
                text-[13px]
                font-medium
                leading-[1.55]
                text-[#514655]
              "
            >
              {course.note}
            </p>
          </div>

          {/* CTA */}
          <a
            href={`#${course.id}`}
            style={{
              backgroundColor: course.color,
            }}
            className="
              mt-5
              flex
              min-h-[52px]
              w-full
              items-center
              justify-between
              gap-3
              rounded-full
              px-5
              text-[12px]
              font-bold
              uppercase
              text-white
              shadow-[0_8px_20px_rgba(55,7,109,0.10)]
              transition-all
              duration-300

              hover:-translate-y-[2px]
            "
          >
            <span>{course.button}</span>

            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/15
              "
            >
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CoursesSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FFF9EF]
        py-8

        md:py-16
        lg:py-[72px]
      "
      id="khoa-hoc"
    >
      {/* DECOR */}
      {/* <div
        className="
          pointer-events-none
          absolute
          -right-[100px]
          -top-[100px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#FEE997]/40
        "
      /> */}

     

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-5

          md:px-8
        "
      >
        {/* HEADING */}
        <div
          className="
            mb-4
            flex
            flex-col
            sm:gap-5
            gap-3

            md:mb-5
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
        

            <h2
              className="
                mt-3
                  text-[26px]
               font-bold
               text-center
                leading-[1.2]
                tracking-[-0.8px]
                text-[#37076D]
            sm:text-left

                   md:text-[32px]

            lg:text-[40px]
              "
            >
              3 Lớp – Từ 0
              <br />
              Đến Lưu Loát{" "}
              <span className="text-[#686F1F]">
              
              </span>
            </h2>
          </div>

          <p
            className="
              text-[14px]
              leading-[1.7]
              text-[#62566A]
            text-center
            sm:text-left
              md:text-[15px]
              lg:pb-1
              sm:w-[520px]
            "
          >
            Dù bạn đang bắt đầu từ số 0 hay muốn tiếp tục
            chinh phục HSK cao hơn, Ươm Mầm HSK có lộ trình
            phù hợp với từng nền tảng và mục tiêu học tập.
          </p>
        </div>

        {/* COURSES */}
        <div
          className="
            grid
            grid-cols-1
            gap-5

            md:grid-cols-2

            lg:grid-cols-3
            lg:gap-6
          "
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>

      
      </div>
    </section>
  );
}