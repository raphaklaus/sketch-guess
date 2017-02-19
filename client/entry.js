import Sketchpad from 'responsive-sketchpad';
import 'font-awesome-stylus/stylus/index.styl';
import 'bulma-stylus/bulma.styl';
import 'animate.css/animate.css';

// Load Angular things
import './angular-entry.js';

import './app/app.js';

// var socket = io();

var el = document.getElementById('sketchpad');
var pad = new Sketchpad(el);
pad.setLineColor('#4CAF50');
