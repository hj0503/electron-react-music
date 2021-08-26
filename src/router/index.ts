import { lazy } from 'react';
import Layout from '@/layout';

export type RouteConfig = {
  path: string;
  component: React.FC<RouteConfig>;
  exact?: boolean;
  redirect?: string;
  routes?: Array<RouteConfig>;
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    exact: true,
    component: Layout,
  },
];

export default routes;
