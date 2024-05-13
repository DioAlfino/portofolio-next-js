import TwoContents from "./components/twoContent/TwoContents";

const contentLeft = <div>about</div>;

const contentRight = (
  <div>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, aspernatur
    rerum praesentium nulla impedit dolorem odit. Aliquam placeat facilis ipsa
    autem sed et tempora quia? Laborum magnam perspiciatis, libero
    exercitationem voluptas recusandae numquam laudantium, optio quaerat vel,
    iusto quas totam ab maxime fugit rerum porro voluptatem doloremque aliquid.
    Porro, animi.
  </div>
);

const About: React.FC = () => {
  return <TwoContents contentLeft={contentLeft} contentRight={contentRight} />;
};

export default About;
