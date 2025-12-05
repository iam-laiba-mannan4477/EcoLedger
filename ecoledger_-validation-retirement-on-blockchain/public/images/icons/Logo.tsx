import React from 'react';
import logo from './images/logo.png'; // adjust path if in assets

export const Logo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img 
    src="images/logo.png"
    alt="Logo" 
    {...props} 
  />
);
