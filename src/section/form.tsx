import React from "react";
import image1 from "../assets/6.png";

const benefits = [
  {
    title: "Tư Vấn Lộ Trình",
    description:
      "Xác định lớp học phù hợp với nền tảng và mục tiêu tiếng Trung của bạn.",
    type: "route",
  },
  {
    title: "Hệ Thống Học Online",
    description:
      "Chủ động xem lại bài học, tài liệu và ôn tập kiến thức sau mỗi buổi.",
    type: "online",
  },
  {
    title: "Theo Sát Quá Trình Học",
    description:
      "Được hỗ trợ trong quá trình học để kịp thời củng cố những phần chưa chắc.",
    type: "support",
  },
];

/* =========================
   ICONS
========================= */

const RouteIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-7 w-7"
  >
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <path
      d="M8.5 18h2.5c4 0 7-3 7-7V8.5"
      strokeLinecap="round"
    />
  </svg>
);

const OnlineIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-7 w-7"
  >
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" strokeLinecap="round" />
    <path
      d="m10 8 5 2.5-5 2.5V8Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SupportIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-7 w-7"
  >
    <circle cx="12" cy="8" r="3" />
    <path
      d="M6.5 19v-2c0-3 2.4-5 5.5-5s5.5 2 5.5 5v2"
      strokeLinecap="round"
    />
    <path
      d="m18 10 1.5 1.5L22 9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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

const BenefitIcon = ({ type }: { type: string }) => {
  if (type === "route") return <RouteIcon />;
  if (type === "online") return <OnlineIcon />;

  return <SupportIcon />;
};

/* =========================
   COMPONENT
========================= */

