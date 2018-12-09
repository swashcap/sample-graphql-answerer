import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

export interface Product {
  description?: string;
  id: string;
  image?: string;
  isInStock: boolean;
  isOnSale: boolean;
  name: string;
  price?: string;
  salePrice?: string;
}

export const typeName = 'Product';

export default new GraphQLObjectType({
  description: 'Object representing a purchaseable item',
  name: typeName,
  fields: {
    description: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString) },
    id: { type: new GraphQLNonNull(GraphQLID) },
    image: { type: GraphQLString },
    isInStock: {
      description: 'Whether the product is in stock',
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    isOnSale: {
      description:
        'Whether the product is on sale. This should be used with the `salePrice` field.',
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    price: { type: GraphQLString },
    salePrice: { type: GraphQLString },
  },
});
