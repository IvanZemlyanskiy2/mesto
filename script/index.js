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
const buttonCloseAddCardPopup = document.querySelector('.popup__close-button_type_close');
const createButton = document.querySelector('.popup__save-button_type_create');
const popupCreateForm = document.querySelector('.popup__form_type_create')
const template = document.querySelector('.template').content;
const cardsList = document.querySelector('.cards');
const popupImage = document.querySelector('.popup_type_image');
const overlayClose = document.querySelector('.popup__overlay');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupImagePicture = document.querySelector('.popup__image-picture');


function openPopup(el) {
  el.classList.add('popup_opened');
  document.addEventListener('keydown', keyClose);
}

function closePopup(el) {
  el.classList.remove('popup_opened');
}
formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = userNameInput.value;
  profileUserJob.textContent = userJobInput.value;
  closePopup(popup);
});
const popupCloseOverley = function () {
  const popupArry = Array.from(document.querySelectorAll('.popup'));
  popupArry.forEach((overlayClose) => {
    overlayClose.addEventListener('click', (evt) => {
      if (evt.target.className === 'popup__overlay') {
        closePopup(overlayClose);
      }
    });
  });
};
popupCloseOverley();

function keyClose(evt) {
  if (evt.key === 'Escape') {
    const popupCloseEsc = document.querySelector('.popup_opened');
    closePopup(popupCloseEsc);
  }
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
render();
function getElement(item) {
  const getElementTemplate = template.querySelector('.card').cloneNode(true);
 const cardImage = ('.card__image');
  getElementTemplate.querySelector(cardImage).src = item.link;
  getElementTemplate.querySelector('.card__title').textContent = item.name;
  getElementTemplate.querySelector(cardImage).alt = item.name;
  getElementTemplate.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.card');
    getElementTemplate.remove();
  });
  getElementTemplate.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  getElementTemplate.querySelector(cardImage).addEventListener('click', function (evt) {
    popupImageTitle.textContent = item.name;
    popupImagePicture.src = item.link;
    popupImagePicture.alt = item.name;
    openPopup(popupImage);
  });
  return getElementTemplate;
}


addButton.addEventListener('click', function () {
  openPopup(popupCreate);
});

const popupImageClose = document.querySelector('.popup__close-button_type_exit');
popupImageClose.addEventListener('click', function () {
  closePopup(popupImage);
});


profileEditButton.addEventListener('click', function () {
  openPopup(popup);
  userNameInput.value = profileName.textContent;
  userJobInput.value = profileUserJob.textContent;
});
popupCloseButton.addEventListener('click', function () {
  closePopup(popup);
});
buttonCloseAddCardPopup.addEventListener('click', function () {
  closePopup(popupCreate);
});

formElement.addEventListener('submit', handleProfileFormSubmit);
popupCreateForm.addEventListener('submit', createCard);

