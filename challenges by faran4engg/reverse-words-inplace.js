// Reverse words in place?

function revWordsInSentence(sentence) {
	const arr = sentence.split(" ");
	const arr2 = [];
	arr.forEach((el) => {
		arr2.push(el.split("").reverse().join(""));
	});

	return arr2.join(" ");
}

console.log(revWordsInSentence("Hello my name is Osama"));
