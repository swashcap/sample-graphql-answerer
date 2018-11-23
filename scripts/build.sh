#!/bin/sh
set -eo pipefail

rm -rf build
node_modules/.bin/tsc
cp src/schema/schema.gql build/schema