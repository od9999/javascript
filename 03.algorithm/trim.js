
String.prototype.trim = function () {
    return this.replace(/(^\s+)|(\s+$)/g,'');
    // return this.replace(/(^\s+)|(\s+$)/,'');
    // return this.replace(/(^\s+)/, '').replace(/(\s+$)/, '');
};

var result = '  aabb  '.trim();
console.log(`*${result}*`);
