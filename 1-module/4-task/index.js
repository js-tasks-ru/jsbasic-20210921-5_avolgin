function checkSpam(str) {
  // ваш код...
if (typeof str != 'string') {
  return null;
}
let uppStr = str.toUpperCase();
return (uppStr.includes('1XBET')||uppStr.includes('XXX'));
}
