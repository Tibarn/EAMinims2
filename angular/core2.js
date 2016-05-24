angular.module('MainApp', [])

function mainController2($scope, $http) {
	
    $scope.selected2 = false;
    $scope.newSubject = {};
	$scope.subjects = {};
    $scope.studentid = {};
  
	

    
    
    $http.get('/api/subject').success(function(data) {
		$scope.subjects = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	
	

    
    $scope.registrarSubject = function() {
		$http.post('/api/subject', $scope.newSubject)
		.success(function(data) {
				$scope.newSubject= {};
				$scope.subjects = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};


    
    $scope.modificarSubject = function(newSubject) {
		$http.post('/api/subject/' + $scope.newSubject._id, $scope.newSubject)
		.success(function(data) {
				$scope.newSubject = {}; 
				$scope.subjects = data;
				$scope.selected2 = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

    $scope.borrarSubject = function(newSubject) {
		$http.delete('/api/subject/' + $scope.newSubject._id)
		.success(function(data) {
			$scope.newSubject= {};
			$scope.subjects = data;
			$scope.selected2 = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
	


$scope.selectSubject = function(subject) {
      
		$scope.newSubject= subject;
        
		$scope.selected2 = true;
       
		
	};
    
$scope.selectID = function(student) {
    
    $http.get('/api/student/'+ student).success(function(data) {
    $scope.studentid = data;
   
	})
	.error(function(data) {
    console.log('Error: ' + data);
        
	});
    
       
		
	};
}
