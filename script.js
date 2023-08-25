const todoList = [];
renderTodo();

function addTodo() {
  const inputElement = document.querySelector('.js-input-element');
  const dateElement = document.querySelector('.js-date-element');
  const todoObject = {
    name: inputElement.value,
    dueDate: dateElement.value
  };
  todoList.push(todoObject);
  inputElement.value = '';
  dateElement.value = '';
  renderTodo();
}

function renderTodo() {
  const todoListDiv = document.querySelector('.todo-list-div');
  let todoListHTML = '';
  todoList.forEach(function(value, index) {
    const todoObjectItem = value;
    const {name, dueDate} = value;
    const todoHTML = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="todoList.splice(${index}, 1); renderTodo()">Delete</button>
    `;
    todoListHTML += todoHTML;
  })
  todoListDiv.innerHTML = todoListHTML;
}

