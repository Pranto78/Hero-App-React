import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-gray-300 py-12 px-6 md:px-20 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* --- Logo + About --- */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Hero.io Logo" className="w-12 h-12" />
            <h1 className="text-3xl font-bold text-white">Hero.io</h1>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            Hero.io is a sleek and modern web platform designed to make app discovery effortless. 
            Explore, preview, and download your favorite apps in one place — fast, secure, and beautifully organized.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 inline-block pb-1">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#9F62F2] transition">Home</a></li>
            <li><a href="/all-apps" className="hover:text-[#9F62F2] transition">All Apps</a></li>
            <li><a href="/about" className="hover:text-[#9F62F2] transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#9F62F2] transition">Contact</a></li>
          </ul>
        </div>

        {/* --- Social Links --- */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 inline-block pb-1">
            Follow Us
          </h2>
          <div className="flex space-x-5 mt-3">
            
            {/* Twitter */}
            <a href="#" className="hover:text-[#1DA1F2] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 
                4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 
                1.195 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 
                011.671 3.149a4.916 4.916 0 001.523 6.573 
                4.897 4.897 0 01-2.229-.616c-.054 2.281 
                1.581 4.415 3.949 4.89a4.936 4.936 0 
                01-2.224.084 4.923 4.923 0 004.6 
                3.419A9.868 9.868 0 010 19.54a13.94 
                13.94 0 007.548 2.212c9.142 0 
                14.307-7.721 13.995-14.646A9.936 
                9.936 0 0024 4.557z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="text-white hover:text-[#FF0000] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 
                0C1.732 3.458 1 6.723 1 12c0 5.27.732 8.542 
                3.385 8.816 3.599.245 11.626.246 15.23 
                0C22.268 20.542 23 17.277 23 12c0-5.27-.732-8.542-3.385-8.816zM10 15.5v-7l6 
                3.5-6 3.5z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="hover:text-[#1877F2] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 
                5.378 14.192 5 15.115 5H18V0h-3.808C10.596 
                0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* --- Bottom Line --- */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#9F62F2] font-semibold">Hero.io</span>. 
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
