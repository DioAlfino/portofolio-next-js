interface TwoContentsProps {
  contentLeft: JSX.Element;
  contentRight: JSX.Element;
}

const TwoContentSub: React.FC<TwoContentsProps> = ({
  contentLeft,
  contentRight,
}) => {
  return (
    <div className="flex ml-6">
      <div className=" pr-[400px]">{contentLeft}</div>
      <div>{contentRight}</div>
    </div>
  );
};

export default TwoContentSub;
