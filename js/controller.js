angular.module('controller', [])

.controller('BlogCtrl', ['$scope', '$http', '$log', '$timeout', function($scope, $http, $log, $timeout) {
    $scope.frm = {};
    $scope.notification = {};

    $scope.frmToggle = function() {
        $('#blogForm').slideToggle();
    }

    $http.get('./js/popData.php')
        .success(function(data) {
            $scope.blogs = data;
        })
        .error(function(err) {
            $log.error(err);
        })

    $scope.pushData = function($params) {
        $http.post('./js/pushData.php', { 'title': $params.title, 'description': $params.description })
            .success(function(data) {
                $scope.notification.success = true;
                $scope.notification.message = "Blog Successfully Added!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $scope.blogs = data;
                $scope.frm = {};
                $('#blogForm').slideToggle();
            })
            .error(function(err) {
                $scope.notification.error = true;
                $scope.notification.message = "Unable to add blog!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
            })
    }

    $scope.editData = function($blog) {
        $scope.editBlogData = $blog;
        $('#edit-modal').modal('show');
    }

    $scope.updateData = function($params) {
        $('#edit-modal').modal('hide');
        $http.post('./js/updateData.php', { 'title': $params.title, 'description': $params.description, 'id': $params.id})
            .success(function(data) {
                $scope.notification.success = true;
                $scope.notification.message = "Blog Successfully Updated!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $scope.blogs = data;
                $scope.frm = $scope.editBlogData = {};
            })
            .error(function(err) {
                $scope.notification.error = true;
                $scope.notification.message = "Unable to updated blog!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $log.error(err);
            })
    }

    $scope.removeData = function($params) {
        var cnfrm = confirm("Are you sure to delete?");
        if (cnfrm) {
            $http.post('./js/removeData.php', { 'id': $params })
                .success(function(data) {
                    $scope.notification.success = true;
                    $scope.notification.message = "Blog Successfully Deleted!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                    $scope.blogs = data;
                })
                .error(function(err) {
                    $scope.notification.error = true;
                    $scope.notification.message = "Unable to delete blog!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                })
        } else {
            // 
        }

    }

}])
