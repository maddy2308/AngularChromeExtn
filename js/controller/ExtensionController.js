(function () {
    angular.module("ChromeExtension").controller('ExtensionController', ExtensionController);

    ExtensionController.$inject = ['GitHubService', '$scope'];

    function ExtensionController(gitHubService, $scope) {
        var vm = this;

        vm.message = "Hello From AngularJS";

        gitHubService.getRepositories().then(successResponse, errorResponse);

        function successResponse(response) {
            vm.repos = response;
        }

        function errorResponse(error) {
            alert(error);
        }
    }
})();