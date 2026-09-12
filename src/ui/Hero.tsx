import image1 from "../assets/BÀI LANDINGPAGE UOMMAM HSK 1_upscayl_5x_upscayl-standard-4x.png";
import image2 from "../assets/BÀI LANDINGPAGE UOMMAM HSK 2_upscayl_5x_upscayl-standard-4x.png";

export default function Hero() {
  return (
    <section className="w-full">
      <img src={image1} className="w-full hidden sm:block" alt="Hero" />
      <img src={image2} className="w-full sm:hidden" alt="Hero" />
    </section>
  );
}