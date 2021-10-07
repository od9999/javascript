
function getMFromN(arr, array, n, sum) {
	if (sum < 0 || n < 0 || array.length === 0) {
        return;
    }
    if (sum === 0 && n === 0) {
		console.log('---');
		arr.forEach(item => console.log(item));
		return;
	}
    arr = Array.from(arr);
    array = Array.from(array);
	const firstNum = array.shift();
    getMFromN(arr, array, n, sum);
    arr.push(firstNum);
    getMFromN(arr, array, n - 1, sum - firstNum);
}

getMFromN([], [1, 2, 3, 6, 8, 9], 3, 11)