import { FC, useEffect, useState, CSSProperties } from 'react';
import Icon from '@ant-design/icons';
import { CloseSvg } from '../svg';
import styles from './modal.module.less';
import { isNumber } from 'lodash';

interface Props {
  visible: boolean;
  onCancel: () => void;
  width?: string | number;
}

const MModal: FC<Props> = props => {
  const prefixCls = 'm-modal';
  const { visible, width } = props;
  const [animatedVisible, setAnimatedVisible] = useState(visible);
  const contentStyle: CSSProperties = {};
  if (width != null) {
    contentStyle.width = !isNumber(width) ? width : width + 'px';
  }

  const onCancel = () => {
    props.onCancel && props.onCancel();
  };

  useEffect(() => {
    setAnimatedVisible(visible);
  }, [visible]);

  return (
    <div className={styles[`${prefixCls}__root`]}>
      <div className={styles[`${prefixCls}__mask`]}></div>
      <div
        className={styles[`${prefixCls}__wrapper`]}
        style={{ display: !animatedVisible ? 'none' : undefined }}
      >
        <div className={styles[prefixCls]} style={{ ...contentStyle }}>
          <div className={styles[`${prefixCls}__header`]}>
            <Icon component={CloseSvg} onClick={onCancel} />
          </div>
          <div className={styles[`${prefixCls}__body`]}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

MModal.defaultProps = {
  visible: false,
  width: '50%',
};

export default MModal;
