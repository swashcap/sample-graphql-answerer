import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import InputType from './unions/InputType';
import InputModesTypes from './enums/InputModesType';

const schema = new GraphQLSchema({
  assumeValid: process.env.NODE_ENV === 'production',
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        name: 'HelloQuery',
        type: new GraphQLNonNull(GraphQLString),
      },
      input: {
        args: {
          type: {
            type: new GraphQLNonNull(InputModesTypes),
          },
        },
        name: 'InputQuery',
        type: InputType,
      },
    },
  }),
});

export default schema;
