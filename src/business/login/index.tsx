import React, { useState } from 'react';
import Icon from '@ant-design/icons';
import { AvatarSvg } from '@/components/svg';
import styles from './login.module.less';
import MModal from '@/components/m-modal';
import { Button } from 'antd';

const Login: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.login}>
      <div className={styles['login-not']} onClick={() => setVisible(true)}>
        <Icon component={AvatarSvg}></Icon>
        <span className={styles.text}>点击登录</span>
      </div>
      <div className={styles['login-success']}></div>
      <MModal visible={visible} width={350} onCancel={() => setVisible(false)}>
        <div className={styles['login-wrap']}>
          <div className={styles['login-wrap__img']}></div>
          <form className={styles['login-wrap__form']}>
            <div className={styles['form-input']}>
              <input type="text" placeholder="请输入手机号" />
              <input type="password" placeholder="请输入密码" />
            </div>
            <Button>登录</Button>
          </form>
        </div>
      </MModal>
    </div>
  );
};

export default Login;
