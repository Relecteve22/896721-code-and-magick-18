'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var NAME_WIZARDS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SUR_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS_COLOR = ['rgb(101, 137, 164,)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EAEYS_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_WRAP_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var fragment = document.createDocumentFragment();
var popup = document.querySelector('.setup');
var similarListElement = popup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var openPopup = document.querySelector('.setup-open');
var closePopup = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireballWrap = document.querySelector('.setup-fireball-wrap');

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var getRandomElements = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};
var popupOpenHandler = function () {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};
var popupCloseHandler = function () {
  popup.classList.add('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};
var popupEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    popupCloseHandler();
  }
};
var getWizards = function () {
  return {
    name: getRandomElements(NAME_WIZARDS),
    surName: getRandomElements(SUR_NAME),
    coatColor: getRandomElements(COATS_COLOR),
    eyesColor: getRandomElements(EAEYS_COLOR)
  };
};
var createArray = function () {
  var wizards = [];
  for (var i = 0; i < NAME_WIZARDS.length; i++) {
    wizards[i] = getWizards();
  }
  return wizards;
};
var renderWizard = function (wizard, index) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard[index].name + ' ' + wizard[index].surName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard[index].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard[index].eyesColor;

  return wizardElement;
};
var renderWizards = function () {
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(createArray(), i));
  }
  return similarListElement.appendChild(fragment);
};
renderWizards();

popup.querySelector('.setup-similar').classList.remove('hidden');

openPopup.addEventListener('click', function () {
  popupOpenHandler();
});

openPopup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    popupOpenHandler();
  }
});

closePopup.addEventListener('click', function () {
  popupCloseHandler();
});

setupUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', popupEscPressHandler);
});

setupUserName.addEventListener('blur', function () {
  document.addEventListener('keydown', popupEscPressHandler);
});

closePopup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    popupCloseHandler();
  }
});

wizardCoat.addEventListener('click', function () {
  var valueWizard = wizardCoat.style.fill = getRandomElements(WIZARD_COAT_COLORS);
  document.querySelector('.coat-color-wizard').value = valueWizard;
});

wizardEyes.addEventListener('click', function () {
  var valueWizard = wizardEyes.style.fill = getRandomElements(WIZARD_EYES_COLORS);
  document.querySelector('.eyes-color-wizard').value = valueWizard;
});

wizardFireballWrap.addEventListener('click', function () {
  var valueWizard = wizardFireballWrap.style.background = getRandomElements(WIZARD_FIREBALL_WRAP_COLORS);
  wizardFireballWrap.querySelector('input').value = valueWizard;
});
// комменнтраий
