import { capitalize } from "./capitalize";
import { reverseString } from "./reverseString";

test('capitalizes first letter of word', () => {
	expect(capitalize("dog")).toBe("Dog");
});

test('reverses a string', () => {
	expect(reverseString("Odin, I am almost finished with you.")).toBe(".uoy htiw dehsinif tsomla ma I ,nidO")
});