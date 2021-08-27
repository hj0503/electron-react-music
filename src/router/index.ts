import Layout from '@/layout';
import { sideBarMenus, MenuType } from '@/config/sideMenus';

export type RouteConfig = {
  path: string;
  component: React.FC<RouteConfig>;
  label?: string;
  exact?: boolean;
  redirect?: string;
  routes?: Array<RouteConfig>;
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    exact: true,
    component: Layout,
    redirect: '/recommend',
    routes: [
      ...sideBarMenus.reduce(
        (total: Array<MenuType>, current) => total.concat(current.sideMenus),
        []
      ),
    ],
  },
];

export default routes;
