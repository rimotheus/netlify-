//can remove this if using slug vice versa 
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { MdLocalHospital, MdWork, MdSchool, MdEvent, MdAccessibility, MdRecordVoiceOver } from 'react-icons/md';
import Layout from "../../../components/layout";

// Mock data
const scenarios = [
  { id: 1, title: 'Mental Health', icon: MdLocalHospital },
  { id: 2, title: 'Workplace', icon: MdWork },
  { id: 3, title: 'School', icon: MdSchool },
  { id: 4, title: 'Social Event', icon: MdEvent },
  { id: 5, title: 'Special Care', icon: MdAccessibility },
  { id: 6, title: 'Public Speaking', icon: MdRecordVoiceOver },
];

const Scenarios = () => {
  const router = useRouter();
  const { scenariosId } = router.query;
  const [buttonText, setButtonText] = useState("start");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMinutes, setSelectedMinutes] = useState(null);

  
  const scenario = scenarios.find(scenario => String(scenario.id) === scenariosId);

  
  const handleButtonClick = () => {
    if (buttonText === "start") {
      setButtonText("continue");
    } else {
      setShowPopup(true);
    }
  };

  // Handle selecting practice duration
  const handleOptionClick = (minutes) => {
    setSelectedMinutes(minutes);
    setShowPopup(false);
    console.log(`Selected minutes: ${minutes}`);
  };

  
  const handleVoiceOrChatClick = (option) => {
    if (option === 'voice') {
      router.push(`/scenarios/${scenariosId}/voice`);
    } else if (option === 'chat') {
      router.push(`/scenarios/${scenariosId}/chat`);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Start Conversation</title>
      </Head>
      {scenario ? (
        <div>
          <div className="flex justify-between items-start">
            <h1 className="text-3xl">{scenario.title}</h1>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">Back to home</Link>
              <Link href="/scenarios">Back to scenarios</Link>
            </div>
          </div>
          <div className="text-white mt-4 flex justify-center">
            <p className="text-center text-7xl">
              Hi, what would you like to talk about today?
            </p>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button
              onClick={handleButtonClick}
              className={`mt-4 px-4 py-2 rounded shadow-md w-60 h-18 
              ${buttonText === "start" ? "bg-index-blue text-white " : "bg-white text-index-blue  "}`}
            >
              {buttonText}
            </button>
          </div>
          {showPopup && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg text-center space-y-4">
                <div>How long would you like to practice for?</div>
                <div className="space-y-2">
                  <button
                    onClick={() => handleOptionClick(5)}
                    className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  >
                    5 minutes
                  </button>
                  <button
                    onClick={() => handleOptionClick(10)}
                    className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  >
                    10 minutes
                  </button>
                  <button
                    onClick={() => handleOptionClick(15)}
                    className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  >
                    15 minutes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Layout>
          <Head>
            <title>Scenario not found</title>
          </Head>
          <div>
            <h1>Scenario not found</h1>
            <div>
              <Link href="/scenarios">Go back to Scenarios</Link>
            </div>
          </div>
        </Layout>
      )}
      {selectedMinutes !== null && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg text-center space-y-4">
            <div>Choose communication method:</div>
            <button
              onClick={() => handleVoiceOrChatClick('voice')}
              className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Voice
            </button>
            <button
              onClick={() => handleVoiceOrChatClick('chat')}
              className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Chat
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Scenarios;

// const styles = {
//   popupOverlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   popup: {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "10px",
//     textAlign: "center",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
// };

// export default Scenarios;
