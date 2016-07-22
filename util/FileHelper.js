const fs = require('fs');
const ThrowIfMissing = require('./ThrowIfMissing.js');

class FileHelper {

    // return undefined or content
    static readFile (filepath = ThrowIfMissing('filepath'), encoding = 'utf-8') {
        return new Promise((resolve, reject) => {
            fs.readFile(filepath, encoding, (err, content) => {
                if (err) {
                    console.log(err);
                }
                resolve(err ? undefined : content);
            });
        });
    }

    // return true:成功 or false:失败
    static writeFile (filepath = ThrowIfMissing('filepath'), content = ThrowIfMissing('content')) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filepath, content, (err) => {
                if (err) {
                    console.log(err);
                }
                resolve(!err);
            });
        });
    }

}

module.exports = FileHelper;
