import React, { useEffect, useState } from "react";
import BannerOne from "../BannerOne/BannerOne";
import BannerTwo from "../BannerTwo/BannerTwo";
import Apps from "../Apps/Apps";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate component loading
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {loading ? (
        // ✅ Spinner shown only in Home section space
        <div className="flex justify-center items-center h-[500px]">
          <span className="loading loading-infinity loading-lg text-[#9F62F2] scale-[2]"></span>
        </div>
      ) : (
        <>
          <BannerOne />
          <BannerTwo />
          <Apps />
        </>
      )}
    </div>
  );
};

export default Home;
