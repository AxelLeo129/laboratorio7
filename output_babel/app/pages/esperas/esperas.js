"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startEsperas = void 0;

var _progress = require("../../components/progress");

var _story = require("../../components/story");

require("../../../global.scss");

const startEsperas = () => {
  document.getElementById('progress').appendChild((0, _progress.progress)('Progreso de la historia:', 40));
  document.getElementById('content').appendChild((0, _story.story)('Esperas', 'animate__rubberBand', "<p>\n    Regresas con tus compa\xF1eros y juntos parten a ver las exhibiciones.  \n</p>", [{
    text: 'Siguiente',
    color: 'primary',
    link: 'adelantas.html'
  }]));
};

exports.startEsperas = startEsperas;
startEsperas();