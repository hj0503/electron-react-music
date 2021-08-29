import React from 'react';
import { Input } from 'antd';
import { MessageSvg, SearchSvg, SettingSvg, SkinSvg, SwitchModeSvg } from '@/components/svg';
import RouterChange from '@/business/router-change';
import Login from '@/business/login';
import styles from './header.module.scss';
import Icon from '@ant-design/icons';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <RouterChange />
        <Input placeholder="搜索音乐" allowClear prefix={<SearchSvg />} />
      </div>
      <div className={styles.header__right}>
        <Login />
        <div className={styles['header__right-actions']}>
          <Icon component={MessageSvg} />
          <Icon component={SkinSvg} />
          <Icon component={SettingSvg} />
          <Icon component={SwitchModeSvg} />
        </div>
      </div>
    </header>
  );
};

export default Header;
