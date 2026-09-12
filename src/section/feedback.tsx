import React, { useRef, useState, useEffect } from "react";
import image1 from "../assets/IMG_8324.jpeg";
import image2 from "../assets/IMG_5913.jpeg";
import image3 from "../assets/IMG_5914.jpeg";
import image4 from "../assets/IMG_8318.jpeg";
import image5 from "../assets/IMG_8323.jpeg";

const images = [
    image1,
    image2,
    image3,
    image4,
    image5, 
];

const ArrowLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function Reviewss() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getSlideWidth = () => {
    if (!sliderRef.current) return 0;

    const firstSlide =
      sliderRef.current.querySelector<HTMLElement>("[data-slide]");

    if (!firstSlide) return 0;

    return firstSlide.offsetWidth + 20;
  };

  const nextSlide = () => {
    sliderRef.current?.scrollBy({
      left: getSlideWidth(),
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    sliderRef.current?.scrollBy({
      left: -getSlideWidth(),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const slideWidth = getSlideWidth();
      if (!slideWidth) return;

      setActiveIndex(Math.round(slider.scrollLeft / slideWidth));
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });

    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="overflow-hidden bg-[#F4E5CB] py-10 md:py-14" id="feedback">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        
      {/* SECTION TITLE */}
      <div className="mb-8 text-center">
       

        <h2 className="mt-2 text-[26px] font-bold  md:text-[32px] leading-[1.25] text-[#37076D] md:text-[40px]">
          Hành Trình Học Tập Của{" "}
          <span className="text-[#74070E]">
            Học Viên
          </span>
        </h2>

        <p className="mx-auto mt-3 text-[14px] leading-[1.6] text-[#62566A] md:text-[15px]">
          Những khoảnh khắc học tập, tương tác và tiến bộ mỗi ngày tại Ươm Mầm HSK.
        </p>
      </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              scroll-smooth
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {images.map((src, index) => (
              <div
                key={index}
                data-slide
                className="
                  flex-none
                  snap-start
                  overflow-hidden
                  rounded-[24px]
                  w-[100%]
                  sm:w-[65%]
                  md:w-[calc(50%-10px)]
                  lg:w-[calc(33.333%-14px)]
                "
              >
                <img
                  src={src}
                  alt={`Học viên Ươm Mầm HSK ${index + 1}`}
                  className="
                  h-[450px]
                    sm:h-[400px]
                    w-full
                    aspect-auto
                    object-fill
                    transition
                    duration-500
                    hover:scale-[1.02]
                  "
                />
              </div>
            ))}
          </div>

          {/* DESKTOP ARROWS */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous"
            className="
              absolute
              left-3
              top-1/2
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-[#37076D]
              shadow-lg
              backdrop-blur
              md:flex
            "
          >
            <ArrowLeft />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next"
            className="
              absolute
              right-3
              top-1/2
              hidden
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#37076D]
              text-white
              shadow-lg
              md:flex
            "
          >
            <ArrowRight />
          </button>
        </div>

        {/* MOBILE DOTS */}
        <div className="mt-5 flex justify-center gap-2 md:hidden">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Slide ${index + 1}`}
              onClick={() => {
                sliderRef.current?.scrollTo({
                  left: getSlideWidth() * index,
                  behavior: "smooth",
                });
              }}
              className={`h-[7px] rounded-full transition-all ${
                activeIndex === index
                  ? "w-[24px] bg-[#37076D]"
                  : "w-[7px] bg-[#B0A5DF]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
