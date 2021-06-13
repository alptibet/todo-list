const todos = document.querySelector('.todos');

// export const renderRemaining = function (items) {
//   console.log(items);
//   const element = document.querySelector('.items-left > p');
//   console.log(element);
//   if (items > 0) element.textContent = `${items} items left`;
//   if (items === 0) element.textContent = 'No items left';
// };

export const addHandlerShowCompleted = function (handler) {
  const parentElement = document.querySelector('.todo-info');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'completed') return;
    handler();
  });
};

export const addHandlerShowNotCompleted = function (handler) {
  const parentElement = document.querySelector('.todo-info');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'active') return;
    handler();
  });
};

export const addHandlerShowAll = function (handler) {
  const parentElement = document.querySelector('.todo-info');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'all') return;
    handler();
  });
};

export const addHandlerClearCompleted = function (handler) {
  const parentElement = document.querySelector('.todo-info');
  parentElement.addEventListener('click', function (e) {
    if (e.target.className !== 'clear') return;
    handler();
  });
};

export const renderCompletedItems = function (items) {
  renderAllItems(items);
  const boxes = todos.querySelectorAll('input');
  boxes.forEach(function (box) {
    if (!box.checked) {
      const el = box.closest('.todos__item');
      el.style.display = 'none';
    }
  });
};

export const renderNotCompletedItems = function (items) {
  renderAllItems(items);
  const boxes = todos.querySelectorAll('input');
  boxes.forEach(function (box) {
    if (box.checked) {
      const el = box.closest('.todos__item');
      el.style.display = 'none';
    }
  });
};

export const renderAllItems = function (items) {
  const boxes = todos.querySelectorAll('input');
  boxes.forEach(function (box) {
    const el = box.closest('.todos__item');
    el.style.display = 'block';
  });
};

export const renderClear = function () {
  const boxes = todos.querySelectorAll('input');
  boxes.forEach(function (box) {
    if (box.checked) {
      const el = box.closest('.todos__item');
      todos.removeChild(el);
    }
  });
};
