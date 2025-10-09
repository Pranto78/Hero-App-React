import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState(""); // 👈 default empty
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
      setInstalledApps(stored);
      setLoading(false);
    }, 800);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.info("🗑️ Uninstalled Successfully!");
  };

  
  const sortedApps = [...installedApps].sort((a, b) =>
    sortBy === "high-low"
      ? b.downloads - a.downloads
      : sortBy === "low-high"
      ? a.downloads - b.downloads
      : 0
  );

 
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white bg-opacity-90">
        <span className="loading loading-infinity loading-lg text-[#9F62F2] scale-[2]"></span>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Your Installed Apps
          </h1>
          <p className="text-gray-500 mt-2">
            Explore all trending apps on the market developed by us
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">
            {installedApps.length} Apps Found
          </h2>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9F62F2]"
          >
            <option value="" disabled>
              Sort by Downloads
            </option>
            <option value="high-low">High-Low: Most Downloads</option>
            <option value="low-high">Low-High: Fewest Downloads</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-[50px] h-[50px] rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    {app.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    <span className="text-green-600">{app.downloads}M</span> •{" "}
                    <span className="text-orange-500">{app.ratingAvg}⭐</span> •{" "}
                    {app.size}MB
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold px-5 py-2 rounded-lg transition text-sm"
              >
                Uninstall
              </button>
            </div>
          ))}

          {sortedApps.length === 0 && (
            <p className="text-center text-gray-500 mt-6">
              No installed apps found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
