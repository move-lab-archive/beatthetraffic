#!/bin/bash
set -e

if [[ -v MONGO_INSTANCE ]]; then
  echo 'found MONGO_INSTANCE var, using external instance'
else
  echo 'no MONGO_INSTANCE var found, starting local mongo instance'
  service mongodb start
fi

exec "$@"