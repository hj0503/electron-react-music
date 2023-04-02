export enum Page {
  root = '/1',
  home = '/home',
  fm = '/home/fm',
  searchResult = '/home/search-result',
  dailyRecommend = '/home/daily-recommend',
  findMusic = '/home/find-music',
  findMusicMusicList = '/home/find-music/music-list',
  findMusicRadioHost = '/home/find-music/radio-host',
  findMusicRadioHostPay = '/home/find-music/radio-host/pay',
  findMusicRank = '/home/find-music/rank',
  findMusicSinger = '/home/find-music/singer',
  findMusicNewest = '/home/find-music/newest',
  video = '/home/video',
  videoMV = '/home/video/mv',
  friend = '/home/friend',
  iTunes = '/home/i-tunes',
  download = `/home/download`,
  downloadProgram = '/home/download/program',
  downloadPendding = '/home/download/pendding',
  recent = '/home/recent',
  cloudMusic = '/home/cloud-music',
  radio = '/home/radio',
  collection = '/home/collection',
  collectionSinger = '/home/collection/singer',
  collectionVideo = '/home/collection/video',
  collectionColumn = '/home/collection/column',
  setting = '/home/setting',
}

const wrapperSlash = (val?: string | number) => (val ? `/${val}` : '');

const handleSuffix = (name: string, id?: string | number, suffix = 'id') => {
  const prefix = `/${name}`;
  if (id === undefined) return `${prefix}/:${suffix}?`;

  return prefix + wrapperSlash(id);
};

const handleListSuffix = (prefix: string, id?: string | number, type?: string) => {
  if (id === undefined) return `/${prefix}/:id?/:type?`;

  return `/${prefix}${wrapperSlash(id)}${wrapperSlash(type)}`;
};

export const DynamicPage = {
  list: (id?: string | number, type?: 'album') => handleListSuffix('home/list', id, type),
  singer: (id?: string | number) => handleSuffix('home/singer', id),
  user: (id?: string | number) => handleSuffix('home/user', id),
  findMusicNewest: (type?: string) => handleSuffix('home/find-music/newest', type, 'type'),
  playVideo: (id?: string | number) => handleSuffix('play-video', id),
  radioList: (id?: string | number, type?: 'pay') => handleListSuffix('home/radio-list', id, type),
  excellentList: (id?: string | number) => handleSuffix('home/find-music/music-list/excellent', id),
  radioZone: (type?: string | number) =>
    handleSuffix('home/find-music/radio-host/zone', type, 'type'),
};
