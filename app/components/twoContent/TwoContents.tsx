interface TwoContentsProps {
  contentLeft: JSX.Element;
  contentRight: JSX.Element;
}

const TwoContents: React.FC<TwoContentsProps> = ({
  contentLeft,
  contentRight,
}) => {
  return (
    <div className=" flex mb-9 ml-6 mt-20">
      <div className=" pr-[450px]">{contentLeft}</div>
      <div className="">{contentRight}</div>
    </div>
  );
};

export default TwoContents;
