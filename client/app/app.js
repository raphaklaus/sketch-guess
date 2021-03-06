import { MenuController } from './utilities/menu.controller.js';
import { HomeController } from './components/home/home.controller.js';
import { RankingController } from './components/ranking/ranking.controller.js';
import { PointsController } from './components/points/points.controller.js';
import { PlayController } from './components/play/play.controller.js';
import { PrePlayController } from './components/preplay/preplay.controller.js';
import { CodeService } from './utilities/code.service';

import './utilities/global.style.styl';

var app = angular.module('SketchGuess', ['ui.router', 'btford.socket-io', 'ngclipboard']);

import { Router } from './router.js';

Router.setup(app);

app.factory('Socket', function(socketFactory) {
  return socketFactory();
});

app.service('CodeService', CodeService);

app.controller('MenuController', MenuController);
app.controller('HomeController', HomeController);
app.controller('RankingController', RankingController);
app.controller('PointsController', PointsController);
app.controller('PrePlayController', PrePlayController);
app.controller('PlayController', PlayController);
