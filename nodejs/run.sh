#!/bin/bash

set -o errexit
yarn install
yarn tsc
INPUT_FILE_PATH=$1
SIMULTANEOUS_READERS=$2

node main.js "$INPUT_FILE_PATH" "$SIMULTANEOUS_READERS"