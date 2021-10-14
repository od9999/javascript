/**
 * 辗转相除法
 * 欧几里得算法：计算两个整数的最大公因数
 * 如gcd(50, 15) = 5
 * @param num1
 * @param num2
 */
function gcd(num1, num2) {
	let temp;
	while (num2 != 0) {
		temp = num1 % num2;
		num1 = num2;
		num2 = temp;
	}
	return num1;
}

function gcdRecur(num1, num2){
	if(num2 == 0){
		return num1;
	} else {
		return gcdRecur(num2, num1%num2);
	}
}

console.log(gcd(50, 15));
console.log(gcd(15, 50));

console.log(gcd(24, 18));
console.log(gcd(3, 5));
console.log(gcd(6, 10));