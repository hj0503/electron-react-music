import { FC } from 'react';
import styles from './menu-tabs.module.less';
import { MenuType } from '@/config/side-menus';
import { useNavigate } from 'react-router-dom';

interface Props {
  tabs: Array<MenuType>;
}
const MenuTabs: FC<Props> = props => {
  const { tabs } = props;
  const navigate = useNavigate();
  const clickTabBar = (path: string) => {
    navigate(path);
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
