import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import styles from './menu-tabs.module.less';
import { MenuType } from '@/config/side-menus';
import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { findIndex } from 'lodash';

interface Props {
  tabs: Array<MenuType>;
}
const MenuTabs: FC<Props> = props => {
  const { tabs } = props;
  const { push } = useHistory();
  const { pathname } = useLocation();
  const activeBarElList = useRef<Array<HTMLElement>>([]);
  const clickTabBar = (path: string) => {
    push(path);
  };
  const [inkTabStyles, setInkTabStyles] = useState({});
  const getActiveBarElList = (index: any) => (dom: HTMLElement) => {
    activeBarElList.current[index] = dom;
  };
  const getCurrentActiveBarIndex = () => {
    return findIndex(tabs, tab => tab.path === pathname);
  };
  const setCurrentActiveBarStyle = () => {
    const currentIndex = getCurrentActiveBarIndex();
    const currentActiveBar = activeBarElList.current[currentIndex];
    if (currentActiveBar) {
      const style: CSSProperties = {};
      style.width = currentActiveBar.offsetWidth;
      style.transform = `translateX(${currentActiveBar.offsetLeft}px)`;
      setInkTabStyles(style);
    }
  };

  useEffect(() => {
    setCurrentActiveBarStyle();
  }, [pathname]);

  return (
    <div className={styles['menu-tabs']}>
      <span style={inkTabStyles} className={styles['menu-tabs__ink-tab']}></span>
      {tabs &&
        tabs.map((tab, index) => (
          <span
            className={classNames(styles['menu-tabs__tab'], {
              [styles['is-active']]: tab.path === pathname,
            })}
            key={tab.label}
            ref={getActiveBarElList(index)}
            onClick={() => clickTabBar(tab.path)}
          >
            {tab.label}
          </span>
        ))}
    </div>
  );
};
export default MenuTabs;
