import React from "react";
import icoDownload from "../assets/icon-downloads.png";
import icoRating from "../assets/icon-ratings.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id, image, title, tagline, downloads, rating } = app;

  return (
    <Link to={`/app/${id}`}>
      <article className="bg-base-100 shadow-sm hover:shadow-xl text-[#001931] hover:scale-102 transition ease-in-out card">
        <figure className="h-48 overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h3 className="card-title">
            {title} - {tagline}              
          </h3>

          <div className="justify-between card-actions">
            <div className="font-bold badge-soft badge-success badge">
              <img className="w-4" src={icoDownload} /> {downloads}
            </div>
            <div className="font-bold badge-soft badge badge-warning">
              <img className="w-4" src={icoRating} /> {rating}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default AppCard;
