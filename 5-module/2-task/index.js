function toggleText() {
  // ваш код...
  let elem = document.querySelector('.toggle-text-button');
  elem.addEventListener('click', () => {text.hidden = !text.hidden;});
}
