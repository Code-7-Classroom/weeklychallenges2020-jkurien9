
// compare firstNum and secondNum and return the smaller of the two
function min( firstNum, secondNum ) {
	if ( firstNum < secondNum )
      return firstNum;
    else
      return secondNum;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(4,4));
// → 4