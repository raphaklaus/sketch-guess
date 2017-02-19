class MenuController {
  constructor($state) {
    this._$state = $state;
  }

  activeMenu(state) {
    return this._$state.current.name === state ? 'is-active' : '';
  }
}

export { MenuController };
