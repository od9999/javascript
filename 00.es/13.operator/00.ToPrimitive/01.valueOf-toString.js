let obj1 = {
    toString() {
        console.log('toString-----');
        return false;
    },
    valueOf() {
        console.log('valueOf-----');
        return {};
    }
};
console.log(Number(obj1));


console.log('-----');
let obj2 = {
    toString() {
        console.log('toString-----');
        return {};
    },
    valueOf() {
        console.log('valueOf-----');
        return '123a';
    }
};
console.log(Number('123a'));
console.log(Number(obj2));