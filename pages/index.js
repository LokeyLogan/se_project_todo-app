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
const todosList = document.querySelector(".todos__list");

// 🧠 Generator & renderer functions (moved above usage to fix hoisting error)
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  return todo.getView();
};

const renderTodo = (item) => {
  const todoElement = generateTodo(item);
  section.addItem(todoElement);
};

// 📦 Section instance
const section = new Section({
  items: initialTodos,
  renderer: renderTodo,
  containerSelector: ".todos__list",
});

// 🚀 Render initial todos
section.renderItems();

// ✅ Form Validator
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();

// ✅ Updated handler inside PopupWithForm
const addTodoPopupElement = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const date = new Date(inputValues.date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();
    const values = {
      name: inputValues.name,
      date: date,
      id: id,
    };

    renderTodo(values);
    newTodoValidator.resetValidation();
    addTodoPopupElement.close();
  },
});

addTodoPopupElement.setEventListeners();

// 🔓 Modal open trigger
addTodoButton.addEventListener("click", () => {
  addTodoPopupElement.open();
});
