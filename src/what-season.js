const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';

    console.log(Object.getOwnPropertyNames(date))
    if (!date.getTime) {
        throw new Error('Invalid date!');
    }

    if (Object.getOwnPropertyNames(date).length > 0) {
        throw new Error('Invalid date!');
    }

    const months = {
        autumn: [8, 9, 10],
        winter: [11, 0, 1],
        spring: [2, 3, 4],
        summer: [5, 6, 7]

    }

    let month = date.getMonth();
    let result;
    for (const key in months) {
        if (months[key].indexOf(month) !== -1) result = key;
    }
    return result
}


module.exports = {
    getSeason
};