<<<<<<< HEAD
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
``;

import { initialTodos, validationConfig } from "../utils/constants.js";

import Todo from "../components/Todo.js";

import FormValidator from "../components/FormValidator.js";
=======
const initialTodos = [
  {
    id: "7cec7373-681b-49d9-b065-021d61a69d03",
    name: "Read the sprint's theory",
    completed: true,
    date: new Date(),
  },
  {
    id: "a7bfd5ef-37cc-4fa6-89f2-cac098a8aeba",
    name: "Read project instructions",
    completed: false,
    date: new Date(),
  },
  {
    id: "aa486839-63ab-437f-b8a2-29ab217dff4f",
    name: "Complete project",
    completed: false,
    date: new Date(),
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  errorClass: "popup__error_visible",
  inputErrorClass: "popup__input_type_error",
  inactiveButtonClass: "button_disabled",
};
>>>>>>> e9bc40d5964d62094347348f866990895cccaa35

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
<<<<<<< HEAD
=======
const todoTemplate = document.querySelector("#todo-template");
>>>>>>> e9bc40d5964d62094347348f866990895cccaa35
const todosList = document.querySelector(".todos__list");

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
<<<<<<< HEAD
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();

  //To be removed:
  // const todoElement = todoTemplate.content
  //   .querySelector(".todo")
  //   .cloneNode(true);
  // const todoNameEl = todoElement.querySelector(".todo__name");
  // const todoCheckboxEl = todoElement.querySelector(".todo__completed");
  // const todoLabel = todoElement.querySelector(".todo__label");
  // const todoDate = todoElement.querySelector(".todo__date");
  // const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

  // todoNameEl.textContent = data.name;
  // todoCheckboxEl.checked = data.completed;

  // // Apply id and for attributes.
  // // The id will initially be undefined for new todos.
  // todoCheckboxEl.id = `todo-${data.id}`;
  // todoLabel.setAttribute("for", `todo-${data.id}`);

  // // If a due date has been set, parsing this it with `new Date` will return a
  // // number. If so, we display a string version of the due date in the todo.

  // const dueDate = new Date(data.date);
  // if (!isNaN(dueDate)) {
  //   todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   })}`;
  // }

  // todoDeleteBtn.addEventListener("click", () => {
  //   todoElement.remove();
  // });
=======
  const todoElement = todoTemplate.content
    .querySelector(".todo")
    .cloneNode(true);
  const todoNameEl = todoElement.querySelector(".todo__name");
  const todoCheckboxEl = todoElement.querySelector(".todo__completed");
  const todoLabel = todoElement.querySelector(".todo__label");
  const todoDate = todoElement.querySelector(".todo__date");
  const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

  todoNameEl.textContent = data.name;
  todoCheckboxEl.checked = data.completed;

  // Apply id and for attributes.
  // The id will initially be undefined for new todos.
  todoCheckboxEl.id = `todo-${data.id}`;
  todoLabel.setAttribute("for", `todo-${data.id}`);

  // If a due date has been set, parsing this it with `new Date` will return a
  // number. If so, we display a string version of the due date in the todo.
  const dueDate = new Date(data.date);
  if (!isNaN(dueDate)) {
    todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`;
  }

  todoDeleteBtn.addEventListener("click", () => {
    todoElement.remove();
  });
>>>>>>> e9bc40d5964d62094347348f866990895cccaa35

  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

<<<<<<< HEAD
  const id = uuidv4();
  const values = { name, date, id };
=======
  const values = { name, date };
>>>>>>> e9bc40d5964d62094347348f866990895cccaa35
  const todo = generateTodo(values);
  todosList.append(todo);
  closeModal(addTodoPopup);
});

initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
});
<<<<<<< HEAD

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
=======
>>>>>>> e9bc40d5964d62094347348f866990895cccaa35
