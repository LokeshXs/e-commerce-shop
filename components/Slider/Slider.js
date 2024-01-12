import EmblaCarousel from "./EmblaCarousel";
import "./embla.css";

const OPTIONS = {loop:true};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
console.log(SLIDES);

const Slider = () => {
  return (
    <section>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Slider;
