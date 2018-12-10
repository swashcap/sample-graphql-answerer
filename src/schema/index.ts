import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import InputType from './unions/InputType';
import InputModesTypes from './enums/InputModesType';
import ProductCategoryType from './types/ProductCategoryType';
import ProductType from './types/ProductType';

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
      product: {
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID),
          },
        },
        description: 'Retrieve a product by its identifier',
        name: 'ProductQuery',
        type: ProductType,
      },
      productCategory: {
        args: {
          name: {
            type: GraphQLString,
          },
        },
        description: 'Retrieve all product categories',
        name: 'ProductCategoryQuery',
        type: ProductCategoryType,
      },
    },
  }),
});

export default schema;
