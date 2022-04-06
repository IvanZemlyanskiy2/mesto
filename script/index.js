let profileEditButton = document.querySelector('.profile__edit-button');
let popupContainer = document.querySelector('.popup__container');
let popupCloseButton = document.querySelector('.popup__close-button');
let popupSaveButton = document.querySelector('.popup__save-button');
let profileName = document.querySelector('.profile__title');
let userJobInput = document.querySelector('.popup__input_about');
let profileUserJob = document.querySelector('.profile__subtitle');

let userNameInput = document.querySelector('.popup__input_name');
let popup = document.querySelector('.popup');

function openPopup() {
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileUserJob.textContent;
  popup.classList.toggle('popup_opened');
}
profileEditButton.addEventListener('click', openPopup);

function closePopup() {
  popupCloseButton = popup.classList.remove('popup_opened');
}
popupCloseButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = userNameInput.value;
  profileUserJob.textContent = userJobInput.value;
  closePopup();
}
popup.addEventListener('submit', formSubmitHandler);













