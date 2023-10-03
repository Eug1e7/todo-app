// data/blockchain.js

const crypto = require("crypto");

// ブロックのクラス定義
class Block {
  constructor(index, previousHash, timestamp, data, hash) {
    this.index = index; // ブロックのインデックス
    this.previousHash = previousHash; // 前のブロックのハッシュ
    this.timestamp = timestamp; // タイムスタンプ
    this.data = data; // ブロックに含まれるデータ
    this.hash = hash; // このブロックのハッシュ
  }
}

// ブロックのハッシュを計算する関数
const calculateHash = (index, previousHash, timestamp, data) => {
  return crypto
    .createHash("sha256")
    .update(index + previousHash + timestamp + data)
    .digest("hex");
};

// ジェネシスブロックを作成する関数
const createGenesisBlock = () => {
  return new Block(0, "0", new Date().toISOString(), "Genesis Block", calculateHash(0, "0", new Date().toISOString(), "Genesis Block"));
};

// 新しいブロックを作成する関数
const createNewBlock = (previousBlock, data) => {
  const index = previousBlock.index + 1;
  const timestamp = new Date().toISOString();
  const hash = calculateHash(index, previousBlock.hash, timestamp, data);
  return new Block(index, previousBlock.hash, timestamp, data, hash);
};

// ブロックチェーンの初期化
let blockchain = [createGenesisBlock()];

module.exports = {
  blockchain,
  createNewBlock,
};
