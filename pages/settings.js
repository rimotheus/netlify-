import Link from 'next/link';
import Head from 'next/head';


import Layout from '../components/layout';
import TopHeader from '../components/TopHeader';
export default function Conversation() {
  return (
    <Layout loginBackground={true}>
      <Head>
        <title>Settings</title>
      </Head>
      <div className="flex h-auto w-auto flex-col">
        <TopHeader>
          Settings
        </TopHeader>

        <div className="flex-1">
      <h1>Settings</h1>
      <h2>
      <Link href="/dashboard">Back to home</Link>
      </h2>
      </div>
      </div>
    </Layout>
  );
}