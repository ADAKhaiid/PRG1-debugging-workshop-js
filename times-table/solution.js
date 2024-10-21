function printTimesTable(n) {
  let i = 1;
  while (i <= 12) {
    console.log(`${i} x ${n} = ${i * n}`);
    i++;
  }
}

module.exports = { printTimesTable };

console.log(printTimesTable(5))
console.log(printTimesTable(3))
console.log(printTimesTable(1))
console.log(printTimesTable(12))
