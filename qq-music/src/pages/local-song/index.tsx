import { FC } from 'react';
import PageLayout from '@/components/page-layout';
import MenuTabs from '@/components/menu-tabs';
import { subMenusMap } from '@/config/sub-menus';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MenuType } from '@/config/side-menus';
interface Props {
  routes: Array<MenuType>;
}
const LocalSong: FC<Props> = props => {
  const { routes } = props;
  const Tabs: FC = () => {
    return <MenuTabs tabs={subMenusMap.localSong}></MenuTabs>;
  };

  return (
    <PageLayout title="本地歌曲" tabs={<Tabs />}>
      <Switch>
        {routes &&
          routes.map(route => (
            <Route key={route.path} path={route.path}>
              <route.component {...route}></route.component>
            </Route>
          ))}
        <Redirect to={routes[0].path} />
      </Switch>
    </PageLayout>
  );
};

export default LocalSong;
