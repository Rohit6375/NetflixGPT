import React from 'react';
import "../App.css";

const Shimmer = () => {
  return (
    <div className="p-4  bg-black/85 text-white rounded-lg animate-pulse space-y-10">

      {Array(3).fill("").map((_, rowIndex) => (
        <div key={rowIndex} className="px-6 mt-10">

          {/* Responsive Title Placeholder */}
          <div className="h-6 mb-4 w-1/3 sm:w-1/4 md:w-1/6 rounded bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"></div>

          {/* Scrollable Card Placeholder */}
          <div className="flex overflow-x-scroll hide-scrollbar">
            <div className="flex space-x-4 sm:space-x-6">
              {Array(10).fill("").map((_, cardIndex) => (
                <div
                  key={cardIndex}
                  className="min-w-[120px] sm:min-w-[140px] md:min-w-[176px] h-44 sm:h-56 md:h-64 rounded-lg bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 shadow-lg transform hover:scale-105 transition"
                ></div>
              ))}
            </div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default Shimmer;
