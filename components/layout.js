import Link from 'next/link'; 
import GradientBackground from './GradientBackground';
import PropTypes from 'prop-types';
import SideNavbar from './navbar';

// future implementations
// //meta tags (like og:image), which are used to describe a page's content
// Boolean home prop which will adjust the size of the title and the image
// Add images with next/image, which are preloaded with the priority attribute
export default function Layout({ children, home, bgColor, gradient }) {
  const content = (
    <div className="flex-1 p-8 pl-40">
      <main>{children}</main>
      {!home && (
        <div className="mt-8">
          <Link href="/">
            <h1 className="text-blue-500">← Back to Login</h1>
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <div className={`w-screen h-screen flex flex-row items-center justify-center pl-20 gap-30 py-10 ${!gradient ? bgColor : ''}`}>
      <SideNavbar />
      {gradient ? (
        <GradientBackground>
          {content}
        </GradientBackground>
      ) : (
        content
      )}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool,
  bgColor: PropTypes.string,
  gradient: PropTypes.bool,
};

Layout.defaultProps = {
  home: false,
  bgColor: 'bg-baby-blue',
  gradient: false,
};