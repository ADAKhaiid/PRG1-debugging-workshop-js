function capitalise(word) {
  const firstletter = word[0].toUpperCase();
  const rest = word.slice(1).toLowerCase();
  const final = firstletter + rest

  return final 
}

module.exports = { capitalise };
console.log(capitalise("hello"))

// I recommend you start by calling capitalise with the string "hello"

// Advanced hint: When you've called the function with a string, you can also run this file with a runtime called bun (just run bun <path-to-file>)
// bun runs JS files like node but with a few differences - can you spot any differences?
