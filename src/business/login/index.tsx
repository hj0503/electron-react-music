import React, { MouseEvent, useState } from 'react';
import Icon from '@ant-design/icons';
import {
  AvatarSvg,
  LockSvg,
  NeteaseSvg,
  PhoneSvg,
  QQSvg,
  WechatSvg,
  WeiboSvg,
} from '@/components/svg';
import styles from './login.module.less';
import MModal from '@/components/m-modal';
import classNames from 'classnames';
import { Checkbox } from 'antd';

const Login: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const onLogin = (e: MouseEvent) => {
    e.preventDefault();
    return false;
  };
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
            <div className={styles['form-inputs']}>
              <div className={classNames([styles['form-inputs__input'], styles.phone])}>
                <Icon component={PhoneSvg} />
                <input type="text" placeholder="请输入手机号" />
              </div>
              <div className={classNames([styles['form-inputs__input'], styles.password])}>
                <Icon component={LockSvg} />
                <input type="password" placeholder="请输入密码" />
              </div>
            </div>
            <button className={styles['form-signin']} onClick={onLogin}>
              登录
            </button>
            <div className={styles['form-signup']}>
              <a href="#!">注册</a>
            </div>
          </form>
          <div className={styles['login-wrap__ways']}>
            <div className={styles['login-ways__item']}>
              <Icon component={WechatSvg} />
            </div>
            <div className={styles['login-ways__item']}>
              <Icon component={QQSvg} />
            </div>
            <div className={styles['login-ways__item']}>
              <Icon component={WeiboSvg} />
            </div>
            <div className={styles['login-ways__item']}>
              <Icon component={NeteaseSvg} />
            </div>
          </div>
          <div className={styles['login-wrap__terms']}>
            <Checkbox>
              同意<a href="#!">《服务条款》</a>
              <a href="#!">《隐私政策》</a>
              <a href="#!">《儿童隐私政策》</a>
            </Checkbox>
          </div>
        </div>
      </MModal>
    </div>
  );
};

export default Login;
