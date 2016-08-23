(function () {
    angular.module("ChromeExtension").controller('ExtensionController', ExtensionController);

    ExtensionController.$inject = ['GitHubService', '$scope'];

    function ExtensionController(gitHubService, $scope) {
        var vm = this;

        vm.message = "Hello From AngularJS";
        vm.username = 'maddy2308';

        vm.getRepositories = getRepositories;

        function getRepositories(username) {
            if (!username) {
                username = vm.username;
            }
            gitHubService.getRepositories(username).then(successResponse, errorResponse);
        }

        function successResponse(response) {
            vm.repos = response;
        }

        function errorResponse(error) {
            alert(error);
        }
    }
})();