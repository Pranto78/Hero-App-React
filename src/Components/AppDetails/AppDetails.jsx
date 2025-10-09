import React from "react";
import { useLoaderData, useParams } from "react-router";
import ErrorPage from "../ErrorPage/ErrorPage";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import dIcon from "../../assets/icon-downloads.png";
import rIcon from "../../assets/icon-ratings.png";
import lIcon from "../../assets/icon-review.png";

const AppDetails = () => {
  const apps = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);
  const SingleApp = apps.find((item) => item.id === appId);

  if (!SingleApp) {
    return <ErrorPage />;
  }

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-around items-center">
        <img
          className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-contain p-5"
          src={SingleApp.image}
          alt={SingleApp.title}
        />

        <div className="w-full md:px-6">
          <h1 className="text-2xl font-bold mb-2">{SingleApp.title}</h1>
          <p className="text-gray-500 mb-3">
            Developed by{" "}
            <span className="text-blue-500">{SingleApp.companyName}</span>
          </p>
          <hr className="border-gray-300 mb-4" />

          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <img src={dIcon} alt="downloads" className="mx-auto mb-1 w-6" />
              <h2 className="text-sm text-gray-500">Downloads</h2>
              <h1 className="text-lg font-bold">{SingleApp.downloads}M</h1>
            </div>
            <div>
              <img src={rIcon} alt="ratings" className="mx-auto mb-1 w-6" />
              <h2 className="text-sm text-gray-500">Average Ratings</h2>
              <h1 className="text-lg font-bold">{SingleApp.ratingAvg}</h1>
            </div>
            <div>
              <img src={lIcon} alt="reviews" className="mx-auto mb-1 w-6" />
              <h2 className="text-sm text-gray-500">Total Reviews</h2>
              <h1 className="text-lg font-bold">{SingleApp.reviews}K</h1>
            </div>
          </div>

          <button className="btn btn-success text-white mt-6">
            Install Now ({SingleApp.size} MB)
          </button>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Ratings</h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={SingleApp.ratings}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="count" fill="#f97316" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
          {SingleApp.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
