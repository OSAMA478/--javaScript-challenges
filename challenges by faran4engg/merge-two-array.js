// Merge two sorted array?

function mergeTwoArrays(arr1, arr2) {
	return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergeTwoArrays([3, 2, 1], [5, 4, 6]));

function mergeTwoOrMoreArrays() {
	const arr = [...arguments];
	return arr.flat().sort((a, b) => a - b);
}
console.log(mergeTwoOrMoreArrays([1, 2, 3], [6, 5, 4]));
console.log(mergeTwoOrMoreArrays([1, 2, 3], [6, 5, 4], [8, 7, 9]));
console.log(
	mergeTwoOrMoreArrays([1, 2, 3], [6, 5, 4], [8, 7, 9], [10, 11, 12])
);
