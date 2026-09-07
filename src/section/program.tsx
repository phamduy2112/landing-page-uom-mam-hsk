import React from "react";
import image1 from "../assets/6.png";

const benefits = [
  "Xem lại bài học và tài liệu sau mỗi buổi học",
  "Ôn tập từ vựng, ngữ pháp và kiến thức HSK theo từng chặng",
  "Theo dõi tiến độ học tập ngay trên hệ thống",
  "Bài tập được sắp xếp theo đúng lộ trình của lớp",
  "Học và ôn tập chủ động trên điện thoại hoặc máy tính",
  "Không bỏ lỡ kiến thức khi cần xem lại bài cũ",
];

const CheckIcon = () => (
  <div
    className="
      flex
      h-8
      w-8
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-[#FEE997]
      text-[15px]
     font-bold
      text-[#37076D]
    "
  >
    ✓
  </div>
);

export default function OnlineLearningSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F4E5CB]
        px-5
        py-16
        md:px-8
        md:py-20
        lg:py-[82px]
      "
    >
      {/* DECOR */}
      {/* <div
        className="
          pointer-events-none
          absolute
          -right-[100px]
          -top-[100px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#FEE997]/40
        "
      /> */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[140px]
          -left-[100px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#B0A5DF]/20
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1200px]
          grid-cols-1
          gap-4

          lg:grid-cols-[1.05fr_0.95fr]
          lg:items-center
          lg:gap-16
        "
      >
        {/* LEFT - ONLINE SYSTEM IMAGE */}
        <div className="relative">
          {/* MAIN DEVICE */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-[#D8C7AE]
              bg-[#FFF9EF]
              p-3
              shadow-[0_24px_60px_rgba(55,7,109,0.13)]
            "
          >
            <div
              className="
                mb-3
                flex
                items-center
                gap-2
                px-2
                pt-1
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#74070E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F0BF45]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#686F1F]" />
            </div>

            <div
              className="
                overflow-hidden
                rounded-[20px]
                bg-white
              "
            >
              <img
                src={image1}
                alt="Hệ thống học online Ươm Mầm HSK"
                className="
                  w-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* FLOAT CARD 1 */}
          <div
            className="
              absolute
              -bottom-5
              -right-2
              hidden
              min-w-[190px]
              rounded-[18px]
              border
              border-[#E4D7C4]
              bg-[#FFF9EF]
              px-4
              py-4
              shadow-[0_15px_35px_rgba(55,7,109,0.12)]

              sm:block
              md:right-[-20px]
            "
          >
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#686F1F]
              "
            >
              Tiến độ học tập
            </p>

            <div className="mt-3 flex items-center gap-3">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#37076D]
                  text-[12px]
                  font-bold
                  text-white
                "
              >
                75%
              </div>

              <div>
                <p className="text-[13px] font-bold text-[#37076D]">
                  Đang tiến bộ
                </p>

                <p className="mt-1 text-[11px] text-[#75697A]">
                  Theo từng chặng học
                </p>
              </div>
            </div>
          </div>

          {/* FLOAT CARD 2 */}
          <div
            className="
              absolute
              -left-3
              top-[40px]
              hidden
              rounded-[17px]
              bg-[#FEE997]
              px-4
              py-3
              shadow-[0_12px_28px_rgba(55,7,109,0.10)]

              md:block
              lg:left-[-25px]
            "
          >
            <p className="text-[12px] font-bold text-[#37076D]">
              学习每一天
            </p>

            <p className="mt-1 text-[11px] text-[#686F1F]">
              Học mỗi ngày một chút
            </p>
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div>
         

          <h2
            className="
              mt-4
             
             font-bold
              leading-[1.2]
              tracking-[-0.8px]
              text-[#37076D]
 text-[25px]
              md:text-[32px]
              lg:text-[40px]
            "
          >
            Học Trên Lớp Chưa Đủ,
            <br />

            <span className="text-[#74070E]">
              Về Nhà Vẫn Có Thể Học Tiếp
            </span>
          </h2>

          <p
            className="
              mt-3 sm:mt-5
              max-w-[570px]
              text-[15px]
              leading-[1.75]
              text-[#5D5163]

              md:text-[16px]
            "
          >
            Học viên Ươm Mầm HSK được hỗ trợ hệ thống học online
            để xem lại kiến thức, ôn tập và theo dõi hành trình học
            của mình một cách chủ động hơn.
          </p>

          {/* BENEFITS */}
          <div
            className="
              mt-3 sm:mt-8
              grid
              grid-cols-1
              gap-x-7
              gap-y-5

              sm:grid-cols-2
            "
          >
            {benefits.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <CheckIcon />

                <p
                  className="
                    pt-[3px]
                    text-[14px]
                    font-medium
                    leading-[1.6]
                    text-[#44394A]

                    md:text-[15px]
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="
             mt-4 sm:mt-9
              flex
              flex-col
              gap-3

              sm:flex-row
            "
          >
            <a
              href="#dang-ky"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-[12px]
                bg-[#37076D]
                px-6
                text-[13px]
                font-bold
                uppercase
                text-white
                transition-all

                hover:-translate-y-1
                hover:bg-[#4A0A88]
              "
            >
              ĐĂNG KÝ TƯ VẤN
            </a>

            <a
              href="#lo-trinh"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-[12px]
                border
                border-[#37076D]
                px-6
                text-[13px]
                font-bold
                uppercase
                text-[#37076D]
                transition-all

                hover:bg-[#37076D]
                hover:text-white
              "
            >
              XEM LỘ TRÌNH HỌC
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}