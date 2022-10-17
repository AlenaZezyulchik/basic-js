const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let result = [];

    if (options.separator == undefined) options.separator = '+';
    if (options.addition === undefined) options.addition = '';
    if (options.addition == null) options.addition = 'null';
    if (options.repeatTimes == undefined) options.repeatTimes = 1;
    if (options.additionSeparator === undefined) options.additionSeparator = '|';
    if (options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;

    for (let i = 0; i < options.repeatTimes; i++) {
        let prStr = [];
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            prStr.push(options.addition);
        }
        result.push(str + prStr.join(options.additionSeparator));
    }

    return result.join(options.separator);
}

module.exports = {
    repeater
};