import React from 'react';
import TestRenderer from 'react-test-renderer';

import Label from '../Label';

test('renders', () => {
  const testRenderer = TestRenderer.create(<Label htmlFor="id">Whoa</Label>);

  expect(testRenderer.root.findByType('label').props).toEqual({
    children: 'Whoa',
    htmlFor: 'id',
  });
});
