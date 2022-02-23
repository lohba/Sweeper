import { OpenSeaPort, Network } from 'opensea-js'
const ethers = require('ethers');
require('dotenv').config();

// This example provider won't let you make transactions, only read-only calls:
const url = process.env.URL;
const provider = new ethers.providers.JsonRpcProvider(url);
let privateKey = process.env.PRIVATE_KEY;

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
  apiKey: privateKey
})

