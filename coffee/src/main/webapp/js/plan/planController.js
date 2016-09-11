/**
 * Created by Administrator on 2016/8/20 0020.
 */
var plan = angular.module('plan', []);
plan.constant('PlanTitleItems', [
    {name: 'Task List', index: 0},
    {name: 'Current Task', index: 1},
    {name: 'Finished Task', index: 2},
    {name: 'Unfinished Task', index: 3},
    {name: 'My Sprint', index: 4}
]);

plan.controller('plan.controller', ['$scope','PlanTitleItems', function ($scope, PlanTitleItems) {
    $scope.planTitleItems = PlanTitleItems;
    $scope.selectedItem = PlanTitleItems[0];
}]);