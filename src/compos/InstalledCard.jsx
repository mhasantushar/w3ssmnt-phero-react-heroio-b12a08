import React from "react";
import icoDownload from "../assets/icon-downloads.png";
import icoRating from "../assets/icon-ratings.png";

const InstalledCard = ({ app, handleClickonUninstall }) => {
  return (
    <section className="bg-white shadow-sm hover:shadow-xl text-[#001931] hover:scale-102 transition ease-in-out card card-side">
      <figure className="h-40 overflow-hidden">
        <img className="w-full h-full" src={app.image} alt={app.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {app.title}
        </h2>

        <div className="flex flex-wrap justify-start items-center gap-6">
          <div className="font-bold badge-soft badge-success badge">
            <img className="w-4" src={icoDownload} /> {app.downloads}
          </div>
          <div className="font-bold badge-soft badge badge-warning">
            <img className="w-4" src={icoRating} /> {app.rating}
          </div>
          <div>{app.size}</div>
        </div>
        <div className="justify-end card-actions">
          <button
            onClick={() => handleClickonUninstall(app.id)}
            className="btn btn-primary"
          >
            Uninstall
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstalledCard;
