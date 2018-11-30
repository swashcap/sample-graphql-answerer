import * as React from 'react';

import { SelectableInputProps } from '../../schema/types/SelectableInputType';

export interface Props extends SelectableInputProps {
  id: string;
}

export default ({ disabled = false, id, label, name, options }: Props) => (
  <div>
    {label && <label htmlFor={id}>{label}</label>}
    <select disabled={disabled} id={id} name={name}>
      {options.map(({ disabled: dis, name, value }) => (
        <option disabled={dis} key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  </div>
);
