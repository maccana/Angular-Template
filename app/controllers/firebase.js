'use strict';
/* Firebase Ctrl */

templates.controller('FirebaseCtrl', function($scope, $firebase) {
 $scope.pageTitle = 'Firebase Example';

 // var ref = new Firebase("https://sb1m27fx608.firebaseio-demo.com/");
 // var ref = new Firebase("https://employee-list.firebaseio.com/Employees");
 //
 // $scope.messages = $firebase(ref);

 $scope.employeeName = "";
	$scope.employeeAge = 0;
	$scope.employees = {};
	// var ref = new Firebase("https://kf1b63m1vnc.firebaseio-demo.com/");
	$scope.myData = new Firebase("https://employee-list.firebaseio.com/Employees");
	$scope.employeeData = $firebase($scope.myData);

	//var employeeList = JSON.stringify($scope.employeeData);

	$scope.saveEmployee = function() {
		$scope.myData.push({employeeName:$scope.employeeName,
							employeeAge:$scope.employeeAge
		});
		//alert("You have saved: " + $scope.employeeName + " Aged: " + $scope.employeeAge);
		$scope.employeeName = "";
		$scope.employeeAge = 0;
	}

	$scope.deleteEmployee = function(key,name) {
		// get ref to db collection
		var employeeRef = new Firebase("https://employee-list.firebaseio.com/Employees");

	}

	$scope.myData.on('value', function(snapshot) {
		$scope.employees = snapshot.val();
		$scope.$apply(); // updates employee list on page refresh
	});

})
