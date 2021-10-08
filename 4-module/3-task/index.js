function highlight(table) {
  // ваш код...
  for (var i = 1; i < table.rows.length; i++) {

     //available/unavailable/hidden
     if (table.rows[i].cells[3].hasAttribute('data-available')) {
         let available = table.rows[i].cells[3].getAttribute('data-available');
         table.rows[i].classList.add((available === 'true') ? 'available' : 'unavailable');
     } else {
       table.rows[i].setAttribute('hidden', true);
     };

    //male/female
    let gender = table.rows[i].cells[2].textContent;
    if (gender === 'm') {
      table.rows[i].classList.add('male');
    }
    if (gender === 'f') {
      table.rows[i].classList.add('female');
    }

   //age < 18
    let age = table.rows[i].cells[1].textContent;
    if ( parseInt(age) < 18) {
      table.rows[i].style.textDecoration = 'line-through';
    }
  }
}
