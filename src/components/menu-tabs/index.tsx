import { FC, useEffect, useRef, useState } from 'react';
import styles from './menu-tabs.module.less';
import { MenuType } from '@/config/side-menus';
import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  tabs: Array<MenuType>;
}
const MenuTabs: FC<Props> = props => {
  const { tabs } = props;
  const { push } = useHistory();
  const { pathname } = useLocation();
  const activeBarEl = useRef<HTMLDivElement>(null);
  const clickTabBar = (path: string) => {
    push(path);
  };

  const [inkTabStyles, setInkTabStyles] = useState({});
  useEffect(() => {
    const style = {}
    if (activeBarEl.current) {
      setInkTabStyles(activeBarEl.current.offsetWidth);
    }
  }, []);

  return (
    <div className={styles['menu-tabs']}>
      <span style={inkTabStyles} className={styles['menu-tabs__ink-tab']}></span>
      {tabs &&
        tabs.map(tab => (
          <span
            className={classNames(styles['menu-tabs__tab'], {
              [styles['is-active']]: tab.path === pathname,
            })}
            key={tab.label}
            ref={tab.path === pathname ? activeBarEl : null}
            onClick={() => clickTabBar(tab.path)}
          >
            {tab.label}
          </span>
        ))}
    </div>
  );
};
export default MenuTabs;
