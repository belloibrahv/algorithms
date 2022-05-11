export default function binaryGap(N) {
  // convert N to binary
  const binaryNumber = N.toString(2);
  const seperateZero = binaryNumber.split('1')
  let highestZero = 0
  for(let zero = 0; zero < seperateZero.length; zero++) {
    if (seperateZero[zero].length > highestZero)
      highestZero = seperateZero[zero].length;
  }

  // if it doesn't end with one
  return highestZero;
}