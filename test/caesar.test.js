// Write your tests here!
const { caesar } = require("../src/caesar")
const expect = require("chai").expect;

describe("caesar()", () =>{
	it("should return false if the shift value isn't present", () => {
		const expected = caesar("this should be false")
		expect(expected).to.be.false
	});

	it("should return false if the shift value is 0", () => {
		const expected = caesar("this should be false", 0)
		expect(expected).to.be.false
	});

	it("should return false if the shift value is less than -25", () => {
		const expected = caesar("this should be false", -26)
		expect(expected).to.be.false
	});

	it("should return false if the shift value is greater than 25", () => {
		const expected = caesar("this should be false", 26)
		expect(expected).to.be.false
	});

	it("should encode a message by shifting letters", () => {
		const expected = caesar("hello", 3)
		const actual = "khoor"
		expect(actual).to.eql(expected)
	});

	it("should decode a message by shifting letters in opposite direction", () => {
		const expected = caesar("khoor", 3, false)
		const actual = "hello"
		expect(actual).to.eql(expected)
	});

	it("should ignore upper case", () => {
		const expected = caesar("Edelgard", 7)
		const actual = "lklsnhyk"
		expect(actual).to.eql(expected)
	});

	it("should leave spaces and symbols as is", () => {
		const expected = caesar("a message.", 3)
		const actual = "d phvvdjh."
		expect(actual).to.eql(expected)
	});

	it("should wrap around the alphabet", () => {
		const expected = caesar("Edelgard was right", 7)
		const actual = "lklsnhyk dhz ypnoa"
		expect(actual).to.eql(expected)
	});

	it("should shift left if presented with a negative number", () => {
		const expected = caesar("thinkful", -3)
		const actual = "qefkhcri"
		expect(actual).to.eql(expected)
	});

});