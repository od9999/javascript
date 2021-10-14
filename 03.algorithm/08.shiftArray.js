const rightShiftArray = (arr, n) => {
	n %= arr.length;
	let leftArr = arr.slice(0, arr.length - n);
	let rightArr = arr.slice(-n);
	let tempLeftArr = leftArr.reverse();
	let tempRightArr = rightArr.reverse();
	return tempLeftArr.concat(tempRightArr).reverse();
};

let arr = ['a', 'b', 'c', 'd', 'e', 1, 2, 3, 4];
console.log(rightShiftArray(arr, 4));