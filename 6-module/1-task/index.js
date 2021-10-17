/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  
  constructor(rows) {
    
    //create table
    let elemTable = document.createElement("table");

    //create table header
    let elemHead = document.createElement("thead");
    let elemRow = document.createElement("tr");
    const arrHeader =['Имя','Возраст','Зарплата','Город',''];
    for (let item of arrHeader) {
      let elemCol = document.createElement("th");
      elemCol.textContent = item;
      elemCol.style.fontWeight = 'bold';
      elemRow.append(elemCol);
    };

    elemHead.append(elemRow);
    elemTable.append(elemHead);

    //create table body
    let elemBody = document.createElement("tbody");
    
    for (let item of rows) {
      //create table row
      let elemStr = document.createElement("tr");
      for (let person in item) {
        let elemCol = document.createElement("td");
        elemCol.textContent = item[person];
        elemStr.append(elemCol);
      };
      //create row button
      let elemCol = document.createElement("td");
      let elemBut = document.createElement("button");
      elemBut.textContent = 'X';
      elemBut.addEventListener('click', (event) => {
        this.elem.deleteRow(event.target.parentNode.parentNode.rowIndex);
      });
      
      elemCol.append(elemBut);
      elemStr.append(elemCol);
      elemBody.append(elemStr);
    };

    elemTable.append(elemBody);

    this.elem = elemTable; 

  }
}
