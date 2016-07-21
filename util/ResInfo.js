const ThrowIfMissing = require('./ThrowIfMissing.js');

class ResInfo {

    constructor (code = 0, msg = '', data = null) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    set (code = ThrowIfMissing('code'), msg = ThrowIfMissing('msg'), data = ThrowIfMissing('data')) {
        this.code = code;
        this.msg = msg;
        this.data = data;
        return this;
    }

    reset () {
        this.set(0, '', null);
        return this;
    }

}

module.exports = ResInfo;