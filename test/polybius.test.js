// Write your tests here!
const { polybius } = require("../src/polybius")
const expect = require("chai").expect;

describe("polybius()", () => {
	it("output should still be a string", () => {
		const actual = polybius("hello")
		expect(actual).to.be.a("string")
	});

	it("should encrypt message", () =>{
		const actual = polybius("edelgard")
		const expected = "5141511322112441"
		expect(actual).to.eql(expected)
	});

	it("should decrypt message", () =>{
		const actual = polybius("5141511322112441", false)
		const expected = "edelgard"
		expect(actual).to.eql(expected)
	});

	it("should return false if length of numbers to decode (excluding spaces) is odd", () =>{
		const actual = polybius("44324233521254134", false)
		expect(actual).to.be.false
	});

	it("should maintain spaces throughout decoding and encoding", () =>{
		const actual = polybius("edelgard von hresvelg")
		const expected = "5141511322112441 154333 3224513415511322"
		expect(actual).to.eql(expected)
	});

	it("should ignore capital letters", () =>{
		const actual = polybius("Edelgard von Hresvelg")
		const expected = "5141511322112441 154333 3224513415511322"
		expect(actual).to.eql(expected)
	});

	it("should convert both i and j to 42", () =>{
		const actual = polybius("jumanji")
		const expected = "42542311334242"
		expect(actual).to.eql(expected)
	});

	it("should convert 42 to include both j and i", () =>{
		const actual = polybius("42542311334242", false)
		expect(actual).to.include("i");
      	expect(actual).to.include("j");
	});
});