import Link from 'next/link';
import Head from 'next/head';


import Layout from '../components/layout';

export default function Conversation() {
  return (
    <Layout>
      <Head>
        <title>Settings</title>
      </Head>
      <h1>Settings</h1>
      <h2>
      <Link href="/dashboard">Back to home</Link>
      </h2>
    </Layout>
  );
}