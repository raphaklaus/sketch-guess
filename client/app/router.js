class Router {
  static setup(app) {
    app.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      $locationProvider.hashPrefix('!');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'components/home/home.view.html',
          controller: 'HomeController as ctrl'
        })
        .state('points', {
          url: '/points',
          templateUrl: 'components/points/points.view.html',
          controller: 'PointsController as ctrl'
        })
        .state('play', {
          url: '/play',
          params: {
            address: null,
            code: null,
            word: null
          },
          templateUrl: 'components/play/play.view.html',
          controller: 'PlayController as ctrl'
        })
        .state('preplay', {
          url: '/preplay',
          params: {
            address: null,
            code: null,
            word: null
          },
          templateUrl: 'components/preplay/preplay.view.html',
          controller: 'PrePlayController as ctrl'
        })
        .state('ranking', {
          url: '/ranking',
          templateUrl: 'components/ranking/ranking.view.html',
          controller: 'RankingController as ctrl'
        });
    });
  }
}

export { Router };
