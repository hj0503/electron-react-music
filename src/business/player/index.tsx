import React from 'react';
import Icon from '@ant-design/icons';
import styles from './index.module.scss';
import { PlayNextSvg, PlayPrevSvg, PlayRandomSvg, VoiceSvg } from '@/components/svg';

const Player: React.FC = () => {
  return (
    <div className={styles.player}>
      <div className={styles.player__way}>
        <Icon component={PlayRandomSvg} />
      </div>
      <div className={styles.player__play}>
        <div className={styles['player__play-prev']}>
          <Icon component={PlayPrevSvg}></Icon>
        </div>
        <div className={styles['player__play-status']}>播放中</div>
        <div className={styles['player__play-next']}>
          <Icon component={PlayNextSvg}></Icon>
        </div>
      </div>
      <div className={styles.player__voice}>
        <Icon component={VoiceSvg}></Icon>
      </div>
    </div>
  );
};

export default Player;
