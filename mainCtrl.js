app.controller('mainCtrl', function($scope, dataService) {

	$scope.getData = dataService.getData();

	$scope.addData = function(){
		dataService.addData($scope.newQuote);
	};

	$scope.removeData = function(index) {
		$scope.getData.splice(index, 1);
	};


});