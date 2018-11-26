import supertest from 'supertest';

import app from '..';

test('accepts requests', () =>
  supertest(app)
    .post('/graphql')
    .send({
      query: '{ hello }',
    })
    .then(({ body }) => {
      expect(body).toEqual({ data: { hello: 'Hello, world!' } });
    }));

// Integration tests for `Input*` types to ensure full implementation works
test('input date', () =>
  supertest(app)
    .post('/graphql')
    .send({
      query: '{ input(type: DATE) { __typename } }',
    })
    .then(({ body }) => {
      expect(body).not.toHaveProperty('errors');
      expect(body).toHaveProperty('data', {
        input: { __typename: 'DateInput' },
      });
    }));

test('input selectable', () =>
  supertest(app)
    .post('/graphql')
    .send({
      query: '{ input(type: SELECTABLE) { __typename } }',
    })
    .then(({ body }) => {
      expect(body).not.toHaveProperty('errors');
      expect(body).toHaveProperty('data', {
        input: { __typename: 'SelectableInput' },
      });
    }));

test('input text', () =>
  supertest(app)
    .post('/graphql')
    .send({
      query: '{ input(type: TEXT) { __typename } }',
    })
    .then(({ body }) => {
      expect(body).not.toHaveProperty('errors');
      expect(body).toHaveProperty('data', {
        input: { __typename: 'TextInput' },
      });
    }));
