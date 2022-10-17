const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(bool) {
        this.bool = bool;
    }
    encrypt(str, key) {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (str && key) {
            str = str.toUpperCase();
            key = key.toUpperCase();
            let count = 0;
            let array = str.split(' ');
            let newResult = array.map((item) => {
                let result = '';
                for (let i = 0; i < item.length; i++) {
                    if (alphabet.indexOf(item[i]) != -1) {
                        let indexOne = alphabet.indexOf(item[i]);
                        if (!key[count]) count = 0;
                        let indexTwo = alphabet.indexOf(key[count]);
                        count++;
                        if ((indexOne + indexTwo) > 25) {
                            result += alphabet[indexOne + indexTwo - alphabet.length];
                        } else {
                            result += alphabet[indexOne + indexTwo];
                        }
                    } else result += item[i];
                }
                if (this.bool == false) {
                    result = result.split('').reverse().join('');
                }
                return result
            });
            if (this.bool == false) return newResult.reverse().join(' ');
            return newResult.join(' ');
        } else {
            throw new Error("Incorrect arguments!");
        }
    }
    decrypt(cypher, key) {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (cypher && key) {
            key = key.toUpperCase();
            let arr = cypher.split(' ');

            let count = 0;
            let newResult = arr.map((item) => {
                let result = '';
                for (let i = 0; i < item.length; i++) {
                    if (!key[count]) count = 0;
                    let indexKey = alphabet.indexOf(key[count]);
                    if (alphabet.indexOf(item[i]) != -1) {
                        let indexCypher = alphabet.indexOf(item[i]);
                        count++;
                        let index = Math.abs(indexCypher + alphabet.length - indexKey);
                        if (index > 25) index = index - alphabet.length;
                        result += alphabet[index];
                    } else result += item[i];
                }
                if (this.bool == false) {
                    result = result.split('').reverse().join('');
                }
                return result;
            });
            if (this.bool == false) return newResult.reverse().join(' ');
            return newResult.join(' ');
        } else {
            throw new Error("Incorrect arguments!");
        }
    }
}

module.exports = {
    VigenereCipheringMachine
};