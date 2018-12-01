import * as React from 'react';

import styles from './Button.module.css';

interface Props extends React.HTMLAttributes<HTMLElement> {
  tag: 'a' | 'button';
}

const Button = ({ className, tag, ...rest }: Props) => {
  const componentClassName = className
    ? `${styles.button} ${className}`
    : styles.button;

  if (tag === 'a') {
    return <a className={componentClassName} {...rest} />;
  }

  return <button className={componentClassName} type="button" {...rest} />;
};

Button.defaultProps = {
  tag: 'button',
};

export default Button;
