import React from "react";

/* =========================================================
   DATA
========================================================= */

const benefits = [
  {
    title: "Bạn đang ở trình độ nào?",
    description:
      "Xác định nền tảng hiện tại để lựa chọn điểm bắt đầu phù hợp với bạn.",
    type: "level",
  },
  {
    title: "Bạn muốn đạt HSK mấy?",
    description:
      "Xác định mục tiêu HSK để xây dựng lộ trình và từng chặng học rõ ràng.",
    type: "target",
  },
  {
    title: "Bạn học tiếng Trung để làm gì?",
    description:
      "Thi chứng chỉ, phục vụ học tập hay sử dụng tiếng Trung cho công việc.",
    type: "purpose",
  },
];

/* =========================================================
   ICONS
========================================================= */

const LevelIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <path
      d="M5 19V14M12 19V10M19 19V5"
      strokeLinecap="round"
    />

    <path
      d="M3 19h18"
      strokeLinecap="round"
    />

    <circle
      cx="5"
      cy="11"
      r="2"
    />

    <circle
      cx="12"
      cy="7"
      r="2"
    />

    <circle
      cx="19"
      cy="2.8"
      r="2"
    />
  </svg>
);

const TargetIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <circle
      cx="11"
      cy="13"
      r="8"
    />

    <circle
      cx="11"
      cy="13"
      r="4"
    />

    <circle
      cx="11"
      cy="13"
      r="1"
      fill="currentColor"
      stroke="none"
    />

    <path
      d="M11 13 19 5"
      strokeLinecap="round"
    />

    <path
      d="M16 5h3v3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PurposeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="7"
      width="18"
      height="13"
      rx="2"
    />

    <path
      d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"
      strokeLinecap="round"
    />

    <path
      d="M3 12h18"
      strokeLinecap="round"
    />

    <path
      d="M10 12v2h4v-2"
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
    aria-hidden="true"
  >
    <path
      d="M5 12h14"
      strokeLinecap="round"
    />

    <path
      d="m14 7 5 5-5 5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BenefitIcon = ({ type }: { type: string }) => {
  if (type === "level") {
    return <LevelIcon />;
  }

  if (type === "target") {
    return <TargetIcon />;
  }

  return <PurposeIcon />;
};

/* =========================================================
   COMPONENT
========================================================= */

export default function BenefitsForm() {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      level: formData.get("level"),
      target: formData.get("target"),
    };

    console.log("Form data:", data);

    // Gọi API của bạn tại đây
  };

  return (
    <section
      id="dang-ky"
      className="
        relative
        overflow-hidden
        bg-[#FFF9EF]

        py-8

        md:py-16
        lg:py-[72px]
      "
    >
      {/* =====================================================
          DECOR
      ===================================================== */}

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

      {/* =====================================================
          CONTENT
      ===================================================== */}

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
        {/* =================================================
            SECTION TITLE
        ================================================= */}

      

        {/* =================================================
            GRID
        ================================================= */}

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
          {/* =================================================
              LEFT
          ================================================= */}

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
                      leading-[1.4]
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

            {/* =================================================
                MESSAGE
            ================================================= */}

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
                  uppercase
                  tracking-[0.12em]
                  text-[#FEE997]
                "
              >
                Lộ trình dành riêng cho bạn
              </p>

              <p
                className="
                  mt-2

                  text-[15px]
                  font-medium
                  leading-[1.65]
                "
              >
                Đội ngũ Ươm Mầm sẽ dựa trên mục tiêu và
                trình độ hiện tại để tư vấn lộ trình phù hợp.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT FORM
          ================================================= */}

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
          >
            {/* TOP LINE */}

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

            {/* FORM HEADING */}

            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#686F1F]
              "
            >
              Đăng ký tư vấn
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
              Nhận Lộ Trình Học Phù Hợp Với Bạn
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
              Chia sẻ trình độ hiện tại và mục tiêu HSK để
              Ươm Mầm HSK tư vấn lộ trình phù hợp với bạn.
            </p>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="
                mt-6
                space-y-4
              "
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
                  Số điện thoại / Zalo
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="numeric"
                  placeholder="Nhập số điện thoại / Zalo"
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

              {/* CURRENT LEVEL */}

              <div>
                <label
                  htmlFor="level"
                  className="
                    mb-[7px]
                    block

                    text-[13px]
                    font-semibold
                    text-[#37076D]
                  "
                >
                  Trình độ hiện tại
                </label>

                <select
                  id="level"
                  name="level"
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
                  <option
                    value=""
                    disabled
                  >
                    Chọn trình độ hiện tại
                  </option>

                  <option value="zero">
                    Chưa biết tiếng Trung
                  </option>

                  <option value="hsk1">
                    HSK 1
                  </option>

                  <option value="hsk2">
                    HSK 2
                  </option>

                  <option value="hsk3">
                    HSK 3
                  </option>

                  <option value="unknown">
                    Chưa xác định trình độ
                  </option>
                </select>
              </div>

              {/* TARGET */}

              <div>
                <label
                  htmlFor="target"
                  className="
                    mb-[7px]
                    block

                    text-[13px]
                    font-semibold
                    text-[#37076D]
                  "
                >
                  Mục tiêu HSK
                </label>

                <select
                  id="target"
                  name="target"
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
                  <option
                    value=""
                    disabled
                  >
                    Chọn mục tiêu HSK
                  </option>

                  <option value="hsk2">
                    HSK 2
                  </option>

                  <option value="hsk3">
                    HSK 3
                  </option>

                  <option value="hsk4">
                    HSK 4
                  </option>

                  <option value="unknown">
                    Chưa xác định
                  </option>
                </select>
              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

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

              {/* =================================================
                  PRIVACY
              ================================================= */}

              <p
                className="
                  text-center
                  text-[11px]
                  leading-[1.5]
                  text-[#928697]
                "
              >
                Thông tin của bạn chỉ được sử dụng để liên hệ
                tư vấn khóa học.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}