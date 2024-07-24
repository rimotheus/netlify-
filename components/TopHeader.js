import React from 'react';

const TopHeader = ({ children }) => {
  return (
    <div className="shadow-md p-4 flex items-center justify-between mb-6 bg-white">
      <div className="flex items-center">
        <div className="text-4xl font-bold">
          {children}
        </div>
      </div>
      <div className="flex items-center">
        {/* Additional elements if needed */}
      </div>
    </div>
  );
};

export default TopHeader;

