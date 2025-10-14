import React from "react";
import { useNavigate, useRouteError } from "react-router";
import Navbar from "../compos/Navbar";
import Footbar from "../compos/Footbar";

const Errorinfo = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center mx-auto mt-20">
      <figure>
        <img
          height={400}
          width={400}
          src="https://i.ibb.co/mCMhQRMc/exclamation.png"
          alt="Application error"
        />
      </figure>
      <p>
        <h2 className="mt-8 mb-4 font-bold text-4xl">
          <i>{error?.statusText || error?.message || "Unknown error"}</i>
        </h2>
      </p>
      {error?.status === 404 ? (
        <p >
          The page you're looking for doesn't exist.
        </p>
      ) : (
        <p>An unexpected error occurred.</p>
      )}

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

export default Errorinfo;
