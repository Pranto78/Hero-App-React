import React from 'react';
import { useLoaderData } from 'react-router';

import dIcon from "../../assets/icon-downloads.png";
import rIcon from "../../assets/icon-ratings.png";

const AllApps = () => {
    const AppData = useLoaderData();

    return (
         <div className="bg-[#f5f5f5]">
              <div className="text-center max-w-[1400px] mx-auto ">
                <h1 className="text-4xl font-bold">Trending Apps</h1>
        
                <p className="text-gray-600 mt-3">
                  Explore All Trending Apps on the Market developed by us
                </p>
        
                 {/* "image": "https://i.ibb.co/HLq5L8hm/unnamed-12.png",
            "title": "Glitch Lab",
            "companyName": "Guma Games",
            "id": 18,
            "description": "Photo editing app that gives retro / glitch / VHS style transformations. Lots of effects, customizations. Lots of fun for creators wanting something different than standard filters.",
            "size": 35.4,
            "reviews": 8000,
            "ratingAvg": 4.2,
            "downloads": 300000,
            "ratings": [
              { "name": "1 star", "count": 400 },
              { "name": "2 star", "count": 300 },
              { "name": "3 star", "count": 1500 },
              { "name": "4 star", "count": 3500 },
              { "name": "5 star", "count": 21000 }
            ] */}
        
                <div className="grid grid-cols-4 gap-5 mt-5">
                  {
                  AppData.map((app) => (
                    <div className="card bg-base-100 shadow-sm">
                      <figure className="p-5">
                        <img
                          src={app.image}
                          alt="Shoes"
                          className="rounded-xl h-[300px] w-[300px]"
                        />
                      </figure>
        
                      <h1 className="text-left font-bold mb-2 pl-7">
                        Forest: Focus for Productivity
                      </h1>
                      <div className="flex justify-between items-center px-10 mb-2">
                        <div className="flex items-center gap-2 w-[70px] bg-[#F1F5E8] p-2 rounded-lg">
                          <img className="h-[16px] w-[16px]" src={dIcon} alt="" />{" "}
                          <h1>9M</h1>
                        </div>
                        <div className="flex items-center gap-2 w-[60px] bg-[#FFF0E1] p-2 rounded-lg">
                          <img className="h-[16px] w-[16px]" src={rIcon} alt="" />{" "}
                          <h1>5</h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    );
};

export default AllApps;