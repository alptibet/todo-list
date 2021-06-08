const state = [];
export const todos = [...state];
export const createToDoItem = function (data) {
  const newToDo = {
    todo: data,
    id: createUUID(),
    completed: false,
  };

  todos.push(newToDo);
  return todos;
};

export const completeTodo = function (todo) {
  const item = todos.find(item => item.id === todo.id);
  item.completed = !item.completed;
  console.log(todos);
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
