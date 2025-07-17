'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const childUl = li.querySelector('ul');

  if (!childUl) {
    return;
  }

  const text = li.firstChild.textContent.trim();

  const span = document.createElement('span');

  span.textContent = text;
  span.style.cursor = 'pointer';

  li.firstChild.textContent = '';
  li.insertBefore(span, childUl);

  span.addEventListener('click', () => {
    childUl.hidden = !childUl.hidden;
  });
});
