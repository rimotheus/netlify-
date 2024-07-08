import Link from 'next/link'; 
import Image from 'next/image';


import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgChevronRight, CgChevronLeft } from "react-icons/cg";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

function SideNavbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
     return (
    <div>
      <Disclosure as="nav">
        <div
          className={`p-6 h-screen bg-white z-20 fixed top-0 ${
            isOpen ? 'left-0 w-full lg:w-60' : 'left-0  lg:w-30'
          } transition-all duration-300`}
          
        >
          <div className="flex flex-col justify-start items-center h-full">
            <Link href="/dashboard">
              <div className="flex items-center mb-2 pb-4 w-full  ">
                <Image
                  src="/genvoice.png"
                  alt="Genvoice Logo"
                  width={isOpen ? 60 : 30}
                  height={isOpen ? 60 : 30}
                />
                {isOpen && (
                  <h1 className="ml-2 text-base font-bold text-blue-900">
                    Genvoice
                  </h1>
                )}
              </div>
            </Link>
            <div className="my-4 border-b border-gray-100 pb-4 w-full">
              <Link href="/dashboard">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineSpaceDashboard className="icon text-gray-600 group-hover:text-white" />
                  {isOpen && (
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                      Dashboard
                    </h3>
                  )}
                </div>
              </Link>
              <Link href="/history">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <CgProfile className="icon text-gray-600 group-hover:text-white" />
                  {isOpen && (
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                      History
                    </h3>
                  )}
                </div>
              </Link>
              <Link href="/scenarios">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <FaRegComments className="icon text-gray-600 group-hover:text-white" />
                  {isOpen && (
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                      Scenarios
                    </h3>
                  )}
                </div>
              </Link>
              <Link href="/about">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineAnalytics className="icon text-gray-600 group-hover:text-white" />
                  {isOpen && (
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                      About us
                    </h3>
                  )}
                </div>
              </Link>
              <Link href="/resources">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <BiMessageSquareDots className="icon text-gray-600 group-hover:text-white" />
                  {isOpen && (
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                      Resources
                    </h3>
                  )}
                </div>
              </Link>
            </div>
            <div className="my-4 border-b border-gray-100 pb-4 w-full">
              <Link href="/settings">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineSettings className="icon text-gray-600 group-hover:text-white" />
                  {isOpen && (
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                      Settings
                    </h3>
                  )}
                </div>
              </Link>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="icon text-gray-600 group-hover:text-white" />
                {isOpen && (
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    More
                  </h3>
                )}
              </div>
            </div>
            <div className="my-4 w-full">
              <Link href="/">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineLogout className="icon text-gray-600 group-hover:text-white" />
                  {isOpen && (
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                      Logout
                    </h3>
                  )}
                </div>
              </Link>
            </div>
            <Disclosure.Button
              onClick={toggleSidebar}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"
            >
              {isOpen ? (
                <CgChevronLeft className="h-5 w-5" aria-hidden="false" />
              ) : (
                <CgChevronRight className="h-5 w-5" aria-hidden="false" />
              )}
            </Disclosure.Button>
          </div>
        </div>
      </Disclosure>
      
    </div>
  );
}

export default SideNavbar;