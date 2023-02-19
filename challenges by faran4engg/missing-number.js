// Find missing number from unsorted array of integers.
function missingNumber(arr) {
	arr.sort((a, b) => a - b);

	let startNum = arr[0];
	const lastNum = arr[1];
	const actualLastNum = arr[0] + arr.length;

	if (lastNum == actualLastNum) {
		return "there is no missing number";
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (startNum == arr[i]) {
				startNum++;
			} else {
				return --arr[i];
			}
		}
	}
}

console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 9]));
// console.log(missingNumber([9, 1, 2, 3, 6, 5, 4, 7]));
