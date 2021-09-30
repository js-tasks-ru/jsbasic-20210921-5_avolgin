function truncate(str, maxlength) {
  // ваш код...
  if (typeof str != 'string' || typeof maxlength != 'number'|| maxlength <= 0) {
    return null;
  }
  if  (str.length > maxlength ) {
    return str.slice(0,maxlength-1) + '…';
  }
  return str;
}
