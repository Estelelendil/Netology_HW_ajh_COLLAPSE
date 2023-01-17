/* eslint-disable prefer-template */
const button = document.querySelector('.collapsible');
const content = document.querySelector('.content');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
});
