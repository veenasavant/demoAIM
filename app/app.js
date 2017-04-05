'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);

angular.module('Main', [
    'Authentication',
	'Home',
    'ngRoute',
    'ngCookies'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })
        .when('/TVRatings', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/TVRatings.html'
        })
		.when('/Carousel', {
            controller: 'CarouselController',
            templateUrl: 'modules/home/views/Carousel.html'
        })
		.when('/EventGenerator', {
            controller: 'EventGeneratorController',
            templateUrl: 'modules/home/views/EventGenerator.html'
        })
		.when('/Amscaler', {
            controller: 'AmscalerController',
            templateUrl: 'modules/home/views/Amscaler.html'
        })
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
    /*     Veena check later */
		 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);