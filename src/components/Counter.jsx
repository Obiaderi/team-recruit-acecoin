const Counter = ({ numOne, numTwo }) => {
  return (
    <div className="flex items-center gap-[2px]">
      <span className="bg-numBg text-white rounded-md font-bold p-1">
        {numOne}
      </span>
      <span className="bg-numBg text-white rounded-md font-bold p-1">
        {numTwo}
      </span>
    </div>
  );
};

export default Counter;
