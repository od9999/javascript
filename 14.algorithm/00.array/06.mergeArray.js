/**
 * 两个有序数组，合并成一个有序数组
 */
function merge(arr1, arr2) {
	let result = [];
	let index1 = 0;
	let index2 = 0;

	while (index1 < arr1.length && index2 < arr2.length) {
		if (arr1[index1] < arr2[index2]) {
			result.push(arr1[index1]);
			index1++;
		} else {
			result.push(arr2[index2]);
			index2++;
		}
	}
	return arr1[index1] ? result.concat(arr1.slice(index1)) : result.concat(arr2.slice(index2));
}

let arr1 = [1, 3, 5, 7, 9, 11, 13];
let arr2 = [2, 4, 6, 8, 10];
console.log(merge(arr1, arr2));