import { capitalize } from "./capitalize";

test('capitalizes first letter of word', () => {
	expect(capitalize("dog")).toBe("Dog");
});