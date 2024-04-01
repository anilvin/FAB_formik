import React from 'react';
import styles from './customHeader.module.css';

function CustomHeader() {
  return (
    <div style={{
      background: '#002b77', top: '0px', width: '100vw', zIndex: '100', position: 'fixed',
    }}
    >
      <ul
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          listStyle: 'none',
        }}
        className={styles.nav_right}
      >
        <li className={styles.FAQs} style={{ borderRight: '1px solid gray' }}>
          FAQs
        </li>

        <li>
          <span className={styles.question_logo}>?</span>
        </li>
      </ul>
    </div>
  );
}

export default CustomHeader;
