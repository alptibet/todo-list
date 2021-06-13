export const addHandlerCompleteToDo = function (handler) {
  const list = document.querySelectorAll('.todos');
  list.forEach(element => {
    element.addEventListener('click', function (e) {
      if (!e.target.className.includes('todos__item-checkbox')) return;
      handler(e.target);
    });
  });
};

export const renderRemaining = function (items) {
  const totalItems = document.querySelector('.items-left > p');
  if (items > 0) totalItems.textContent = `${items} items left`;
  if (items === 0) totalItems.textContent = 'No items left';
};
