class CodeService {
  constructor($http) {
    this._$http = $http;
  }

  getRoomAddress() {
    return this._$http.get('/api/code').then(result => {
      return {
        address: `${location.href}play/${result.data.code}`,
        code: result.data.code
      };
    });
  }
}

CodeService.$inject = ['$http'];

export { CodeService };
