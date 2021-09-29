function sumSalary(salaries) {
  // ваш код...
  let amount = 0;
  for (let n in salaries) {
    if (typeof salaries[n] === "number" && !isNaN(salaries[n]) &&
               salaries[n] != Infinity && salaries[n] != -Infinity ) {
	    amount += salaries[n];
    }
 }
 return amount;
}
