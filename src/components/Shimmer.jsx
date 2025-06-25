import React from 'react';
import "../App.css"

const Shimmer = () => {
  return (
    <div className="p-4 m-4 mt-20 bg-black/85 text-white rounded-lg animate-pulse space-y-10 hidden-scrollbar">

      {Array(3).fill("").map((_, rowIndex) => (
        <div key={rowIndex} className='hidden-scrollbar'>

          {/* Shimmer Title with gradient glow */}
          <div className="h-6 mb-6 w-1/6 rounded bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hidden-scrollbar"></div>

          {/* Horizontal Scrollable Cards */}
          <div className="flex space-x-6 overflow-x-auto hidden-scrollbar">
            {Array(10).fill("").map((_, cardIndex) => (
              <div
                key={cardIndex}
                className="w-44 h-64 rounded-lg bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 shadow-lg transform hover:scale-105 transition"
              ></div>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
};

export default Shimmer;
