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
        .state('ranking', {
          url: '/ranking',
          templateUrl: 'components/ranking/ranking.view.html',
          controller: 'RankingController as ctrl'
        });
    });
  }
}

export { Router };
