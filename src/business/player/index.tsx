import React from 'react';
import styles from './index.module.scss';

const Player: React.FC = () => {
  return (
    <div className={styles.player}>
      <div className={styles.player__way}>播放方式</div>
      <div className={styles.player__play}>
        <div className={styles['player__play-prev']}>上一首</div>
        <div className={styles['player__play-status']}>播放中</div>
        <div className={styles['player__play-next']}>下一首</div>
      </div>
      <div className={styles.player__voice}>音量</div>
    </div>
  );
};

export default Player;
