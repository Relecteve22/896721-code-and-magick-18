'use strict';

(function () {
  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var defaultCoordsPopup = {
    x: '50',
    y: '80'
  };

  var dropCoordsDefaultPopup = function () {
    setupDialogElement.style.top = defaultCoordsPopup.y + 'px';
    setupDialogElement.style.left = defaultCoordsPopup.x + '%';
  };

  var popupCloseHandler = function () {
    window.setup.popup.classList.add('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    dropCoordsDefaultPopup();
  };
  var popupEscPressHandler = function (evt) {
    if (evt.keyCode === window.setup.ESC_KEYCODE) {
      popupCloseHandler();
    }
  };
  var popupOpenHandler = function () {
    window.setup.popup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    dropCoordsDefaultPopup();
  };
  window.setup.openPopup.addEventListener('click', function () {
    popupOpenHandler();
  });

  window.setup.openPopup.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.setup.ENTER_KEYCODE) {
      popupOpenHandler();
    }
  });
  window.setup.closePopup.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.setup.ENTER_KEYCODE) {
      popupCloseHandler();
    }
  });
  window.setup.closePopup.addEventListener('click', function () {
    popupCloseHandler();
  });
  window.setup.setupUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', popupEscPressHandler);
  });

  window.setup.setupUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', popupEscPressHandler);
  });

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
