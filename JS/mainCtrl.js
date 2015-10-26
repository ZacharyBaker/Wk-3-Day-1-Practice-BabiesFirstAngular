var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
	var friends = [
		"Jaden",
		"Vlad",
		"Parker"
	];
	$scope.friends = friends;
	
	$scope.addFriend = function(name){

		friends.push(name);
		$scope.friends = friends;
		// $scope.friends.push(newName);
		$scope.newName = "";
	}
	
});