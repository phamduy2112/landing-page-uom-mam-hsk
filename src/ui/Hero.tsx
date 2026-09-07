import image1 from "../assets/0.png";
import image2 from "../assets/9.png";

export default function Hero() {
  return (
    <section className="w-full">
      <img src={image1} className="w-full hidden sm:block" alt="Hero" />
      <img src={image2} className="w-full sm:hidden" alt="Hero" />
    </section>
  );
}