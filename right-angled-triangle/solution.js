function drawRightAngledTriangle(n) {
  let i = 0;
  while (i < n ) {
    console.log("*".repeat(i+1));
    i++;
  }
}

module.exports = { drawRightAngledTriangle };

console.log(drawRightAngledTriangle(3))