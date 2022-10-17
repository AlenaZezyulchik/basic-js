const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let domainsAll = domains.map(elem =>
        elem.split('.').reverse().map((it, i, array) => {
            let item = '';
            for (let j = 0; j <= i; j++) {
                item += `.${array[j]}`
            }
            return item;
        })
    )
    let result = {};
    for (let i = 0; i < domainsAll.length; i++) {
        for (let j = 0; j < domainsAll[i].length; j++) {
            !result[domainsAll[i][j]] ? result[domainsAll[i][j]] = 1 : result[domainsAll[i][j]]++
        }
    }
    return result;
}

module.exports = {
    getDNSStats
};