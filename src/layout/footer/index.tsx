import React from 'react';
import Player from '@/business/player';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Player />
    </footer>
  );
};

export default Footer;
