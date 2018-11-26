import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import InputInterfaceType from '../interfaces/InputInterfaceType';
import SelectableInputOptionsType from './SelectableInputOptionsType';

export default new GraphQLObjectType({
  fields: {
    disabled: { type: GraphQLBoolean },
    label: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLString },
    options: {
      type: new GraphQLNonNull(GraphQLList(SelectableInputOptionsType)),
    },
  },
  interfaces: [InputInterfaceType],
  name: 'SelectableInput',
});
