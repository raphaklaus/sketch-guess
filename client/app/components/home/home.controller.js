import './home.style.styl';
import './home.view.html';

class HomeController {
  constructor($state, CodeService) {
    this.roomInputButtonName = 'Copy';
    this._CodeService = CodeService;
    this.getRoom();
  }

  getRoom() {
    this._CodeService.getRoomAddress().then(result => {
      this.room = result;
    })
    .catch(error => {
      this.room = 'Oops! A problem solving room address, try again later';
      console.log(error);
    });
  }

  copy() {
    this.roomInputButtonName = 'Copied';
  }
}

HomeController.$inject = ['$state', 'CodeService'];

export { HomeController };
