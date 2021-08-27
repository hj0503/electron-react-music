import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
import styles from './layout.module.scss';
import { RouteConfig } from '@/router';

type Props = { routes?: Array<RouteConfig> };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles['main-layout']}>
      <Sidebar />
      <div className={styles.container}>
        <Header />
        <div className={styles['container__body']}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
