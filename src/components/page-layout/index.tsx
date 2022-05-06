import { Spin } from 'antd';
import { FC, ReactNode, Suspense } from 'react';
import styles from './page-layout.module.less';

interface Props {
  title: string;
  tabs?: ReactNode;
}
const PageLayout: FC<Props> = props => {
  const { title, tabs, children } = props;
  return (
    <div className={styles['page-layout']}>
      <div className={styles['page-layout__header']}>{title}</div>
      {tabs && <div className={styles['page-layout__tabs']}>{tabs}</div>}
      <div className={styles['page-layout__content']}>
        <Suspense fallback={<Spin className={styles['page-layout__loading']} />}>
          {children}
        </Suspense>
      </div>
    </div>
  );
};

export default PageLayout;
