/**
 * Created by DELL on 2017/10/18.
 */
app.factory('carServer',['service', function (service) {
    var factorys ={
        getFan: function () {
           return service.ajax('get','http://localhost:8989/?data');
        }
    };
    return factorys
}]);