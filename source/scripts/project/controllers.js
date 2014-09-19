"use strict";

/* Controllers */

angular.module( "vokal.controllers", [] )


.controller( "Site", [ "$scope",

	function ( $scope )
	{
		$scope.name = "Site";
	}

] )


.controller( "Home", [ "$scope", "$interval",

	function ( $scope, $interval )
	{
        var count;
        $scope.totalRate = 0;
        $scope.entries = [];
        $scope.meetingStarted = false;
        $scope.everySecond = 0;

        $scope.addRate = function ( rate ) {
            $scope.entry = {
                rate: rate
            };

            $scope.entries.push($scope.entry);

            $scope.totalRate = $scope.totalRate + parseInt(rate);
        };

        $scope.removeRate = function ( rate ) {

            $scope.totalRate = $scope.totalRate - parseInt(rate.rate);

            $.each($scope.entries, function(i){
                if($scope.entries[i] === rate) {
                    $scope.entries.splice(i,1);
                    return false;
                }
            });

        };

        // countUp.js configuration
        // http://inorganik.github.io/countUp.js/
        var options = {
            useEasing : false,
            useGrouping : true,
            separator : ",",
            prefix: "$",
            decimal : "."
        };

        $scope.startMeeting = function () {

            // Multiply rate by four to account for 4 hours (14400ms)
            count = new countUp( "count-container", 0, $scope.totalRate * 4, 2, 14400, options );
            count.start();
            $('#elapsed-time').runner({
                autostart: true,
                milliseconds: true
            });
            $scope.meetingStarted = true;
        };

        $scope.stopMeeting = function () {
            count.stop();
            $( "#elapsed-time" ).runner( "stop" );
            $scope.stopped = true;
        };

        $scope.resumeMeeting = function () {
            count.resume();
            $( "#elapsed-time" ).runner( "start" );
            $scope.stopped = false;
        };

        $scope.resetMeeting = function () {
            // Need to stop before reset due to plugin constraints
            $( "#elapsed-time" ).runner( "stop" );
            $( "#elapsed-time" ).runner( "reset" );
            $scope.meetingStarted = false;
            $scope.stopped = false;
            $scope.entries = [];
            $scope.totalRate = 0;
            count.reset();
        };

	}

] );
