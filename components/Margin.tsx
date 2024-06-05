import React from "react";

const Margin = ({ children }: { children: React.JSX.Element }) => {
  return (
    <div className="w-screen lg:px-[80px] xl:px-[150px] 2xl:px-[350px] flex justify-center items-center min-h-screen relative z-50">
      {children}
    </div>
  );
};

export default Margin;
