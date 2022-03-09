"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startApp = void 0;

var _progress = require("./components/progress");

var _story = require("./components/story");

var _header = require("./components/header");

var _ambiente = _interopRequireDefault(require("../assets/ambiente.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const startApp = () => {
  document.getElementById('progress').appendChild((0, _progress.progress)('Progreso de la historia:', 10));
  document.getElementById('content').appendChild((0, _story.story)('Inicio', 'animate__bounce', "<p>\n        Acabas de llegar al zool\xF3gico junto a tus compa\xF1eros, pero el d\xEDa de hoy todo parece distinto.\n        Hace una horas al despertarte sentiste un aura extra\xF1a que te ha seguido hasta la escuela y\n        posteriormente\n        al zoo...\n    </p>\n    <p>\n        Al instante de bajar del autobus, se escucharon a algunos cuervos chillar. De nuevo has sentido esa\n        sensaci\xF3n. <audio controls autoplay loop>\n            <source src=\"".concat(_ambiente.default, "\" type=\"audio/mpeg\">\n            Tu navegador no permite este recurso.\n        </audio> Sin embargo, no le tomas mucha importancia. Hoy es un d\xEDa para disfrutar con tus amigos,\n        pero,\n        anormalmente tu mejor amigo no ha podido asistir a la excursi\xF3n debido a que se refri\xF3 anoche.\n    </p>\n    <p>\n        Ingresas al parque, el profesor le da instrucciones al grupo. Al parecer tienes unos minutos para:\n    </p>"), [{
    text: 'Ir al baño',
    color: 'primary',
    link: 'banio.html'
  }, {
    text: 'Comer algo',
    color: 'secondary',
    link: 'comedor.html'
  }, {
    text: 'Ver los primeros animales.',
    color: 'info',
    link: 'adelantas.html'
  }, {
    text: 'Esperar',
    color: 'dark',
    link: 'esperas.html'
  }])); //Extra preset-env

  const header_obj = {
    id: 'header',
    getHeader: function getHeader() {
      (0, _header.header)(this.id);
    }
  };
  const unboundGetHeader = header_obj.getHeader;
  const boundGetHeader = unboundGetHeader.bind(header_obj);
  boundGetHeader();
};

exports.startApp = startApp;