import React from "react";
import { useParams } from "react-router";
import useAppData from "../hook/useAppData";
import icoDownloads from "../assets/icon-downloads.png";
import icoRatingAvg from "../assets/icon-ratings.png";
import icoReviewNum from "../assets/icon-review.png";
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

const AppDetails = () => {
  const { appData, loadingData, loadingError } = useAppData();
  const { appid } = useParams();

  // Loading data and verify the states through
  if (loadingData) {
    return <div className="py-20 text-center">Loading trending apps...</div>;
  }

  if (loadingError) {
    return (
      <div className="py-20 text-red-600 text-center">
        Error loading tending apps: {loadingError.message}
      </div>
    );
  }
  // console.log(appData);

  //finding the app and loading its details
  const targetApp = appData.find((app) => app.id === Number(appid));
  // console.log(targetApp);

  const {
    image,
    title,
    tagline,
    company,
    description,
    size,
    reviews,
    rating,
    downloads,
    ratings,
  } = targetApp || {};

  return (
    <section className="mx-auto py-20 w-11/12 text-[#001931]">
      <div className="flex flex-wrap justify-start gap-12">
        <figure>
          <img className="h-86" src={image} alt={title} />
        </figure>
        <div>
          <div>
            <h1 className="mb-4 font-bold text-4xl">
              {title}: {tagline}
            </h1>
            <p className="ext-gray-600">
              Developed by:{" "}
              <span className="font-semibold text-indigo-600">{company}</span>
            </p>
          </div>

          <hr className="mt-6 mb-8 border-gray-200" />

          <div className="mb-8">
            <div className="flex justify-start gap-4 sm:gap-8 md:gap-16 lg:gap-32">
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

          <button className="text-white btn btn-success">
            Install Now ({size})
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
              <XAxis type="number" axisLine={false}/>
              <YAxis type="category" dataKey="categ" reversed axisLine={false}/>
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#FF8811"
              />
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
