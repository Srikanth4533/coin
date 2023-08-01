export const roundToNumber = (number, roundNum) => {
  return +(Math.round(number + `e+${roundNum}`) + `e-${roundNum}`);
}
