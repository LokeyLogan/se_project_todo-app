import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";

import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

// DOM references
const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.forms["add-todo-form"];

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
  todoCounter.updateTotal(false); // ✅ Decrease total when deleted
}

// 🧠 Generator & renderer functions
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
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

// ✅ PopupWithForm with todo creation logic
const addTodoPopupElement = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const date = inputValues.date ? new Date(inputValues.date) : null;
    if (date) {
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    }

    const id = uuidv4();
    const values = {
      name: inputValues.name,
      date: date,
      id: id,
      completed: false,
    };

    renderTodo(values);
    todoCounter.updateTotal(true);
    newTodoValidator.resetValidation();
    addTodoPopupElement.close();
  },
});

addTodoPopupElement.setEventListeners();

// 🔓 Modal open trigger
addTodoButton.addEventListener("click", () => {
  addTodoPopupElement.open();
});
