import React from "react";

const PlayIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M8 5v14l11-7L8 5Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
  >
    <path d="M5 12h14" strokeLinecap="round" />
    <path
      d="m14 7 5 5-5 5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function VideoSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFF9EF]
py-8       md:py-16
        lg:py-20
      "
    >
      {/* DECOR */}
      {/* <div
        className="
          pointer-events-none
          absolute
          -left-[110px]
          top-[70px]
          h-[270px]
          w-[270px]
          rounded-full
          bg-[#B0A5DF]/15
        "
      /> */}

    

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[15%]
          h-[70px]
          w-[70px]
          rounded-full
          border
          border-[#686F1F]/15
        "
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 md:px-8">
        {/* HEADING */}
        <div className="mx-auto mb-4 max-w-[760px] text-center">
         

          <h2
            className="
              mt-3
              text-[26px]
             font-bold
              leading-[1.3]
              tracking-[-0.7px]
              text-[#37076D]

              md:text-[32px]
              lg:text-[40px]
            "
          >
            Học Tiếng Trung Qua Zoom
            <br className="hidden md:block" />

            <span className="text-[#74070E]">
              {" "}Thực Tế Diễn Ra Như Thế Nào?
            </span>
          </h2>

          <p
            className="
              mx-auto
                mt-2
              max-w-[680px]
              text-[14px]
              leading-[1.7]
              text-[#62566A]

              md:text-[15px]
            "
          >
            Cùng xem cách học viên tương tác với giảng viên,
            luyện phát âm, học từ vựng, ngữ pháp và thực hành
            tiếng Trung ngay trong lớp học trực tuyến.
          </p>
        </div>

        {/* VIDEO CARD */}
        <div
          className="
            mx-auto
            max-w-[960px]
            overflow-hidden
            rounded-[24px]
            border
            border-[#DED0BB]
            bg-[#F4E5CB]
            p-2

            shadow-[0_22px_55px_rgba(55,7,109,0.12)]

            md:rounded-[30px]
            md:p-3
          "
        >
          {/* VIDEO */}
          <div
            className="
              relative
              aspect-video
              overflow-hidden
              rounded-[18px]
              bg-[#37076D]

              md:rounded-[22px]
            "
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Lớp học trực tuyến Ươm Mầm HSK"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* BADGE */}
            <div
              className="
                pointer-events-none
                absolute
                left-4
                top-4
                hidden
                items-center
                gap-2
                rounded-full
                bg-[#FFF9EF]/95
                px-4
                py-2

                text-[11px]
               font-bold
                uppercase
                tracking-[0.08em]
                text-[#37076D]

                shadow-sm

                sm:flex
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#74070E]
                  text-white
                "
              >
                <PlayIcon />
              </span>

              LỚP HỌC ƯƠM MẦM HSK
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-3 flex flex-col items-center">
          <p
            className="
              mt-2
              text-center
              text-[14px]
              leading-[1.7]
              text-[#62566A]
            "
          >
            Không chỉ nghe giảng, học viên được tương tác,
            thực hành và sửa lỗi trực tiếp trong từng buổi học.
          </p>

          <a
            href="#video-uom-mam-hsk"
            className="
              mt-3
              inline-flex
              min-h-[50px]
              items-center
              justify-center
              gap-2

              rounded-full
              bg-[#37076D]

              px-7

              text-[13px]
              font-bold
              uppercase
              text-white

              shadow-[0_10px_25px_rgba(55,7,109,0.18)]

              transition-all
              duration-300

              hover:-translate-y-[2px]
              hover:bg-[#4A0A88]
              hover:shadow-[0_14px_30px_rgba(55,7,109,0.25)]
            "
          >
            XEM THÊM VIDEO LỚP HỌC

            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}