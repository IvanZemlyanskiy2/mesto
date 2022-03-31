let editButton = document.querySelector('.editbutton');
let popupContainer = document.querySelector('.popup__container');

let popupOpened = document.querySelector('.popup_opened');
let Close = document.querySelector('.Close');
let saveButton = document.querySelector('.savebutton');
let nameTitle = document.querySelector('.name__title');
let popupText = document.querySelector('.popup__text');
let nameSubtitle = document.querySelector('.name__subtitle');

let popupKusto = document.querySelector('.popup__kusto');
let popup = document.querySelector('.popup');

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
  Exit();
  nameTitle.textContent = popupKusto.value;
  nameSubtitle.textContent = popupText.value;
 }
popup.addEventListener('submit', formSubmitHandler);













