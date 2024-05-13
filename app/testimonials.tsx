import TestimonialsElements1 from "./components/TestimonialsElements/testimonialsElements1";
import TestimonialsElements2 from "./components/TestimonialsElements/testimonialsElements2";
import TwoContentSub from "./components/twoContent/TwoContentSub";

const contentLeft = <div>Testimonials</div>;

const contentRight = (
  <div>
    <TestimonialsElements1 />
    <TestimonialsElements2 />
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <TwoContentSub contentLeft={contentLeft} contentRight={contentRight} />
  );
};

export default Testimonials;
