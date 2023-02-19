// Reverse words in a sentence?
function revWordsInSentence(sentence) {
	const arr = sentence.split(" ").reverse().join(" ");
	return arr;
}

console.log(revWordsInSentence("Hello my name is Osama"));
