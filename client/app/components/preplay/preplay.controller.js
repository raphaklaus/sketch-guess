import './preplay.view.html';

class PrePlayController {
  constructor($rootScope, $state, $stateParams) {
    this._$rootScope = $rootScope;
    this._$state = $state;
    this._$stateParams = $stateParams;
    this.code = this._$stateParams.code;
    this.address = this._$stateParams.address;
  }

  goToPlay() {
    this._$state.go('play', { address: this.address,
      code: this.code, word: this.word });
  }
}

PrePlayController.$inject = ['$rootScope', '$state', '$stateParams'];

export { PrePlayController };
