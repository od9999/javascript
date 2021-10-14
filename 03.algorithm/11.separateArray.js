const separateArray = (arr, separateBy) => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        while(start < end && !separateBy(arr[start])) {
            start++;
        }
        while (start < end && separateBy(arr[end])) {
            end--;
        }
        if(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
        }
    }
    return arr;
};

const isEven = num => (num & 1) === 0;

const isNegative = num => num < 0;

const isPositive = (num) => !isNegative(num);


console.log(separateArray([1, -3, 4, 8, -2, 8], isEven));
console.log(separateArray([1, -3, 4, 8, -2, 8], isNegative));
console.log(separateArray([1, -3, 4, 8, -2, 8], isPositive));