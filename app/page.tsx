import Evaluation from "./Evaluation";
import About from "./about";
import Navbar from "./components/navbar";
import Contact from "./contact";
import ImagesContainer from "./imagesContainer";
import RecentWork from "./recentWork";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-400 h-screen flex justify-center items-center">
        <div className="relative flex justify-center items-center h-full">
          <img
            src="/imgs/My project 1.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="top-run-text text-center absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 z-10">
          <h1 className="text-9xl font-bold text-white whitespace-nowrap overflow-hidden">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
        </div>
      </div>
      <About />
      <RecentWork />
      <ImagesContainer />
      <Testimonials />
      <Contact />
      <Evaluation />
    </div>
  );
}
