const crypto = require('crypto');
const fs = require('fs');
const buffer = fs.readFileSync('./vue-diff.js');
const fsHash = crypto.createHash('md5');
fsHash.update(buffer);
console.log("文件的hash是：%s", fsHash.digest('hex'));