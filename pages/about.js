import Link from 'next/link';
import Head from 'next/head';


import Layout from '../components/layout';

export default function about() {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
      </Head>
      <h1>About Us</h1>
      <h2>
        <Link href="/dashboard">Back to home</Link>
      </h2>
    </Layout>
  );
}