import levenshtein from 'fast-levenshtein';

import getProduct from './product';
import { Product } from '../../schema/types/ProductType';
import { ProductCategory } from '../../schema/types/ProductCategoryType';

interface ProductCategoryMeta {
  name: string;
  products: string[];
}

const categories: { [name: string]: ProductCategoryMeta } = {
  apparel: {
    name: 'Apparel',
    products: ['1', '2'],
  },
  kitchen: {
    name: 'Kitchen',
    products: [],
  },
  shoes: {
    name: 'Shoes',
    products: ['3', '4'],
  },
  technology: {
    name: 'Technology',
    products: ['5', '6', '7'],
  },
};

const resolveProducts = (meta: ProductCategoryMeta): ProductCategory =>
  Object.assign({}, meta, {
    products: meta.products.reduce(
      (memo, id) => {
        const product = getProduct({ id });

        return product ? memo.concat(product) : memo;
      },
      [] as Product[]
    ),
  });

export default ({ name }: { name: string }): ProductCategory | null => {
  if (!name) {
    return null;
  }

  const lower = name.toLowerCase();

  if (lower in categories) {
    return resolveProducts(categories[lower]);
  }

  const maybeKey = Object.keys(categories).find(
    key => levenshtein.get(key, lower) <= 2
  );

  if (maybeKey) {
    return resolveProducts(categories[maybeKey]);
  }

  return null;
};
