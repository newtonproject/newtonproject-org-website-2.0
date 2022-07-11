---
title: Newton 2.0 LitePaper
description: About the team, community and mission of ethereum.org
lang: en
sidebar: true
---

Draft v0.2

[xiawu@newtonproject.org](xiawu@newtonproject.org)

The content will be changed frequently, please follow the latest version.

Newton 2.0 is the next generation blockchain network designed for Web3 and Metaverse, conceived in response to the shortcomings of existing platforms and designed to enable a new era of large-scale decentralized applications.

## 1. Motivation

<ExpandableCard title="With the rapid growth of Web3 and Metaverse, we are facing the new chanllegs." contentPreview="While platforms such as Ethereum allow any kind of application to be implemented in theory by smart contracts, in practice they have many limitations: low throughputs, high fees, bad user experience, frustrating developer experience.">

In order to solve these problems, we designed a new technical architecture for large-scale decentralized applications based on Newton 1.x.

The contributions of newton 2.0 is as follows:

NewConsensus
By randomly selecting the validator sets and fastly confirmation algorithm, we significantly increase the number of validator nodes to provide a secure, high-performance, low-latency user experience.

Multiple Virtual Machine Architecture
The execution environment requirements for large-scale decentralized applications are diverse. We designed an innovative multiple virtual machine architecture for this purpose, and this version is planned to implement NewVM and NewEVM virtual machines. More virtual machine types will be supported in future releases, including WebAssemblyVM, PrivacyVM, and more.

Fee Delegation
A lot of Web3 and Metaverse users don't own cryptocurrencies, so we designed the fee delegation of transaction. Users can use the Newton blockchain with no transaction fees.

Development Kit
We designed development kits for Web3, Metaverse and other industries to greatly improve the efficiency of application development.

</ExpandableCard>

## 2. Technology

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

## 3. Roadmap

Newton 2.0 is planned to be completed in 18 months and is divided into three phases:

<p class="title-small">Phase <a  class="articles-a" href="https://gitlab.weinvent.org/newton/core/newton-papers/-/issues/1)">#1</a> Singularity</p>

<p  class="title-small">Main objectives:</p>

- Transaction fee burned
- Upgrade PoA to NewConsensus
- Support the fee delegation
- Launch the NewBridge 2.0

<p  class="title-small">Phase #2 Inflationary</p>

<p  class="title-small">Main objectives:</p>

- Launch multiple virtual machine architecture
- Launch NewEVM
- Support the dynamic transaction types

<p  class="title-small">Phase #3 Flourishing</p>

<p  class="title-small">Main objectives:</p>

- Launch Web3 Development Kit
- Launch Metaverse Development Kit

## 2022 Q3

Launch the feature of transaction fee burned that make $NEW deflation.

Launch EVT SDK 1.0.

## 2022 Q4

Upgrade PoA to NewConsensus.

## 2023 Q1

Launch NewBridge 2.0.

## 2023 Q2

Launch the multiple virtual machine architecture and NewEVM.

## 2023 Q3

Launch the Web3 Development Kit.

## 2023 Q4

Launch the Metaverse Development Kit.

## Reference

- [Introduction of EVT](https://github.com/newtonproject/evt-standard/blob/master/introduction.md)
