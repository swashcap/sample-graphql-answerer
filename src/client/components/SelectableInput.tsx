import * as React from 'react';

import Label from './Label';
import * as styles from './SelectableInput.module.css';
import { SelectableInputProps } from '../../schema/types/SelectableInputType';

export interface Props extends SelectableInputProps {
  id: string;
}

export default ({ disabled = false, id, label, name, options }: Props) => (
  <div className={styles.container}>
    {label && <Label htmlFor={id}>{label}</Label>}
    <select className={styles.select} disabled={disabled} id={id} name={name}>
      {options.map(({ disabled: dis, name, value }) => (
        <option disabled={dis} key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  </div>
);
