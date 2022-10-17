const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let countItem = 1;
    let encodeResult = '';
    if (str == '') {
        return "";
    };
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] != str[i]) {
            encodeResult += (countItem == 1 ? '' : countItem) + str[i - 1];
            countItem = 1;
        } else countItem++;
    }
    encodeResult += (countItem == 1 ? '' : countItem) + str[str.length - 1];
    return encodeResult;
}

module.exports = {
    encodeLine
};