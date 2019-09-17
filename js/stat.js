'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var COORDINATE_X_CLOUD = 100;
var COORDINATE_Y_CLOUD = 10;
var COLOR_CLOUD = 'white';
var COLOR_SHADEOW = 'rgba(0, 0, 0, 0.7)';
var GAP_CLOUD = 10;
var TEXT_FONT = '16px PT Mono';
var COLOR_TEXT = '#000';

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

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, COORDINATE_X_CLOUD + GAP_CLOUD, COORDINATE_Y_CLOUD + GAP_CLOUD, COLOR_SHADEOW);
  drawCloud(ctx, COORDINATE_X_CLOUD, COORDINATE_Y_CLOUD, COLOR_CLOUD);

  drawText(ctx, 'Ура вы победили!', 120, 35);
  drawText(ctx, 'Список результатов:', 120, 55);

  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillRect(150, 100, 40, 150);

  var drawColumn = function (arrayNames, arrayTimes) {
    var coordX = 140;
    for (var i = 0; i < arrayNames.length; i++) {
      drawText(ctx, arrayNames[i], coordX, 250);
      coordX = coordX + 100;
    }
  };

  drawColumn(names);
};
