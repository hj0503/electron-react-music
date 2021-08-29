import React from 'react';
import Icon from '@ant-design/icons';
import { AvatarSvg } from '@/components/svg';
import styles from './login.module.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <div className={styles['login-not']}>
        <Icon component={AvatarSvg}></Icon>
        <span className={styles.text}>点击登录</span>
      </div>
      <div className={styles['login-success']}></div>
    </div>
  );
};

export default Login;
