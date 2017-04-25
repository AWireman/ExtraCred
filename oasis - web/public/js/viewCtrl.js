var viewCtrl = angular.module('viewCtrl',['gservice', 'loginService']);
viewCtrl.controller('viewCtrl', function($scope, $http, $rootScope, $location, $window, gservice, loginService){

    $scope.user = loginService.user;

    $scope.checkPermission = function(user) {
        if (user.accountType == "User") {
            return false;
        }
        return true;
    }

    $scope.checkManager = function(user) {
        if (user.accountType == "Manager") {
            return true;
        }
        return false;
    }

    //alert("in viewCtrl");
    //gservice.refresh(33.753746, -84.386330, global.sourceReports);
    //gservice.refresh(global.sourceReports[global.sourceReports.length - 1]["latitude"],
    //                                                       global.sourceReports[global.sourceReports.length - 1]["longitude"],
    //                                                       global.sourceReports);
    $http.get("/sourceReportList").then(function(response) {
        $scope.sourceReports = response.data;
    });

    $http.get("/qualityReportList").then(function(response) {
        $scope.qualityReports = response.data;
        console.log(response.data);
    });
});