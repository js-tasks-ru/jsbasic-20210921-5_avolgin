function showSalary(users, age) {
  // ваш код...
  let userStr = '';

  users.forEach(item => userStr += (item.age <= age) ? item.name  + ', ' + item.balance + '\n'  : '');

  return  userStr.slice(0,-1);
}
