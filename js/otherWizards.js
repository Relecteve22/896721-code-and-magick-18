'use strict';

(function () {
  var similarListElement = window.setup.popup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();
  var NAME_WIZARDS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SUR_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COATS_COLOR = ['rgb(101, 137, 164,)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EAEYS_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var OTHER_WIZARDS = 4;

  var getWizards = function () {
    return {
      name: window.setup.getRandomElements(NAME_WIZARDS),
      surName: window.setup.getRandomElements(SUR_NAME),
      coatColor: window.setup.getRandomElements(COATS_COLOR),
      eyesColor: window.setup.getRandomElements(EAEYS_COLOR)
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
    for (var i = 0; i < OTHER_WIZARDS; i++) {
      fragment.appendChild(renderWizard(createArray(), i));
    }
    return similarListElement.appendChild(fragment);
  };
  renderWizards();

  window.setup.popup.querySelector('.setup-similar').classList.remove('hidden');
})();
