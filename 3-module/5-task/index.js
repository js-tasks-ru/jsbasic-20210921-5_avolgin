function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ');
  let arrNum = arr.map(item => Number(item));
  let arrClear = arrNum.filter(item =>!isNaN(item));
  arrClear.sort((a, b) => a - b);
  let result = {
      min: arrClear[0],
      max: arrClear[arrClear.length-1]
  };
return result;
}
