import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function History() {
  return (
    <Layout>
      <Head>
        <title>History</title>
      </Head>
      <h1>History</h1>
      <h2>
      <Link href="/dashboard">Back to home</Link>
      </h2>
    </Layout>
  );
}