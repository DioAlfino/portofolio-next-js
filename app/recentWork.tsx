import RecentWorkElements1 from "./components/recentWorkElements/recentWorkElements1";
import RecentWorkElements2 from "./components/recentWorkElements/recentWorkElements2";
import RecentWorkElements3 from "./components/recentWorkElements/recentWorkElements3";
import RecentWorkElements4 from "./components/recentWorkElements/recentWorkElements4";
import TwoContentSub from "./components/twoContent/TwoContentSub";
import TwoContents from "./components/twoContent/TwoContents";

const contentLeft = <div>Recent Work</div>;

const contentRight = (
  <div>
    <RecentWorkElements1 />
    <RecentWorkElements2 />
    <RecentWorkElements3 />
    <RecentWorkElements4 />
  </div>
);

const RecentWork: React.FC = () => {
  return (
    <TwoContentSub contentLeft={contentLeft} contentRight={contentRight} />
  );
};

export default RecentWork;
