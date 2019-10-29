'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_WRAP_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var popup = document.querySelector('.setup');
  var openPopup = document.querySelector('.setup-open');
  var closePopup = document.querySelector('.setup-close');
  var setupUserName = document.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireballWrap = document.querySelector('.setup-fireball-wrap');
  var modalForm = document.querySelector('.setup-wizard-form');

  var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var getRandomElements = function (array) {
    return array[getRandomInt(0, array.length - 1)];
  };

  wizardCoat.addEventListener('click', function () {
    var input = modalForm.elements['coat-color'];
    var valueWizard = wizardCoat.style.fill = getRandomElements(WIZARD_COAT_COLORS);
    input.value = valueWizard;
  });

  wizardEyes.addEventListener('click', function () {
    var input = modalForm.elements['eyes-color'];
    var valueWizard = wizardEyes.style.fill = getRandomElements(WIZARD_EYES_COLORS);
    input.value = valueWizard;
  });

  wizardFireballWrap.addEventListener('click', function () {
    var input = modalForm.elements['fireball-color'];
    var valueWizard = wizardFireballWrap.style.background = getRandomElements(WIZARD_FIREBALL_WRAP_COLORS);
    input.value = valueWizard;
  });

  window.setup = {
    ESC_KEYCODE: ESC_KEYCODE,
    closePopup: closePopup,
    ENTER_KEYCODE: ENTER_KEYCODE,
    setupUserName: setupUserName,
    openPopup: openPopup,
    popup: popup,
    getRandomInt: getRandomInt,
    getRandomElements: getRandomElements,
    modalForm: modalForm
  };
})();
