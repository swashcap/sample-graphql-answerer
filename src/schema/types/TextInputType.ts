import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import InputBaseType from '../interfaces/InputInterfaceType';

export default new GraphQLObjectType({
  name: 'TextInput',
  fields: {
    disabled: { type: GraphQLBoolean },
    label: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    placeholder: { type: GraphQLString },
    value: { type: GraphQLString },
  },
  interfaces: [InputBaseType],
});
