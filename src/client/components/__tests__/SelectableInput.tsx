import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import SelectableInput from '../SelectableInput';

test('renders', () => {
  const id = 'buddy-youre-a-big-boy';
  const name = 'make-a-big-noise';
  const options = [
    {
      name: 'Playing in the street',
      value: 'gonna-be',
    },
    {
      name: 'A big man',
      value: 'someday',
    },
  ];
  const testRenderer = TestRenderer.create(
    <SelectableInput id={id} name={name} options={options} />
  );

  const { props: selectProps } = testRenderer.root.findByType('select');

  expect(selectProps).toHaveProperty('id', id);
  expect(selectProps).toHaveProperty('name', name);

  const optionsNodes = testRenderer.root.findAllByType('option');

  expect(optionsNodes.length).toBe(options.length);

  expect(
    options.every(({ name, value }, index) => {
      const { props } = optionsNodes[index];
      return props.value === value && props.children === name;
    })
  ).toBeTruthy();
});

test('renders label', () => {
  const label = 'You got mud on your face';
  const testRenderer = TestRenderer.create(
    <SelectableInput label={label} id="you-big" name="disgrace" options={[]} />
  );

  const labels = testRenderer.root.findAllByType('label');

  expect(labels.length).toBe(1);
  expect(labels[0].props.children).toBe(label);
});
