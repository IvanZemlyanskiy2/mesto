
const formElement = document.querySelector('.popup__form');

//const formInput = formElement.querySelector('.popup__input');

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__save-button_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__save-button_inactive");
    buttonElement.disabled = false;
  }
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.add('popup__input_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input_error');

};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_error');
    errorElement.classList.remove('form__input-error_active');

    
  errorElement.textContent = '';
}; 

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
       showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
       hideInputError(formElement, inputElement);
  }
}; 

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
      
    });
  });
}; 

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
   formElement.addEventListener('submit', (evt) => {
     evt.preventDefault();
   });
   setEventListeners(formElement);
 });
 };


 const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

enableValidation(); 
formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = userNameInput.value;
  profileUserJob.textContent = userJobInput.value;
  closePopup(popup);
});














