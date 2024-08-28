
export function capitalize(word) {
	let firstLetter = word[0]
	let restOfWord = word.slice(1)

	return firstLetter.toUpperCase() + restOfWord
}

