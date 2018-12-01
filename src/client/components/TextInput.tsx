import * as React from 'react';

import Label from './Label';
import Input from './Input';
import * as styles from './TextInput.module.css';
import { TextInputProps } from '../../schema/types/TextInputType';

export interface Props extends TextInputProps {
  id: string;
}

export default ({
  disabled = false,
  id,
  label,
  name,
  placeholder,
  value,
}: Props) => (
  <div className={styles.container}>
    {label && <Label htmlFor={id}>{label}</Label>}
    <Input
      className={styles.input}
      disabled={disabled}
      id={id}
      name={name}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  </div>
);
