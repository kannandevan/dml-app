import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  // This hook gives us the current page's path
  const { pathname } = useLocation();

  // This hook runs every time the page path changes
  useEffect(() => {
    // This command scrolls the window to the top
    window.scrollTo(0, 0);
  }, [pathname]); // The effect depends on the pathname

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;