import { MdClose } from 'react-icons/md';


const Popupnew = ({ handleOptionClick, onClose }) => {


  const handleOptionClickWithMode = (minutes) => {
    handleOptionClick(minutes); 
  };


  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="w-1/5 bg-index-blue p-4 text-center text-white relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:text-gray-300"
          >
            <MdClose size={24} />
          </button>

          <div className="text-2xl">How long would you like to practice for?</div>
          <div className="space-y-2 mt-4">
            {[5, 10, 15, 20].map((minutes) => (
              <button
                key={minutes}
                onClick={() => handleOptionClickWithMode(minutes)}
                className="w-full px-4 py-2 bg-white text-index-blue rounded-lg hover:bg-gray-300"
              >
                {minutes} minutes
              </button>
            ))}
            <button
              onClick={() => handleOptionClickWithMode("no limit")}
              className="w-full px-4 py-2 bg-white text-index-blue rounded-lg hover:bg-gray-300"
            >
              No Limit
            </button>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Popupnew;