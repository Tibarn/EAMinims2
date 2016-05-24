angular.module('starter.controllers', [])

  .constant('ApiEndpoint', {
    url: 'http://localhost:8080/api'
  })




.controller('AppCtrl', function($scope, $ionicModal, $http, ApiEndpoint) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.newStudent = {};
  $scope.students = {};
  $scope.newSubject = {};
  $scope.subjects = {};
  $scope.studentid = {};
  $scope.selected = false;
  $scope.selected2 = false;
  $scope.student2 = {};


  $http.get(ApiEndpoint.url+'/student').success(function(data) {
      $scope.students = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.GetStudent =function(studentid){
  $http.get(ApiEndpoint.url+'/student/'+$scope.studentid).success(function(data) {
      $scope.student2 = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });};


  $scope.registrarStudent = function() {
    $http.post(ApiEndpoint.url+'/student', $scope.newStudent)
      .success(function(data) {
        $scope.newStudent = {};
        $scope.students = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.modificarStudent = function(newStudent) {
    $http.put(ApiEndpoint.url+'/student/' + $scope.newStudent._id, $scope.newStudent)
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
    $http.delete(ApiEndpoint.url+'/student/' + $scope.newStudent._id)
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



  $http.get(ApiEndpoint.url+'/subject').success(function(data) {
      $scope.subjects = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });






  $scope.registrarSubject = function() {
    $http.post(ApiEndpoint.url+'/subject', $scope.newSubject)
      .success(function(data) {
        $scope.newSubject= {};
        $scope.subjects = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };



  $scope.modificarSubject = function(newSubject) {
    $http.post(ApiEndpoint.url+'/subject/' + $scope.newSubject._id, $scope.newSubject)
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
    $http.delete(ApiEndpoint.url+'/subject/' + $scope.newSubject._id)
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

  $scope.selectID = function() {




  };




});




