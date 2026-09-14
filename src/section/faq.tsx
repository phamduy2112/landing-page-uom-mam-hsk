import React, { useState } from "react";

const faqData = [
  {
    question: "Chưa biết tiếng Trung có học được không?",
    answer:
      "Có. Lộ trình có thể bắt đầu từ số 0, ưu tiên xây dựng Pinyin và chuẩn hóa phát âm trước khi tăng dần từ vựng và cấu trúc ngữ pháp thực tế.",
  },
  {
    question: "Học online có được sửa phát âm kỹ không?",
    answer:
      "Có. Giáo viên trực tiếp nghe, phát hiện lỗi sai chi tiết và hướng dẫn học viên sửa khẩu hình, âm điệu ngay trong quá trình tương tác buổi học.",
  },
  {
    question: "APP Ươm Mầm có thay giáo viên không?",
    answer:
      "Không. APP đóng vai trò hỗ trợ ôn luyện và tự học giữa hai buổi; giáo viên vẫn là người hướng dẫn chính, giải thích bài giảng và sửa lỗi trực tiếp.",
  },
  {
    question: "Mất bao lâu để đạt HSK3 hoặc HSK4?",
    answer:
      "Thời gian phụ thuộc vào trình độ đầu vào, mục tiêu và thời lượng cam kết. Học viên sẽ được đánh giá và tư vấn lộ trình cá nhân hóa cụ thể trước khi chọn khóa.",
  },
  {
    question: "Có chính sách hoàn học phí không?",
    answer:
      "Có. Chương trình có chính sách cam kết hoàn 100% học phí dựa trên các điều kiện áp dụng rõ ràng và minh bạch của từng lớp học.",
  },
  {
    question: "Sau buổi học có nội dung để xem lại và ôn thêm không?",
    answer:
      "Có. Hệ thống đào tạo của Ươm Mầm cung cấp video ghi lại buổi học, tài liệu bổ trợ và ứng dụng di động để học viên dễ dàng ôn tập mọi lúc mọi nơi.",
  },
];

const ChevronIcon = ({ open }:any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-[15px] w-[15px] transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index:any) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="cau-hoi" className="w-full bg-[#F4E5CB]">
      <div className="mx-auto w-full max-w-[840px] px-4 py-4 sm:px-6 sm:py-8 md:py-16">
        
        {}
        <div className="mb-4 text-center sm:mb-6">
          <h2 className="
                mt-3
                  text-[26px]
               font-bold
               text-center
                leading-[1.3]
                tracking-[-0.8px]
                text-[#37076D]
            sm:text-center
                   md:text-[32px]

            lg:text-[40px]">
            CÂU HỎI <span className="text-[#74070E]">THƯỜNG GẶP</span> 
          </h2>
          <p className="mt-2 text-[13.5px] font-medium text-[#625768] sm:text-[15px] md:text-[16px]">
            Giải đáp thắc mắc - Lộ trình rõ ràng - Cam kết đầu ra
          </p>
        </div>

        {}
        <div className="w-full rounded-[24px] bg-[#FFF9EF] p-4 shadow-[0_16px_45px_rgba(55,7,109,0.06)] border border-[#EFE3CF]/80 sm:p-6 md:rounded-[28px] md:p-8">
          <div className="space-y-3">
            {faqData.map((item, index) => {
              const open = activeIndex === index;
              const questionId = `faq-question-${index}`;
              const answerId = `faq-answer-${index}`;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[16px] border transition-all duration-300 ${
                    open
                      ? "border-[#B0A5DF] bg-[#FAF7FF] shadow-sm"
                      : "border-[#E8DDCF] bg-white hover:border-[#D3C8B8]"
                  }`}
                >
                  {/* QUESTION BUTTON */}
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={answerId}
                    onClick={() => toggleFAQ(index)}
                    className="flex min-h-[62px] w-full items-center justify-between gap-3 px-4 py-3.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#B0A5DF] sm:min-h-[66px] sm:gap-4 sm:px-5"
                  >
                    {/* NUMBER BADGE */}
                    <span
                      className={`flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[12px] text-[12px] font-bold transition-colors duration-300 sm:h-[38px] sm:w-[38px] sm:text-[13px] ${
                        open
                          ? "bg-[#37076D] text-white"
                          : "bg-[#FEE997] text-[#74070E]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* TITLE TEXT */}
                    <span className="min-w-0 flex-1 text-[14px] font-semibold leading-[1.45] text-[#37076D] sm:text-[15.5px] md:text-[16px]">
                      {item.question}
                    </span>

                    {/* CHEVRON ICON */}
                    <span
                      className={`flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-[34px] sm:w-[34px] ${
                        open
                          ? "bg-[#686F1F] text-white"
                          : "bg-[#F4E5CB] text-[#37076D]"
                      }`}
                    >
                      <ChevronIcon open={open} />
                    </span>
                  </button>

                  {/* EXPANDABLE ANSWER CONTENT */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className={`grid transition-all duration-300 ease-in-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mx-4 border-t border-[#E2DAEB]/80 pb-4 pt-3.5 sm:ml-[60px] sm:mr-5 sm:pb-5">
                        <p className="text-[13.5px] leading-[1.7] text-[#554A5C] sm:text-[14.5px]">
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