function RowText({ leftText, rightText, children }) {
  return (
    <div className="flex items-start justify-between text-sm">
      <span className="font-semibold text-textGray">{leftText}</span>
      <div className="font-semibold">
        <div className="flex items-center gap-1 text-numBg">
          {children}
          <span>{rightText}</span>
        </div>
      </div>
    </div>
  );
}

export default RowText;
