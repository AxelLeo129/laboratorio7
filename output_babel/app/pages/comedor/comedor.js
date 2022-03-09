"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startComedor = void 0;

var _progress = require("../../components/progress");

var _story = require("../../components/story");

require("../../../global.scss");

const startComedor = () => {
  document.getElementById('progress').appendChild((0, _progress.progress)('Progreso de la historia:', 40));
  document.getElementById('content').appendChild((0, _story.story)('Comedor', 'animate__rubberBand', "<p>\n    Llegas a los restaurantes, te compras un helado. Parece que es un d\xEDa de mala suerte porque se te cae el\n    helado. \xA1Lo que faltaba! No solo tu mejor amigo no viene, sino que tambi\xE9n se te cae tu comida. <audio\n        controls autoplay>\n        <source src=\"../src/assets/ambiente.mp3\" type=\"audio/mpeg\">\n        Tu navegador no permite este recurso.\n    </audio> De forma extra\xF1a vuelves a sentir la misma sensaci\xF3n de la ma\xF1ana.\n</p>\n<p>\n    Al salir escuchas un peque\xF1o gemido, parece que alguien pide ayuda. Entonces te planteas:\n</p>", [{
    text: 'Seguir el sonido',
    color: 'primary',
    link: 'que.html'
  }, {
    text: 'Ignorarlo y regresar con el grupo.',
    color: 'secondary',
    link: 'esperas.html'
  }]));
};

exports.startComedor = startComedor;
startComedor();