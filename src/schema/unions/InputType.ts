import { GraphQLUnionType } from 'graphql';

import DateInputType from '../types/DateInputType';
import SelectableInputType from '../types/SelectableInputType';
import TextInputType from '../types/TextInputType';

export default new GraphQLUnionType({
  name: 'Input',
  resolveType(value) {
    return value.__type;
  },
  types: [DateInputType, SelectableInputType, TextInputType],
});
