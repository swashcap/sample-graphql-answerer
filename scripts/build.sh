#!/bin/sh
set -eo pipefail

rm -rf build
node_modules/.bin/tsc
