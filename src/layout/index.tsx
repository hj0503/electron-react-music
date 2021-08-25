import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
