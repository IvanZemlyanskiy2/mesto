let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__title');
let userJobInput = document.querySelector('.popup__input_type_about');
let profileUserJob = document.querySelector('.profile__subtitle');
let userNameInput = document.querySelector('.popup__input_type_name');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');

const popupCreate = document.querySelector('.popup_type_create');
const addButton = document.querySelector('.profile__add-button');
const createCloseButton = document.querySelector('.popup__close-button_type_close');
const createButton = document.querySelector('.popup__save-button_type_create');
const popupCreateForm = document.querySelector('.popup__form_type_create')
const template = document.querySelector('.template').content;
const cardsList = document.querySelector('.cards');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup(el) {
  el.classList.add('popup_opened');
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileUserJob.textContent;
}

function closePopup(el) {
  el.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = userNameInput.value;
  profileUserJob.textContent = userJobInput.value;
  closePopup(popup);
}

function createCard(evt) {
  evt.preventDefault();
  const popupNameInput = document.querySelector('.popup__input_type_title').value;
  const popupLinkInput = document.querySelector('.popup__input_type_link').value;
  const deleteButton = document.querySelector('.card__delete-button');
  const element = getElement({ name: popupNameInput, link: popupLinkInput });
  cardsList.prepend(element);
  closePopup(popupCreate);
}

function rendor() {
  const html = initialCards.map(getElement);
  cardsList.append(...html);
}

function getElement(item) {
  const getElementTemplate = template.querySelector('.card').cloneNode(true);
  getElementTemplate.querySelector('.card__image').src = item.link;
  getElementTemplate.querySelector('.card__title').textContent = item.name;
  getElementTemplate.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.card');
    getElementTemplate.remove();
  });
  getElementTemplate.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  getElementTemplate.querySelector('.card__image').addEventListener('click', function (evt) {
    const popapImage = document.querySelector('.popup_type_image');
    popapImage.querySelector('.popup__image-title').textContent = item.name;
    popapImage.querySelector('.popup__image-picture').src = item.link;
    openPopup(popapImage);
    popapImage.querySelector('.popup__close-button_type_exit').addEventListener('click', function () {
      closePopup(popapImage)
    });
  });
  return getElementTemplate;
}

addButton.addEventListener('click', function () {
  openPopup(popupCreate);
});

profileEditButton.addEventListener('click', function () {
  openPopup(popup);
});
popupCloseButton.addEventListener('click', function () {
  closePopup(popup);
});
createCloseButton.addEventListener('click', function () {
  closePopup(popupCreate);
});

formElement.addEventListener('submit', formSubmitHandler);
popupCreateForm.addEventListener('submit', createCard);

rendor();


