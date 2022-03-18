---
sidebar_position: 1
id: getting-started
title: Getting Started
---

## Introduction

The user interface is developed with the React framework and the TypeScript language. Major libraries include [React Context](https://reactjs.org/docs/context.html), [Ethers.js](https://docs.ethers.io/v5/), and [Web3React](https://github.com/NoahZinsmeister/web3-react).

## Installation

Note: This project was originally developed alongside the Hardhat framework.

Install dependencies

    npm install

Run the following commands from the core directory

    npx hardhat compile
    npx hardhat node

In a different terminal, run the following commands from the core directory

    npx hardhat run --network localhost scripts/deploy.ts

After the deploy script is ran, copy the contract addresses into the .env file at the client folder, and these addresses should be used automatically.

Run using the following react command from the client directory

    npm start