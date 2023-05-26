const Button = ({ title }) => {
  return (
    <div className="flex items-center justify-center w-full mt-6">
      <button className="btn">{title}</button>
    </div>
  );
};

export default Button;
