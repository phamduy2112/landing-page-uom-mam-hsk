import React from "react";
import image3 from "../assets/20.png";

/* =========================================================
   ICONS
========================================================= */

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="m7 12.5 3.2 3.2L17.5 8.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M5 12h14M14 7l5 5-5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExperienceIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path
      d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M9 5V3.8h6V5M4 10h16M9.5 13h5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const LaptopIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="11"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M2.8 18h18.4M9 18h6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const MedalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="14"
      r="5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M9 9 7 3h4l1 4 1-4h4l-2 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="m12 11.8.7 1.4 1.6.2-1.1 1.1.3 1.6-1.5-.8-1.5.8.3-1.6-1.1-1.1 1.6-.2.7-1.4Z"
      fill="currentColor"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M12 3 19 6v5c0 4.7-2.9 8.2-7 10-4.1-1.8-7-5.3-7-10V6l7-3Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="m9 12 2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* =========================================================
   DATA
========================================================= */

const benefits = [
  {
    icon: <ExperienceIcon />,
    title: "6 năm kinh nghiệm",
    description:
      "Đồng hành cùng học viên xây nền tảng và chinh phục mục tiêu HSK.",
  },
  {
    icon: <LaptopIcon />,
    title: "Học trực tuyến qua Zoom",
    description:
      "Lớp học tương tác trực tiếp, linh hoạt và thuận tiện dù bạn ở đâu.",
  },
  {
    icon: <MedalIcon />,
    title: "Hỗ trợ phí thi HSK",
    description:
      "Đồng hành từ quá trình học đến giai đoạn chuẩn bị cho kỳ thi thực tế.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function GuaranteeSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9EF] px-5 py-7 md:px-8 md:py-20 lg:py-20" id="cam-ket">
      {/* DECOR BACKGROUND */}
      <div className="pointer-events-none absolute -left-20 top-10 h-[280px] w-[280px] rounded-full bg-[#FEE997]/30 blur-[90px]" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-[320px] w-[320px] rounded-full bg-[#B0A5DF]/25 blur-[100px]" />

      <div className="relative mx-auto max-w-[1200px]">
        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="grid items-center gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT CONTENT */}

          <div>
            {/* LABEL */}

            {/* <div className="inline-flex items-center gap-2 rounded-full border border-[#B0A5DF]/60 bg-[#F4E5CB]/60 px-4 py-2">
              <span className="text-[#37076D]">
                <ShieldIcon />
              </span>

              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#37076D] md:text-[13px]">
                Cam kết từ Ươm Mầm HSK
              </span>
            </div> */}

            {/* TITLE */}

            <div className="mt-6">
              <h2 className="
              text-[26px] text-center
              sm:text-left

            
            font-bold leading-[1.07] tracking-[-1.5px] text-[#37076D] md:text-[54px]">
                Hoàn 100%
                

                <span className="ml-2 relative inline-block">
                  <span className="relative z-10 text-[#37076D]">
                    Học Phí
                  </span>

                  <span className="absolute bottom-[3px] left-0 -z-0 h-[14px] w-full rounded-full bg-[#FEE997]" />
                </span>
              </h2>

              <p className="mt-2             sm:text-left
 sm:mt-4 text-[18px] text-center font-semibold leading-[1.3] sm:leading-[1.4] text-[#4A3558] md:text-[23px]">
                Nếu kết quả cuối khóa không đạt theo cam kết
              </p>
            </div>

            {/* DESCRIPTION */}

            <p className="mt-2             sm:text-left
 sm:mt-3 text-[15px] text-center leading-[1.3] sm:leading-[1.5] text-[#6C6270]">
              Ươm Mầm HSK xây dựng lộ trình học rõ ràng, theo sát tiến độ và
              đồng hành cùng học viên trong suốt quá trình học để hướng đến đầu
              ra đã đặt ra từ đầu.
            </p>

            {/* GUARANTEE ITEMS */}

            <div className="mt-4 max-w-[600px] space-y-3">
              <div className="flex items-start gap-3 rounded-2xl border border-[#E4D8C7] bg-white/80 p-4 transition duration-300 hover:border-[#B0A5DF] hover:shadow-[0_12px_30px_rgba(55,7,109,0.07)]">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9EFD8] text-[#686F1F]">
                  <CheckIcon />
                </div>

                <div>
                  <p className="font-semibold leading-[1.5] text-[#37076D]">
                    Hoàn học phí trong 7 ngày đầu
                  </p>

                  <p className="mt-1 text-[14px] leading-[1.55] text-[#756B78]">
                    Áp dụng khi học viên nhận thấy chương trình không phù hợp.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[#E4D8C7] bg-white/80 p-4 transition duration-300 hover:border-[#B0A5DF] hover:shadow-[0_12px_30px_rgba(55,7,109,0.07)]">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9EFD8] text-[#686F1F]">
                  <CheckIcon />
                </div>

                <div>
                  <p className="font-semibold leading-[1.5] text-[#37076D]">
                    Hoàn học phí nếu không đạt đầu ra cam kết
                  </p>

                  <p className="mt-1 text-[14px] leading-[1.55] text-[#756B78]">
                    Đồng hành theo lộ trình và tiêu chí đầu ra của chương trình.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}

            <div className="mt-4 sm:mt-8">
              <a
                href="https://zalo.me/84328884696"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-[56px]
                w-[100%] max-w-[280px]
                
                items-center justify-center gap-3 rounded-xl bg-[#37076D] px-7 text-[15px] font-semibold text-white shadow-[0_12px_25px_rgba(55,7,109,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#4B1088]"
              >
                <span>Nhắn Zalo để được tư vấn</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </a>

              {/* <p className="mt-3 text-[13px] text-[#847889]">
                Hotline / Zalo: 0328 884 696
              </p> */}
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="relative">
            {/* DECOR */}
            {/* <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#FEE997]/70" /> */}

            {/* <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#B0A5DF]/35" /> */}

            <div className="relative overflow-hidden rounded-[28px] border border-[#F4E5CB] bg-[#F4E5CB] lg:min-h-[610px]">
              <img
                src={image3}
                alt="Học viên Ươm Mầm HSK"
                className="h-full w-full object-cover md:h-[520px] lg:h-[610px]"
              />

              {/* IMAGE OVERLAY */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#37076D]/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* =================================================
            BENEFITS
        ================================================= */}

        <div className="mt-4 border-t border-[#E4D8C7] pt-4 sm:pt-8 lg:mt-10 lg:pt-5">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-0">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className={[
                  "group flex capitalize items-start gap-4 px-0 py-4 md:px-6",
                  index !== 0 ? "md:border-l md:border-[#E4D8C7]" : "",
                ].join(" ")}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8E3F6] text-[#37076D] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#37076D] group-hover:text-white">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-[17px] font-bold leading-[1.4] text-[#37076D]">
                    {item.title}
                  </h3>

                  <p className="mt-1 max-w-[290px] text-[13px] leading-[1.65] text-[#756B78]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}