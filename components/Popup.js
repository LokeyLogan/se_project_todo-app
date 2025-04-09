class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popCloseBtn = this._popupElement.querySelector(".popup__close"); // ✅ fixed class name
  }

  open() {
    this._popupElement.classList.add("popup_visible");
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    console.log("close Method Called");
  }

  setEventListeners() {
    this._popCloseBtn.addEventListener("click", () => this.close());
  }
}

export default Popup;
