let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__title');
let userJobInput = document.querySelector('.popup__input_type_about');
let profileUserJob = document.querySelector('.profile__subtitle');
let userNameInput = document.querySelector('.popup__input_type_name');
let popup = document.querySelector('.popup');
let popupAbout = document.querySelector('.popup__about');

function openPopup() {
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileUserJob.textContent;
  popup.classList.toggle('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = userNameInput.value;
  profileUserJob.textContent = userJobInput.value;
  closePopup();
}

popupAbout.addEventListener('submit', formSubmitHandler);
profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);











