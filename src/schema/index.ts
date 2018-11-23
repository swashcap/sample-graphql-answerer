import fs from 'fs';
import { buildSchema } from 'graphql';
import path from 'path';

const schema = buildSchema(
  fs.readFileSync(path.join(__dirname, 'schema.gql'), 'utf8')
);

export default schema;
