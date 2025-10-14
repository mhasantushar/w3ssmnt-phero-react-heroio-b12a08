import React from "react";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center mx-auto mt-20">
      <figure>
        <img
          src="https://i.ibb.co/KxVdD9Nc/error-404.png"
          alt="Page not Found"
        />
      </figure>
      <h2 className="mt-8 font-bold text-4xl">OPPS!! PAGE NOT FOUND</h2>
      <p>The page you are looking for is not available.</p>

      <div>
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] mt-12 px-8 text-white btn btn-soft btn-primary"
        >
          Go to Home
        </button>

        <button
          onClick={() => navigate("/apps")}
          className="bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] mt-12 px-8 text-white btn btn-soft btn-primary"
        >
          Show All Apps
        </button>

        <button
          onClick={() => navigate(-1)}
          className="bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] mt-12 px-8 text-white btn btn-soft btn-primary"
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default PageNotFound;
