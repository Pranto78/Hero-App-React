import React, { Suspense, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import dIcon from "../../assets/icon-downloads.png";
import rIcon from "../../assets/icon-ratings.png";

import ErrorPage from "../ErrorPage/ErrorPage";
import Spinner from "../Spinner/Spinner";

const AllApps = () => {
  const AppData = useLoaderData();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ page spinner

  // ✅ Single useEffect handles both page load + search spinner
  useEffect(() => {
    // show spinner on initial page load
    const loadTimer = setTimeout(() => setLoading(false), 800);

    // handle spinner when searching
    if (search.trim() !== "") {
      setIsSearching(true);
      const searchTimer = setTimeout(() => setIsSearching(false), 500);
      return () => {
        clearTimeout(loadTimer);
        clearTimeout(searchTimer);
      };
    }

    return () => clearTimeout(loadTimer);
  }, [search]);

  const filteredApps = AppData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Spinner when page loads
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[9999]">
        <span className="loading loading-infinity loading-lg text-[#9F62F2] scale-[2]"></span>
      </div>
    );
  }

  return (
    <Suspense fallback={<Spinner></Spinner>}>
      <div className="bg-[#f5f5f5] min-h-screen relative">
        <div className="text-center max-w-[1400px] mx-auto">
          <h1 className="text-4xl font-bold">Our All Application</h1>
          <p className="text-gray-600 mt-3">
            Explore All Trending Apps on the Market developed by us
          </p>

          <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-4">
            <div>
              <h1 className="text-3xl font-bold">
                App Founded: {filteredApps.length}
              </h1>
            </div>

            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <kbd className="kbd kbd-sm">⌘</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
            </label>
          </div>

          {/* ✅ Spinner while searching */}
          {isSearching && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-[9999]">
              <span className="loading loading-infinity loading-lg text-[#9F62F2] scale-[2]"></span>
            </div>
          )}

          {/* ✅ ErrorPage if no match found */}
          {filteredApps.length === 0 ? (
            <ErrorPage />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
              {filteredApps.map((app) => (
                <Link to={`/appDetails/${app.id}`} key={app.id}>
                  <div className="card bg-base-100 shadow-sm">
                    <figure className="p-5">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="rounded-xl h-[300px] w-[300px]"
                      />
                    </figure>

                    <h1 className="text-left font-bold mb-2 pl-7">
                      {app.title}
                    </h1>

                    <div className="flex justify-between items-center px-10 mb-2">
                      <div className="flex items-center gap-2 w-[70px] bg-[#F1F5E8] p-2 rounded-lg">
                        <img
                          className="h-[16px] w-[16px]"
                          src={dIcon}
                          alt="Downloads"
                        />
                        <h1>{app.downloads}M</h1>
                      </div>
                      <div className="flex items-center gap-2 w-[60px] bg-[#FFF0E1] p-2 rounded-lg">
                        <img
                          className="h-[16px] w-[16px]"
                          src={rIcon}
                          alt="Rating"
                        />
                        <h1>{app.ratingAvg}5</h1>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default AllApps;
