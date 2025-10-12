import React from "react";

const NoAppFound = ({ clearSearch }) => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto mt-20">
      <figure>
        <img src="https://i.ibb.co/1GsJNNFs/App-Error.png" alt="No App Found" />
      </figure>
      <h2 className="mt-8 font-bold text-4xl">OPPS!! APP NOT FOUND</h2>
      <p>
        The App you are requesting is not found on our system. please try
        another app.
      </p>

      <button
        onClick={clearSearch}
        className="bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] mt-12 px-8 text-white btn btn-soft btn-primary"
      >
        Go Back!
      </button>
    </section>
  );
};

export default NoAppFound;
