import React from 'react';
import styles from './Divider.module.css';

const Divider = () => {
  return (
    <div className={styles.dividerWrapper}>
      {/* Сама лінія, що світиться */}
      <div className={styles.line}></div>
      
      {/* Центральні насічки, які перекривають лінію */}
      <div className={styles.iconWrapper}>
        <span className={styles.slashes}>///</span>
      </div>
    </div>
  );
};

export default Divider;