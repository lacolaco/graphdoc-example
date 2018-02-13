const glob = require('glob');
const fs = require('fs');
const path = require('path');

function loadSchemas() {
  const files = glob.sync('schema/**/*.{gql,graphql}');

  return files.map(file =>
    fs.readFileSync(path.resolve(file), { encoding: 'utf8' })
  );
}

const schemas = loadSchemas();
exports.default = schemas;