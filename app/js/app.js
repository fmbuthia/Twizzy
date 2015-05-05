'use strict';

angular.module('TwitterWebClientApp',[
    'TwitterWebClientApp.controllers',
    'TwitterWebClientApp.services',
    'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when("/listview", {templateUrl: "views/list.html", controller: "tweetsListViewController"}).
        when("/gridview", {templateUrl: "views/grid.html", controller: "tweetsGridViewController"}).
        when("/listview/:id", {templateUrl: "views/user.html", controller: "userController"}).
        otherwise({redirectTo: '/listview'});
}]);