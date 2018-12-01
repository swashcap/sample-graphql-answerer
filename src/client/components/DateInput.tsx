import * as React from 'react';

import Label from './Label';
import Input from './Input';
import * as styles from './DateInput.module.css';
import { DateInputProps } from '../../schema/types/DateInputType';

export interface Props extends DateInputProps {
  id: string;
}

export default ({ disabled = false, id, label, name, value }: Props) => (
  <div className={styles.container}>
    {label && <Label htmlFor={id}>{label}</Label>}
    <Input
      className={styles.input}
      disabled={disabled}
      id={id}
      name={name}
      type="date"
      value={value}
    />
  </div>
);
