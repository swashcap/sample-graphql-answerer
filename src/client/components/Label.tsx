import * as React from 'react';

import * as styles from './Label.module.css';

export default ({
  className = '',
  ...rest
}: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={styles.label + className} {...rest} />
);
