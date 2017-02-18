// import a from 'sketchpad/scripts/sketchpad.js';
import Sketchpad from 'responsive-sketchpad';
import 'font-awesome-stylus/stylus/index.styl';
import 'bulma-stylus/bulma.styl';
import 'animate.css/animate.css';
import '../style/main.styl';

console.log('Hi!');

var socket = io();


var el = document.getElementById('sketchpad');
var pad = new Sketchpad(el);
pad.setLineColor('#4CAF50');

// console.log('teste', );

// var sketchpad = new Sketchpad({
//   element: '#sketchpad',
//   width: 400,
//   height: 400,
// });
