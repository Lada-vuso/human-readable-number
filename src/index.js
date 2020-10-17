module.exports = function toReadable (number) {
  let hrn;
  let numbersRead = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let secondDozen = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
  let dozens = ["ten","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  
  if (number === 0) {
    hrn = "zero";
  } else if (number < 20) {
    hrn = numbersRead[number-1];
    console.log('[hrn]', hrn);
  } else if (number < 100) {
    let str = number.toString();
    if (str[1] === "0") {
      hrn = dozens[str[0]-1];
    } else {
      hrn = dozens[str[0]-1] + " " + numbersRead[str[1]-1];
    }
  } else if (number < 1000) {
    let str = number.toString();
    if (str[1] === "0") { 
      if (str[2] === "0") { 
        hrn = numbersRead[str[0]-1] + " hundred"; /* 100, 200 */
      } else {
        hrn = numbersRead[str[0]-1] + " hundred " + numbersRead[str[2]-1]; /* 101, 102 */
      } 



    } else if (str[1] === "1") {
        if (str[2] === "0") {
          hrn = numbersRead[str[0]-1] + " hundred " + dozens[str[1]-1]; /* 110 */
        } else {
          hrn = numbersRead[str[0]-1] + " hundred " + secondDozen[str[2]-1]; /* 215*/
        } 


    } else if (str[2] === "0") {
      hrn = numbersRead[str[0]-1] + " hundred " + dozens[str[1]-1]; /* 120 */
    } else {
    hrn = numbersRead[str[0]-1] + " hundred " + dozens[str[1]-1] + " " + numbersRead[str[2]-1]; /* 111 */
    }
  }
  console.log('[hrn]', hrn);
  return hrn;
}
