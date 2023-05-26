const TextInput = ({ placeholder, className }) => {
  return (
    <input
      type="text"
      className={`w-full py-2 border-0 outline-none px-2 ${className}`}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
