import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";

import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

// DOM references
const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");
const addTodoPopupElement = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: () => {},
});

addTodoPopupElement.setEventListeners();

// 🛠 Must be declared BEFORE used in renderer
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  return todo.getView();
};

const renderTodo = (item) => {
  const todoElement = generateTodo(item);
  section.addItem(todoElement);
};

// Section instance with renderer and container
const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todoElement = generateTodo(item);
    section.addItem(todoElement);
  },
  containerSelector: ".todos__list",
});

// Render initial todos
section.renderItems();

// Modal controls
// const openModal = (modal) => {
//   modal.classList.add("popup_visible");
// };

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// Form submission handler
addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };

  renderTodo(values);
  newTodoValidator.resetValidation();
  addTodoPopupElement.close();
});

// Modal open/close
addTodoButton.addEventListener("click", () => {
  addTodoPopupElement.open();
});
// addTodoCloseBtn.addEventListener("click", () => addTodoPopupElement.close());

// Enable validation
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
