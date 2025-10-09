import React from "react";
import aeImg from "../../assets/App-Error.png";

const ErrorApp = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-[500px] text-center">
        {/* Error Image */}
        <img
          src={aeImg}
          alt="App Not Found"
          className="w-full max-w-[350px] mx-auto mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
          OPPS!! APP NOT FOUND
        </h1>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          The App you are requesting is not found on our system. Please try another app.
        </p>

        {/* Go Back Button */}
        <button
          onClick={() => window.history.back()} // ✅ No react-router-dom needed
          className="bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition-all"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default ErrorApp;
