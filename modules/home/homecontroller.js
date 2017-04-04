'use strict';

var app = angular.module('Home', []); 
 
 app.controller('AmscalerController',['$window', function ($window) {
  $window.location = 'http://amscaler.experienceinfyecs.net:8080/aim/#/login.html';
  
}]);
/* For carousel */
app.controller('CarouselController',['$window', function ($window) {
	//window.alert("Inside Carousel control ");
  $window.location = 'modules/home/views/carousel.html';
  
}]);

app.controller('HomeController', ['$scope', '$rootScope','$cookieStore','$http', function($scope,$rootScope,$cookieStore,$http) 
    {
		
    $scope.myIssue="NO PICTURE";   // default value
	$scope.response ="";
	$scope.chId ="0";
	$scope.chDesc ="OFF";
	$scope.maxRating = 5;
	$scope.ratedBy = 0;
	$scope.username = $rootScope.username;
	$scope.userid = $rootScope.userid;
	
	// In case of refresh rootscope does not have values. Therefore get them from the cookieStore
	if ($scope.username === undefined ){
	  $scope.globals = $cookieStore.get('globals') || {};
	  $scope.username = $scope.globals.currentUser.username;
	  $scope.userid = $scope.globals.currentUser.userid;
	  /* DEBUG MESSAGES 
	  window.alert("Got this from cookie store " + $scope.username  + $scope.userid);
	  */
	}
		
	$scope.rateBy = function (star) {
                $scope.ratedBy = star;
    }
	   
	$scope.addEvent = function (ch_id,ch_desc,event_type) {
		
		$scope.chId = ch_id;
		$scope.chDesc = ch_desc;
		
		$scope.ratedBy = 0;
		
		/* DEBUG MESSAGES 
		if (event_type == '0')
			window.alert("Switching off the TV");
		else
			window.alert("Changing Channel to: " + ch_desc + " by " + $scope.username+"-ID-"+$scope.userid);
		*/
		$http.get("php/demo_events_file_insert.php?user_id="+ $scope.userid +"&ch_id=" + ch_id +"&ch_desc=" + ch_desc + "&event_type="+ event_type )
				.then(function (response) { window.alert(response.data);$scope.response = response.data;}
				, function(response) {	window.alert(response.data);		}
				);	
				
	}//addEvent function ends
	
	$scope.addIssue = function (issue,ch_id,ch_desc) {
		/* DEBUG MESSAGES 		
		window.alert("Adding Issue: " + issue + " for Channel: " + ch_desc + " by " + $scope.username+"-ID-"+$scope.userid);
		*/	
		if (ch_id != "0" )
		{		
		$http.get("php/demo_user_issue_file_insert.php?user_id="+ $scope.userid +"&ch_id=" + ch_id +"&ch_desc=" + ch_desc+"&issue=" + issue + "&event_type=3" )
				.then(function (response) { window.alert(response.data);$scope.response = response.data;}
				, function(response) {	window.alert(response.data);		}
				);
		}
	}//addIssue funtion ends
	
	$scope.addUserRating = function (ch_id,ch_desc,rating) {
		
		/* DEBUG MESSAGES 	
		window.alert("Adding Rating: " + rating + " for Channel: " + ch_desc + " by " + $scope.username+"-ID-"+$scope.userid);
		*/
		if (ch_id != "0" && rating != "0" )
		{
			$http.get("php/demo_user_rating_file_insert.php?user_id="+ $scope.userid +"&ch_id=" + ch_id + "&ch_desc=" + ch_desc+ "&rating=" + rating + "&event_type=2" )
				.then(function (response) { window.alert(response.data);$scope.response = response.data;}
				, function(response) {	window.alert(response.data);		}
				);
		}	
	}//addRating function ends
	
    }]);
	
