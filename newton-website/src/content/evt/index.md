---
title: EVT
description: Introduction of EVT
lang: en
template: learnDocs
sidebar: true
---

## What's EVT

EVT(Encrypted Variable Token) is a new kind of token type that we can use to replace NFT in metaverse and physical world.

## Why EVT

NFT is still limited to few applicable fields such as digital arts because of the aspects below.

- Privacy and copyright protection

- Variable property

- Industry metadata

EVT support the development of encrypted and variable decentralized applications.

## EVT vs NFT

|           | NFT                                                         | EVT                                                                                                                                                                                |
| --------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Concept   | Non- Fungible Token                                         | Encrypted Variable Token                                                                                                                                                           |
| Features  | Invariable, non-programming                                 | Data is categorized as invariable and variable parts. variable data has multiple dimensions including time-based, space-based, function-based, oracle-based, fuse-based, ODI, etc. |
|           | Compatible with NRC7                                        | Compatible with NRC7                                                                                                                                                               |
|           | Image, video, audio in NFT is public.                       | support multiple cryptography algorithm including AES, ECDSA, RSA, Lattice-based cryptography, etc.                                                                                |
|           | /                                                           | Builtin industry metadata                                                                                                                                                          |
|           | /                                                           | Custom Development Tools                                                                                                                                                           |
|           | /                                                           | Industry solutions                                                                                                                                                                 |
| Use Cases | Digital Art such as Cryptopunks, Bored Ape Yacht Club(BAYC) | Movie&Music copyright trading, Streaming media, ODI, Assets group, game, metaverse, digital ticket, etc.                                                                           |

## EVT Specs

### Variable Interfaces

```solidity
interface EVTVariable {
    /// @dev This emits when token dynamic property added.
    event DynamicPropertyAdded(bytes32 _propertyId);
    
    /// @dev This emits when token dynamic property updated.
    event DynamicPropertyUpdated(uint256 _tokenId, bytes32 _propertyId, bytes _propertyValue);

    /// @notice Add the dynamic property
    /// @param _propertyId property ID
    function addDynamicProperty(bytes32 _propertyId) external payable;

    /// @notice Set the dynamic property
    /// @param _tokenId token ID
    /// @param _propertyId property ID
    /// @param _propertyValue property value
    function setDynamicProperty(uint256 _tokenId, bytes32 _propertyId, bytes _propertyValue) external payable;

    /// @notice Set multiple dynamic properties once
    /// @param _tokenId token ID
    /// @param _message message
    function setDynamicProperties(uint256 _tokenId, bytes _message) external payable;

    /// @notice Retrieve the vale of dynamic property
    /// @param _tokenId token ID
    /// @param _propertyId property ID
    /// @return property value
    function getDynamicProperty(uint256 _tokenId, bytes32 _propertyId) external view returns (bytes);

    /// @notice Retrieve the all properties including dynamic and static
    /// @param _tokenId token ID
    /// @return ids, properties
    function getDynamicProperties(uint256 _tokenId) external view returns (bytes32[], bytes[]);

    /// @notice Check whether support the given property
    /// @param _propertyId property ID
    /// @return support or unsupport
    function supportsProperty(bytes32 _propertyId) external view returns (bool);
}
```

### Encryption Interfaces

```solidity
interface EVTEncryption {
​    /// @notice This emits when registered a encrypted key.
​    /// @param _tokenId token ID
​    /// @param _encryptedKeyId encrypted key ID
​    event EncryptedKeyRegistered(uint256 indexed _tokenId, bytes32 _encryptedKeyId);

    /// @notice This emits when add a permission.
​    /// @param _tokenId token ID
​    /// @param _encryptedKeyId encrypted key ID
​    /// @param _licensee licensee
​    event PermissionAdded(uint256 indexed _tokenId, bytes32 _encryptedKeyId, address indexed _licensee);

    /// @notice This emits when remove a permission.
​    /// @param _tokenId token ID
​    /// @param _encryptedKeyId encrypted key ID
​    /// @param _licensee licensee
​    event PermissionRemoved(uint256 indexed _tokenId, bytes32 _encryptedKeyId, address indexed _licensee);

    /// @notice Register encrypted key
    /// @param _tokenId token ID
    /// @param _encryptedKeyId encrypted key ID
    function registerEncryptedKey(uint256 _tokenId, bytes32 _encryptedKeyId) external payable;

    /// @notice Add the permission rule of the encrypted key for given address
    /// @param _tokenId token ID
    /// @param _encryptedKeyId encrypted key ID
    /// @param _licensee licensee
    function addPermission(uint256 _tokenId, bytes32 _encryptedKeyId, address _licensee) external payable;

    /// @notice Remove the permission rule of the encrypted key for given address
    /// @param _tokenId token ID
    /// @param _encryptedKeyId encrypted key ID
    /// @param _licensee licensee
    function removePermission(uint256 _tokenId, bytes32 _encryptedKeyId, address _licensee) external;

    /// @notice Check permission rule of the encrypted key for given address
    /// @param _tokenId token ID
    /// @param _encryptedKeyId encrypted key ID
    /// @param _licensee licensee
    /// @return true or false
    function hasPermission(uint256 _tokenId, bytes32 _encryptedKeyId, address _licensee) external view returns (bool);
}
```

## EVT Extensions

- ### EVTA(Support Of Batch Mint EVT)
    An improved implementation of the EVT that supports minting multiple tokens for close to the cost of one.

    We’ve measured the gas costs and prices for minting, By using EVTA, you will cost lower gas fee.

    |  Quantity  |    EVT(new)    |    EVTA(new)   |
    | ---------- | -------------- | -------------- |
    | 1          | 29.884         | 28.688         |
    | 2          | 44.935         | 29.6585        |
    | 3          | 59.7355        | 30.629         |
    | 5          | 89.3365        | 32.57          |
    | 10         | 163.339        | 37.4225        |
    | 50         | 755.3615       | 76.2425        |
    | 100        | 1495.3945      | 124.7675       |
    | 200        | 2975.4745      | 221.8175       |

    See more info at [https://neps.newtonproject.org/neps/nep-61/](https://neps.newtonproject.org/neps/nep-61/)


## What are EVTs used for

- Metaverse — buildings, avatars, flowers, animals

- Physical property — houses, artwork, movies, tickets

- "Negative value" assets — loans, burdens and other responsibilities

## EVT Demo

- MetaMovie

  - [Demo Preview](https://secure-movie.vercel.app/)

  - [Source Code](https://github.com/newtonproject/meta-movie)

- InfinityFlower

  - [Demo Preview](https://infinity-flower-3d.vercel.app/)

  - [Source Code](https://github.com/andverse-core/Infinity-Flower)

## Reference

- https://www.newtonproject.org/

- https://neps.newtonproject.org/neps/nep-53/

- https://neps.newtonproject.org/neps/nep-61/

- https://github.com/newtonproject/evt-lib
