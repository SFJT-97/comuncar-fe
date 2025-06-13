// src/Components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation(); // Get the current location object from react-router-dom

  useEffect(() => {
    // Scroll to the top of the page whenever the location changes
    // 'behavior: "smooth"' provides a smooth scrolling animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]); // Dependency array: run this effect when location.pathname changes

  // This component doesn't render anything itself, it just wraps other components.
  // It returns its children, allowing them to be rendered as usual.
  return children;
};

export default ScrollToTop;