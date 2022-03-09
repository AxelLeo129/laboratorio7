"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startBuenFinal = void 0;

var _progress = require("../../components/progress");

var _story = require("../../components/story");

require("../../../global.scss");

const startBuenFinal = () => {
  document.getElementById("progress").appendChild((0, _progress.progress)("Progreso de la historia:", 100));
  document.getElementById("content").appendChild((0, _story.story)("Final", 'animate__rubberBand', "<div class=\"alert alert-success\" role=\"alert\">\n            <p>Ves una luz al fondo y..... Despiertas. Todo fuel un buen sue\xF1o.</p>\n            <h5 class=\"alert-heading\">FIN</h5>\n        </div>", []));
};

exports.startBuenFinal = startBuenFinal;
startBuenFinal();