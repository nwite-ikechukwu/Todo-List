const todoList = [
  {name: 'hello', dueDate: '22-12-2023'},
  {name: 'world', dueDate: '24-11-2021'}
];

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
    <button>Delete</button>
    `;
    todoListHTML += todoHTML;
  })
  todoListDiv.innerHTML = todoListHTML;
}

