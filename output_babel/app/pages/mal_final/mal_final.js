"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startMalFinal = void 0;

var _progress = require("../../components/progress");

var _story = require("../../components/story");

require("../../../global.scss");

const startMalFinal = () => {
  document.getElementById('progress').appendChild((0, _progress.progress)('Progreso de la historia:', 100));
  document.getElementById('content').appendChild((0, _story.story)('Final', 'animate__shakeX', "<div class=\"alert alert-danger\" role=\"alert\">\n        <p>Ves una luz al fondo y..... Despiertas. Todo fuel una pesadilla.</p>\n        <h5 class=\"alert-heading\">FIN</h5>\n    </div>", []));
};

exports.startMalFinal = startMalFinal;
startMalFinal();