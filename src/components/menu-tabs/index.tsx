import { FC } from 'react';
import styles from './menu-tabs.module.less';
import { MenuType } from '@/config/sideMenus';
import { useHistory } from 'react-router-dom';

interface Props {
  tabs: Array<MenuType>;
}
const MenuTabs: FC<Props> = props => {
  const { tabs } = props;
  const { push } = useHistory();
  const clickTabBar = (path: string) => {
    push(path);
  };
  return (
    <div className={styles['menu-tabs']}>
      {tabs &&
        tabs.map(tab => (
          <span
            className={styles['menu-tabs__tab']}
            key={tab.label}
            onClick={() => clickTabBar(tab.path)}
          >
            {tab.label}
          </span>
        ))}
    </div>
  );
};
export default MenuTabs;
