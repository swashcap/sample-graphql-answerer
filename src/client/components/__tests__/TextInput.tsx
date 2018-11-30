import React from 'react';
import TestRenderer from 'react-test-renderer';

import TextInput from '../TextInput';

test('renders', () => {
  const id = 'we-will-we-will';
  const name = 'rock-you';
  const testRenderer = TestRenderer.create(<TextInput id={id} name={name} />);

  const { props } = testRenderer.root.findByType('input');

  expect(props).toHaveProperty('id', id);
  expect(props).toHaveProperty('name', name);
});

test('renders label', () => {
  const label = 'we-will';
  const testRenderer = TestRenderer.create(
    <TextInput label={label} id="we" name="will-rock-you" />
  );

  const labels = testRenderer.root.findAllByType('label');

  expect(labels.length).toBe(1);
  expect(labels[0].props.children).toBe(label);
});
