import React from 'react';
import { MdClose } from 'react-icons/md';

const Popup = ({ handleOptionClick, onClose, item }) => {
  if (!item) return null; 

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative flex w-150 h-100 bg-white rounded-lg overflow-hidden">
        <div className="w-2/5 bg-gray-200 p-4 flex flex-col justify-center items-center">
          <item.icon className="text-5xl mb-4" />
          <h2 className="text-xl font-bold mb-2">{item.name}</h2>
          <p className="text-center">{item.description}</p>
        </div>


        <div className="w-3/5 bg-index-blue p-4 text-center text-white relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:text-gray-300"
          >
            <MdClose size={24} />
          </button>

          <div>How long would you like to practice for?</div>
          <div className="space-y-2 mt-4">
            <button
              onClick={() => handleOptionClick(5)}
              className="w-full px-4 py-2 bg-white text-index-blue rounded-lg hover:bg-gray-300"
            >
              5 minutes
            </button>
            <button
              onClick={() => handleOptionClick(10)}
              className="w-full px-4 py-2 bg-white text-index-blue rounded-lg hover:bg-gray-300"
            >
              10 minutes
            </button>
            <button
              onClick={() => handleOptionClick(15)}
              className="w-full px-4 py-2 bg-white text-index-blue rounded-lg hover:bg-gray-300"
            >
              15 minutes
            </button>
            <button
              onClick={() => handleOptionClick(20)}
              className="w-full px-4 py-2 bg-white text-index-blue rounded-lg hover:bg-gray-300"
            >
              20 minutes
            </button>
            <button
              onClick={() => handleOptionClick("no limit")}
              className="w-full px-4 py-2 bg-white text-index-blue rounded-lg hover:bg-gray-300"
            >
              No Limit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;