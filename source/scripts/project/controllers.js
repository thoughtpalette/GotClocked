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
        $scope.entries = 0;
        $scope.meetingStarted = false;
        $scope.everySecond = 0;

        $scope.addRate = function ( rate ) {
            $scope.entries = $scope.entries + 1;
            $scope.totalRate = parseInt($scope.totalRate) + parseInt(rate);
        };

        // countUp.js configuration
        // http://inorganik.github.io/countUp.js/
        var options = {
            useEasing : true,
            useGrouping : true,
            separator : ",",
            prefix: "$",
            decimal : "."
        };

        $scope.startMeeting = function () {
            count = new countUp( "count-container", 0, $scope.totalRate, 2, 7200, options );
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
            $( "#elapsed-time" ).runner( "stop" );
            $( "#elapsed-time" ).runner( "reset" );
            $scope.meetingStarted = false;
            $scope.stopped = false;
            $scope.entries = 0;
            $scope.totalRate = 0;
            count.reset();
        };

	}

] );
