const reactDocgenTypeScript = require('react-docgen-typescript');
const pkg = require('./package.json');

module.exports = {
  components: 'src/client/**/*.{ts,tsx}',
  propsParser: reactDocgenTypeScript.withDefaultConfig().parse,
  skipComponentsWithoutExample: true,
  title: 'Sample GraphQL Answer Components',
  version: pkg.version,
};
