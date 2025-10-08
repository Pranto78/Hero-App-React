import React from "react";
import dIcon from '../../assets/icon-downloads.png'
import rIcon from '../../assets/icon-ratings.png'

const Apps = () => {
  return (
<div className="bg-[#f5f5f5]">
    <div className="text-center max-w-[1400px] mx-auto ">
      <h1 className="text-4xl font-bold">Trending Apps</h1>

      <p className="text-gray-600 mt-3">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="p-5">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        
        <h1 className="text-left font-bold mb-2 pl-7">Forest: Focus for Productivity</h1>
        <div className="flex justify-between items-center px-10 mb-2">
            <div className="flex items-center gap-2 w-[70px] bg-[#F1F5E8] p-2 rounded-lg"><img className="h-[16px] w-[16px]" src={dIcon} alt="" /> <h1>9M</h1></div>
            <div className="flex items-center gap-2 w-[60px] bg-[#FFF0E1] p-2 rounded-lg"><img className="h-[16px] w-[16px]" src={rIcon} alt="" /> <h1>5</h1></div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Apps;
