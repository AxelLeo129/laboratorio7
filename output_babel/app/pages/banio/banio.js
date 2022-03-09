"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startBanio = void 0;

var _progress = require("../../components/progress");

var _story = require("../../components/story");

require("../../../global.scss");

const startBanio = () => {
  document.getElementById('progress').appendChild((0, _progress.progress)('Progreso de la historia:', 40));
  document.getElementById('content').appendChild((0, _story.story)('Baño', 'animate__pulse', "<p>\n    Llegas al ba\xF1o, parece todo normal, por lo que procedes a usarlo. De un instante a otro sientes una fuerte\n    brisa que te pone la piel de gallina. <audio controls autoplay>\n        <source src=\"../src/assets/ambiente.mp3\" type=\"audio/mpeg\">\n        Tu navegador no permite este recurso.\n    </audio> De forma extra\xF1a vuelves a sentir la misma sensaci\xF3n de la ma\xF1ana.\n</p>\n<p>\n    Al salir escuchas un peque\xF1o gemido, parece que alguien pide ayuda. Entonces te planteas:\n</p>", [{
    text: 'Seguir el sonido',
    color: 'primary',
    link: 'luchar.html'
  }, {
    text: 'Ignorarlo y regresar con el grupo.',
    color: 'secondary',
    link: 'esperas.html'
  }]));
};

exports.startBanio = startBanio;
startBanio();