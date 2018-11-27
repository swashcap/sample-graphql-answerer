import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import SelectableInputOptionType from './SelectableInputOptionType';

export default new GraphQLObjectType({
  fields: {
    disabled: { type: GraphQLBoolean },
    label: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLString },
    options: {
      type: new GraphQLNonNull(GraphQLList(SelectableInputOptionType)),
    },
  },
  interfaces: [InputInterfaceType],
  name: 'SelectableInput',
});
