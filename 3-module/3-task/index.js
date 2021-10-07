function camelize(str) {
  // ваш код...
  let arrSplit = str.split('-');
  let arrUpper = arrSplit.map(item => (item === '') ? item : item[0].toUpperCase() + item.slice(1));
  let strUpper = arrUpper.join('');
  return ((arrUpper[0] === '') ? strUpper : strUpper[0].toLowerCase() + strUpper.slice(1));
}
