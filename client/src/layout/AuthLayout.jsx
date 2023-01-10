import React from "react";
const AuthLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex bg-teal-800">
      <div className=" w-full md:w-1/4 h-full bg-teal-700">{children}</div>
      <div className="w-3/4 h-full hidden md:flex bg-purple-600"></div>
    </div>
  );
};

export default AuthLayout;
