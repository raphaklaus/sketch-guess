import './home.style.styl';
import './home.view.html';

class HomeController {
  constructor($state, CodeService) {
    this._CodeService = CodeService;
    this.getRoom();
  }

  getRoom() {
    this._CodeService.getRoomAddress().then(result => {
      this.room = result;
    });
  }
}

HomeController.$inject = ['$state', 'CodeService'];

export { HomeController };
