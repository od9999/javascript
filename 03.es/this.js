var thisA = this;
function funOut(){
    var thisB = this;
    return function() {
        var thisC = this;
        console.log(thisA === thisB);
        console.log(thisB === thisC);
    };
}


// funOut()(); // true true

function Func() {
    this.a = 'aaa';
}


var obj = {
    name: 'od',
    func: function(){
        var self = this;
        console.log('outer this.name: ' + this.name);   // od
        console.log('outer self.name: ' + self.name);   // od
        (function(){
            console.log('inner this.name '+ this.name);    // undefined
            console.log('inner self.name '+ self.name);     // od
        })();
    }
};
obj.func();

(function(){
    var a = b = 3;
})();
console.log(typeof a);  // undefined
console.log(typeof b);  // number
console.log(b);  // 3

console.log('-------------------');
