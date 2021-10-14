/**
 * 二分查找
 * @param arr
 * @param value
 * @returns {number}
 */
function binarySearchFirst(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left < right) {
        mid = left + Math.floor((right - left) / 2);
        if (arr[mid] < value) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr[left] === value ? left : -1;

}

console.log(binarySearchFirst([1, 7, 7, 7, 7, 7, 7], 7));
console.log(binarySearchFirst([1], 1));

function binarySearchLast(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left < right) {
        mid = left + Math.floor((right - left + 1) / 2);
        if (arr[mid] > value) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return arr[right] === value ? right : -1;
}

console.log(binarySearchLast([1, 7, 7, 7, 7, 7, 7], 7));
console.log(binarySearchLast([1], 1));