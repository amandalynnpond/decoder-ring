// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope


function polybius(input, encode = true) {
    const cipher = {
      a: 11, b: 21, c: 31, d: 41, e: 51, f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, l: 13, m: 23, n: 33, o: 43, p: 53, q: 14, r: 24, s: 34, t: 44, u: 54, v: 15, w: 25, x: 35, y: 45, z: 55, " ": " "
    }
    let result = null
    let decription = []
    let lowerCaseInput = input.toLowerCase()
    if (encode === true){
      for (let i = 0; i < lowerCaseInput.length; i++){
        for (let letter in cipher) {
          let number = cipher[letter]
          if (lowerCaseInput[i] == letter){
          decription.push(number)
          result = decription.join("")
          }
        }
      }
    } else {
          // check for odd numbers
        let noSpaces = input.replace(/\s+/g, "")
        if (noSpaces.length % 2 != 0) {return false}
        let sentenceBackTogether = []
        const separateWords = input.split(" ")
      //go through array
        for (let i = 0; i < separateWords.length; i++){
          //go through each word
          separateWord = separateWords[i]
          //make each pair it's own item in an array
          const splitNumbers = separateWord.match(/.{1,2}/g) || []
          let newWord = []
          for (let j = 0; j < splitNumbers.length; j++){
            for (let letter in cipher){
              let number = cipher[letter]
              if (splitNumbers[j] == 42){
                newWord.push("(i/j)")
                break
              }
              else if (splitNumbers[j] == number){
                newWord.push(letter)
              }
            }      
          }
          //convert array into full word
          decription = newWord.join("")
          //push word back into an array
          sentenceBackTogether.push(decription)
          //convert ALL words into a string, separated by space
          result = sentenceBackTogether.join(" ")
        }
      }
    return result
  }




  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
