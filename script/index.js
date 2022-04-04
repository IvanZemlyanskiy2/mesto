let editButton = document.querySelector('.name__editbutton');
let popupContainer = document.querySelector('.popup__container');

let popupOpened = document.querySelector('.popup_opened');
let exit = document.querySelector('.popup__close');
let saveButton = document.querySelector('.popup__savebutton');
let nameTitle = document.querySelector('.name__title');
let popupText = document.querySelector('.popup__input_kusto');
let nameSubtitle = document.querySelector('.name__subtitle');

let popupKusto = document.querySelector('.popup__input_text');
let popup = document.querySelector('.popup');

function Open() {
  popup.classList.toggle('popup_opened');
  popupKusto.value = nameTitle.textContent;
  popupText.value = nameSubtitle.textContent;
}
editButton.addEventListener('click', Open);

function Exit() {
  exit = popup.classList.remove('popup_opened');
}
exit.addEventListener('click', Exit);

function formSubmitHandler(evt) {
  evt.preventDefault();
  Exit();
  nameTitle.textContent = popupKusto.value;
  nameSubtitle.textContent = popupText.value;
 }
popup.addEventListener('submit', formSubmitHandler);













