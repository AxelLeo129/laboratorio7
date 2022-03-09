"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startCalma = void 0;

var _progress = require("../../components/progress");

var _story = require("../../components/story");

require("../../../global.scss");

var _fantasma = _interopRequireDefault(require("../../../assets/fantasma.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const startCalma = () => {
  document.getElementById('progress').appendChild((0, _progress.progress)('Progreso de la historia:', 80));
  document.getElementById('content').appendChild((0, _story.story)('Calma', 'animate__rubberBand', "<p>\n    Te calmas y tratas de deducir que es lo que est\xE1 atr\xE1s de ti cuando escuchas: <audio controls autoplay>\n        <source src=\"".concat(_fantasma.default, "\" type=\"audio/mpeg\">\n        Tu navegador no permite este recurso.\n    </audio> De forma extra\xF1a vuelves a sentir la misma sensaci\xF3n de la ma\xF1ana. Est\xE1s seguro que eso te sigui\xF3\n    desde tu casa, entonces forcejeas y cuando volteas...\n</p>"), [{
    text: 'Siguiente',
    color: 'primary',
    link: 'mal_final.html'
  }]));
};

exports.startCalma = startCalma;
startCalma();