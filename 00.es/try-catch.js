function test1(){
  try {
    console.log(1);
    throw new Error('try-Error');
    return 2;
  } catch (e) {
    console.log(3);
    return 4;
  } finally {
    console.log(5);
    // return 6;
    return undefined;
  }
}

console.log(test1());  //1 3 5 6


function test2(){
  try {
    console.log(1);
    throw new Error('try-Error');
    return 2;
  } catch (e) {
    console.log(3);
    return 4;
  } finally {
    console.log(5);
    throw new Error('finally-Error');
    return 6;
  }
}
// console.log(test2());
//1 3 5
//Uncaught Error: finally-Error
