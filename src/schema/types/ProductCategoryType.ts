import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import ProductType, { Product } from './ProductType';

export interface ProductCategory {
  name: string;
  products: Product[];
}
export const typeName = 'ProductCategory';

export default new GraphQLObjectType({
  description: 'Collection of related `Product`s with some metadata',
  name: typeName,
  fields: {
    name: {
      type: GraphQLString,
    },
    products: {
      type: new GraphQLNonNull(new GraphQLList(ProductType)),
    },
  },
});
