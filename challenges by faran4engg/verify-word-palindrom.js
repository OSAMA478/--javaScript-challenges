// Verify a word as palindrome?

const str = "racecar";

function checkPalindrome() {
	const revStr = str.split("").reverse().join("");
	return str === revStr;
}

console.log(checkPalindrome(str));
