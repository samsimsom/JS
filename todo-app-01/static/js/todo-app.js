const todos = [
  {
    text: "Order cat food",
    complated: false,
  },
  {
    text: "Clean kitchen",
    complated: false,
  },
  {
    text: "Buy something",
    complated: false,
  },
  {
    text: "Do work",
    complated: true,
  },
  {
    text: "Go for a walk",
    complated: true,
  },
];

const filters = {
  searchText: "",
};

const newTodoForm = document.querySelector("#new-todo-form");
const newTodoInput = document.querySelector("#new-todo-input");
const todoListUl = document.getElementById("todo-list-ul");
const filterTodoInput = document.getElementById("filter-todo-input");

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incomplateTodos = filteredTodos.filter(function (todo) {
    return !todo.complated;
  });

  todoListUl.innerHTML = '';

  const unreadTodos = document.querySelector("#unread-todos");
  unreadTodos.textContent = incomplateTodos.length;

  filteredTodos.forEach(function (todo) {
    // console.log(todoListUl);

    let template = `
    <li class="list-group-item">
      <div class="d-flex flex-row bd-highlight">
        <div class="d-flex flex-fill justify-content-start">
          <div class="p-2 bd-highlight">${todo.text}</div>
        </div>
        <div class="d-flex flex-fill justify-content-end">
          <div class="p-2 bd-highlight">
            <a href="#" class="link-danger">
              <i class="bi bi-x-circle-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </li>
    `;

    todoListUl.insertAdjacentHTML("afterbegin", template);
  });
};

renderTodos(todos, filters);

filterTodoInput.addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

newTodoForm.addEventListener("submit", newTodoFormSubmit);
function newTodoFormSubmit(e) {
  e.preventDefault();

  todos.push({
    text: newTodoInput.value,
    complated: false,
  });
  renderTodos(todos, filters);
  newTodoInput.value = "";
}
