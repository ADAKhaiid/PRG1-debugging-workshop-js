function convertTo12HourClock(time) {
  const hours = parseInt(time.slice(0, 2),10);
  console.log (hours)
  const minutes = time.slice(-2);
 
  if (hours == 0o0) {
    return `${12}:${minutes} AM`;
  }
  else if (hours == 12) {
    return `${12}:${minutes} PM`;
  }
  else if (hours > 12) {
    return `${hours - 12}:${minutes} PM`;
  } 
  else {
    return `${hours}:${minutes} AM`;
  }
}

module.exports = { convertTo12HourClock };

console.log(convertTo12HourClock("00:05"))
// Hint: I recommend calling the function with an input of '12:05'
