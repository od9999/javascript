/**
 * 找出数组中次数超过一半的数字
 * 1.快速排序 一趟后 中间那个数就是那个数
 * 2.遍历数组的过程中，保存2个数值，数字、这个数字出现的次数
 *    遍历下一个数字时，如果跟之前保存的数字相同 次数+1，不相同 次数-1
 *    如果次数为0 取下一个数为这个“数字”，次数改为1
 * @param arr
 */
const findHalfAppearance = (arr) => {
	let result = arr[0];
	let times = 1;
	for (let i = 1; i < arr.length; i++) {
		if (times === 0) {
			result = arr[i];
			times = 1;
		} else if (result === arr[i]) {
			times++;
		} else {
			times--;
		}
	}

	return result;
};

console.log(findHalfAppearance([1, 2, 3, 4, 41, 1, 1, 5, 6, 1, 1, 1]));
