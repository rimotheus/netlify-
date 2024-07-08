//custom 404 page
import Link from 'next/link';
import Layout from '../components/layout';

export default function Custom404() {
  return (
    <Layout>
      <div>
        <h1>404 - Page Not Found</h1>
        <div>
          <Link href="/scenarios">Go back to scenarios</Link>
        </div>
      </div>
    </Layout>
  );
}