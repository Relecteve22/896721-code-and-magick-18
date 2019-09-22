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
var OFFSET_TEXT_FROM_COLUMNS = 20;
var PADDING_TOP = 60;
var PADDING_LEFT = 145;
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var drawColumns = function (ctx, names, times) {
  for (var i = 0; i < names.length; i++) {
    drawColumn(ctx, names[i], times[i], times, i);
  }
};

var drawColumn = function (ctx, name, time, timesArray, index) {
  var maxTime = getMaxElement(timesArray);

  var columnX = PADDING_LEFT + index * (COLUMN_WIDTH + GAP_COLUMN);

  var getColumnY = function (timeText) {
    return Math.floor(PADDING_TOP + TEXT_HEIGHT + OFFSET_TEXT_FROM_COLUMNS + (MAX_COLUMN_HEIGHT - (MAX_COLUMN_HEIGHT * timeText) / maxTime));
  };

  var getColumnNameY = function () {
    return PADDING_TOP + MAX_COLUMN_HEIGHT + OFFSET_TEXT_FROM_COLUMNS + 20;
  };

  var getColumnTimeY = function (timeIndex) {
    return getColumnY(timeIndex) - OFFSET_TEXT_FROM_COLUMNS;
  };

  var getColorColumn = function () {
    return 'hsl(240, ' + getRandomInt(1, 100) + '%, ' + '50%)';
    // return 'rgb(0, 0, ' + getRandomInt(100, 255) + ')';
  };

  // осталось:
  // вывести колонку на первое место с именем 'вы'
  // и зависимости от колонки показовать цвет

  // var jfi = 50;
  // var numvk = 100;
  // for (var i = 0; i < name.length; i++) {
  //   ctx.fillRect(numvk + jfi, 80, 40, (MAX_COLUMN_HEIGHT * Math.floor(time[i])) / maxTime);
  //   jfi = jfi + 50;
  // }

  // Наша формула для X: index * ШК + index * ОК — можно написать функцию getColumnX +
  // Наша формула для Y имени: ? — можно написать функцию getColumnNameY +
  // Наша формуля для Y колонки: ? — можно написать функцию getColumnY +
  // Наша формула для Y времени: YКолонки - отступТекстаОтКолонки (минус потому что координаты идут сверху внизу) +
  //

  drawText(ctx, name, columnX, getColumnNameY());
  drawText(ctx, Math.floor(time), columnX, getColumnTimeY(time));

  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = getColorColumn();
  }
  ctx.fillRect(columnX, getColumnY(time), 40, (MAX_COLUMN_HEIGHT * time) / maxTime);

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

  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(100, 280);
  ctx.lineTo(520, 280);
  ctx.lineTo(520, 10);
  ctx.lineTo(100, 10);
  ctx.stroke();

  drawText(ctx, 'Ура вы победили!', 120, 35);
  drawText(ctx, 'Список результатов:', 120, 55);

  drawColumns(ctx, names, times);
};
