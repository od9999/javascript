/**
 * 假如一个数组，除了其中1个数，其他每个数都出现了偶数次，找到这个数
 */
const findAppearOne = arr => {
	let result = arr[0];
	for (let i = 1; i < arr.length; i++) {
		result ^= arr[i];
	}
	return result;
};

const arr = [5, 2, 2, 8, 4, 5, 6, 4, 5, 6, 8];
console.log(findAppearOne(arr));

/**
 * 假如一个数组，除了其中2个数，其他每个数都出现了偶数次，找到这2个数
 */
const findAppearOne2 = arr => {
	const temp = findAppearOne(arr);
	const binarySumStr = temp.toString(2);

	let binarySumArr = binarySumStr.split('');
	let index;
	for (let i = binarySumArr.length - 1; i >= 0; i--) {
		if (binarySumArr[i] === '1') {
			index = i;
			break;
		}
	}

	let leftArr = [];
	let rightArr = [];
	for (let i = 0; i < arr.length; i++) {
		let binaryStr = arr[i].toString(2);

		if (binaryStr.charAt(binaryStr.length - index - 1) === '1') {
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		}
	}
	return [findAppearOne(leftArr), findAppearOne(rightArr)];
};

const arr2 = [3, 5, 2, 2, 8, 4, 5, 6, 4, 5, 6, 8];
console.log(findAppearOne2(arr2));