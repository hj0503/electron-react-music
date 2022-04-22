import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import PageLayout from '@/components/page-layout';
import MenuTabs from '@/components/menu-tabs';
import { subMenusMap } from '@/config/sub-menus';
import { MenuType } from '@/config/side-menus';
interface Props {
  route: MenuType;
}
const MusicHall: FC<Props> = props => {
  const Tabs: FC = () => {
    return <MenuTabs tabs={subMenusMap.musicHall}></MenuTabs>;
  };

  return (
    <PageLayout title="音乐馆" tabs={<Tabs />}>
      <Outlet></Outlet>
    </PageLayout>
  );
};

export default MusicHall;
