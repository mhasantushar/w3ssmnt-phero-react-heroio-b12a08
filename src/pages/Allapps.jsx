import React from "react";
import { useState } from "react";
import AppCard from "../compos/AppCard";
import useAppData from "../hook/useAppData";
import NoAppFound from "../compos/NoAppFound";
import Spinner from "../compos/Spinner";

const Allapps = () => {
  const { appData, loadingData, loadingError } = useAppData();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Loading data and verify the states through
  if (loadingData) {
    return <div className="py-20 font-semibold text-4xl text-center">Fetching app data...</div>;
  }

  if (loadingError) {
    return (
      <div className="py-20 font-semibold text-red-600 text-4xl text-center">
        Error loading apps: {loadingError.message}
      </div>
    );
  }

  // Handle search with 300ms fake delay
  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
    }, 300);
  };

  // starting the search...
  const refinedTerm = searchTerm.trim().toLowerCase();

  const matchedApps = refinedTerm
    ? appData.filter((app) => app.title.toLowerCase().includes(refinedTerm))
    : appData;

  return (
    <section className="mx-auto py-20 w-11/12 text-[#001931]">
      <div className="text-center">
        <h2 className="font-bold text-5xl">All Our Applications</h2>
        <p className="mt-6 mb-12">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* App count and search button */}
      <div className="flex justify-between items-center gap-6 mb-6">
        <h4 className="font-bold text-2xl">
          ({matchedApps.length}) Apps Found
        </h4>

        <label className="input">
          <input
            type="search"
            placeholder="Search Apps"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </label>
      </div>

      {/* Show spinner while searching */}
      {isSearching ? (
        <Spinner />
      ) : (
        <>
          {/* publishing search result.. */}
          {matchedApps.length === 0 ? (
            <NoAppFound clearSearch={() => setSearchTerm("")} />
          ) : (
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {matchedApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Allapps;