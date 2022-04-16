import { FC } from 'react';
import Player from '@/business/player';
import styles from './footer.module.less';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>歌曲信息</div>
      <Player />
      <div>设置</div>
    </footer>
  );
};

export default Footer;
