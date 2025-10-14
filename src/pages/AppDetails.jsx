import React from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useAppData from "../hook/useAppData";
import icoDownloads from "../assets/icon-downloads.png";
import icoRatingAvg from "../assets/icon-ratings.png";
import icoReviewNum from "../assets/icon-review.png";

const AppDetails = () => {
  const { appData, loadingData, loadingError } = useAppData();
  const { appid } = useParams();

  //state declarations on the top
  const [isInstalling, setIsInstalling] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  // Check if the target app is already installed on mount
  useEffect(() => {
    if (!loadingData && !loadingError && appData.length > 0) {
      const targetApp = appData.find((app) => app.id === Number(appid));
      // console.log(targetApp);

      if (targetApp) {
        const installedAppListLS =
          JSON.parse(localStorage.getItem("installedApps-heroio")) || [];
        const alreadyInstalled = installedAppListLS.some(
          (app) => app.id === targetApp.id
        );
        setIsInstalled(alreadyInstalled);
      }
    }
  }, [appData, loadingData, loadingError, appid]);

  // Loading data and verify the states through
  if (loadingData) {
    return (
      <div className="py-20 font-semibold text-4xl text-center">
        Fetching app data...
      </div>
    );
  }

  if (loadingError) {
    return (
      <div className="py-20 font-semibold text-red-600 text-4xl text-center">
        Error fetching app data: {loadingError.message}
      </div>
    );
  }
  // console.log(appData);

  // Find the app after loading is complete
  const targetApp = appData.find((app) => app.id === Number(appid));

  if (!targetApp) {
    return <Navigate to="/404" replace />;
  }

  const {
    image,
    title,
    company,
    description,
    size,
    reviews,
    rating,
    downloads,
    ratings,
  } = targetApp || {};

  const handleClickonInstall = () => {
    setIsInstalling(true);

    const installedAppListLS =
      JSON.parse(localStorage.getItem("installedApps-heroio")) || [];
    const updatedInstalledList = [...installedAppListLS, targetApp];
    // console.log(updatedInstalledList);

    setTimeout(() => {
      localStorage.setItem(
        "installedApps-heroio",
        JSON.stringify(updatedInstalledList)
      );
      setIsInstalling(false);
      setIsInstalled(true);
      toast.success(`${title} installation successful!`);
    }, 2000);
  };

  return (
    <section className="mx-auto py-20 w-11/12 text-[#001931]">
      <div className="flex flex-wrap justify-start gap-12">
        <figure>
          <img className="h-86" src={image} alt={title} />
        </figure>
        <div>
          <div>
            <h1 className="mb-4 font-bold text-4xl">{title}</h1>
            <p className="ext-gray-600">
              Developed by:{" "}
              <span className="font-semibold text-indigo-600">{company}</span>
            </p>
          </div>

          <hr className="mt-6 mb-8 border-gray-200" />

          <div className="mb-8">
            <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-16 lg:gap-32 fjustify-start">
              <div>
                <img
                  className="w-10 h-10"
                  src={icoDownloads}
                  alt="Total Downloads"
                />
                <p className="my-2">Total Downloads</p>
                <h3 className="font-bold text-5xl">{downloads}</h3>
              </div>

              <div>
                <img
                  className="w-10 h-10"
                  src={icoRatingAvg}
                  alt="Average Rating"
                />
                <p className="my-2">Average Rating</p>
                <h3 className="font-bold text-5xl">{rating}</h3>
              </div>

              <div>
                <img
                  className="w-10 h-10"
                  src={icoReviewNum}
                  alt="Total Reviews"
                />
                <p className="my-2">Total Reviews</p>
                <h3 className="font-bold text-5xl">{reviews}</h3>
              </div>
            </div>
          </div>

          <button
            onClick={handleClickonInstall}
            disabled={isInstalling || isInstalled}
            className="btn btn-primary"
          >
            {isInstalling
              ? "Installing..."
              : isInstalled
              ? "Installed ✓"
              : `Install Now (${size})`}
          </button>
        </div>
      </div>
      <hr className="my-12 border-gray-200" />

      <div>
        <h2 className="mb-4 font-bold text-3xl">Ratings</h2>

        <section className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings} layout="vertical">
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis type="number" />
              <YAxis type="category" dataKey="categ" reversed />
              <Tooltip />
              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>
      <hr className="my-12 border-gray-200" />

      <div>
        <h2 className="mb-4 font-bold text-3xl">Description</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default AppDetails;
