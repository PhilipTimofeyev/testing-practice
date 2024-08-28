export function reverseString(string) {
	let splitStr = string.split("")
	let reversedString = splitStr.reverse()

	return reversedString.join("")
}