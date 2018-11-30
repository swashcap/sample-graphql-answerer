import * as React from 'react';

import Label from './Label';
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
  <div>
    {label && <Label htmlFor={id}>{label}</Label>}
    <input
      disabled={disabled}
      id={id}
      name={name}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  </div>
);
