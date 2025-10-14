import React from "react";
import { Link } from "react-router";

const NoAppInstalled = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto mt-20">
      <div className="text-center">
        <h2 className="font-bold text-5xl">Your Installed Apps</h2>
        <p className="mt-6 mb-12">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <figure>
        <img src="https://i.ibb.co/1GsJNNFs/App-Error.png" alt="No App Found" />
      </figure>
      <h2 className="mt-8 mb-4 font-bold text-4xl">NOTHING FOUND INSTALLED</h2>
      <p>
        You haven't installed any of our applications yet!
      </p>

      <Link to="/apps">
        <button className="flex bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] mx-auto mt-12 px-8 text-white btn btn-soft btn-primary">
          Show All
        </button>
      </Link>
    </section>
  );
};

export default NoAppInstalled;
