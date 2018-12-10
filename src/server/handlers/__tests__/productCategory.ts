import productCategory from '../productCategory';
import getProduct from '../product';

const mockGetProduct: jest.MockInstance<Function> = getProduct as any;

/**
 * Jest changes the runtime, so using a variable for the return value fails.
 * Just use a string and compare directly:
 */
jest.mock('../product', () => jest.fn().mockReturnValue('PRODUCT_FIXTURE'));

beforeEach(mockGetProduct.mockClear);

test('product category', () => {
  expect(productCategory({ name: '' })).toBe(null);
  expect(productCategory({ name: 'bla bla bla random' })).toBe(null);

  expect(productCategory({ name: 'Technology' })).toHaveProperty(
    'name',
    'Technology'
  );
  expect(productCategory({ name: 'Teknology' })).toHaveProperty(
    'name',
    'Technology'
  );
});

test('resolves products', () => {
  const category = productCategory({ name: 'Technology' });

  if (!category) {
    throw new Error('Expected `category` to be defined');
  }

  expect(mockGetProduct).toHaveBeenCalledTimes(3);
  expect(mockGetProduct.mock.calls).toEqual([
    [{ id: '5' }],
    [{ id: '6' }],
    [{ id: '7' }],
  ]);
  expect(category.products.length).toBe(3);
  // @ts-ignore
  expect(category.products.every(p => p === 'PRODUCT_FIXTURE')).toBe(true);
});
