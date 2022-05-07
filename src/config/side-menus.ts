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
  component: FC<any>;
  label?: string;
  exact?: boolean;
  redirect?: string;
  icon?: FC;
  routes?: Array<MenuType>;
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
        component: lazy(() => import('@/pages/recommend')),
      },
      {
        label: '音乐馆',
        icon: MusicSvg,
        path: '/music-hall',
        component: lazy(() => import('@/pages/music-hall')),
        routes: subMenusMap.musicHall,
      },
      {
        label: '视频',
        icon: VideoSvg,
        path: '/video',
        component: lazy(() => import('@/pages/video')),
        routes: subMenusMap.video,
      },
      {
        label: '电台',
        icon: RadioSvg,
        path: '/radio',
        component: lazy(() => import('@/pages/radio')),
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
        component: lazy(() => import('@/pages/like')),
        routes: subMenusMap.like,
      },
      {
        label: '本地歌曲',
        icon: LocalSvg,
        path: '/local-song',
        component: lazy(() => import('@/pages/local-song')),
        routes: subMenusMap.localSong,
      },
      {
        label: '下载歌曲',
        icon: DownloadSvg,
        path: '/download',
        component: lazy(() => import('@/pages/download')),
      },
      {
        label: '最近播放',
        icon: RecentPlaySvg,
        path: '/recent-play',
        component: lazy(() => import('@/pages/recent-play')),
      },
      {
        label: '已购音乐',
        icon: BuySvg,
        path: '/buy',
        component: lazy(() => import('@/pages/buy')),
      },
      {
        label: '微云音乐网盘',
        icon: MusicSvg,
        path: '/music-cloud',
        component: lazy(() => import('@/pages/music-cloud')),
      },
    ],
  },
];
