import React from "react";
const AuthLayout = ({ children }) => {
  return (
    <div data-theme="cupcake" className="w-screen h-screen flex bg-teal-800">
      <div className=" w-full md:w-1/4 h-full bg-teal-700">{children}</div>
      <div className="w-3/4 h-full hidden md:flex md:items-center md:justify-center md:flex-col bg-base-100">
        <h1 className="text-8xl">UTILITY APP</h1>
        <p>One place for all your productivity needs</p>
        <button className="btn btn-acccent mt-5">Know More</button>
      </div>
    </div>
  );
};

export default AuthLayout;
