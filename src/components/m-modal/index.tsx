import React from 'react';
import styles from 'modal.module.scss';

const MModal: React.FC = props => {
  const prefixCls = 'm-modal';
  return (
    <div className={styles[`${prefixCls}__root`]}>
      <div className={styles[`${prefixCls}__mask`]}></div>
      <div className={styles[`${prefixCls}__wrapper`]}>
        <div className={styles[prefixCls]}>{props.children}</div>
      </div>
    </div>
  );
};

export default MModal;
