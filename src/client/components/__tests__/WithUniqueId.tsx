import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import uniqueId from 'lodash/uniqueId';

import WithUniqueId from '../WithUniqueId';

const mockedUniqueId: jest.MockInstance<typeof uniqueId> = uniqueId as any;

jest.mock('lodash/uniqueId', () => {
  let guid = 0;

  return jest.fn().mockImplementation(() => (guid++).toString());
});

test('renders', () => {
  let testRenderer = TestRenderer.create(
    <WithUniqueId render={uniqueId => uniqueId} />
  );

  expect(mockedUniqueId).toHaveBeenCalledTimes(1);
  expect(testRenderer.toJSON()).toBe(mockedUniqueId.mock.results[0].value);

  // Component shouldn't update ID when re-rendered
  testRenderer.update(<WithUniqueId render={uniqueId => uniqueId} />);

  expect(mockedUniqueId).toHaveBeenCalledTimes(1);
  expect(testRenderer.toJSON()).toBe(mockedUniqueId.mock.results[0].value);

  testRenderer = TestRenderer.create(
    <WithUniqueId render={uniqueId => uniqueId} />
  );

  expect(mockedUniqueId).toHaveBeenCalledTimes(2);
  expect(testRenderer.toJSON()).toBe(mockedUniqueId.mock.results[1].value);
});
