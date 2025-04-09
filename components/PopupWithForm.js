import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector("form");
  }

  // Collect all input values from the form
  _getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll("input"));
    const formValues = {};
    inputs.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  // Set all required event listeners
  setEventListeners() {
    super.setEventListeners(); // Close button logic
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  // Optional helper to reset form and close
  close() {
    super.close();
    this._form.reset();
  }

  open() {
    super.open();
  }
}

export default PopupWithForm;
