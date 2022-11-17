// Write your tests here!
const { substitution } = require("../src/substitution")
const expect = require("chai").expect;

describe("substitution()", () => {
	it("output should still be a string", () => {
		const actual = substitution("hello", "xoyqmcgrukswaflnthdjpzibev")
		expect(actual).to.be.a("string")
	});

	it("alphabet must be a string of exactly 26 characters, otherwise return false", () => {
		const actual = substitution("hello", "xoyqmcgrukswaflnthdjpzibe")
		expect(actual).to.be.false
	});

	it("each character in cipher should be unique, otherwise return false", () => {
		const actual = substitution("hello", "xoyqmcgrukswaflnthdjpzibex")
		expect(actual).to.be.false
	});

	it("should convert message to cipher", () => {
		const actual = substitution("edelgard", "xoyqmcgrukswaflnthdjpzibev")
		const expected = "mqmwgxhq"
		expect(actual).to.eql(expected)
	});

	it("should convert cipher to message", () => {
		const actual = substitution("mqmwgxhq", "xoyqmcgrukswaflnthdjpzibev", false)
		const expected = "edelgard"
		expect(actual).to.eql(expected)
	});

	it("should ignore capital letters", () => {
		const actual = substitution("Edelgard", "xoyqmcgrukswaflnthdjpzibev")
		const expected = "mqmwgxhq"
		expect(actual).to.eql(expected)
	});

	it("should maintain spaces throughout decoding and encoding", () => {
		const actual = substitution("edelgard von hresvelg", "xoyqmcgrukswaflnthdjpzibev")
		const expected = "mqmwgxhq zlf rhmdzmwg"
		expect(actual).to.eql(expected)
	});

});// Write your tests here!
