import { INPUT_MODES } from '../../schema/enums/InputModesType';
import DateInputType from '../../schema/types/DateInputType';
import TextInputType from '../../schema/types/TextInputType';
import SelectableInputType from '../../schema/types/SelectableInputType';

interface InputRequest {
  type?: INPUT_MODES;
}

export default (request: InputRequest) => {
  switch (request.type) {
    case INPUT_MODES.DATE:
      return {
        __type: DateInputType,
        label: 'Date input',
        name: 'date',
      };
    case INPUT_MODES.SELECTABLE:
      return {
        __type: SelectableInputType,
        label: 'Selectable input',
        name: 'select',
        options: [
          {
            disabled: true,
            name: 'Option 1',
            value: '1',
          },
          {
            name: 'Option 2',
            value: '2',
          },
          {
            name: 'Option 3',
            value: '3',
          },
        ],
      };
    case INPUT_MODES.TEXT:
      return {
        __type: TextInputType,
        label: 'Text input',
        name: 'text',
        placeholder: 'Type something…',
      };
    default:
      throw new Error(`Unknown input type: ${request.type}`);
  }
};
