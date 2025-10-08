import React from "react";

import heroImg from '../../assets/hero.png';
//

const BannerTwo = () => {
  return (
    <div>
      <div className="flex justify-center mt-3">
        <img src={heroImg} alt="" />
      </div>

      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-8 px-4 text-center mb-4">
        <h2 className="text-3xl font-bold mb-8">
          Trusted By Millions, Built For You
        </h2>

        <div className="stats stats-vertical lg:stats-horizontal justify-center bg-transparent">
          <div className="stat">
            <div className="stat-title text-gray-200">Total Downloads</div>
            <div className="stat-value text-white text-5xl mb-3">29.6M</div>
            <div className="stat-desc text-gray-300">
              21% More Than Last Month
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-gray-200">Total Reviews</div>
            <div className="stat-value text-white text-5xl mb-3">906K</div>
            <div className="stat-desc text-gray-300">
              46% More Than Last Month
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-gray-200">Active Apps</div>
            <div className="stat-value text-white text-5xl mb-3">132+</div>
            <div className="stat-desc text-gray-300">31 More Will Launch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
