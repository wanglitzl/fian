
app.controller('finaController', ['$scope','carServer',function ($scope,carServer) {
    carServer.getFan()
        .then(function (result) {
            console.log(JSON.parse(result.data.data));
            $scope.info = JSON.parse(result.data.data)
        })
}]);