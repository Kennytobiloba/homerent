// WithoutNavbar.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const WithoutNavbar = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const pathWithoutSlash = location.pathname.replace(/^\//, ''); // Remove leading slash

    if (pathWithoutSlash.includes('agent') || pathWithoutSlash.includes('apartment') || pathWithoutSlash.includes('LandlordRegristration') || pathWithoutSlash.includes('ApartmentType') || pathWithoutSlash.includes("Location") || pathWithoutSlash.includes("Toilet") || pathWithoutSlash.includes("Form") || pathWithoutSlash.includes("Offers") || pathWithoutSlash.includes("Price") || pathWithoutSlash.includes("Publish") || pathWithoutSlash.includes("Dialog")) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
};

export default WithoutNavbar;
