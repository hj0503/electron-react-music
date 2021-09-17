import React from 'react';
import styles from './page-layout.module.less';

interface Props {
  title: string;
  Tabs?: React.FC;
}
const PageLayout: React.FC<Props> = props => {
  const { title, Tabs, children } = props;
  return (
    <div className={styles['page-layout']}>
      <div className={styles['page-layout__header']}>{title}</div>
      {Tabs && (
        <div className={styles['page-layout__tabs']}>
          <Tabs />
        </div>
      )}
      <div className={styles['page-layout__content']}>{children}</div>
    </div>
  );
};

export default PageLayout;
