import React from 'react';
import TestRenderer from 'react-test-renderer';

import Label from '../Label';

test('renders', () => {
  const testRenderer = TestRenderer.create(<Label htmlFor="id">Whoa</Label>);

  const { props } = testRenderer.root.findByType('label');

  expect(props).toHaveProperty('children', 'Whoa');
  expect(props).toHaveProperty('htmlFor', 'id');
});
