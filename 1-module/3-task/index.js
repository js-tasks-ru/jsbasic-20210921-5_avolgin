function ucFirst(str) {
  // ваш код...
  if (typeof str != 'string') {
    return null;
  }
  if (str == '') {
    return str;
  }
  if (str.length == 1) {
    return str[0].toUpperCase();
  }
  return str[0].toUpperCase() + str.slice(1);
}
