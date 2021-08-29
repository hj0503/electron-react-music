import React from 'react';
import { ArrowLeftSvg, ArrowRightSvg } from '@/components/svg';
import Icon from '@ant-design/icons';
import styles from './index.module.scss';
import classNames from 'classnames';

const RouterChange: React.FC = () => {
  return (
    <div className={styles['router-change']}>
      <span className={classNames([styles['router-change__prev'], styles['icon-box']])}>
        <Icon component={ArrowLeftSvg} />
      </span>
      <span className={classNames([styles['router-change__next'], styles['icon-box']])}>
        <Icon component={ArrowRightSvg} />
      </span>
    </div>
  );
};

export default RouterChange;
