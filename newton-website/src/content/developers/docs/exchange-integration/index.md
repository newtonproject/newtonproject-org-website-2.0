---
title: Exchange Integration
description: Exchange Integration
lang: en
template: docs
sidebar: true
---

# 网络信息：

|**Network**|**RPC**|**ChainId**|**Block Explorer**|**Faucet**|
|:----|:----|:----|:----|:----|
|**Newton Mainnet**|[https://global.rpc.mainnet.newtonproject.org](https://global.rpc.mainnet.newtonproject.org/)|1012|[https://explorer.newtonproject.org/](https://explorer.newtonproject.org/)|    |
|**Newton Testnet**|[https://rpc1.newchain.newtonproject.org](https://rpc1.newchain.newtonproject.org/)|1007|[https://explorer.testnet.newtonproject.org/](https://explorer.testnet.newtonproject.org/)<br>[http://e.testnet.diynova.com/](http://e.testnet.diynova.com/)|[https://rpc1.newchain.newtonproject.org/faucet?address=](https://rpc1.newchain.newtonproject.org/faucet?address=)"Youraddress"|

# Overview

本文档的目的是简要概述如何与兼容 EVM 的 Newton 链集成。对于已经支持 ETH 的团队，支持 Newton 链非常简单，因为 newton 与 go-ethereum 具有相同的 API，你只需要在构建交易时填充 Newton 的 RPC、ChainID。

与 Newton 的交互与 go-ethereum 的交互相同。 您可以在此处找到 Newton API 的参考资料。[https://github.com/newtonproject/newchain-sdk-example/blob/master/RPC_API_reference.md](https://github.com/newtonproject/newchain-sdk-example/blob/master/RPC_API_reference.md)

对于交易所需要的查询余额、获取交易记录、解析区块获取交易记录等功能，可以通过访问 Newton 提供的 RPC API 服务或者搭建一个全节点实现，RPC服务由于资源有限会设置访问频率，因此对于访问频率要求较高的场景，建议搭建全节点。

# 搭建Newton网络全节点

搭建全节点后，通过解析历史区块可以获取一个账户的历史交易记录，解析最新区块可以实时监控一个地址的转入和转出交易。全节点还提供广播交易的API。

# 使用Newton RPC API服务

开发人员可以利用 newton 网络 EndPoints 与链上数据进行交互，并将不同类型的交易发送到区块链网络。 API 遵循 JSON-RPC 标准； JSON-RPC 是一种无状态、轻量级的远程过程调用 (RPC) 协议，通常在与区块链网络交互时使用。例如以太坊RPC服务的详细信息，请查看[https://ethereum.org/en/developers/docs/apis/json-rpc/](https://ethereum.org/en/developers/docs/apis/json-rpc/)

>开始在Newton Network上使用 RPC 调用，首先访问标准 Newton JSON-RPC 调用的完整 API 文档集。[https://github.com/newtonproject/newchain-sdk-example/blob/master/RPC_API_reference.md](https://github.com/newtonproject/newchain-sdk-example/blob/master/RPC_API_reference.md)
你可以使用我们提供的Java SDK、newchain-web3.js、newchain_web3.py库与你的编程语言交互，newchain SDK的源码和文档见：[https://github.com/newtonproject/newchain-sdk-example](https://github.com/newtonproject/newchain-sdk-example)

## 简单教程

### java

#### TestNet URL

```java
private final static String rpcUrl = "https://rpc1.newchain.newtonproject.org/";
```
Get a Web3j Instance
Get a `Web3j` instance with a `Web3jService` instance, which needs a URL as the parameter:
```java
Web3j web3 = Web3j.build(new HttpService(rpcUrl));
```
#### Get the chainId (net version)

Get chain ID with the `Web3j` instance:

```java
NetVersion netVersion = web3.netVersion().send();
String chainIDStr = netVersion.getNetVersion();
```
#### **Get Balance**

Get balance of the address with the `Web3j` instance:

```plain
EthGetBalance balance = web3.ethGetBalance(fromAddress, DefaultBlockParameterName.LATEST).send();
BigInteger b = balance.getBalance();
```
**Parameters**
* s(String): The address.
* defaultBlockParameter(DefaultBlockParameter): Integer block number, or the string "latest", "earliest" or "pending". You should put into DefaultBlockParameterName.LATEST("latest").
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

### nodejs

我们提供了newchain-web3.js库，你可以用它与newchain交互。

```javascript
const newchainWeb3 = require("newchain-web3");
const newchainAccount = require('newchain-web3-accounts');
const testRpc = "https://rpc1.newchain.newtonproject.org";
const testChainId = 1007;
const web3 = new newchainWeb3(testRpc);
const account = new newchainAccount.Accounts(testRpc);
function signUseTx() {
	    var value = 1100200;
	    web3.eth.getBalance(address).then(balance => { console.log("Balance is:" + balance); }).catch(new Function());
	    web3.eth.getTransactionCount(address).then(
	        nonce => {
	            console.log("Nonce: " + nonce);
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
或者你可以直接利用ether.js、web3.js、hardhat等工具与newchain交互，就像刚才说的，newchain与以太坊兼容，如果你想与newchain主网集成，你只需要将 rpc 和chainId修改为[https://global.rpc.mainnet.newtonproject.org](https://global.rpc.mainnet.newtonproject.org/)和1012即可。 

