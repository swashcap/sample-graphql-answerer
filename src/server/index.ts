import express from 'express';
import graphqlHTTP from 'express-graphql';
import morgan from 'morgan';

import schema from '../schema';
import handlers from './handlers';

const IS_DEV = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT || 3000;
const LOG_LEVEL = process.env.LOG_LEVEL || 'common'

const app = express();

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(LOG_LEVEL));
}

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: IS_DEV,
    rootValue: handlers,
    schema,
  })
);

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));
}

export default app;
