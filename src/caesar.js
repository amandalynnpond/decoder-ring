// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift == 0 || shift < -25 || shift > 25){
      return false
    }
    //go negative if decoding
    if (encode == false) {
      shift = shift*-1
    }
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let lowerCaseInput = input.toLowerCase()
    let coder = 0
    let newLetter = ""
    let result = []
    for (let i = 0; i < lowerCaseInput.length; i++){
      if (alphabet.includes(lowerCaseInput[i])){
        for (let j = 0; j < alphabet.length; j++){
          if (lowerCaseInput[i] == alphabet[j]){
            coder = j + shift
            // check for wrap around
            if (coder >= 26){
              coder = coder - 26
              newLetter = alphabet[coder]
              result.push(newLetter)
            } 
            // backwards wrap around
            else if (coder <= -1) {
              coder = coder + 26
              newLetter = alphabet[coder]
              result.push(newLetter)
            }else {
            newLetter = alphabet[coder]
            result.push(newLetter)}
          }
        }
      } else {result.push(lowerCaseInput[i])}
    }
      return result.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
