import React from "react";
import image1 from "../assets/6.png";

const benefits = [
  "Ôn lại bài theo đúng lộ trình",
  "Luyện phát âm và Pinyin",
  "Ôn chữ Hán, luyện ghép câu",
  "Theo dõi tiến độ học tập",
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
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1200px]
          grid-cols-1
          gap-10
          lg:grid-cols-[1.05fr_0.95fr]
          lg:items-center
          lg:gap-16
        "
      >
        {/* HÌNH ẢNH */}
        <div className="relative">
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
            <div className="mb-3 flex items-center gap-2 px-2 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-[#74070E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F0BF45]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#686F1F]" />
            </div>

            <div className="overflow-hidden rounded-[20px] bg-white">
              <img
                src={image1}
                alt="APP học tập Ươm Mầm HSK"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* THẺ TIẾN ĐỘ */}
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

          {/* THẺ TRANG TRÍ */}
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

        {/* NỘI DUNG */}
        <div>
          <h2
            className="
              text-[27px]
              font-bold
              leading-[1.2]
              tracking-[-0.8px]
              text-[#37076D]
              md:text-[34px]
              lg:text-[40px]
              sm:text-left
              text-center
            "
          >
            APP ƯƠM MẦM {" "}
            <span className=" text-[#74070E]">
              GIỮ NHỊP HỌC GIỮA HAI BUỔI
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-[570px]
              text-[15px]
              leading-[1.75]
              text-[#5D5163]
              md:text-[16px]
            "
          >
            Trên lớp, giáo viên hướng dẫn, phát hiện lỗi và sửa trực
            tiếp. Sau giờ học, APP Ươm Mầm giúp bạn tiếp tục ôn đúng
            nội dung đã học.
          </p>

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-x-7
              gap-y-5
              sm:grid-cols-2
            "
          >
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
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

          <a
            href="#dang-ky"
            className="
              mt-8
              inline-flex
              min-h-[52px]
              items-center
              justify-center
              rounded-[12px]
              bg-[#37076D]
              px-7
              text-[13px]
              font-bold
              uppercase
              text-white
              transition-all
              hover:-translate-y-1
              hover:bg-[#4A0A88]
            "
          >
            KHÁM PHÁ HỆ THỐNG HỌC
          </a>
        </div>
      </div>
    </section>
  );
}