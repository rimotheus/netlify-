
import React from 'react';

const GradientBackground = ({ children }) => {
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-custom-radial z-[-1]" />
        <div className="relative w-full h-full">
          {children}
        </div>
      </div>
    );
  }
  
  export default GradientBackground;