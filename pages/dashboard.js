import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1>Dashboard</h1>
      <h2>
      <Link href="/dashboard">Back to home</Link>
      </h2>
    </Layout>
  );
}