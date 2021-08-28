import React from 'react';
import { Input } from 'antd';
import { SearchSvg } from '@/components/svg';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <Input placeholder="搜索音乐" prefix={<SearchSvg />} />
      </div>
      <div className={styles.header__right}></div>
    </header>
  );
};

export default Header;
