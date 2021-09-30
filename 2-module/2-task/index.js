function isEmpty(obj) {
  // ваш код...
  size = 0;
  for (let n in obj) {
	  size ++;
  }
  return (size === 0);
}