export default function BenefitsForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      course: formData.get("course"),
    };

    console.log("Form data:", data);

    // Gọi API của bạn tại đây
  };

  return (
    <section
      className="
        relative
        overflow-hidden
                bg-[#FFF9EF]
 
py-8       md:py-16
        lg:py-[72px]
      "
    >
      {/* DECORATIVE BACKGROUND */}
    



      <div
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[45%]
          h-[90px]
          w-[90px]
          rounded-full
          border
          border-[#686F1F]/15
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1210px]
          px-5
          md:px-8
        "
      >
        {/* HEADING */}
        <div className="mb-5 sm:mb-10 text-center">
          

          <h2
            className="
              mt-3
              text-[26px]
             font-bold
              leading-[1.25]
              tracking-[-0.7px]
              text-[#37076D]

              md:text-[32px]
              lg:text-[40px]
            "
          >
            Bắt Đầu Đúng Lộ Trình,
            <br className="hidden sm:block" />

            <span className="text-[#74070E]">
              {" "}Học Tiếng Trung Dễ Hơn
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[680px]
              text-[14px]
              leading-[1.7]
              text-[#62566A]

              md:text-[15px]
            "
          >
            Chia sẻ trình độ hiện tại và mục tiêu của bạn.
            Ươm Mầm HSK sẽ tư vấn lớp học phù hợp để bạn
            không phải tự loay hoay tìm điểm bắt đầu.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-7

            lg:grid-cols-[0.92fr_1.08fr]
            lg:items-center
            lg:gap-9
          "
        >
          {/* =========================
              LEFT BENEFITS
          ========================= */}
          <div className="flex flex-col gap-4">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  flex
                  min-h-[108px]
                  items-center
                  gap-5
                  rounded-[20px]
                  border
                  border-[#E1D3BD]
                  bg-[#FFF9EF]
                  px-5
                  py-5

                  shadow-[0_10px_30px_rgba(55,7,109,0.06)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:border-[#B0A5DF]
                  hover:shadow-[0_15px_35px_rgba(55,7,109,0.10)]
                "
              >
                {/* ICON */}
                <div
                  className="
                    flex
                    h-[60px]
                    w-[60px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[17px]
                    bg-[#FEE997]
                    text-[#37076D]

                    transition-transform
                    duration-300

                    group-hover:-rotate-3
                    group-hover:scale-105
                  "
                >
                  <BenefitIcon type={item.type} />
                </div>

                {/* TEXT */}
                <div>
                  <h3
                    className="
                      text-[15px]
                     font-bold
                      text-[#37076D]

                      md:text-[17px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      max-w-[390px]
                      text-[12px]
                      leading-[1.6]
                      text-[#62566A]

                      md:text-[14px]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* SMALL MESSAGE */}
            <div
              className="
                rounded-[20px]
                bg-[#686F1F]
                px-6
                py-5
                text-white
              "
            >
              <p
                className="
                  text-[12px]
                  font-bold
                  capitalize
                  tracking-[0.14em]
                  text-[#FEE997]
                "
              >
                Chưa biết chọn lớp nào?
              </p>

              <p
                className="
                  mt-2
                  text-[15px]
                  font-medium
                  leading-[1.6]
                "
              >
                Từ số 0, HSK 3 hay HSK 4?
                Hãy để Ươm Mầm HSK giúp bạn xác định
                điểm bắt đầu phù hợp.
              </p>
            </div>
          </div>

          {/* =========================
              RIGHT FORM
          ========================= */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[26px]
              border
              border-[#D9CBB5]
              bg-[#FFF9EF]
              px-5
              py-7

              shadow-[0_20px_50px_rgba(55,7,109,0.10)]

              sm:px-7
              md:px-8
              md:py-8
            "
            id="dang-ky"
          >
            {/* TOP ACCENT */}
            <div
              className="
                absolute
                left-0
                top-0
                h-[5px]
                w-full
                bg-[#37076D]
              "
            />

            {/* TITLE */}
            <p
              className="
                text-[11px]
               font-bold
                uppercase
                tracking-[0.15em]
                text-[#686F1F]
              "
            >
              Đăng Ký Tư Vấn
            </p>

            <h3
              className="
                mt-2
                text-[22px]
               font-bold
                leading-[1.35]
                text-[#37076D]

                md:text-[25px]
              "
            >
              Tìm Lớp Học Phù Hợp Với Bạn
            </h3>

            <p
              className="
                mt-3
                max-w-[500px]
                text-[13px]
                leading-[1.65]
                text-[#62566A]

                md:text-[14px]
              "
            >
              Để lại thông tin, Ươm Mầm HSK sẽ liên hệ
              trao đổi về nền tảng hiện tại, mục tiêu và
              tư vấn lộ trình phù hợp.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-[7px]
                    block
                    text-[13px]
                    font-semibold
                    text-[#37076D]
                  "
                >
                  Họ và tên
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Nhập họ và tên"
                  className="
                    h-[50px]
                    w-full
                    rounded-[11px]
                    border
                    border-[#DED3C3]
                    bg-white
                    px-4

                    text-[14px]
                    text-[#44384A]

                    outline-none
                    transition-all
                    duration-200

                    placeholder:text-[#A59AA7]

                    focus:border-[#B0A5DF]
                    focus:ring-2
                    focus:ring-[#B0A5DF]/20
                  "
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="
                    mb-[7px]
                    block
                    text-[13px]
                    font-semibold
                    text-[#37076D]
                  "
                >
                  Số điện thoại
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="numeric"
                  placeholder="Nhập số điện thoại"
                  className="
                    h-[50px]
                    w-full
                    rounded-[11px]
                    border
                    border-[#DED3C3]
                    bg-white
                    px-4

                    text-[14px]
                    text-[#44384A]

                    outline-none
                    transition-all
                    duration-200

                    placeholder:text-[#A59AA7]

                    focus:border-[#B0A5DF]
                    focus:ring-2
                    focus:ring-[#B0A5DF]/20
                  "
                />
              </div>

              {/* COURSE */}
              <div>
                <label
                  htmlFor="course"
                  className="
                    mb-[7px]
                    block
                    text-[13px]
                    font-semibold
                    text-[#37076D]
                  "
                >
                  Lớp học bạn quan tâm
                </label>

                <select
                  id="course"
                  name="course"
                  required
                  defaultValue=""
                  className="
                    h-[50px]
                    w-full
                    cursor-pointer
                    rounded-[11px]
                    border
                    border-[#DED3C3]
                    bg-white
                    px-4

                    text-[14px]
                    text-[#62566A]

                    outline-none
                    transition-all
                    duration-200

                    focus:border-[#B0A5DF]
                    focus:ring-2
                    focus:ring-[#B0A5DF]/20
                  "
                >
                  <option value="" disabled>
                    Chọn lớp học
                  </option>

                  <option value="tu-so-0">
                    Lớp Từ Số 0
                  </option>

                  <option value="hsk-3">
                    Lớp HSK 3
                  </option>

                  <option value="hsk-4">
                    Lớp HSK 4
                  </option>

                  <option value="chua-xac-dinh">
                    Chưa biết lớp phù hợp
                  </option>
                </select>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="
                  mt-1
                  flex
                  h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-2

                  rounded-[11px]
                  bg-[#37076D]

                  text-[13px]
                  font-bold
                  uppercase
                  text-white

                  shadow-[0_10px_24px_rgba(55,7,109,0.16)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:bg-[#4A0A88]
                  hover:shadow-[0_14px_28px_rgba(55,7,109,0.22)]
                "
              >
                NHẬN TƯ VẤN LỘ TRÌNH

                <ArrowIcon />
              </button>

              {/* PRIVACY */}
              <p
                className="
                  text-center
                  text-[11px]
                  leading-[1.5]
                  text-[#928697]
                "
              >
                Ươm Mầm HSK cam kết bảo mật thông tin của bạn.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}