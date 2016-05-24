angular.module('MainApp', [])


function mainController($scope, $http) {
	$scope.newStudent = {};
	$scope.students = {};
	$scope.selected = false;
  

    

	$http.get('/api/student').success(function(data) {
        $scope.students = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
    
    

    
   $scope.registrarStudent = function() {
		$http.post('/api/student', $scope.newStudent)
		.success(function(data) {
				$scope.newStudent = {};
				$scope.students = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

    
 


    
    
	$scope.modificarStudent = function(newStudent) {
		$http.put('/api/student/' + $scope.newStudent._id, $scope.newStudent)
		.success(function(data) {
				$scope.newStudents = {}; 
				$scope.students = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	$scope.borrarStudent = function(newStudent) {
		$http.delete('/api/student/' + $scope.newStudent._id)
		.success(function(data) {
			$scope.newStudent = {};
			$scope.students = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

  
	
$scope.selectStudent = function(student) {
		$scope.newStudent = student;
		$scope.selected = true;
		
	};
    
    
    
   
}
