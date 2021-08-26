/*
 * @Author: your name
 * @Date: 2021-08-25 17:04:41
 * @LastEditTime: 2021-08-26 14:58:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /electron-react-music/src/layout/index.tsx
 */
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
import { Spin } from 'antd';
import styles from './layout.module.scss';

type Props = { routes?: Array<any> };

const Layout: React.FC<Props> = ({ routes }) => {
  return (
    <div className={styles['main-layout']}>
      <Sidebar />
      <div className={styles.container}>
        <Header />
        <div className={styles['container__body']}>
          <Suspense fallback={<Spin className="main__loading" style={{ position: 'absolute' }} />}>
            <Switch>{routes && routes.map(route => <Route key={route.path} {...route} />)}</Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
