
const from10To36 = num => {
    const list = '0123456789abcdefghijklmnopqrstuvwxyz';
    let res = '';
    if (num === 0) {
        return '0';
    }
    while (num > 0) {
        // console.log('------');
        // console.log(res);
        // console.log(num);
        // console.log('-a-----');
        // console.log(num % 36);
        // console.log(list[num % 36]);
        // console.log(res);
        res = list[num % 36] + res;
        num = Math.floor(num / 36);
    }
    return res;
}
const from36To10 = num => {
    const list = '0123456789abcdefghijklmnopqrstuvwxyz';
    const numStr = String(num);
    const length = numStr.length;
    let result = 0;
    for (let i = 0; i < length; i++) {
        result = list.indexOf(numStr[i]) * Math.pow(36, length  - i - 1) + num;
    }
    return result;
};
console.log(from10To36(100));

console.log(from36To10('2s'));
