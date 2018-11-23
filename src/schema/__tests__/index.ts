import { validateSchema } from 'graphql';

import schema from '../';

test('valid schema', () => {
  expect(validateSchema(schema)).toEqual([]);
});
