import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Resources() {
  return (
    <Layout>
      <Head>
        <title>Resources</title>
      </Head>
      <h1>Resources</h1>
      <h2>
      <Link href="/dashboard">Back to home</Link>
      </h2>
    </Layout>
  );
}