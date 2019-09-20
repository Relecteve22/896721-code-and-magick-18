'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var COORDINATE_X_CLOUD = 100;
var COORDINATE_Y_CLOUD = 10;
var COLOR_CLOUD = 'white';
var COLOR_SHADEOW = 'rgba(0, 0, 0, 0.7)';
var GAP_CLOUD = 10;
var GAP_COLUMN = 50;
var TEXT_FONT = '16px PT Mono';
var COLOR_TEXT = '#000';
var COLUMN_WIDTH = 40;
var MAX_COLUMN_HEIGHT = 150;
var OFFSET_TEXT_FROM_COLUMNS = 30;
var PADDING_TOP = 50;
var TEXT_HEIGHT = 16;

var drawCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var drawText = function (ctx, text, coordinateX, coordinateY) {
  ctx.fillStyle = COLOR_TEXT;
  ctx.font = TEXT_FONT;
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, coordinateX, coordinateY);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var drawColumns = function (ctx, names, times) {
  for (var i = 0; i < names.length; i++) {
    drawColumn(ctx, names[i], times[i], i);
  }
};

var drawColumn = function (ctx, name, time, index) {
  var maxTime = getMaxElement(time);

  var getColumnX = function (i) {
    return 130 + (i * COLUMN_WIDTH + i * GAP_COLUMN);
  };

  var getColumnNameY = function () {
    return PADDING_TOP + MAX_COLUMN_HEIGHT + OFFSET_TEXT_FROM_COLUMNS;
  };

  // var getColumnY = function () {
  //   for (var i = 0; i < names.length; i++) {
  //     var number = PADDING_TOP + TEXT_HEIGHT + OFFSET_TEXT_FROM_COLUMNS + (MAX_COLUMN_HEIGHT - (MAX_COLUMN_HEIGHT * Math.floor(times[i])) / maxTime);
  //   }
  //   return Math.floor(number);
  // };

  var getColumnY = function (players, timeText, indexPlayer) {
    for (var i = 0; i < players.length; i++) {
      // var number = PADDING_TOP + TEXT_HEIGHT + OFFSET_TEXT_FROM_COLUMNS + (MAX_COLUMN_HEIGHT - (MAX_COLUMN_HEIGHT * Math.floor(timeText[i])) / maxTime);  для проверки
      if (i === indexPlayer) {
        var numberMax = PADDING_TOP + TEXT_HEIGHT + OFFSET_TEXT_FROM_COLUMNS + (MAX_COLUMN_HEIGHT - (MAX_COLUMN_HEIGHT * Math.floor(timeText[indexPlayer])) / maxTime);
      }
      // console.log(Math.floor(number)); для проверки
    }
    return Math.floor(numberMax);
  };

  // var getColumnTimeY = function () { ----------
  //   return getColumnY() - OFFSET_TEXT_FROM_COLUMNS; ----------
  // }; ----------

  // Наша формула для X: index * ШК + index * ОК — можно написать функцию getColumnX +
  // Наша формула для Y имени: ? — можно написать функцию getColumnNameY +
  // Наша формуля для Y колонки: ? — можно написать функцию getColumnY
  // Наша формула для Y времени: YКолонки - отступТекстаОтКолонки (минус потому что координаты идут сверху внизу)
  //

  // Пишем имя
  drawText(ctx, name, getColumnX(index), getColumnNameY());
  // Пишем время
  // drawText(ctx, Math.floor(time[i]), getColumnX(index), вычисленныйYДляВремени); --------
  //   drawText(ctx, округленноеВремя, getColumnX(index), вычисленныйYДляВремени);

  // Рисуем колонку, внутри будет простой ctx.fillRect
  // Тебе понадобится функция, которая будет получать текст в зависимости от имени
  // Для всех игроков кроме Вы, можно воспользоваться такой формулой расчета цвета:
  // return 'rgb(0, 0, ' + случайноеЧислоОт100До255Включительно + ')';
  // Пригодится и отдельная функция для случайного числа
  // Но расчетом цвета можно заняться в самом конце
  // drawColumn(ctx, getColumnX(index), вычисленныйYКолонки, расчитанныйЦветКолонки); ----------
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, COORDINATE_X_CLOUD + GAP_CLOUD, COORDINATE_Y_CLOUD + GAP_CLOUD, COLOR_SHADEOW);
  drawCloud(ctx, COORDINATE_X_CLOUD, COORDINATE_Y_CLOUD, COLOR_CLOUD);

  drawText(ctx, 'Ура вы победили!', 120, 35);
  drawText(ctx, 'Список результатов:', 120, 55);

  drawColumns(ctx, names, times);
};
