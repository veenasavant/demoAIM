'use strict';
 
angular.module('Authentication')
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        
		// reset login status
		
        AuthenticationService.ClearCredentials();
		
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password,$scope.userid);
					
					if ( $scope.myAIM == "Amscaler")
					{   // DEBUG MESSAGES window.alert("Amscaler ");
                         $location.path('/Amscaler');}
					 else 
					 {   // DEBUG MESSAGES window.alert("TV Ratings");
						 $location.path('/TVRatings');
					 }
					 
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);