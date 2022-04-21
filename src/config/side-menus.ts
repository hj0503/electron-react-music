import { FC, lazy } from 'react';
import {
  RecommendSvg,
  MusicSvg,
  VideoSvg,
  RadioSvg,
  LikeSvg,
  LocalSvg,
  DownloadSvg,
  RecentPlaySvg,
  BuySvg,
} from '@/components/svg';
import { subMenusMap } from './sub-menus';

export type MenuType = {
  path: string;
  element: FC<any>;
  label?: string;
  exact?: boolean;
  redirect?: string;
  icon?: FC;
  children?: Array<MenuType>;
};
export type MenusType = Array<MenuType>;

export type SideBarMenusType = Array<{
  title: string;
  sideMenus: MenusType;
}>;

export const sideBarMenus: SideBarMenusType = [
  {
    title: '在线音乐',
    sideMenus: [
      {
        label: '推荐',
        icon: RecommendSvg,
        path: '/recommend',
        element: lazy(() => import('@/pages/recommend')),
      },
      {
        label: '音乐馆',
        icon: MusicSvg,
        path: '/music-hall',
        element: lazy(() => import('@/pages/music-hall')),
        children: subMenusMap.musicHall,
      },
      {
        label: '视频',
        icon: VideoSvg,
        path: '/video',
        element: lazy(() => import('@/pages/video')),
      },
      {
        label: '电台',
        icon: RadioSvg,
        path: '/radio',
        element: lazy(() => import('@/pages/radio')),
      },
    ],
  },
  {
    title: '我的音乐',
    sideMenus: [
      {
        label: '我喜欢',
        icon: LikeSvg,
        path: '/like',
        element: lazy(() => import('@/pages/like')),
      },
      {
        label: '本地歌曲',
        icon: LocalSvg,
        path: '/local',
        element: lazy(() => import('@/pages/local')),
      },
      {
        label: '下载歌曲',
        icon: DownloadSvg,
        path: '/download',
        element: lazy(() => import('@/pages/download')),
      },
      {
        label: '最近播放',
        icon: RecentPlaySvg,
        path: '/recent-play',
        element: lazy(() => import('@/pages/recent-play')),
      },
      {
        label: '已购音乐',
        icon: BuySvg,
        path: '/buy',
        element: lazy(() => import('@/pages/buy')),
      },
      {
        label: '微云音乐网盘',
        icon: MusicSvg,
        path: '/music-cloud',
        element: lazy(() => import('@/pages/music-cloud')),
      },
    ],
  },
];
