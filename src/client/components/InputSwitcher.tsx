import * as React from 'react';

import DateInput from './DateInput';
import SelectableInput from './SelectableInput';
import TextInput from './TextInput';
import WithUniqueId from './WithUniqueId';

import {
  DateInputProps,
  typeName as dateInputTypeName,
} from '../../schema/types/DateInputType';
import {
  SelectableInputProps,
  typeName as selectableInputTypeName,
} from '../../schema/types/SelectableInputType';
import {
  TextInputProps,
  typeName as textInputTypeName,
} from '../../schema/types/TextInputType';

type Props =
  | DateInputProps & { __typename: typeof dateInputTypeName }
  | SelectableInputProps & { __typename: typeof selectableInputTypeName }
  | TextInputProps & { __typename: typeof textInputTypeName };

export default class InputSwitcher extends React.Component<Props> {
  renderInput(uniqueId: string) {
    if (this.props.__typename === dateInputTypeName) {
      return <DateInput id={uniqueId} {...this.props} />;
    } else if (this.props.__typename === selectableInputTypeName) {
      return <SelectableInput id={uniqueId} {...this.props} />;
    } else if (this.props.__typename === textInputTypeName) {
      return <TextInput id={uniqueId} {...this.props} />;
    }

    return null;
  }

  render() {
    return <WithUniqueId render={this.renderInput} />;
  }
}
