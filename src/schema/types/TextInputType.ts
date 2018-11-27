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
  placeholder: string;
}

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
