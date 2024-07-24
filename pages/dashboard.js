import Head from 'next/head';
import Layout from '../components/layout';
import { MdOutlineIosShare } from "react-icons/md";
import { Gauge } from '@mui/x-charts/Gauge';
import { Avatar } from '@mui/material'; 
import { useState } from 'react';

const mockData = {
  name: "Sally Rooney",
  description: "Sally is resistant to come back to office, although there is a clear company policy. Her reason is that a flexible and non-distracting environment can improve her productivity.",
  hours: 20,
  score: 48,
  rank: 36,
  chatbot: "You have shown active listening skills and the ability to listen to the other party patiently.",
  postAnalysis: "You started with a caring greeting for the other person, which shows empathy. However you...",
  date: "FRIDAY 19 JUL 2024 12:24 PM",
  weather: "Sunny",
};

export default function Dashboard() {
  const [openPopup, setOpenPopup] = useState(null);

  const handlePopupOpen = (type) => {
    setOpenPopup(type);
  };

  const handlePopupClose = () => {
    setOpenPopup(null);
  };

  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="p-4 bg-white w-full max-w-full overflow-x-hidden">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl">Practice Report</h1>
          <div className="flex items-center space-x-4 p-6 rounded-full h-14">
            <button className="flex items-center px-4 py-2 bg-index-blue text-white rounded-full">
              <MdOutlineIosShare className="mr-2" />
              Share Analysis
            </button>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <h2 className="text-xl ml-2">{mockData.date}</h2>
        </div>
        <div className="flex mt-5 border-t border-gray-300">
          <div className="flex-1 p-4 flex flex-col max-w-full">
            <div className="flex items-start mb-5">
              <Avatar alt={mockData.name} src="/path/to/avatar.jpg" className="w-16 h-16 mr-4" />
              <div>
                <h3 className="text-xl">{mockData.name}</h3>
                <p className="text-base">{mockData.description}</p>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex mb-4 flex-grow">
                <div className="border border-gray-300 p-4 flex-1 mr-2">
                  <h4 className="text-lg font-medium">Summary</h4>
                </div>
                <div className="border border-gray-300 p-4 flex-1">
                  <h4 className="text-lg font-medium">Record</h4>
                </div>
              </div>
              <div className="flex flex-grow">
                <div className="border border-gray-300 p-4 flex-1 mr-2">
                  <h4 className="text-lg font-medium">Best Case</h4>
                </div>
                <div className="border border-gray-300 p-4 flex-1">
                  <h4 className="text-lg font-medium">Resources</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-4 flex flex-col space-y-5 max-w-full">
            <div className="border border-gray-300 p-4 rounded-md flex">
              <div className="w-1/2 flex items-center">
                <Gauge
                  value={(mockData.score / 100) * 100}
                  startAngle={0}
                  endAngle={360}
                  innerRadius="70%"
                  outerRadius="100%"
                  valueFormatter={(value) => `${mockData.score} / 100`}
                  sx={{ width: 120, height: 120 }}
                />
              </div>
              <div className="w-1/2 flex items-center justify-start pl-4">
                <h4 className="text-lg font-medium">Overall Score</h4>
              </div>
            </div>
            <div className="border border-gray-300 p-4 rounded-md flex">
              <div className="w-1/2 flex items-center">
                <Gauge
                  value={(mockData.rank / 100) * 100}
                  startAngle={0}
                  endAngle={360}
                  innerRadius="70%"
                  outerRadius="100%"
                  valueFormatter={(value) => `${mockData.rank} / 100`}
                  sx={{ width: 120, height: 120 }}
                />
              </div>
              <div className="w-1/2 flex items-center justify-start pl-4">
                <h4 className="text-lg font-medium">% Above Average</h4>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md cursor-pointer" onClick={() => handlePopupOpen('chatbot')}>
              <h3 className="text-xl">Chatbot</h3>
              <h4 className="text-lg">{mockData.name}</h4>
              <p className="text-base">{mockData.chatbot}</p>
              <p className="text-sm">{mockData.date}</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md cursor-pointer" onClick={() => handlePopupOpen('postAnalysis')}>
              <h3 className="text-xl">Post-Analysis</h3>
              <p className="text-base">{mockData.postAnalysis}</p>
              <p className="text-sm">{mockData.date}</p>
            </div>
          </div>
        </div>
      </div>

      {openPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
          <div className="relative bg-white p-10 rounded-md shadow-lg w-11/12 max-w-3xl overflow-auto">
            <button className="absolute top-4 right-4 text-black text-2xl" onClick={handlePopupClose}>
              &times;
            </button>
            {openPopup === 'chatbot' && (
              <div>
                <h3 className="text-xl">Chatbot</h3>
                <h4 className="text-lg">{mockData.name}</h4>
                <p className="text-base">{mockData.chatbot}</p>
                <p className="text-sm">{mockData.date}</p>
              </div>
            )}
            {openPopup === 'postAnalysis' && (
              <div>
                <h3 className="text-xl">Post-Analysis</h3>
                <p className="text-base">{mockData.postAnalysis}</p>
                <p className="text-sm">{mockData.date}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}