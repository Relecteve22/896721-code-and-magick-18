'use strict';

var fragment = document.createDocumentFragment();
var setup = document.querySelector('.setup');
var NAME_WIZARDS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SUR_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS_COLOR = ['rgb(101, 137, 164,)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EAEYS_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

setup.classList.remove('hidden');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var getRandomArray = function (array) {
  return array[getRandomInt(0, array.length)];
};

var getWizards = function () {
  return {
    name: getRandomArray(NAME_WIZARDS),
    surName: getRandomArray(SUR_NAME),
    coatColor: getRandomArray(COATS_COLOR),
    eyesColor: getRandomArray(EAEYS_COLOR)
  };
};

var getArray = function () {
  var wizards = [];
  for (var i = 0; i < NAME_WIZARDS.length; i++) {
    wizards[i] = getWizards();
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard[i].name + wizard[i].surName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard[i].eyesColor;

  return wizardElement;
};

for (var i = 0; i < NAME_WIZARDS.length; i++) {
  fragment.appendChild(renderWizard(getArray()));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');
