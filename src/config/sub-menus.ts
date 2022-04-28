import { Data } from '@/types';
import { lazy } from 'react';
import { MenusType } from './side-menus';

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
    {
      label: '排名',
      path: '/music-hall/rank',
      component: lazy(() => import('@/pages/music-hall/rank')),
    },
    {
      label: '歌手',
      path: '/music-hall/singer',
      component: lazy(() => import('@/pages/music-hall/singer')),
    },
    {
      label: '分类歌单',
      path: '/music-hall/song-list',
      component: lazy(() => import('@/pages/music-hall/song-list')),
    },
    {
      label: '数字专辑',
      path: '/music-hall/digital-album',
      component: lazy(() => import('@/pages/music-hall/digital-album')),
    },
    {
      label: '手机专享',
      path: '/music-hall/phone-exclusive',
      component: lazy(() => import('@/pages/music-hall/phone-exclusive')),
    },
  ],
  video: [
    {
      label: '推荐',
      path: '/video/recommed',
      component: lazy(() => import('@/pages/video/recommend')),
    },
    {
      label: '排行榜',
      path: '/video/rank',
      component: lazy(() => import('@/pages/video/rank')),
    },
    {
      label: '视频库',
      path: '/video/library',
      component: lazy(() => import('@/pages/video/library')),
    },
  ],
};

export { subMenusMap };
