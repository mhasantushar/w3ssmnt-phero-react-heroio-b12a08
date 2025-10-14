import React from "react";
import logo from "../assets/logo.png";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center gap-2 py-24 w-11/12">
      <span className="font-semibold text-4xl">L</span>
      <figure className="w-8 h-8">
        <img src={logo} className="opacity-70 animate-spin" alt="loading" />
      </figure>
      <span className="font-semibold text-4xl">ADING</span>
    </div>
  );
};

export default Spinner;