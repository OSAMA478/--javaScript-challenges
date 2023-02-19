const arrWithDuplicates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];
const arrRemoveDuplicates = [];

// solution one
console.log([...new Set(arrWithDuplicates)]);

// solution two
arrWithDuplicates.filter((el, i, arr) => {
	if (arr.indexOf(el) == i) arrRemoveDuplicates.push(el);
});
console.log(arrRemoveDuplicates);

// solution third
// same as solution two but use for loop instead of filter
for (let i = 0; i < arrWithDuplicates.length; i++) {
	if (arrWithDuplicates.indexOf(arrWithDuplicates[i]) == i)
		arrRemoveDuplicates.push(arrWithDuplicates[i]);
}
console.log(arrRemoveDuplicates);

// solution four
function removeDuplicates(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arrRemoveDuplicates.includes(arr[i])) continue;
		else arrRemoveDuplicates.push(arr[i]);
	}
	return arrRemoveDuplicates;
}
console.log(removeDuplicates(arrWithDuplicates));
