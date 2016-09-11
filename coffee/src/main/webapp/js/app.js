/**
 * Created by Administrator on 2016/8/18 0018.
 */
var main = angular.module('Coffee', ['ngRoute', 'admin', 'backend', 'database', 'frontend', 'plan']);
main.constant('TopNavigationItems', [
    {name: 'Admin', path: '/admin'},
    {name: 'Back End', path: '/backend'},
    {name: 'Front End', path: '/frontend'},
    {name: 'Database', path: '/database'},
    {name: 'Plan', path: '/plan'}
]);

main.constant('LeftNavigationItems', [
    {iconName: 'alarm.svg', text: 'Follow Up'},
    {iconName: 'folder.svg', text: 'Recent Item'}
]);

main.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/admin', {
        templateUrl: 'views/admin/administration.html',
        controller: 'admin.controller'
    }).when('/backend', {
        templateUrl: 'views/backend/backend.html',
        controller: 'backend.controller'
    }).when('/database', {
        templateUrl: 'views/database/database.html',
        controller: 'database.controller'
    }).when('/frontend', {
        templateUrl: 'views/frontend/frontend.html',
        controller: 'frontend.controller'
    }).when('/plan', {
        templateUrl: 'views/plan/plan.html',
        controller: 'plan.controller'
    })

}]);

main.controller('TopNavigationController', ['$scope', 'TopNavigationItems', '$location', function ($scope, TopNavigationItems, $location) {
    $scope.topItems = TopNavigationItems;

    $scope.topItemClick = function (item) {
        $location.path(item.path);
    };

    console.log("1231312");
}]);

main.controller('leftNavigationController', ['$scope','LeftNavigationItems', function ($scope, LeftNavigationItems) {
    $scope.leftNavigationItems = LeftNavigationItems;
}]);
