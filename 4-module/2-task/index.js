function makeDiagonalRed(table) {
  // ваш код...
  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor='red';
  }
}
