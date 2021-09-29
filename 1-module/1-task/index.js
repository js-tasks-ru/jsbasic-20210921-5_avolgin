function factorial(n) {
  // ваш код...
  if (typeof n != 'number') {
    return NaN;
  }
  if (n < 0) {
    return undefined;
  }
  let result = 1;
  if (n === 0) {
    return result;
  }
  while (n != 1) {
    result = result * (n--);
  }
  return result;
}
