import { GraphQLEnumType } from 'graphql';

export enum INPUT_MODES {
  DATE = 'DATE',
  SELECTABLE = 'SELECTABLE',
  TEXT = 'TEXT',
}

export default new GraphQLEnumType({
  name: 'InputModes',
  values: {
    DATE: {
      value: INPUT_MODES.DATE,
    },
    SELECTABLE: {
      value: INPUT_MODES.SELECTABLE,
    },
    TEXT: {
      value: INPUT_MODES.TEXT,
    },
  },
});
