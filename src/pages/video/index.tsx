import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MenuTabs from '@/components/menu-tabs';
import PageLayout from '@/components/page-layout';
import { MenuType } from '@/config/side-menus';
import { subMenusMap } from '@/config/sub-menus';

interface Props {
  routes: Array<MenuType>;
}

const Video: FC<Props> = props => {
  const { routes } = props;
  const Tabs: FC = () => {
    return <MenuTabs tabs={subMenusMap.video}></MenuTabs>;
  };
  return (
    <PageLayout title="视频" tabs={<Tabs />}>
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

export default Video;
