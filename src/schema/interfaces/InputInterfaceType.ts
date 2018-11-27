import {
  GraphQLInterfaceType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export interface InputBaseProps {
  disabled?: boolean;
  label?: string;
  name: string;
  value?: string;
}

export default new GraphQLInterfaceType({
  name: 'InputBase',
  fields: {
    disabled: { type: GraphQLBoolean },
    label: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: GraphQLString },
  },
});
