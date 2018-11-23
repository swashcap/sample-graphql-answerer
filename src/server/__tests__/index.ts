import supertest from 'supertest';

import app from '..';

test('accepts requests', () =>
  supertest(app)
    .post('/graphql')
    .send({
      query: '{ hello }',
    })
    .then(response => {
      expect(response.body).toEqual({ data: { hello: 'Hello, world!' } });
    }));
