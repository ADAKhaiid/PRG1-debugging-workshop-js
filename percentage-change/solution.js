function calculatePercentageChange(original, newAmount) {
  if (original == newAmount) {
    return 0 
  }
  else {
    const difference = newAmount - original;
    const percentageDifference = (difference / original) * 100;
    return Number(percentageDifference.toFixed(0)) ; 
}
}

module.exports = { calculatePercentageChange };

console.log(calculatePercentageChange(50, 40)); // should return -20 as there's been a 20% decrease from 50 to 40
