'use strict';

(function () {
  var similarListElement = window.setup.popup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();
  // var NAME_WIZARDS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var SUR_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var COATS_COLOR = ['rgb(101, 137, 164,)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // var EAEYS_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var OTHER_WIZARDS = 4;

  // var getWizards = function () {
  //   return {
  //     name: window.setup.getRandomElements(NAME_WIZARDS),
  //     surName: window.setup.getRandomElements(SUR_NAME),
  //     coatColor: window.setup.getRandomElements(COATS_COLOR),
  //     eyesColor: window.setup.getRandomElements(EAEYS_COLOR)
  //   };
  // };
  // var createArray = function () {
  //   var wizards = [];
  //   for (var i = 0; i < NAME_WIZARDS.length; i++) {
  //     wizards[i] = getWizards();
  //   }
  //   return wizards;
  // };
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };
  var successHandler = function (wizards) {
    for (var i = 0; i < OTHER_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[window.setup.getRandomInt(0, wizards.length)]));
    }
    similarListElement.appendChild(fragment);

    window.setup.popup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(window.backend.URL, successHandler, errorHandler);

  window.otherWizards = {
    successHandler: successHandler,
    errorHandler: errorHandler
  };
})();
