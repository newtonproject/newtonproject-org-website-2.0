---
title: Run a node
description: Run a node
lang: en
template: docs
sidebar: true
---
NewChain nodes are the key co-constructers of Newton infrastructure. Newton NewChain Testnet and Mainnet are opened to the community, individual can deploy Testnet and Mainnet according to the instructions specified in this repo. Afer deploying the NewChai Mainnet, the Mainnet ledger nodes can produce blocks and get NEW as the transaction fees from every transaction.

In current stage, NewChain MainNet still run with PoA (Proof-of-Authority) consensus mechanism for producing blocks. There are two prerequisites for running a Mainnet ledger node:  

**1. NewChain Mainnet ledger nodes shall run a NewChain Testnet node first, ensuring the stability of the network.**

**2. NewChain Mainnet ledger nodes shall stake 10 million NEW in NewPay, avoiding any harm from the potential dishonest participant.**

### Requirements

#### 1. Recommended specifications
   - System OS: Ubuntu 18.04 LTS 64-bit or Ubuntu 16.04 LTS 64-bit
   - Processor: 2-core CPU
   - Memory: 8GB RAM
   - Storage: 150GB available space SSD for mainnet and 150GB for testnet
   - Internet: Public IP

   For server requirements, please refer to AWS m5a.large or Alibaba Cloud ecs.t5
#### 2. System configuration

   - System data disk: /data directory is the mount point of the system data disk
   - Firewall: The firewall needs to open port 38311 of UDP and TCP and port 8801(8808 for testnet) of TCP
### Deploying a read-only node

#### 1. Create a working directory and enter it

   ```bash
   $ mkdir -p newchain && cd newchain
   ```

#### 2. Fetch the newchain.sh script and run it

For Mainet

```bash
$ curl -L https://release.cloud.diynova.com/newton/newchain-deploy/mainnet/newchain.sh | sudo bash
```

For Testnet

```bash
$ curl -L https://release.cloud.diynova.com/newton/newchain-deploy/testnet/newchain.sh | sudo bash
```

#### 3. Check the progress of block synchronizing

3.1 Execute following command to check the synchronized block height

```bash
$ sudo supervisorctl tail -f newchain stderr
```

3.2 Make sure the synchronized block height is consistent with the NewExplorer latest block height (<a href="https://explorer.newtonproject.org/">MainNet</a>, <a href="https://explorer.testnet.newtonproject.org/">Testnet</a>)

### Deploying a ledger node

#### If you only want to run a read-only node, skip these steps.

#### 1. Execute following command to create miner account

For Mainnet

```bash
$ cd /data/newchain/mainnet/ && curl -L https://release.cloud.diynova.com/newton/newchain-deploy/mainnet/newchain-mine.sh -o newchain-mine.sh && chmod +x newchain-mine.sh && ./newchain-mine.sh
```

For testnet

```bash
$ cd /data/newchain/testnet/ && curl -L https://release.cloud.diynova.com/newton/newchain-deploy/testnet/newchain-mine.sh -o newchain-mine.sh && chmod +x newchain-mine.sh && ./newchain-mine.sh
```

#### 2. Set keystore password

Set keystore password twice and keep keystore, password and miner address. The password shall not be void.

##### 2.1 Backup keystore

Run following code to get keystore and store it securely

For Mainet

```bash
$ cat /data/newchain/mainnet/nodedata/keystore/*
```

For testnet

```bash
$ cat /data/newchain/testnet/nodedata/keystore/*
```

##### 2.2 Backup keystore password

Run following code to get keystore and store it securely

For Mainet

```bash
$ cat /data/newchain/mainnet/password.txt
```

For testnet

```bash
$ cat /data/newchain/testnet/password.txt
```

You are responsible for storing your keystore and password safely. It’s important to keep your digital assets safe, just like you would your physical assets.

#### 3. Click the blow link to submit a issue, fill the required information and wait for the existing ledger node to be approved

[Apply for mainnet|testnet ledger node](https://github.com/newtonproject/newchain-nodes/issues/new/choose)

#### You can also apply to become a testnet node in the following ways

##### 3.1 Replace MinnerAddress in the following command with your miner address

```bash
/data/newchain/mainnet/bin/geth attach /data/newchain/mainnet/nodedata/geth.ipc --exec 'clique.propose("MinnerAddress", true)'
```

##### 3.2 Send the command 3.1 to the Telegram Group

 [NewTon Testnet Telegram Group](https://t.me/newtontestnet)

##### 3.3 Waiting for existing ledger node to execute the command 3.1

#### 4. Verify if your own node has become a ledger node

For mainnet

```bash
$ /data/newchain/mainnet/bin/geth attach /data/newchain/mainnet/nodedata/geth.ipc --exec 'clique.getSigners()'
```

For testnet

```bash
$ /data/newchain/testnet/bin/geth attach /data/newchain/testnet/nodedata/geth.ipc --exec 'clique.getSigners()'
```

### Use NewChain

NewChain's JSON RPC uses HTTP protocol port 8801(8808 for testnet), which you can use in [NewSDK](https://github.com/newtonproject/newchain-sdk-example)

### Operations and maintenance

#### 1. Start NewChain

```bash
$ sudo supervisorctl start newchain
```

#### 2. Stop NewChain

```bash
$ sudo supervisorctl stop newchain
```

