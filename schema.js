const path = require('path');
const fs = require('fs');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');
const { buildSchema } = require('graphql');

const typesArray = fileLoader('schema/**/*.{gql,graphql}', {
  recursive: true
});

const mergedSchema = mergeTypes(typesArray);

fs.writeFileSync('schema.gql', mergedSchema, {encoding: 'utf8'});
