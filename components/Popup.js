class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popCloseBtn = this._popupElement.querySelector(".popup__close");
    this._handleEscapeClose = this._handleEscapeClose.bind(this); // bind to keep context
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close(); // ✅ Call the close method
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose); // ✅ clean up
    console.log("close Method Called");
  }

  setEventListeners() {
    this._popCloseBtn.addEventListener("click", () => this.close());

    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });
  }
}

export default Popup;
