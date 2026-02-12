class FormValidator {
    constructor(settings, formEl) { 
    this._inputSelector = settings.inputSelector;
    this.formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;  
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
    }

_checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      inputElement.classList.add(this._inputErrorClass);
  } else {
      inputElement.classList.remove(this._inputErrorClass);
  }
}

    _setEventListeners() {
    this._inputList = Array.from(
    this._formEl.querySelectorAll(this._inputSelector)
  );
//   TODO finish implementing _setevent listeners
  const buttonElement = this._formEl.querySelector(this._submitButtonSelector);


  toggleButtonState(inputList, buttonElement, settings);

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(inputElement);
      toggleButtonState(this._inputList, buttonElement, settings);
    });
  });
    }

    enableValidation() { 
  this._formEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  this._setEventListeners();
    }

}  
console.log(FormValidator);
export default FormValidator;