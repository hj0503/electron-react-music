import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.scss';
import logo from '@/assets/image/logo.png';
import { sideBarMenus } from '@/config/sideMenus';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <h1 className={styles['sidebar__logo']}>
        <img src={logo} alt="qq音乐" />
      </h1>
      <div className={styles['sidebar__classification']}>
        {sideBarMenus.map(classifications => {
          return (
            <React.Fragment key={classifications.title}>
              <div className={styles['sidebar__classification-title']}>{classifications.title}</div>
              <ul className={styles['sidebar__classification-menus']}>
                {classifications.sideMenus.map(menu => {
                  return (
                    <li className={styles['menu']} key={menu.path}>
                      <Link to={menu.path}>{menu.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </React.Fragment>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
