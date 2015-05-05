/**
 * Created by Felo on 2/28/2015.
 */

angular.module('TwitterWebClientApp.controllers',[]).

    /*Tweets Grid View Controller*/
    controller('tweetsGridViewController',function($scope, sharedApplicationTweetsDataService){

        //Persist tweets data if available
        $scope.tweetsList = sharedApplicationTweetsDataService.getTweetsResponse();

        //Persist search Term
        $scope.searchTerm = sharedApplicationTweetsDataService.getSearchTerm();

    }).
    /*Tweets List View Controller*/
    controller('tweetsListViewController',function($scope, twitterAPIservice, sharedApplicationTweetsDataService){

        $scope.nameFilter = null;

        //Persist tweets dat if available
        $scope.tweetsList = sharedApplicationTweetsDataService.getTweetsResponse();

        //Persist search Term
        $scope.searchTerm = sharedApplicationTweetsDataService.getSearchTerm();

        //Request tweets from twitter using provided search term
        $scope.search = function() {
            twitterAPIservice.getTweets($scope.searchTerm).success(function (response) {
                $scope.tweetsList = response.statuses;

                //Save tweets data to persist later
                sharedApplicationTweetsDataService.saveTweetsResponse(response.statuses);

                //Save search Term to persist later
                sharedApplicationTweetsDataService.saveSearchTerm($scope.searchTerm);

            });
        };
    }).

    /* Tweeter Controller */
    controller('userController', function($scope, $routeParams, twitterAPIservice) {
        //Request user details from twitter
        twitterAPIservice.getUserDetails($routeParams.id).success(function (response) {
            $scope.tweeterDetails = response;
        });
    });
