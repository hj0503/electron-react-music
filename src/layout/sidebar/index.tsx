import { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Icon from '@ant-design/icons';
import styles from './sidebar.module.less';
import logo from '@/assets/image/logo.png';
import { sideBarMenus } from '@/config/sideMenus';
import classNames from 'classnames';

const Sidebar: FC = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const clickMenuBar = (path: string) => {
    push(path);
  };
  return (
    <aside className={styles.sidebar}>
      <h1 className={styles['sidebar__logo']}>
        <img src={logo} alt="qq音乐" />
      </h1>
      <div className={styles['sidebar__classifications']}>
        {sideBarMenus.map(classifications => {
          return (
            <div className={styles['sidebar__classification']} key={classifications.title}>
              <div className={styles['sidebar__classification-title']}>{classifications.title}</div>
              <ul className={styles['sidebar__classification-menus']}>
                {classifications.sideMenus.map(menu => {
                  return (
                    <li
                      className={classNames(styles.menu, {
                        [styles['is-active']]: pathname.indexOf(menu.path) >= 0,
                      })}
                      key={menu.path}
                      onClick={() => clickMenuBar(menu.path)}
                    >
                      {menu.icon && <Icon className={styles.menu__icon} component={menu.icon} />}
                      {menu.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
