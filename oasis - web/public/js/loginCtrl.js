var loginCtrl = angular.module('loginCtrl',['gservice', 'loginService']);
loginCtrl.controller('loginCtrl', function($scope, $http, $rootScope, $location, $window, gservice, loginService){

    //Initializing form data
    $scope.formData = {};

    $scope.verifyLogin = function() {
        console.log("loginCtrl user: ");
        var user = $scope.formData.username;
        var pass = $scope.formData.password;
        console.log("loginCtrl user: ");
        console.log("loginCtrl pass: " + pass);

        loginService.verifyLogin(user, pass).then(()=>{
            console.log("inside promise");

            $window.location.href = '/#/submit';
            console.log($location.path());
            //gservice.initialize(33.753746, -84.386330, false);
        }, () => {
            alert("Invalid username or password");
            console.log("error in promise");
        });
        console.log("in loingCtrl");
    }
});