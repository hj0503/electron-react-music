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
  like: [
    {
      label: '歌曲',
      path: '/like/song',
      component: lazy(() => import('@/pages/like/song')),
    },
    {
      label: '专辑',
      path: '/like/album',
      component: lazy(() => import('@/pages/like/album')),
    },
    {
      label: '歌单',
      path: '/like/song-list',
      component: lazy(() => import('@/pages/like/song-list')),
    },
    {
      label: 'mv',
      path: '/like/mv',
      component: lazy(() => import('@/pages/like/mv')),
    },
  ],
};

export { subMenusMap };
