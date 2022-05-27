const isInstanceOf = (obj, Constructor) => {
    let proto = Object.getPrototypeOf(obj);
    while (proto) {
        if (proto === Constructor.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
};

console.log(isInstanceOf(1, Number));
console.log(isInstanceOf(1, Object));
console.log(isInstanceOf(1, Date));

function Person(name) {
    this.name = name;
}
const p = new Person('ryan');
console.log(p.prototype);
console.log(p.__proto__);
