(function() {
    'use strict';
    angular.module('todo').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {  
        console.log("called");    
        $urlRouterProvider.otherwise('/login');
        $stateProvider
                /**
                 * if you need to redirect master page with controller
                 */
                .state("login", {
                    url: "/login",
                    templateUrl: '/components/login/views/login.html',
                    controller: 'LoginController as vm'
                })
                /**
                 * if you need to redirect master page without controller
                 */
                // .state("login", {
                //     url: "/login",
                //     templateUrl: '/components/login/views/login1.html'
                // })
                .state("master", {
                    url: "/master",
                    templateUrl: '/components/master/views/master.views.html'
                })
                .state("master.first", {
                    url: "/master/first",
                    templateUrl: '/components/pages/views/first.views.html'
                })
                .state("master.second", {
                    url: "/master/second",
                    templateUrl: '/components/pages/views/second.views.html'
                })
    }]).run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            console.log("view called");
        });
    }]);

})();