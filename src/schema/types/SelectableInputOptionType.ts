import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

export interface SelectableInputOptionProps {
  disabled?: boolean;
  name: string;
  value: string;
}

export default new GraphQLObjectType({
  name: 'SelectableInputOption',
  fields: {
    disabled: { type: GraphQLBoolean },
    name: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: new GraphQLNonNull(GraphQLString) },
  },
});
