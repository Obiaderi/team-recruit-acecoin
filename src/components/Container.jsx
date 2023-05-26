const Container = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-blue-300">
      <div className="container h-full flex items-center justify-center mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default Container;
