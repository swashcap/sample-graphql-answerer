import * as React from 'react';

import styles from './Input.module.css';

export default (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={
      props.className ? `${styles.input} ${props.className}` : styles.input
    }
  />
);
