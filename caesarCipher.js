
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

export function caesarCipher(str, shift) {
	let splitStr =  str.split("")

	let result = splitStr.map((ltr) => {
		let ifLetter = ltr.match(/[a-zA-Z]/)
		return ifLetter ? shiftLetter(ltr, shift) : ltr
	})

	return result.join("")
}

function shiftLetter(ltr, shift) {
	const ltrIsUppercase = ltr == ltr.toUpperCase()

	let ltrIdx =  alphabet.indexOf(ltr.toLowerCase())
	let result = alphabet.at((ltrIdx + shift) - 26)

	return ltrIsUppercase ? result.toUpperCase() : result
}
