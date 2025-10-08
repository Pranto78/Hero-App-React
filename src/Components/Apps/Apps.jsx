import React from "react";
import dIcon from "../../assets/icon-downloads.png";
import rIcon from "../../assets/icon-ratings.png";
import { useLoaderData, useNavigate } from "react-router";

const Apps = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  // Show only first 8 apps (2 rows × 4 columns)
  const limitedApps = data.slice(0, 8);

  return (
    <div className="bg-[#f5f5f5] py-10">
      <div className="text-center max-w-[1400px] mx-auto">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="text-gray-600 mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-4 gap-5 mt-8">
          {limitedApps.map((app) => (
            <div
              key={app.id}
              className="card bg-base-100 shadow-sm hover:shadow-lg transition-all rounded-2xl"
            >
              <figure className="p-5">
                <img
                  src={app.image}
                  alt={app.title}
                  className="rounded-xl h-[300px] w-[300px] object-cover"
                />
              </figure>

              <h1 className="text-left font-bold mb-2 pl-7">
                {app.title}
              </h1>

              <div className="flex justify-between items-center px-10 mb-2">
                <div className="flex items-center gap-2 w-[70px] bg-[#F1F5E8] p-2 rounded-lg">
                  <img className="h-[16px] w-[16px]" src={dIcon} alt="Downloads" />
                  <h1>{app.downloads}M</h1>
                </div>

                <div className="flex items-center gap-2 w-[60px] bg-[#FFF0E1] p-2 rounded-lg">
                  <img className="h-[16px] w-[16px]" src={rIcon} alt="Ratings" />
                  <h1>{app.ratingAvg}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All button */}
        <button
          onClick={() => navigate("/all-apps")}
          className="mt-8 bg-[#5B21B6] text-white px-6 py-2 rounded-md hover:bg-[#4C1D95] transition-all"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Apps;
