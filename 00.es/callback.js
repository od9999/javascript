let name = 1;

function test() {
    console.log(name);
}

setTimeout(function() {
    let name = 2;
    console.log(name);
    test();
});
