import React from 'react';
import styles from './sidebar.module.scss';
import logo from '@/assets/image/logo.png';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <h1 className={styles['sidebar__logo']}>
        <img src={logo} alt="qq音乐" />
      </h1>
    </aside>
  );
};

export default Sidebar;
