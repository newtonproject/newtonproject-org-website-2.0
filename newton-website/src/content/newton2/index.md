---
title: Newton 2.0
description: Newton 2.0
lang: en
sidebar: true
---

_Last updated:July 14._

_This draft is a work in progress,Welcome to join our <a href="https://t.me/Newtonproject"> telegram group</a> for discussion._

Newton 2.0 is the next generation blockchain network designed for Web3 and Metaverse, conceived in response to the shortcomings of existing platforms and designed to enable a new era of large-scale decentralized applications.

## 1 Motivation

With the rapid growth of Web3 and Metaverse, we are facing the new chanllegs.

While platforms such as Ethereum allow any kind of application to be implemented in theory by smart contracts, in practice they have many limitations: low throughputs, high fees, bad user experience, frustrating developer experience.

In order to solve these problems, we designed a new technical architecture for large-scale decentralized applications based on Newton 1.x.

The contributions of newton 2.0 is as follows:

- NewConsensus

  By randomly selecting the validator sets and fastly confirmation algorithm, we significantly increase the number of validator nodes to provide a secure, high-performance, low-latency user experience.

- Multiple Virtual Machine Architecture

  The execution environment requirements for large-scale decentralized applications are diverse. We designed an innovative multiple virtual machine architecture for this purpose, and this version is planned to implement NewVM and NewEVM virtual machines. More virtual machine types will be supported in future releases, including WebAssemblyVM, PrivacyVM, and more.

- Fee Delegation

  A lot of Web3 and Metaverse users don't own cryptocurrencies, so we designed the fee delegation of transaction. Users can use the Newton blockchain with no transaction fees.

- Development Kit

  We designed development kits for Web3, Metaverse and other industries to greatly improve the efficiency of application development.

## 2 Technology

### 2.1 NewConsensus

Newton 2.0 uses the Proof of Stake (PoS) class consensus - NewConsensus.

NewConsensus is similar to Ethereum 2.0's Casper FFG, except that NewConsensus randomly selects the block producers and a collection of verifiers within each epoch. This feature can achieve high performance and fast validation even when the number of participating validation nodes is very large.

### 2.2 Virtual Machine

Newton 2.0 will implement a multiple virtual machine architecture. Multiple virtual machine support can be achieved by separating the consensus layer from the execution layer. Supported VMs are NewVM and NewEVM.

NewVM is a virtual machine optimized for IoT devices.

NewEVM is a fully Ethereum compliant virtual machine.

### 2.3 Dynamic Transaction Types

Newton 2.0 supports extensible transaction types, with built-in types including:

- data storage

- atomic swap between different virutal machines

- multiple signatures

- all kinds of tokens such as NFT, EVT

In addition to the built-in types, Newton 2.0 also supports custom extended transaction types.

### 2.4 Fee Delegation

Fee Delegation is a built-in account type, supporting the delegated deduction fee, multi-party management, transaction fee setting, whitelist and other functions.

### 2.5 NewBridge 2.0

NewBridge 2.0 is based on Intel SGX and multi-party computing technology and links to multiple blockchains such as Bitcoin, Ethereum, BSC, Solana, etc.

Supports the following features:

- Support NFT, EVT cross-chain

- Supports atom exchange between chains

- Support for inter-chain messaging and contract invocation

## 3 $NEW

### 3.1 What is $NEW

- **$NEW** is the native currency of the Newton blockchain.

- **$NEW** The total amount is 100 billion, of which 60 billion is generated through mining rewards.

- When Newton 2.0 goes live, **$NEW** will be the currency of total deflation.

- The amount of mining bonus the validators get is proportional to the amount of staking **$NEW**.

- The longer the validators lock, the more rewards.

- The validators are rewarded with Proof of Uptime (PoU).

- As of February 1, 2023, the remaining supply is 56665276147.8292.

Starting in 2023, the supply of **$NEW** and Bitcoin, for example, will have similar rules, and the number of supplies will decrease each year. Due to the built-in destruction mechanism, **$NEW** will be very scarce. The number of **$NEW** supplied per year will be proportional to the number of pledges and the length of pledges. This feature facilitates the stability and security of the blockchain network in the short, medium and long term. The graph below shows the supply curve of **$NEW** in the case of 20% pledge, 50% pledge, and 100% pledge.

### 3.2 Governance

Governance has played a key role in the evolution of the Newton blockchain platform. The Newton blockchain uses a built-in consensus algorithm to build a set of mechanisms for dynamically modifying system parameters. Any validator can initiate a proposal to modify system parameters or participate in a decision vote.

**$NEW** Governance follows its own design philosophy of ensuring predictability and security in the short term while giving systems flexibility and control in the long term. Design philosophy is embodied in two aspects, including:

- The modification of system parameters is delayed, including the effective time of parameters and the frequency of parameter modification.

- The range of system parameters to be modified is limited. Otherwise, system stability may be affected.

### 3.3 Minting Incentive

The minting of **$NEW** is used to incentive nodes to work honestly, process transactions, and maintain network security. This is done through special minting transactions.

The node gains the right to participate in the consensus process by stake **$NEW**. All rewards of nodes are related to running time and response delay, that is, PoU(Proof of Uptime) proves that this design is also beneficial to the diversity of nodes in the future network.

Due to the consensus mechanism of randomly selecting block nodes, the casting process of **$NEW** does not produce the Matthew effect of "the rich get richer".

### 3.4 Fee Mechanism

Starting with newton 2.0, the Newton blockchain fee mechanism was completely redesigned, following the principle that the transfer and consumption of fees must be fair to all **$NEW** holders.

- Stake fee

  The stake is done through a special transaction type, and a certain percentage of the process as a stake fee. Unlike other blockchains, the stake fee is completely burned.

- Transaction fee

  Percentage of the transaction fee will be destroyed.

  A more efficient transaction fee setting mechanism will be described in later documents.

## Reference

1. <a href="https://github.com/newtonproject/newton-2.0-papers/blob/main/litepaper.md">Newton 2.0 LitePaper</a>

2. <a href="https://github.com/newtonproject/newton-2.0-papers/blob/main/economy-paper.md">Economic Model</a>
