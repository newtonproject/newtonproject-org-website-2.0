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
    /// @notice Set the dynamic property
    /// @param _tokenId token ID
    /// @param _propertyID property ID
    /// @param _propertyValue property value
    /// @return Success or fail
    function setDynamicProperty(uint256 _tokenId, bytes32 _propertyID, bytes _propertyValue) external payable returns(bool);

    /// @notice Set multiple dynamic properties once
    /// @param _tokenId token ID
    /// @param _message message
    /// @return Success or fail
    function setDynamicProperties(uint256 _tokenId, bytes _message) external payable returns(bool);

    /// @notice Retrieve the vale of dynamic or static property
    /// @param _tokenId token ID
    /// @param _propertyID property ID
    /// @return property value
    function getProperty(uint256 _tokenId, bytes32 _propertyID) external view returns (bytes);

    /// @notice Retrieve the all properties including dynamic and static
    /// @param _tokenId token ID
    /// @return ids, properties
    function getProperties(uint256 _tokenId) external view returns (bytes32[], bytes[]);

    /// @notice Check whether support the given property
    /// @param _propertyID property ID
    /// @return support or unsupport
    function supportsProperty(bytes32 _propertyID) external view returns (bool);
}
```

### Encryption Interfaces

```solidity
interface EVTEncryption {
​    /// @notice This emits when register a encrypted key.
​    /// @param _tokenId token ID
​    /// @param _encryptedKeyID encrypted key ID
​    event EncryptedKeyRegister(uint256 indexed tokenId, bytes32 encryptedKeyID);

    /// @notice This emits when add a permission.
​    /// @param _tokenId token ID
​    /// @param _encryptedKeyID encrypted key ID
​    /// @param _owner owner
​    event PermissionAdd(uint256 indexed tokenId, bytes32 encryptedKeyID, address indexed owner);

    /// @notice This emits when remove a permission.
​    /// @param _tokenId token ID
​    /// @param _encryptedKeyID encrypted key ID
​    /// @param _owner owner
​    event PermissionRemove(uint256 indexed tokenId, bytes32 encryptedKeyID, address indexed owner);

    /// @notice Register the encrypted key
    /// @param _tokenId token ID
    /// @param _encryptedKeyID encrypted key ID
    function registerEncryptedKey(uint256 _tokenId, bytes32 _encryptedKeyID) external payable;

    /// @notice Add the permission rule of the encrypted key for given address
    /// @param _tokenId token ID
    /// @param _encryptedKeyID encrypted key ID
    /// @param _owner owner
    function addPermission(uint256 _tokenId, bytes32 _encryptedKeyID, address _owner) external payable;

    /// @notice Remove the permission rule of the encrypted key for given address
    /// @param _tokenId token ID
    /// @param _encryptedKeyID encrypted key ID
    /// @param _owner owner
    function removePermission(uint256 _tokenId, bytes32 _encryptedKeyID, address _owner) external;

    /// @notice Check permission rule of the encrypted key for given address
    /// @param _tokenId token ID
    /// @param _encryptedKeyID encrypted key ID
    /// @param _owner owner
    /// @return true or false
    function hasPermission(uint256 _tokenId, bytes32 _encryptedKeyID, address _owner) external view returns (bool);
}
```

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

- https://github.com/newtonproject/evt-lib
