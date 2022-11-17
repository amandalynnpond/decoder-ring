// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
   function checkforDuplicates(array) {
    return new Set(array).size !== array.length
}
  function substitution(input, alphabet, encode = true) {
    const trueAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]
    let result = []
    if (!alphabet || alphabet.length < 26) { return false }
    //turn alphabet string into an array
    const lowerCaseMessage = input.toLowerCase()
    let alphabetArray = alphabet.split("")
    alphabetArray.push(" ")
    if (checkforDuplicates(alphabetArray)) {
      return false
    } else {
      for (let i = 0; i < lowerCaseMessage.length; i++){
        if (encode) {
          trueAlphabet.forEach((letter, index) =>{
            if (lowerCaseMessage[i] == letter){
              result.push(alphabetArray[index])
            }
          })
        }
        else {
            alphabetArray.forEach((letter, index) => {
              if (lowerCaseMessage[i] == letter){
              result.push(trueAlphabet[index])
              }
            })
          }
        }
      }
    return result.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
