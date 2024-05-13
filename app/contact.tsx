import ContactElements1 from "./components/contactElements/contactElements1";
import ContactElements2 from "./components/contactElements/contactElements2";
import TwoContents from "./components/twoContent/TwoContents";

const contentLeft = <ContactElements1 />;

const contentRight = <ContactElements2 />;

const Contact: React.FC = () => {
  return <TwoContents contentLeft={contentLeft} contentRight={contentRight} />;
};

export default Contact;
