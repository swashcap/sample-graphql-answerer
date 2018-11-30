import * as React from 'react';

import { DateInputProps } from '../../schema/types/DateInputType';

export interface Props extends DateInputProps {
  id: string;
}

export default ({ disabled = false, id, label, name, value }: Props) => (
  <div>
    {label && <label htmlFor={id}>{label}</label>}
    <input disabled={disabled} id={id} name={name} type="date" value={value} />
  </div>
);
