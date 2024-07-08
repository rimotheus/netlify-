//scenarios input page - creating custom new scenarios
import Head from 'next/head';
import Link from 'next/link';


import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import Layout from '../components/layout';
export default function ScenarioInput() {
    const [showPopup, setShowPopup] = useState(false);

  const handleArrowForwardClick = () => {
    setShowPopup(!showPopup);
  };

  const handleOptionClick = (minutes) => {
    console.log(`Selected ${minutes} minutes`);
    setShowPopup(false);
  };
  

    return (
      <Layout gradient={true}>
        <Head>
          <title>Scenario Input</title>
        </Head>
        <div className="flex items-center justify-center h-full text-white">
          <div className="mt-20 text-center">
            <h1 className="text-6xl leading-tight max-w-3xl mx-auto">
              Hi, what would you like to talk about today?
            </h1>
            <div className="mt-10 flex items-center justify-center">
            <div className="relative w-full ">
              <textarea
                placeholder="Type here"
                className="border border-gray-300 px-4 py-2 w-full focus:outline-none text-black resize-none h-24 overflow-y-auto"
              />
                <button className="absolute inset-y-0 right-0  text-black px-6 py-2 "
                onClick={handleArrowForwardClick}
                >

                  <IoIosArrowForward size={24} />
                </button>
              </div>
            </div>
            <h2 className="mt-8">
              Or
            </h2>
            <div className="mt-8">
            <button
              className="bg-baby-blue text-white px-4 py-2 rounded-md"
            >
              <Link href="/scenarios">Explore Categories</Link>
            </button>
          </div>
          </div>
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
    </Layout>
  );
}