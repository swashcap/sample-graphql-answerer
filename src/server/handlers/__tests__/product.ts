import getProduct from '../product';

test('product handler', () => {
  expect(getProduct({ id: '1' })).toHaveProperty('id', '1');
  expect(getProduct({ id: '8' })).toBe(null);
});
