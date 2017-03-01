import './play.view.html';
import Sketchpad from 'responsive-sketchpad';

class PlayController {
  constructor($stateParams, Socket) {
    const element = document.getElementById('sketchpad'),
      pad = new Sketchpad(element);

    pad.setLineColor('#4CAF50');

    console.log($stateParams);

    this._$stateParams = $stateParams;
    this.code = this._$stateParams.code;
    this.address = this._$stateParams.address;
    this.creator = this._$stateParams.creator;

    this.gameStarted = false;

    if (this.creator)
      Socket.emit('created_room', { room: this.code, creator: 'id here' });
    else {
      console.log('oi');
      Socket.emit('user_entered', { room: this.code, opponent: 'opponent' });
    }

    Socket.on('play', () => {
      console.log('Opponent has entered');
      this.gameStarted = true;
      // todo: hide waiting for opponent
      // todo: show sketchpad and countdown to play
    });
  }
}

PlayController.$inject = ['$stateParams', 'Socket'];

export { PlayController };
