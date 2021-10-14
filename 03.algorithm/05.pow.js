/**
 * 幂运算 求num的n次方
 * @param num
 * @param n
 * @returns {*}
 */
function pow (num, n) {
	if (0 == n) {
		return 1;
	}
	if (1 == n) {
		return num;
	}
	if (0 == n % 2) {
		return pow(num * num, n / 2);
	} else {
		return pow(num * num, (n - 1) / 2) * num;
	}
}


console.log(pow(2, 7));