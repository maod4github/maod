const Crypto = require('crypto');
const ThrowIfMissing = require('./ThrowIfMissing.js');

// 加密器
class Encryptor {

    // md5算法(不是标准算法),返回32个字符
    static md5 (str = ThrowIfMissing('str')) {
        let md5 = Crypto.createHash('md5');
        md5.update(str);
        return md5.digest('hex');
    }

    // 安全散列算法(Secure Hash Algorithm),返回40个字符
    static sha1 (str = ThrowIfMissing('str')) {
        let sha1 = Crypto.createHash('sha1');
        sha1.update(str);
        return sha1.digest('hex');
    }

    // 增强的加密,先sha1,再md5,返回32个字符
    static strong (str = ThrowIfMissing('str')) {
        return this.md5(this.sha1(str));
    }

}

module.exports = Encryptor;