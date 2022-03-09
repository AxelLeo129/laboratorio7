"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startLuchar = void 0;

var _progress = require("../../components/progress");

var _story = require("../../components/story");

require("../../../global.scss");

var _susto = _interopRequireDefault(require("../../../assets/susto.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const startLuchar = () => {
  document.getElementById('progress').appendChild((0, _progress.progress)('Progreso de la historia:', 80));
  document.getElementById('content').appendChild((0, _story.story)('Luchas', 'animate__rubberBand', "<p>\n    Comienzas a forcejear, no logras liberarte. Sin embargo, sigues intentanto hasta que escuchas: <audio controls autoplay>\n        <source src=\"".concat(_susto.default, "\" type=\"audio/mpeg\">\n        Tu navegador no permite este recurso.\n    </audio> quedas desconcertado. Sigues luchando hasta que te liberas. Te das la vuelta y:\n</p>"), [{
    text: 'Siguiente',
    color: 'primary',
    link: 'mal_final.html'
  }]));
};

exports.startLuchar = startLuchar;
startLuchar();