import { Loader, LoaderTypeEnum } from '@genieology/gtb-ui';
import React from 'react';
import styles from '../styles/loader.module.css';

function LoaderComp() {
  return (
    <div className={styles.loaderMain}>
      <div className={styles.loaderContainer}>
        <Loader
          size={75}
          testId="example"
          type={LoaderTypeEnum.SPINNER}
        />
      </div>
    </div>
  );
}

export default LoaderComp;
