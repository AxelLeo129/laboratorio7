"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startAdelante = void 0;

var _progress = require("../../components/progress");

var _story = require("../../components/story");

require("../../../global.scss");

require("bootstrap/dist/css/bootstrap.css");

const startAdelante = () => {
  document.getElementById('progress').appendChild((0, _progress.progress)('Progreso de la historia:', 80));
  document.getElementById('content').appendChild((0, _story.story)('Primeros animales', 'animate__flash', "<p>\n    Llegas y lo primero que ves son unos leones durmiendo una piedra. Giras y puedes alimentar a las jirafas.\n    Llega tu grupo de amigos y juntos se divierten alimentando a las jirafas. Tomas fotos a los anfibios y unas\n    selfies en el acuario.\n</p>\n<p>\n    De retepente ves que todos tus amigos comienzan a correr hacia fuera del acuario, t\xFA los siguies inmediatamente...\n</p>", [{
    text: 'Siguiente',
    color: 'primary',
    link: 'buen_final.html'
  }]));
};

exports.startAdelante = startAdelante;
startAdelante();