
module.exports = {
    hello: (name = 'world') => {
        console.log(`hello, ${name}`);
    },
    ThrowIfMissing: require('./util/ThrowIfMissing.js'),
    ResInfo: require('./util/ResInfo.js'),
    Encryptor: require('./util/Encryptor.js'),
    FileHelper: require('./util/FileHelper.js')
};