const TitleAndSubtitle = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col text-sm leading-8">
      <span className="font-bold text-gray-600">{title}</span>
      <span className="text-xs text-textGray">{subTitle}</span>
    </div>
  );
};

export default TitleAndSubtitle;
