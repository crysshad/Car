var CarApp = angular.module('CarApp', []);

CarApp.controller('getCar', function($scope, $http) {

	$scope.color = {
		singleSelect : null,
		option1 : 'option-1'
	};

	$http.get('json/car.json').success(function(response) {
		$scope.getCar = response;

	})

});

/*CarApp
		.factory(
				'getCar',
				function($http) {
					var factory = [];

					factory.getCarDetails = function() {
						return $http
								.get("xml/response.xml");
					}

					return factory;
				});

CarApp.controller('car', function($scope, getCar) {

	$scope.color = {
		singleSelect : null,
		option1 : 'option-1'
	};
	
	$scope.carDetails = [];
	loadCar();

	function loadCar() {
		var x2js = new X2JS();
		getCar.getCarDetails().success(function(data) {
			carDetail = x2js.xml_str2json(data);
			console.log(carDetail.response.car);
			$scope.carDetails = carDetail.response.car;
		});
	}
});
*/


