import { MdClose } from "react-icons/md";

const PopupCommunicationMode = ({ handleCommunicationModeClick, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-1/5 bg-index-blue p-4 text-center text-white relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300"
        >
          <MdClose size={24} />
        </button>

        <div className="text-2xl">Choose Communication Mode</div>
        <div className="space-y-2 mt-4">
          <button
            onClick={() => handleCommunicationModeClick('voice')}
            className="w-full px-4 py-2 bg-white text-index-blue rounded-lg hover:bg-gray-300"
          >
            Voice
          </button>
          <button
            onClick={() => handleCommunicationModeClick('chat')}
            className="w-full px-4 py-2 bg-white text-index-blue rounded-lg hover:bg-gray-300"
          >
            Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupCommunicationMode;