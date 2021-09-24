import React from 'react';
import styles from './menu-tabs.module.less';
import { MenuType } from '@/config/sideMenus';

interface Props {
  tabs: Array<MenuType>;
}
const MenuTabs: React.FC<Props> = props => {
  const { tabs } = props;
  return (
    <div className={styles['menu-tabs']}>
      {tabs &&
        tabs.map(tab => (
          <span className={styles['menu-tabs__tab']} key={tab.label}>
            {tab.label}
          </span>
        ))}
    </div>
  );
};
export default MenuTabs;
