import React, { useEffect, useState } from "react";
import InstalledCard from "../compos/InstalledCard";
import NoAppInstalled from "../compos/NoAppInstalled";
import { toast } from "react-toastify";

const InstalledWrap = () => {
  const [installedAppList, setInstalledAppList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const installedAppListLS =
      JSON.parse(localStorage.getItem("installedApps-heroio")) || [];
    // console.log(installedAppListLS);
    if (installedAppListLS) setInstalledAppList(installedAppListLS);
  }, []);

  // useEffect(() => {
  //   console.log("installedAppList state updated:", installedAppList);
  // }, [installedAppList]);
  if (installedAppList.length === 0) return <NoAppInstalled />;

  // starting and iife function to implement sorting feature
  // its code will be executed through during loading time even if it isn't called
  const sortedAppList = (() => {
    switch (sortOrder) {
      case "downloads-asc":
        return [...installedAppList].sort((a, b) => a.downloads - b.downloads);
      case "downloads-dsc":
        return [...installedAppList].sort((a, b) => b.downloads - a.downloads);

      case "rating-asc":
        return [...installedAppList].sort((a, b) => a.rating - b.rating);
      case "rating-dsc":
        return [...installedAppList].sort((a, b) => b.rating - a.rating);

      default:
        return installedAppList;
    }
  })();

  const handleClickonUninstall = (appid) => {
    const currentInstalledList = JSON.parse(
      localStorage.getItem("installedApps-heroio")
    );
    // console.log(currentInstalledList);
    // console.log(appid);

    const updatedInstalledList = currentInstalledList.filter(
      (app) => app.id !== appid
    );
    // console.log(updatedInstalledList);

    localStorage.setItem(
      "installedApps-heroio",
      JSON.stringify(updatedInstalledList)
    );
    toast.success("Uninstallation successful!");

    // removing the app from LS is done
    // but the app list on InstalledCard isn't refreshing automatically
    // following line of code is not necessary according to the logic, but will do the needful trick
    setInstalledAppList(updatedInstalledList);
  };

  return (
    <section className="mx-auto py-20 w-11/12 text-[#001931]">
      <div className="text-center">
        <h2 className="font-bold text-5xl">Your Installed Apps</h2>
        <p className="mt-6 mb-12">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* App count and sort drop-down */}
      <div className="flex flex-wrap justify-between items-center gap-12 mb-6">
        <h4 className="font-bold text-2xl">
          ({installedAppList.length}) Apps Found
        </h4>
        <label className="w-full max-w-xs">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="appearance-none select"
          >
            <option value="none"> Select a sorting order</option>
            <option value="downloads" disabled>
              {" "}
              Sort by Downloads:
            </option>
            <option value="downloads-asc">Downloads: Low&gt;High</option>
            <option value="downloads-dsc">Downloads: High&gt;Low</option>
            <option value="rating" disabled>
              {" "}
              Sort by Rating:
            </option>
            <option value="rating-asc">Rating: Low&gt;High</option>
            <option value="rating-dsc">Rating: High&gt;Low</option>
          </select>
        </label>
      </div>

      <div className="flex flex-col gap-6">
        {sortedAppList.map((app) => (
          <InstalledCard
            key={app.id}
            app={app}
            handleClickonUninstall={(appid) => handleClickonUninstall(appid)}
          />
        ))}
      </div>
    </section>
  );
};

export default InstalledWrap;
