var CarApp = angular.module('CarApp', []);

CarApp
.factory(
		'Car',
		function($http) {
			var factory = [];

			factory.getCarDetails = function() {
				return $http
						.get("xml/response.xml");
			}

			return factory;
		});

CarApp.controller('getCar', function($scope, $http,Car) {

	$scope.color = {
		singleSelect : null,
		option1 : 'option-1'
	};

	$http.get('json/car.json').success(function(response) {
		$scope.getCar = response;

	})
	
	$http.get('json/createCar.json').success(function(response) {
		$scope.createCar = response;

	})
	
	
	
	
	$scope.carDetails = [];
	loadCar();

	function loadCar() {
		var x2js = new X2JS();
		Car.getCarDetails().success(function(response) {
			carDetail = x2js.xml_str2json(response);
		/*	console.log(carDetail.Envelope.Header.Body.GetCarsResponse.car);
			$scope.carDetails = carDetail.Envelope.Header.Body.GetCarsResponse.car;*/
			
			console.log(carDetail.response.car);
			$scope.carDetails = carDetail.response.car;
		});
	}
	
/*
	$(window)
			.load(
					function() {
						var x2js = new X2JS();
						function convertXml2JSon() {
							$("#jsonArea").val(
									JSON.stringify(x2js.xml_str2json($(
											"#xmlArea").val())));
						}

						function convertJSon2XML() {
							$("#xmlArea").val(
									x2js.json2xml_str($
											.parseJSON($("#jsonArea").val())));
						}

						$("#xmlArea")
								.val(
										"<response><car><name>SUBARU LEGACY</name><color>BLUE</color><fuelAmount>0</fuelAmount><carType>GAS</carType></car><car><name>TOYOTA CAMRY</name><color>WHITE</color><fuelAmount>10</fuelAmount><carType>GAS</carType></car></response>");
						convertXml2JSon();
						convertJSon2XML();
						$("#convertToJsonBtn").click(convertXml2JSon);
						$("#convertToXmlBtn").click(convertJSon2XML);
					});*/

});






