const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__title');
const userJobInput = document.querySelector('.popup__input_type_about');
const profileUserJob = document.querySelector('.profile__subtitle');
const userNameInput = document.querySelector('.popup__input_type_name');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const popupCreate = document.querySelector('.popup_type_create');
const addButton = document.querySelector('.profile__add-button');
const createCloseButton = document.querySelector('.popup__close-button_type_close');
const createButton = document.querySelector('.popup__save-button_type_create');
const popupCreateForm = document.querySelector('.popup__form_type_create')
const template = document.querySelector('.template').content;
const cardsList = document.querySelector('.cards');
const popupImage = document.querySelector('.popup_type_image');

function openPopup(el) {
  el.classList.add('popup_opened');
}

function closePopup(el) {
  el.classList.remove('popup_opened');
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = userNameInput.value;
  profileUserJob.textContent = userJobInput.value;
  closePopup(popup);
}

function createCard(evt) {
  evt.preventDefault();
  const popupNameInput = document.querySelector('.popup__input_type_title').value;
  const popupLinkInput = document.querySelector('.popup__input_type_link').value;
  const element = getElement({ name: popupNameInput, link: popupLinkInput });
  cardsList.prepend(element);
  closePopup(popupCreate);
  popupCreateForm.reset();
}

function render() {
  const cards = initialCards.map(getElement);
  cardsList.append(...cards);
}

function getElement(item) {
  const getElementTemplate = template.querySelector('.card').cloneNode(true);
  getElementTemplate.querySelector('.card__image').src = item.link;
  getElementTemplate.querySelector('.card__title').textContent = item.name;
  getElementTemplate.querySelector('.card__image').alt = item.name;
  getElementTemplate.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.card');
    getElementTemplate.remove();
  });
  getElementTemplate.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  getElementTemplate.querySelector('.card__image').addEventListener('click', function (evt) {
    popupImage.querySelector('.popup__image-title').textContent = item.name;
    popupImage.querySelector('.popup__image-picture').src = item.link;
    openPopup(popupImage);
  });

  return getElementTemplate;
}

const popupImageClose = document.querySelector('.popup__close-button_type_exit');
popupImageClose.addEventListener('click', function () {
  closePopup(popupImage);
});

addButton.addEventListener('click', function () {
  openPopup(popupCreate);
});

profileEditButton.addEventListener('click', function () {
  openPopup(popup);
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileUserJob.textContent;
});
popupCloseButton.addEventListener('click', function () {
  closePopup(popup);
});
createCloseButton.addEventListener('click', function () {
  closePopup(popupCreate);
});

formElement.addEventListener('submit', handleProfileFormSubmit);
popupCreateForm.addEventListener('submit', createCard);
popupCreateForm.addEventListener('submit', createCard);
render();


