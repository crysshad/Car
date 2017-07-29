var CarApp = angular.module('CarApp', []);

/*
 * Get car response
 */

CarApp.factory('GetCar', function($http) {
	var factory = [];

	factory.getCarDetails = function() {
		return $http.get("xml/getCarResponse.xml");
	}

	return factory;
});

/*
 * Create car response
 */

CarApp.factory('CreateCar', function($http) {
	var factory = [];

	factory.responseMsg = function() {
		return $http.get("xml/CreateCarsResponse.xml");
	}

	return factory;
});

CarApp.controller('Car', function($scope, $http, GetCar, CreateCar) {

	$scope.color = {
		singleSelect : null,
		option1 : 'option-1'
	};

	/*
	 * $http.get('json/car.json').success(function(response) { $scope.getCar =
	 * response;
	 *  })
	 * 
	 * $http.get('json/createCar.json').success(function(response) {
	 * $scope.createCar = response;
	 *  })
	 */

	$scope.carDetails = [];
	$scope.createCars;

	car();

	function car() {
		var x2js = new X2JS();

		GetCar.getCarDetails().success(function(response) {
			carDetail = x2js.xml_str2json(response);
			console.log(carDetail.response.car);
			$scope.carDetails = carDetail.response.car;
		});

		CreateCar.responseMsg().success(function(response) {
			createcar = x2js.xml_str2json(response);
			console.log(createcar.response);
			$scope.createCars = createcar.response;
		});

	}

});
