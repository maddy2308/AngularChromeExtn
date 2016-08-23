(function () {
    angular.module("ChromeExtension").factory('GitHubService', GitHubService);

    GitHubService.$inject = ['$http', '$q'];

    function GitHubService($http, $q) {

        return {
            getRepositories: getRepositories
        };

        function getRepositories(username) {
            var deferred = $q.defer();
            $http.get("https://api.github.com/users/" + username + "/repos")
                .then(function (response) {
                    deferred.resolve(response.data);
                }).catch(function (error) {
                    deferred.reject("Couldn't find the information" + error);
                });

            return deferred.promise;
        }

    }
})();