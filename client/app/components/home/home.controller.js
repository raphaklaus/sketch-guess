import './home.style.styl';
import './home.view.html';

class HomeController {
  constructor($state) {
    console.log('Home');
  }
}

HomeController.$inject = ['$state'];

export { HomeController };
