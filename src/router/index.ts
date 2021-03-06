import { FC } from 'react';
import { sideBarMenus, MenuType } from '@/config/side-menus';

export type RouteConfig = {
  path: string;
  component: FC<RouteConfig>;
  label?: string;
  exact?: boolean;
  redirect?: string;
  routes?: Array<RouteConfig>;
};

const routes: Array<RouteConfig> = [
  ...sideBarMenus.reduce((total: Array<MenuType>, current) => total.concat(current.sideMenus), []),
];

export default routes;
