import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import InputBaseType, {
  InputBaseProps,
} from '../interfaces/InputInterfaceType';

export interface TextInputProps extends InputBaseProps {
  placeholder?: string;
}

export const typeName = 'TextInput';

export default new GraphQLObjectType({
  name: typeName,
  fields: {
    disabled: { type: GraphQLBoolean },
    label: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    placeholder: { type: GraphQLString },
    value: { type: GraphQLString },
  },
  interfaces: [InputBaseType],
});
