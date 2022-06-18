const isObject = obj => typeof obj === "object" && obj !== null;

function jsonStringify(obj, map = new WeakMap()) {
  // 先判断循环引用
  if (isObject(obj)) {
    if (map.has(obj)) {
      throw TypeError("cyclic object value");
    }
    isObject(obj) && map.set(obj, true);
  }

  // 判断BigInt
  if (Object.prototype.toString.call(obj) === "[object BigInt]") {
    throw TypeError("Do not know how to serialize a BigInt")
  }
  if (typeof obj === "string") {
    return `"${obj}"`
  }
  if (obj === Infinity || Number.isNaN(obj) || obj === null) {
    return "null"
  }
  if (
    obj === undefined ||
    typeof obj === "function" ||
    typeof obj === "symbol"
  ) {
    return undefined
  }
  if (isObject(obj)) {
    if (obj.toJSON && typeof obj.toJSON === "function") {
      return jsonStringify(obj.toJSON(), map)
    } else if (Array.isArray(obj)) {
      let result = []
      obj.forEach((item, index) => {
        let value = jsonStringify(item, map)
        if (value !== undefined) {
          result.push(value)
        }
      })
      return `[${result}]`
    } else {
      let result = []
      Object.keys(obj).forEach(item => {
        let value = jsonStringify(obj[item], map)
        if (value !== undefined) {
          result.push(`"${item}":${value}`)
        }
      })
      return ("{" + result + "}").replace(/'/g, '"')
    }
  }
  return String(obj)
}

let nl = null
console.log(jsonStringify(nl) === JSON.stringify(nl))
// true

let und = undefined
console.log(jsonStringify(undefined) === JSON.stringify(undefined))
// true

let boo = false
console.log(jsonStringify(boo) === JSON.stringify(boo))
// true

let nan = NaN
console.log(jsonStringify(nan) === JSON.stringify(nan))
// true

let inf = Infinity
console.log(jsonStringify(Infinity) === JSON.stringify(Infinity))
// true

let str = "jack"
console.log(jsonStringify(str) === JSON.stringify(str))
// true

let reg = new RegExp("w")
console.log(jsonStringify(reg) === JSON.stringify(reg))
// true

let date = new Date()
console.log(jsonStringify(date) === JSON.stringify(date))
// true

let sym = Symbol(1)
console.log(jsonStringify(sym) === JSON.stringify(sym))
// true

let array = [1, 2, 3]
console.log(jsonStringify(array) === JSON.stringify(array))
// true

let obj = {
  name: "jack",
  age: 18,
  attr: ["coding", 123],
  date: new Date(0),
  uni: Symbol(2),
  sayHi: function () {
    console.log("hi")
  },
  info: {
    sister: "lily",
    age: 16,
    intro: {
      money: undefined,
      job: null,
    },
  },
}

console.log(jsonStringify(obj) === JSON.stringify(obj))
console.log(jsonStringify(obj));
console.log(JSON.stringify(obj));
// true
