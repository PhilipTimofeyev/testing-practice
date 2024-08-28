export function analyzeArray(arr) {

	return {
		average: findAverage(arr),
		min: Math.min(...arr),
		max: Math.max(...arr),
		length: arr.length
	}
}

function findAverage(arr) {
	let total = arr.reduce((total, current) => {
		return total + current
	})

	return total / arr.length
}