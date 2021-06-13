export const todos = [];
export let remaining = 0;
export const createToDoItem = function (data) {
  const newToDo = {
    todo: data,
    id: createUUID(),
    completed: false,
  };

  todos.push(newToDo);
};

const createUUID = function () {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

export const completeTodo = function (todo) {
  const item = todos.find(item => item.id === todo.id);
  item.completed = !item.completed;
};

export const calculateRemaining = function () {
  const remainingItems = todos.filter(item => item.completed === false);
  remaining = remainingItems.length;
};

export const deleteToDo = function (todo) {
  const item = todos.find(item => item.id === todo.id);
  item.completed = true;
  todos.splice(todos.indexOf(item), 1);
};

// export const clearCompleted = function () {
//   const copyTodos = [...todos];
//   const toClear = copyTodos.filter(item => item.completed === true);
//   return toClear;
// };
