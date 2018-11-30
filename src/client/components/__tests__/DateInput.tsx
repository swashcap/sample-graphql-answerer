import * as React from 'react';
import TestRenderer from 'react-test-renderer';

import DateInput from '../DateInput';

test('renders', () => {
  const name = 'my-lovely-name';
  const id = 'my-great-identifier';
  const testRenderer = TestRenderer.create(<DateInput id={id} name={name} />);

  const { props } = testRenderer.root.findByType('input');

  expect(props).toHaveProperty('id', id);
  expect(props).toHaveProperty('name', name);
});

test('renders label', () => {
  const label = 'A wonderful label';
  const testRenderer = TestRenderer.create(
    <DateInput id="whatever" label={label} name="boring" />
  );

  const labels = testRenderer.root.findAllByType('label');

  expect(labels.length).toBe(1);
  expect(labels[0].props.children).toBe(label);
});
