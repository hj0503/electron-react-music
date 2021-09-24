import { Data } from '@/types';
import { lazy } from 'react';
import { MenusType } from './sideMenus';

const subMenusMap: Data<MenusType> = {
  musicHall: [
    {
      label: '精选',
      path: '/music-hall/best',
      component: lazy(() => import('@/pages/music-hall/best')),
    },
    {
      label: '有声电台',
      path: '/music-hall/radio',
      component: lazy(() => import('@/pages/music-hall/radio')),
    },
  ],
};

export { subMenusMap };
