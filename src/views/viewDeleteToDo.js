export const addHandlerDeleteToDo = function (handler) {
  const list = document.querySelectorAll('.todos');
  list.forEach(item =>
    item.addEventListener('click', function (e) {
      if (e.target.className !== 'todos__item-cross') return;
      handler(e.target.closest('.todos__item').querySelector('input'));
    })
  );
};

export const renderDelete = function (item) {
  const todo = item.closest('.todos__item');
  todo.parentElement.removeChild(todo);
};
