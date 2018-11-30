import * as React from 'react';

import Label from './Label';
import { DateInputProps } from '../../schema/types/DateInputType';

export interface Props extends DateInputProps {
  id: string;
}

export default ({ disabled = false, id, label, name, value }: Props) => (
  <div>
    {label && <Label htmlFor={id}>{label}</Label>}
    <input disabled={disabled} id={id} name={name} type="date" value={value} />
  </div>
);
