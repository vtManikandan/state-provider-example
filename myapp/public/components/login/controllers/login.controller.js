(function() {
'use strict';

    angular
        .module('todo.login.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state'];
    function LoginController($state) {
        var vm = this;
        vm.loginSubmit = loginSubmit;

        ////////////////

        function loginSubmit() { 
            $state.go('master');
            // $state.go('employees');
        }
    }
})();