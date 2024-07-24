import Link from 'next/link'; 
import Image from 'next/image';


import React, { useState } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { CgChevronRight, CgChevronLeft } from "react-icons/cg";
import { Disclosure } from "@headlessui/react";

import {
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";

import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiFillWechat } from "react-icons/ai";
import { HiMiniBookOpen } from "react-icons/hi2";



function SideNavbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`fixed top-0 left-0 h-screen transition-all duration-300 z-50 ${isOpen ? 'w-60' : 'w-25'}`}>
        <Disclosure as="nav">
          <div className={`p-6 h-screen bg-login-gray`}>
            <div className="flex flex-col justify-start items-center h-full">
              <Link href="/dashboard">
                <div className="flex items-center mb-2 pb-4 w-full opacity-100  ">
                  <Image
                    src="/genvoice.png"
                    alt="Genvoice Logo"
                    width={isOpen ? 60 : 25}
                    height={isOpen ? 60 : 25}
                  />
                  {isOpen && (
                    <h1 className="ml-2 text-white font-bold text-blue-900">
                      Genvoice
                    </h1>
                  )}
                </div>
              </Link>
              <div className="my-4 border-b border-gray-100 pb-4 w-full">
                
                <Link href="/dashboard">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <BsFillHouseDoorFill  className="text-white group-hover:text-white" />
                    {isOpen && (
                      <h3 className="text-base text-white group-hover:text-white font-semibold">
                        Dashboard
                      </h3>
                    )}
                  </div>
                </Link>
                <Link href="/chats">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <AiFillWechat className="text-white group-hover:text-white" />
                    {isOpen && (
                      <h3 className="text-base text-white group-hover:text-white font-semibold">
                        Chats
                      </h3>
                    )}
                  </div>
                </Link>
                <Link href="/chats/new">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <FiPlusCircle className="text-white group-hover:text-white" />
                    {isOpen && (
                      <h3 className="text-base text-white group-hover:text-white font-semibold">
                        Create Scenarios
                      </h3>
                    )}
                  </div>
                </Link>
                {/* <Link href="/about">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineAnalytics className="text-white group-hover:text-white" />
                    {isOpen && (
                      <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                        About us
                      </h3>
                    )}
                  </div>
                </Link>
                <Link href="/resources">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <BiMessageSquareDots className="text-white group-hover:text-white" />
                    {isOpen && (
                      <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                        Resources
                      </h3>
                    )}
                  </div>
                </Link> */}
              </div>
              <div className="my-4 border-b border-gray-100 pb-4 w-full">
              <Link href="/resources">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <HiMiniBookOpen className="text-white group-hover:text-white" />
                    {isOpen && (
                      <h3 className="text-base text-white group-hover:text-white font-semibold">
                        Resources
                      </h3>
                    )}
                  </div>
                </Link>
                <Link href="/settings">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineSettings className="text-white group-hover:text-white" />
                    {isOpen && (
                      <h3 className="text-base text-white group-hover:text-white font-semibold">
                        Settings
                      </h3>
                    )}
                  </div>
                </Link>
              </div>
              <div className="h-full w-full flex flex-col justify-between ">
                <Link href="/">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineLogout className="text-white group-hover:text-white" />
                    {isOpen && (
                      <h3 className="text-base text-white group-hover:text-white font-semibold">
                        Logout
                      </h3>
                    )}
                  </div>
                </Link>
              </div>
              <Disclosure.Button
                onClick={toggleSidebar}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center rounded-md p-1 text-white hover:bg-gray-900 hover:text-white "
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