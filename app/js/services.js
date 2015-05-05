/**
 * Created by Felo on 2/28/2015.
 */

angular.module('TwitterWebClientApp.services',[])
    .factory('twitterAPIservice',function($http){

        var twitterSearch = {};

        twitterSearch.getTweets = function(searchToken) {
            return $http({
                method:'JSONP',
                url:'http://hidden-basin-9186.herokuapp.com/1.1/search/tweets.json?q='+searchToken+'&count=32&callback=JSON_CALLBACK'
            });
        }

        twitterSearch.getUserDetails = function(userId) {
            return $http({
                method:'JSONP',
                url:'http://hidden-basin-9186.herokuapp.com/1.1/users/show.json?id='+userId+'&include_entities=true&callback=JSON_CALLBACK'
            });
        }

        return twitterSearch;

    }).factory('sharedApplicationTweetsDataService', function() {
        return {
            saveTweetsResponse:function (data) {
                localStorage.setItem('responseObject', JSON.stringify(data));
                console.log(data);
            },
            getTweetsResponse:function () {
                return JSON.parse(localStorage.getItem('responseObject'));
            },
            saveUserResponse:function (data) {
                localStorage.setItem('userObject', JSON.stringify(data));
                console.log(data);
            },
            getUserResponse:function () {
                return JSON.parse(localStorage.getItem('userObject'));
            },
            saveSearchTerm:function (data) {
                localStorage.setItem('searchTerm', JSON.stringify(data));
                console.log(data);
            },
            getSearchTerm:function () {
                return JSON.parse(localStorage.getItem('searchTerm'));
            }
        };
    });
