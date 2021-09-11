import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowLeftSvg, ArrowRightSvg } from '@/components/svg';
import Icon from '@ant-design/icons';
import styles from './index.module.less';
import classNames from 'classnames';

const RouterChange: React.FC = () => {
  const history = useHistory();

  const handleHistoryChange = (isBack = true) => {
    history.go(isBack ? -1 : 1);
  };
  return (
    <div className={styles['router-change']}>
      <span
        className={classNames([styles['router-change__prev'], styles['icon-box']])}
        onClick={() => handleHistoryChange()}
      >
        <Icon component={ArrowLeftSvg} />
      </span>
      <span
        className={classNames([styles['router-change__next'], styles['icon-box']])}
        onClick={() => handleHistoryChange(false)}
      >
        <Icon component={ArrowRightSvg} />
      </span>
    </div>
  );
};

export default RouterChange;
