export const state = [];

const createToDoItem = function (data) {
  return {
    todo: data,
    id: createUUID(),
    completed: false,
  };
};

export const addToDo = function (todo) {
  state.push(createToDoItem(todo));
  console.log(state);
};

const deleteToDo = function (todo) {
  //code here
};

const completeTodo = function (todo) {
  //code here
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
