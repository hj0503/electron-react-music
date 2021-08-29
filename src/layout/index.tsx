import React, { Suspense } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
import styles from './layout.module.scss';
import { RouteConfig } from '@/router';
import { Spin } from 'antd';

type Props = { routes?: Array<RouteConfig> };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles['main-layout']}>
      <Sidebar />
      <div className={styles.container}>
        <Header />
        <div className={styles.container__body}>
          <Suspense fallback={<Spin className={styles.main__loading} />}>{children}</Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
