---
title: Exchange Integration
description: Exchange Integration
lang: en
template: docs
sidebar: true
---

## Overview

The purpose of this document is to provide a brief overview of how to integrate with EVM-compatible NewChain. For teams that already support ETH, supporting the NewChain chain is very simple, because NewChain has the same API as go-ethereum, you just need to populate NewChain's RPC, ChainID when building a transaction.

You can find references for the NewChain API [here](https://github.com/newtonproject/newchain-sdk-example/blob/master/RPC_API_reference.md).

Functions such as querying balances, obtaining transaction records, and parsing blocks to obtain transaction records required by the exchange can be implemented by accessing the RPC API service provided by Newton or deploying a full node. The RPC service will set the access frequency due to limited resources. For scenarios with high-frequency requirements, it is recommended to deploy a full node.

## NewChain Network Information

### **Newton Mainnet：**

**RPC：**
https://global.rpc.mainnet.newtonproject.org

**ChainId：**
1012

**Block Explorer：**
https://explorer.newtonproject.org

### **Newton Testnet：**

**RPC：**
https://rpc1.newchain.newtonproject.org

**ChainId：**
1007

**Block Explorer：**

https://explorer.testnet.newtonproject.org

http://e.testnet.diynova.com

**Faucet：**

https://rpc1.newchain.newtonproject.org/faucet?address="address"

## Deploy a full node of the NewChain network

Deploying a node tutorial is [here](https://www.newtonproject.org/en/developers/docs/run-a-node/).

After deploying a full node, the historical transaction records of an account can be obtained by parsing historical blocks, and the transfer-in and transfer-out transactions of an address can be monitored in real time by parsing the latest block. Full nodes also provide an API for broadcasting transactions.

## Use NewChain RPC API service

Developers can utilize NewChain Network EndPoints to interact with on-chain data and send different types of transactions to the blockchain network. The API follows the JSON-RPC standard, a stateless, lightweight Remote Procedure Call (RPC) protocol commonly used when interacting with blockchain networks.

> Start using RPC calls on NewChain Network
> Start by accessing the full set of API documentation for standard NewChain JSON-RPC calls. [https://github.com/newtonproject/newchain-sdk-example/blob/master/RPC_API_reference.md](https://github.com/newtonproject/newchain-sdk-example/blob/master/RPC_API_reference.md)

You can use our provided Java SDK, newchain-web3.js, newchain_web3.py library to interact with your programming language. For the source code and documentation of NewChain SDK, see: [https://github.com/newtonproject/newchain-sdk-example](https://github.com/newtonproject/newchain-sdk-example)

## Simple tutorial

### Java SDK

#### RPC URL

```java
private final static String rpcUrl = "<input RPC server address>";
```

#### Get a Web3j Instance

Get a Web3j instance with a Web3jService instance, which needs a URL as the parameter:

```java
Web3j web3 = Web3j.build(new HttpService(rpcUrl));
```

#### Get the chainId (net version)

Get chain ID with the Web3j instance:

```java
NetVersion netVersion = web3.netVersion().send();
String chainIDStr = netVersion.getNetVersion();
```

#### Get Balance

Get balance of the address with the Web3j instance:

```java
EthGetBalance balance = web3.ethGetBalance(fromAddress, DefaultBlockParameterName.LATEST).send();
BigInteger num = balance.getBalance();
```

**Parameters**

- s (String): The address.
- defaultBlockParameter (DefaultBlockParameter): Integer block number, or the string "latest", "earliest" or "pending". You should put into DefaultBlockParameterName. LATEST("latest").

**Return Values**

Returns the balance of the account of given address.

#### **Get gasPrice**

```java
EthGasPrice ethGasPrice = web3.ethGasPrice().send();
BigInteger gasPrice = ethGasPrice.getGasPrice();
```

**Parameters**
None

**Return Values**

Return the gasPrice

See the [documentation](https://github.com/newtonproject/newchain-sdk-example/tree/master/examples/java) for other features of the Java SDK.

### Nodejs

We also provide the [newchain-web3.js](https://github.com/newtonproject/newchain-lib-web3-js) library, which you can use to interact with NewChain.

```javascript
const newchainWeb3 = require("newchain-web3");
const newchainAccount = require('newchain-web3-accounts');
// testRPC is the NewChain testnet address
const rpcUrl = "<input RPC server address>";
// Mainnet ChainId is 1012, Testnet chainId is 1007
const ChainId = <input newchain chainId>;
const web3 = new newchainWeb3(rpcUrl);
const account = new newchainAccount.Accounts(rpcUrl);
```

By constructing a signed transaction, some of the methods provided by [newchain-web3.js](https://github.com/newtonproject/newchain-lib-web3-js) are shown here.

```javascript
function signUseTx() {
   var value = <value you want to send>;
   // newchain-web3.js function to get the balance of a specific address
   web3.eth.getBalance(address).then(balance => { console.log("Balance is:" + balance); }).catch(new Function());
   web3.eth.getTransactionCount(address).then(
       nonce => {
           console.log("Nonce: " + nonce);
           // function to get the NewChain network gasPrice
           web3.eth.getGasPrice().then(gasPrice => {
               console.log("Gas price: " + gasPrice);
               web3.eth.estimateGas(
                   {
                       to: toAddress,
                       data: ""
                   }
               ).then(gasLimit => {
                   console.log("Gas limit: " + gasLimit);
                   const txParams = {
                       nonce: convertHexString(nonce),
                       gasPrice: convertHexString(gasPrice),
                       gasLimit: convertHexString(gasLimit),
                       to: toAddress,
                       value: convertHexString(value),
                       data: '',
                       chainId:testChainId
                   };
                   const tx = new newTx(txParams);
                   tx.sign(privBuffer);
                   const serializedTx = tx.serialize();
                   const raw = "0x" + serializedTx.toString("hex");
                   console.log("Raw serialized transaction: " + raw);
                   web3.eth.sendSignedTransaction(raw).on('receipt', receipt => console.log("Receipt: "+ receipt)).catch(new Function());
               }).catch(new Function());
           }).catch(new Function());
       }
   );
}
```

### Python

We also provide the [newchain_web3.py](https://github.com/newtonproject/newchain-lib-web3-py) library, which you can use to interact with NewChain.

Below is a simple function we constructed to view the balance of a specified address.

```python
from newchain_web3 import Web3, HTTPProvider, Account
rpc = "<input RPC server address>"
def balance(address, rpc):
    """Get the balance of the address"""
    web3 = Web3(HTTPProvider(rpc))
    add = web3.toChecksumAddress(address)
    balance_wei = web3.eth.getBalance(a)
    bal = web3.fromWei(balance_wei, 'ether')
    print("The balance of {} is {} NEW.".format(a, b))
```
