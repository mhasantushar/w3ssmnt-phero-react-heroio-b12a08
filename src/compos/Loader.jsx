import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center mx-auto w-11/12 min-h-dvh">
      <PuffLoader />
    </div>
  );
};

export default Loader;
