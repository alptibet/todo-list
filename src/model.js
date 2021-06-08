export const state = [];

const toDoItem = function (data) {
  return {
    todo: 'deneme',
    id: 1,
    completed: false,
  };
};

export const addToDo = function (todo) {
  state.push(toDoItem(todo));
  console.log(state);
};

const deleteToDo = function (todoId) {
  //code here
};

const completeTodo = function (todoId) {
  //code here
};
