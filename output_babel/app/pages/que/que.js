"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startQue = void 0;

var _progress = require("../../components/progress");

var _story = require("../../components/story");

require("../../../global.scss");

const startQue = () => {
  document.getElementById('progress').appendChild((0, _progress.progress)('Progreso de la historia:', 80));
  document.getElementById('content').appendChild((0, _story.story)('¡Ayuda!', 'animate__shakeY', "<p>\n    Sigues el sonido, ves algo extra\xF1o a lo lejos, no puedes notar bien lo que al rededor se divisa. Corres\n    porque los gritos se hacen m\xE1s intensos. Al llegar no encuentras nada, sin embargo, notas que algo te toma\n    por la espalda. Es una mano muy fr\xEDa. \xBFQu\xE9 deber\xEDas hacer?\n</p>", [{
    text: 'Luchar por liberarte.',
    color: 'secondary',
    link: 'luchar.html'
  }, {
    text: 'Calmarte y ver que sucede.',
    color: 'info',
    link: 'calma.html'
  }]));
};

exports.startQue = startQue;
startQue();