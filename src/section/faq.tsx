import React, { useState } from "react";

const faqData = [
  {
    question: "Chưa biết tiếng Trung có học được không?",
    answer:
      "Có. Lộ trình có thể bắt đầu từ 0, ưu tiên xây Pinyin và phát âm trước khi tăng dần từ vựng, ngữ pháp.",
  },
  {
    question: "Học online có được sửa phát âm kỹ không?",
    answer:
      "Có. Giáo viên trực tiếp nghe, phát hiện lỗi và hướng dẫn học viên sửa trong quá trình học.",
  },
  {
    question: "APP Ươm Mầm có thay giáo viên không?",
    answer:
      "Không. APP hỗ trợ ôn luyện giữa hai buổi; giáo viên vẫn là người hướng dẫn, giải thích và sửa lỗi trực tiếp.",
  },
  {
    question: "Mất bao lâu để đạt HSK3 hoặc HSK4?",
    answer:
      "Tùy trình độ đầu vào, mục tiêu và tiến độ học. Học viên sẽ được tư vấn lộ trình phù hợp trước khi chọn khóa.",
  },
  {
    question: "Có chính sách hoàn học phí không?",
    answer:
      "Có chính sách cam kết hoàn 100% học phí theo điều kiện áp dụng của chương trình/lớp học.",
  },
  {
    question: "Sau buổi học có nội dung để xem lại và ôn thêm không?",
    answer:
      "Có. Hệ thống đào tạo của Ươm Mầm có video xem lại, học liệu và APP hỗ trợ để học viên tiếp tục củng cố nội dung sau buổi học.",
  },
];

const QuestionMarkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[19px] w-[19px]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9.8 9a2.4 2.4 0 1 1 4.2 1.6c-.9.8-2 1.3-2 2.8" />
    <path d="M12 17h.01" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`
      h-[15px] w-[15px]
      transition-transform duration-300
      ${open ? "rotate-180" : ""}
    `}
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="cau-hoi"
      className="w-full bg-[#F4E5CB]"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[800px]
          px-4
          py-8

          sm:px-5
          sm:py-10

          md:px-6
          md:py-12
        "
      >
        <div
          className="
            w-full
            rounded-[24px]
            bg-[#FFF9EF]
            p-4

            shadow-[0_16px_45px_rgba(55,7,109,0.06)]

            sm:p-5
            md:rounded-[28px]
            md:p-6
          "
        >
          {/* HEADER */}
          <div
            className="
              mb-5
              flex
              items-center
              justify-between
              gap-4

              sm:mb-6
            "
          >
            <div>
              <p
                className="
                  mb-1
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#686F1F]

                  sm:text-[13px]
                "
              >
                FAQ
              </p>

              <h2
                className="
                  text-[21px]
                  font-bold
                  leading-[1.25]
                  text-[#37076D]

                  sm:text-[24px]
                  md:text-[26px]
                "
              >
                Câu hỏi thường gặp
              </h2>
            </div>

            <div
              className="
                hidden
                h-[44px]
                w-[44px]
                shrink-0
                items-center
                justify-center
                rounded-[14px]
                bg-[#FEE997]
                text-[#74070E]

                sm:flex
              "
            >
              <QuestionMarkIcon />
            </div>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-2.5">
            {faqData.map((item, index) => {
              const open = activeIndex === index;

              const questionId = `faq-question-${index}`;
              const answerId = `faq-answer-${index}`;

              return (
                <div
                  key={item.question}
                  className={`
                    overflow-hidden
                    rounded-[15px]
                    border
                    transition-all
                    duration-300

                    ${
                      open
                        ? "border-[#B0A5DF] bg-[#FAF7FF]"
                        : "border-[#E8DDCF] bg-white hover:border-[#D3C8B8]"
                    }
                  `}
                >
                  {/* QUESTION */}
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={answerId}
                    onClick={() => toggleFAQ(index)}
                    className="
                      flex
                      min-h-[62px]
                      w-full
                      items-center
                      gap-3
                      px-3.5
                      py-3
                      text-left
                      outline-none

                      focus-visible:ring-2
                      focus-visible:ring-inset
                      focus-visible:ring-[#B0A5DF]

                      sm:min-h-[66px]
                      sm:gap-4
                      sm:px-4
                    "
                  >
                    {/* NUMBER */}
                    <span
                      className={`
                        flex
                        h-[36px]
                        w-[36px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[10px]
                        text-[12px]
                        font-bold
                        transition-colors
                        duration-300

                        sm:h-[38px]
                        sm:w-[38px]
                        sm:text-[13px]

                        ${
                          open
                            ? "bg-[#37076D] text-white"
                            : "bg-[#FEE997] text-[#74070E]"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* TITLE */}
                    <span
                      className="
                        min-w-0
                        flex-1
                        text-[13.5px]
                        font-semibold
                        leading-[1.45]
                        text-[#37076D]

                        sm:text-[15px]
                        md:text-[16px]
                      "
                    >
                      {item.question}
                    </span>

                    {/* CHEVRON */}
                    <span
                      className={`
                        flex
                        h-[32px]
                        w-[32px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300

                        sm:h-[34px]
                        sm:w-[34px]

                        ${
                          open
                            ? "bg-[#686F1F] text-white"
                            : "bg-[#F4E5CB] text-[#37076D]"
                        }
                      `}
                    >
                      <ChevronIcon open={open} />
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out

                      ${
                        open
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          mx-3.5
                          border-t
                          border-[#E2DAEB]
                          pb-4
                          pt-3.5

                          sm:ml-[58px]
                          sm:mr-4
                          sm:pb-4
                          sm:pt-4
                        "
                      >
                        <p
                          className="
                            text-[13px]
                            leading-[1.7]
                            text-[#625768]

                            sm:text-[14px]
                            md:text-[14.5px]
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}