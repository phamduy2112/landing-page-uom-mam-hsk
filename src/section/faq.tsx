import React, { useState } from "react";

const faqData = [
  {
    question: "Ươm Mầm HSK Có Những Lớp Học Nào?",
    answer:
      "Ươm Mầm HSK xây dựng các lớp tiếng Trung theo từng trình độ, từ người mới bắt đầu đến các chặng luyện HSK, giúp học viên lựa chọn lộ trình phù hợp với nền tảng và mục tiêu của mình.",
  },
  {
    question: "Chưa Biết Gì Về Tiếng Trung Có Học Được Không?",
    answer:
      "Có. Người mới bắt đầu có thể học từ những nền tảng đầu tiên như phát âm, Pinyin, từ vựng và cấu trúc câu trước khi từng bước nâng cao khả năng sử dụng tiếng Trung.",
  },
  {
    question: "Làm Sao Biết Mình Nên Bắt Đầu Từ Trình Độ Nào?",
    answer:
      "Ươm Mầm HSK sẽ dựa trên nền tảng hiện tại, mục tiêu học và thời gian bạn có thể dành cho tiếng Trung để tư vấn lộ trình phù hợp.",
  },
  {
    question: "Lộ Trình Học HSK Được Xây Dựng Như Thế Nào?",
    answer:
      "Lộ trình được chia thành từng chặng rõ ràng, giúp học viên xây chắc phát âm, từ vựng, ngữ pháp và khả năng sử dụng tiếng Trung trước khi tiến đến mục tiêu HSK cao hơn.",
  },
  {
    question: "Học HSK Có Giúp Giao Tiếp Tiếng Trung Không?",
    answer:
      "Mục tiêu không chỉ là ghi nhớ kiến thức để làm bài thi. Học viên được định hướng xây nền từ vựng, ngữ pháp và cách sử dụng tiếng Trung để có thể vận dụng vào giao tiếp và những tình huống thực tế.",
  },
  {
    question: "Làm Thế Nào Để Được Tư Vấn Lộ Trình?",
    answer:
      "Bạn có thể để lại thông tin hoặc inbox Ươm Mầm HSK. Đội ngũ sẽ trao đổi về trình độ hiện tại và mục tiêu để gợi ý lớp học phù hợp.",
  },
];

const QuestionMarkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9.8 9a2.4 2.4 0 1 1 4.2 1.6c-.9.8-2 1.3-2 2.8" />
    <path d="M12 17h.01" />
  </svg>
);

const BookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>
);

const LeafIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
  >
    <path d="M5 19c7 0 13-5 14-14-9 1-14 7-14 14Z" />
    <path d="M5 19c3-4 6-7 11-10" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    className={`h-4 w-4 transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-[#F4E5CB]" id="cau-hoi">
      <div
        className="
          mx-auto
          grid
          max-w-[800px]
          grid-cols-1
          gap-10
          px-5
          py-12

          md:px-8
          md:py-16

          lg:gap-[56px]
          lg:px-5
          lg:py-[56px]
        "
      >
      

        {/* RIGHT */}
        <div
          className="
            rounded-[28px]
            bg-[#FFF9EF]
            px-5
            py-6
            shadow-[0_20px_55px_rgba(55,7,109,0.08)]
          w-full
            md:px-6
            md:py-7
          "
        >
          {/* Heading */}
          <div className="mb-5 flex items-start justify-between gap-5 px-1">
            <div>
              <p
                className="
                  mb-1
                  text-[14px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#686F1F]
                "
              >
                FAQ
              </p>

              <h3 className="text-[20px] sm:text-[25px] font-bold leading-tight text-[#37076D]">
                Câu Hỏi Thường Gặp
              </h3>
            </div>

            <div
              className="
               hidden sm:flex
                h-[48px]
                w-[48px]
                shrink-0
                items-center
                justify-center
                rounded-[15px]
                bg-[#FEE997]
                text-[#74070E]
              "
            >
              <QuestionMarkIcon />
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-3">
            {faqData.map((item, index) => {
              const open = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    overflow-hidden
                    rounded-[16px]
                    border
                    transition-all
                    duration-300
                    ${
                      open
                        ? "border-[#B0A5DF] bg-[#F7F3FC]"
                        : "border-[#E7DCCB] bg-white"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="
                      flex
                      w-full
                      items-center
                      gap-4
                      px-5
                      py-4
                      text-left
                    "
                  >
                    {/* Number */}
                    <span
                      className={`
                        flex
                        h-[37px]
                        w-[37px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[11px]
                        text-[14px]
                        font-bold
                        ${
                          open
                            ? "bg-[#37076D] text-white"
                            : "bg-[#FEE997] text-[#74070E]"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className="
                        flex-1
                        text-[14px]
                        font-bold
                        leading-[1.45]
                        text-[#37076D]

                        md:text-[16px]
                      "
                    >
                      {item.question}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`
                        flex
                        h-[34px]
                        w-[34px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-colors
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

                  {/* Answer */}
                  <div
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
                          sm:ml-[53px]
                          border-t
                          border-[#DDD5EA]
                          px-5
                          py-4
                        "
                      >
                        <p
                          className="
                            text-[13px]
                            leading-[1.7]
                            text-[#5D5263]

                            md:text-[15px]
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