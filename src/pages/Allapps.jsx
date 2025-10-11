import React from "react";
import { useState } from "react";
import AppCard from "../compos/AppCard";
import useAppData from "../hook/useAppData";
import NoAppFound from "../compos/NoAppFound";

const Allapps = () => {
  const { appData, loadingData, loadingError } = useAppData();
  const [searchTerm, setSearchTerm] = useState("");

  // Loading data and verify the states through
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

  // starting the search...
  const refinedTerm = searchTerm.trim().toLowerCase();
  console.log(refinedTerm);

  const matchedApps = refinedTerm
    ? appData.filter((app) => app.title.toLowerCase().includes(refinedTerm))
    : appData;

  return (
    <section className="mx-auto py-20 w-11/12">
      <div className="text-[#001931] text-center">
        <h2 className="font-bold text-[#001931] text-5xl">
          All Our Applications
        </h2>
        <p className="mt-6 mb-12 text-[#001931]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* App count and search button */}
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold 4xl">({matchedApps.length}) Apps Found</h4>

        <label className="input">
          <input
            type="search"
            placeholder="Search Apps"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      {/* publishing search result.. */}
      {/* first, what to do if nothing is found */}
      {/* then, what to do if results found */}
      {matchedApps.length === 0 ? (
        <NoAppFound clearSearch={()=>setSearchTerm("")} />
      ) : (
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {matchedApps.map((app) => (
            <AppCard key={app.Id} app={app} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Allapps;
