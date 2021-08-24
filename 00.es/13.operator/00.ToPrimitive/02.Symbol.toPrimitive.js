
let obj = {
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
                console.log('number-----');
                return 11;
            case 'string':
                console.log('string-----');
                return 'obj';
            case 'default':
                console.log('default-----');
                return 'default primitive value';
            default:
                console.log('error-----');
                throw new Error();
        }
    }
};

console.log(Number(obj));
console.log(String(obj));