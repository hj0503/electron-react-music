import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import PageLayout from '@/components/page-layout';
import MenuTabs from '@/components/menu-tabs';
import { subMenusMap } from '@/config/subMenus';
import { MenuType } from '@/config/sideMenus';

interface Props {
  route: MenuType;
}
const MusicHall: FC<Props> = props => {
  const {
    route: { routes },
  } = props;
  const Tabs: FC = () => {
    return <MenuTabs tabs={subMenusMap.musicHall}></MenuTabs>;
  };

  return (
    <PageLayout title="音乐馆" tabs={<Tabs />}>
      {renderRoutes(routes)}
      {routes && <Redirect to={routes[0].path} />}
    </PageLayout>
  );
};

export default MusicHall;
