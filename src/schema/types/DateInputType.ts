import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import InputBaseType from '../interfaces/InputInterfaceType';

export {
  InputBaseProps as DateInputProps,
} from '../interfaces/InputInterfaceType';

export const typeName = 'DateInput';

export default new GraphQLObjectType({
  name: typeName,
  fields: {
    disabled: { type: GraphQLBoolean },
    label: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLString },
  },
  interfaces: [InputBaseType],
});
