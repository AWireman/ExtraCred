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
        alert("In login");

        loginService.verifyLogin(user, pass).then(()=>{
            console.log("inside promise");

            $window.location.href = '/#/edit';
            console.log($location.path());
            gservice.refresh();
        }, () => {
            alert("Invalid username or password");
            console.log("error in promise");
        });
        console.log("in loingCtrl");
    }
});