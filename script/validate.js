
 
 const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 




const toggleButtonState = (inputList, buttonElement, validations) => {
  if (hasInvalidInput(inputList, validations)) {
    buttonElement.classList.add(validations.buttonInactive);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validations.buttonInactive);
    buttonElement.disabled = false;
  }
};

const showInputError = (formElement, inputElement, errorMessage, validations) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validations.inputElementErrore);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validations.inputElementErrore);
};


const hideInputError = (formElement, inputElement, validations) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validations.inputElementErrore);
    errorElement.classList.remove(validations.buttonInactive);
  errorElement.textContent = '';
}; 

const isValid = (formElement, inputElement, validations) => {
  if (!inputElement.validity.valid) {
       showInputError(formElement, inputElement, inputElement.validationMessage, validations);
  } else {
       hideInputError(formElement, inputElement, validations);
  }
}; 


const setEventListeners = (formElement, validations) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validations.inputList)
  );
  const buttonElement = formElement.querySelector(validations.buttonElement);
  toggleButtonState(inputList, buttonElement, validations);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, validations);
      toggleButtonState(inputList, buttonElement, validations);
    });
  });
};


const enableValidation = (validations) => {
  const formList = Array.from(
    document.querySelectorAll(validations.formElement)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault(validations);
    });
    setEventListeners(formElement, validations);
  });
};
 enableValidation({
  formElement: '.popup__form',
  inputList: '.popup__input',
  buttonElement: '.popup__save-button',
  buttonInactive: 'popup__save-button_inactive',
  inputElementErrore: 'popup__input_error',
  errorElement: 'form__input-error_active',
});




