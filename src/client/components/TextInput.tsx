import * as React from 'react';

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
    {label && <label htmlFor={id}>{label}</label>}
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
