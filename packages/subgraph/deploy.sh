#!/bin/bash

if [ -z "$1" ]; then
    echo "Error: Version parameter is required"
    echo "Usage: ./deploy.sh <version> (without 'v' prefix)"
    exit 1
fi

VERSION="v$1"

graph deploy peanut-base \
  --version-label "$VERSION" \
  --node https://subgraphs.alchemy.com/api/subgraphs/deploy \
  --deploy-key 1lJ0qXT0uMeXH \
  --ipfs https://ipfs.satsuma.xyz
