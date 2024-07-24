import Link from 'next/link'; 
import GradientBackground from './GradientBackground';
import PropTypes from 'prop-types';
import SideNavbar from './navbar';

// future implementations
// //meta tags (like og:image), which are used to describe a page's content
// Boolean home prop which will adjust the size of the title and the image
// Add images with next/image, which are preloaded with the priority attribute
export default function Layout({ children, home, bgColor, gradient, loginBackground }) {
  const content = (
    <div className="flex-1 h-full ml-25 h-screen ">
      <main>{children}</main>
      {/* {!home && (
        <div className="mt-8">
          <Link href="/">
            <h1 className="text-blue-500">← Back to Login</h1>
          </Link>
        </div>
      )} */}
    </div>
  );

  const containerClass = `w-screen h-screen flex ${!gradient ? bgColor : ''} ${loginBackground ? 'bg-login bg-white bg-center bg-no-repeat bg-cover' : ''}`;

  return (
    <div className={containerClass}>
      <SideNavbar />
      {gradient ? (
        <GradientBackground className="flex-1 h-full">
          {content}
        </GradientBackground>
      ) : (
        
        <div className="flex-1 h-full">
          {content}
        </div>
      )}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool,
  bgColor: PropTypes.string,
  gradient: PropTypes.bool,
  loginBackground: PropTypes.bool,
};

Layout.defaultProps = {
  home: false,
  bgColor: 'bg-baby-blue',
  gradient: false,
  loginBackground: false,
};
