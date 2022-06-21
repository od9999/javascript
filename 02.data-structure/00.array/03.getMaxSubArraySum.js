// 求最大子数组
const getMaxSubArraySum = arr => {
	if (arr.length === 0) {
		return 0;
	}

	let maxSum = 0;
	let thisSum = 0;
	let subArrIndex = [];
	let subArr = [];

	for (let i = 0; i < arr.length; i++) {
		thisSum += arr[i];
		if (thisSum > maxSum) {
			maxSum = thisSum;
			subArrIndex.push(i);
		}
		if (thisSum < 0) {
			thisSum = 0;
		}
	}
	subArr = arr.slice(subArrIndex[0], subArrIndex[subArrIndex.length - 1] + 1);
	return {
		maxSum,
		subArr
	};
};

console.log(getMaxSubArraySum([6]));  // { maxSum: 6, subArr: [ 6 ] }
console.log(getMaxSubArraySum([-1, 5, -3, 7, -4])); // { maxSum: 9, subArr: [ 5, -3, 7 ] }

