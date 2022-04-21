import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '@ant-design/icons';
import styles from './sidebar.module.less';
import logo from '@/assets/image/logo.png';
import classNames from 'classnames';
import { sideBarMenus } from '@/config/side-menus';

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const clickMenuBar = (path: string) => {
    navigate(path);
  };
  const isActiveBar = (path: string) => {
    const pathList = pathname.split('/');
    return '/' + pathList[1] === path;
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
                        [styles['is-active']]: isActiveBar(menu.path),
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
