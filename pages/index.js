import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SiteTitle } from '../utils/constants';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className='bg-login bg-login-gray bg-center bg-no-repeat bg-cover h-screen sm:h-auto '>
      <Head>
        <title>{ SiteTitle }</title>
      </Head>
      
      <section className={`${utilStyles.headingMd} flex flex-col justify-center items-center h-screen space-y-6`}>
        <Image
          src="/genvoice.png"
          alt="Genvoice Logo"
          width={150}
          height={150}
        />
        <h1 className="text-2xl font-bold"></h1>
        {showSignUp ? (
          <>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-80 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-80 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input 
              type="password" 
              placeholder="New Password" 
              className="w-80 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="w-80 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <h1 className='mt-10'>
            <button className="bg-white text-index-blue-button border py-2 px-4 rounded w-80 mt-10">
              Create Account
            </button>
            </h1>
          </>
        ) : (
          <>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-80 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-80 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <div className="w-80 flex justify-end">
              <h1 className='text-m text-white'>
                <Link href="/dashboard">Forget Password</Link>
              </h1>
            </div>
            <button className="bg-index-blue-button text-white py-2 px-4 rounded w-80">
              <Link href="/dashboard">Sign In</Link>
            </button>
            <h1 className='text-m text-white'>
              Or
            </h1>
            <button 
              className="bg-white text-index-blue-button border border-blue-500 py-2 px-4 rounded w-80 mt-4"
              onClick={() => setShowSignUp(true)}
              style={{ marginTop: '15px' }}
            >
              Sign Up
            </button>
          </>
        )}
      </section>
    </div>
  );
}