import * as React from 'react';

import DateInput from './DateInput';
import SelectableInput from './SelectableInput';
import TextInput from './TextInput';
import WithUniqueId from './WithUniqueId';

import { DateInputProps } from '../../schema/types/DateInputType';
import { SelectableInputProps } from '../../schema/types/SelectableInputType';
import { TextInputProps } from '../../schema/types/TextInputType';

type Props =
  | DateInputProps & { __typename: 'DateInput' }
  | SelectableInputProps & { __typename: 'SelectableInput' }
  | TextInputProps & { __typename: 'TextInput' };

export default class InputSwitcher extends React.Component<Props> {
  renderInput(uniqueId: string) {
    if (this.props.__typename === 'DateInput') {
      return <DateInput id={uniqueId} {...this.props} />;
    } else if (this.props.__typename === 'SelectableInput') {
      return <SelectableInput id={uniqueId} {...this.props} />;
    } else if (this.props.__typename === 'TextInput') {
      return <TextInput id={uniqueId} {...this.props} />;
    }

    return null;
  }

  render() {
    return <WithUniqueId render={this.renderInput} />;
  }
}
