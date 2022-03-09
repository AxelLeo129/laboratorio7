"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.header = void 0;

require("bootstrap/dist/css/bootstrap.css");

const header = div => {
  const hr = document.createElement('hr');
  hr.classList.add('my-4');
  const p3 = document.createElement('p');
  p3.innerHTML = 'Lee la historia y luego selecciona una opción para continuar con la misma.';
  const summary = document.createElement('summary');
  summary.innerHTML = 'Instrucciones';
  const details = document.createElement('details');
  details.appendChild(summary);
  details.appendChild(p3);
  const h1 = document.createElement('h1');
  h1.classList.add('display-4', 'animate__animated', 'animate__pulse');
  h1.innerHTML = 'El Zoológico de la Locura';
  const div2 = document.createElement('div');
  div2.classList.add('jumbotron');
  div2.appendChild(h1);
  div2.appendChild(details);
  div2.appendChild(hr);
  const p = document.createElement('p');
  p.innerHTML = 'Universidad del Valle de Guatemala';
  const p1 = document.createElement('p');
  p1.innerHTML = 'Sistemas y tecnologías Web';
  const p2 = document.createElement('p');
  p2.innerHTML = 'Axel Leonardo López Barrera 20768';
  const div1 = document.createElement('div');
  div1.appendChild(p);
  div1.appendChild(p1);
  div1.appendChild(p2);
  const global_div = document.getElementById(div);
  global_div.appendChild(div1);
  global_div.appendChild(div2);
};

exports.header = header;