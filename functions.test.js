import { capitalize } from "./capitalize";
import { reverseString } from "./reverseString";
import { calculator } from "./calculator";
import { caesarCipher } from "./caesarCipher";

test('capitalizes first letter of word', () => {
	expect(capitalize("dog")).toBe("Dog");
});

test('reverses a string', () => {
	expect(reverseString("Odin, I am almost finished with you.")).toBe(".uoy htiw dehsinif tsomla ma I ,nidO")
});

test('add two numbers', () => {
	expect(calculator.add(3, 4)).toBe(7)
})

test('subtract two numbers', () => {
	expect(calculator.sub(7, 2)).toBe(5)
})

test('multiply two numbers', () => {
	expect(calculator.mul(7, 6)).toBe(42)
})

test('divide two numbers', () => {
	expect(calculator.div(18, 2)).toBe(9)
})

test('wrap shift', () => {
	expect(caesarCipher('xyz', 3)).toBe("abc")
})

test('preservation', () => {
	expect(caesarCipher('HeLLo', 3)).toBe("KhOOr")
})

test('special characters', () => {
	expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!")
})







