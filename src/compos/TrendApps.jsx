import React from "react";
import AppCard from "./AppCard";
import useAppData from "../hook/useAppData";
import { Link } from "react-router";

const TrendApps = () => {
  const { appData, loadingData, loadingError } = useAppData();

  if (loadingData) {
    return <div className="py-20 text-center">Loading apps...</div>;
  }

  if (loadingError) {
    return (
      <div className="py-20 text-red-600 text-center">
        Error loading apps: {loadingError.message}
      </div>
    );
  }
  // console.log(appData);

  const appsTrending = appData.slice(0, 8); // taking first 8 to show on homepage

  return (
    <section className="mx-auto py-20 w-11/12">
      <div className="text-[#001931] text-center">
        <h2 className="font-bold text-[#001931] text-5xl">Trending Apps</h2>
        <p className="mt-6 mb-12 text-[#001931]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* looping and passing to card builer.. */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {appsTrending.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <Link to="/apps">
        <button className="flex bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] mx-auto mt-12 px-8 text-white btn btn-soft btn-primary">
          Show All
        </button>
      </Link>
    </section>
  );
};

export default TrendApps;
