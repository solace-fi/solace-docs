# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Contract Docgen

Assuming this repo is at `./solace-docs` and the core repo is at `./solace-core`

```console
mkdir ./solace-core/templates/
cp ./solace-docs/contract.hbs ./solace-core/templates/
cd ./solace-core
npm i
rm -rf docs
npx solidity-docgen --solc-module solc-0.8 -t ./templates
rm -rf ../solace-docs/docs/dev-docs/contracts/
cp -r ./docs/. ../solace-docs/docs/dev-docs/contracts/
cd ../solace-docs
yarn build
yarn start
```

## Upload to AWS

yarn build
aws s3 rm s3://docs.solace.fi --include "*" --recursive
aws s3 cp --recursive --cache-control="max-age=86400" build/ s3://docs.solace.fi/
aws cloudfront create-invalidation --distribution-id E1SZHK4V1QCT0G --paths "/*"
# wait a minute for invalidation to process