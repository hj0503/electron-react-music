import { FC } from 'react';
import styles from './index.module.less';

const Player: FC = () => {
  return (
    <div className={styles.player}>
      <div className={styles.player__way}></div>
      <div className={styles.player__play}>
        <div className={styles['player__play-prev']}></div>
        <div className={styles['player__play-status']}></div>
        <div className={styles['player__play-next']}></div>
      </div>
      <div className={styles.player__voice}></div>
    </div>
  );
};

export default Player;
