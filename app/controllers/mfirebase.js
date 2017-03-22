'use strict';
/* Firebase Ctrl */

angular.module('templates')
  .controller('FirebaseCtrl', function($scope, $firebase) {
    // Title for page saved to $scope var
    $scope.pageTitle = 'Firebase Example';

    // var ref = new Firebase("https://sb1m27fx608.firebaseio-demo.com/");
    // var ref = new Firebase("https://employee-list.firebaseio.com/Employees");

    $scope.employeeName = '';
    $scope.employeeRole = '';
    $scope.employees = {};
    // var ref = new Firebase("https://kf1b63m1vnc.firebaseio-demo.com/");
    $scope.employeesRef = new Firebase("https://employee-list.firebaseio.com/Employees");
    $scope.employeeData = $firebase($scope.employeesRef);

    //var employeeList = JSON.stringify($scope.employeeData);
    $scope.saveEmployee = function() {
    	$scope.employeesRef.push({
        employeeName:$scope.employeeName,
    		employeeRole:$scope.employeeRole
    	});
    	//alert("You have saved: " + $scope.employeeName + " Aged: " + $scope.employeeAge);
    	$scope.employeeName = '';
    	$scope.employeeRole = '';
    }

    $scope.deleteEmployee = function(key,name) {
      console.log('Obj ref key in firebase: ', key);
    	// get ref to db collection
    	var employeeRef = new Firebase("https://employee-list.firebaseio.com/Employees/" + key);
      employeeRef.remove();
    }

    // Keeping employees table updated in real-time
    $scope.employeesRef.on('value', function(snapshot) {
    	$scope.employees = snapshot.val();
    	$scope.$apply(); // updates employee list on page refresh
    });

  });
