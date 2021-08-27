import { lazy } from 'react';

export type MenuType = {
  path: string;
  component: React.FC<MenuType>;
  label?: string;
  exact?: boolean;
  redirect?: string;
};
export type SideMenusType = Array<MenuType>;

export type SideBarMenusType = Array<{
  title: string;
  sideMenus: SideMenusType;
}>;

export const sideBarMenus: SideBarMenusType = [
  {
    title: '在线音乐',
    sideMenus: [
      {
        label: '推荐',
        path: '/recommend',
        component: lazy(() => import('@/pages/recommend')),
      },
      {
        label: '音乐馆',
        path: '/music-hall',
        component: lazy(() => import('@/pages/music-hall')),
      },
      {
        label: '视频',
        path: '/video',
        component: lazy(() => import('@/pages/video')),
      },
      {
        label: '电台',
        path: '/radio',
        component: lazy(() => import('@/pages/radio')),
      },
    ],
  },
  {
    title: '我的音乐',
    sideMenus: [
      {
        label: '推荐',
        path: '/recommend',
        component: lazy(() => import('@/pages/recommend')),
      },
      {
        label: '音乐馆',
        path: '/music-hall',
        component: lazy(() => import('@/pages/music-hall')),
      },
      {
        label: '视频',
        path: '/video',
        component: lazy(() => import('@/pages/video')),
      },
      {
        label: '电台',
        path: '/radio',
        component: lazy(() => import('@/pages/radio')),
      },
    ],
  },
];
