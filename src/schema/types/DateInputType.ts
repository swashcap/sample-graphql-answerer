import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import InputBaseType, {
  InputBaseProps,
} from '../interfaces/InputInterfaceType';

export type DateInputProps = InputBaseProps;

export default new GraphQLObjectType({
  name: 'DateInput',
  fields: {
    disabled: { type: GraphQLBoolean },
    label: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLString },
  },
  interfaces: [InputBaseType],
});
