let obj = {
    a: '111',
    b: {
        c: '222',
        d: '333',
    },
    e: '444',
    f: {
        g: '555',
        h: {
            i: '666'
        }
    }
};

// 输入上面obj 输出下面结果 { a: '111', c: '222', d: '333', e: '444', g: '555', i: '666' }
let objResult = {
    a: '111',
    c: '222',
    d: '333',
    e: '444',
    g: '555',
    i: '666'
};

function getKeys(obj) {
    var resultObj = {};
    function recursion(value) {
        Object.keys(value).forEach(function (item, index, array) {
            if (typeof value[item] === 'object') {
                recursion(value[item]);
            } else {
                resultObj[item] = value[item];
            }
        });
        return resultObj;
    }
    return recursion(obj);
}

console.log(getKeys(obj));