var CarApp = angular.module('CarApp', []);

CarApp.controller('getCar', function($scope, $http) {

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
	
	/*function MyController($scope) {
    $scope.XmlInput = '';
    $scope.JsonOutput = '';
    $scope.XmlOutput = '';
    
    $scope.Convert = function() {
        var parsedXml = parseXml($scope.XmlInput);
        $scope.JsonOutput = xml2json(parsedXml, '\t');
        $scope.XmlOutput = json2xml(eval('json='+$scope.JsonOutput));
    };
}

function parseXml(xml) {
   var dom = null;
   if (window.DOMParser) {
      try { 
         dom = (new DOMParser()).parseFromString(xml, "text/xml"); 
      } 
      catch (e) { dom = null; }
   }
   else if (window.ActiveXObject) {
      try {
         dom = new ActiveXObject('Microsoft.XMLDOM');
         dom.async = false;
         if (!dom.loadXML(xml)) // parse error ..
            window.alert(dom.parseError.reason + dom.parseError.srcText);
      } 
      catch (e) { dom = null; }
   }
   else
      alert("oops");
   return dom;
}
	*/
	
	

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
		getCar.getCarDetails().success(function(response) {
			carDetail = x2js.xml_str2json(response);
			console.log(carDetail.response.car);
			$scope.carDetails = carDetail.response.car;
		});
	}
});*/






