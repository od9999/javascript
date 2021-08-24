function compose(...funcs) {
    if (0 === funcs.length) {
        return arg => arg;
    }
    if (1 === funcs.length) {
        return funcs[0];
    }

    const last = funcs[funcs.length - 1];
    const rest = funcs.slice(0, -1);
    return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args));
}

var compose2 = function () {
    var funcArr = [].slice.call(arguments);
    return function (arr) {
        var tempResult = funcArr[0](arr);
        for (var i = 1; i < funcArr.length; i++) {
            tempResult = funcArr[i](tempResult);
        }
        return tempResult;
    };
};

function compose3(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    return funcs.reduceRight((a, b) => (...args) => a(b(...args)))
}

function add(x) {
    return x + 1;
}

function multi(x) {
    return x * 2;
}
console.log(compose(add, multi)(5));
console.log(compose3(add, multi)(5));

const func = compose();

console.log(func(1));


