let editButton = document.querySelector('.editbutton');
let popup = document.querySelector('.popup');
let popupOpened = document.querySelector('.popup_opened');
let Close = document.querySelector('.Close');
let popupKusto = document.querySelector('.popup__kusto');
let nameTitle = document.querySelector('.name__title');
let popupText = document.querySelector('.popup__text');
let nameSubtitle = document.querySelector('.name__subtitle');
let saveButton = document.querySelector('.savebutton');
let popupContainer = document.querySelector('.popup__container');

function Open() {
  popup.classList.add('popup_opened');
  popupKusto.value = nameTitle.textContent;
  popupText.value = nameSubtitle.textContent;
}
editButton.addEventListener('click', Open);


function Exit() {
  popup.classList.remove('popup_opened');
}
Close.addEventListener('click', Exit);


function formSubmitHandler(evt) {
  evt.preventDefault();
  nameTitle.textContent = popupKusto.value;
  nameSubtitle.textContent = popupText.value;
  Exit();
}
popup.addEventListener('submit', formSubmitHandler);













