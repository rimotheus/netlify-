//custom 404 page
import Link from 'next/link'

export default function NotFound() {
  return (
  <div>
      <h1>Page not found</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
  </div>
  );
}