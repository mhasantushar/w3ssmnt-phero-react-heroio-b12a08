import React from "react";

const Statband = () => {
  return (
    <div className="bg-gradient-to-br from-[#632ee3] to-[#9f62f2] py-20 text-white text-center">
      <section className="w-11/12mx-auto">
        <h2 className="mb-12 font-bold text-5xl">
          Trusted by Millions, Built for You
        </h2>

        <div className="flex flex-wrap justify-around items-center gap-8">
          <div className="flex flex-col justify-center items-center">
            <p>Total Downloads</p>
            <h3 className="mt-4 mb-6 font-bold text-7xl">29.6M</h3>
            <p>21% More Than Last Month</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p>Total Reviews</p>
            <h3 className="mt-4 mb-6 font-bold text-7xl">906K</h3>
            <p>26% More Than Last Month</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p>Active Apps</p>
            <h3 className="mt-4 mb-6 font-bold text-7xl">132+</h3>
            <p>31 More Will Launch</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statband;
