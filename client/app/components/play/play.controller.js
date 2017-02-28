import './play.view.html';
import Sketchpad from 'responsive-sketchpad';

class PlayController {
  constructor($stateParams, Socket) {
    this._$stateParams = $stateParams;
    this.code = this._$stateParams.code;
    this.address = this._$stateParams.address;

    this.gameStarted = false;

    console.log('hmm', $stateParams);

    const element = document.getElementById('sketchpad'),
      pad = new Sketchpad(element);

    pad.setLineColor('#4CAF50');

    Socket.on('opponent_entered', () => {
      console.log('Opponent has entered');
      this.gameStarted = true;
      // todo: hide waiting for opponent
      // todo: show sketchpad and countdown to play
    });
  }
}

PlayController.$inject = ['$stateParams', 'Socket'];

export { PlayController };
