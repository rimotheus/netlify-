import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { SiteTitle } from '../utils/constants';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <div className='bg-baby-blue'>
      <Head>
        <title>{ SiteTitle}</title>
      </Head>
      
      <section className={`${utilStyles.headingMd} flex flex-col justify-center items-center h-screen space-y-6`}>
        <Image
          src="/genvoice.png"
          alt="Genvoice Logo"
          width={150}
          height={150}
        />
        <h1 className="text-2xl font-bold"></h1>
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
        <button className="bg-index-blue  py-2 px-4 rounded w-80">
          <Link href="/dashboard">Sign In</Link>
        </button>
        <span>Or</span>
        <button className="bg-white text-blue-500 border border-blue-500 py-2 px-4 rounded w-80">
          Sign Up
        </button>
      </section>
    </div>
  );
}