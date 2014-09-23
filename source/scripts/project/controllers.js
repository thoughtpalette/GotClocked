"use strict";

/* Controllers */

angular.module( "vokal.controllers", [] )


.controller( "Site", [ "$scope",

	function ( $scope )
	{
		$scope.name = "Site";
	}

] )

.controller( "Home", [ "$scope", "$timeout",

    function ( $scope, $timeout )
    {

        $(function() {
            var BV = new $.BigVideo();
            BV.init();
            BV.show( "build/got-clocked-scaled.mp4",{ambient:true});
        });

        $timeout( function () {
            $('.overlay').fadeOut();
        }, 3000 );

    }

] )


.controller( "App", [ "$scope", "$interval", "$timeout", "EmailService",

	function ( $scope, $interval, $timeout, EmailService )
	{
        var count;
        $scope.totalRate = 0;
        $scope.entries = [];
        $scope.meetingStarted = false;
        $scope.everySecond = 0;
        $scope.emailClicked = false;
        $scope.elapsedTime = null;
        $scope.moneySpent = null;

        $scope.addRate = function ( rate ) {
            $scope.entry = {
                rate: rate
            };

            if ( rate !== null && rate !== undefined ) {
                $scope.entries.push($scope.entry);
                $scope.totalRate = $scope.totalRate + parseInt(rate);
            }

            $scope.rate = null;
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

        // $scope.moneyTalks = function () {

        //     $interval( function () {
        //         var dollarString = angular.element( "#count-container" ).text(),
        //             dollarNum = dollarString.replace(/\$/g, '');
        //             dollarNum = parseInt(dollarNum, 10);

        //             if ( dollarNum > 140 && dollarNum < 179 )
        //             {
        //                 $scope.timedMessage = "Whoever said quality beats quantity didn't have the opportunity to buy 10 cases of Natty Ice. You could've too for the price of that meeting";
        //             }
        //             else if ( dollarNum > 180 && dollarNum < 349 )
        //             {
        //                 $scope.timedMessage = "If that meeting took any longer, the McRib woulda' come back, and you coulda had 60 of 'em.";
        //             }
        //             else if ( dollarNum > 350 && dollarNum < 498 )
        //             {
        //                 $scope.timedMessage = "Hey Daddy, you just spent 100 Big Macs on that!";
        //             }
        //             else if ( dollarNum > 499 && dollarNum < 798 )
        //             {
        //                 $scope.timedMessage = "iPad";
        //             }
        //             else if ( dollarNum > 799 && dollarNum < 999 )
        //             {
        //                 $scope.timedMessage = "iPhones";
        //             }
        //             else if ( dollarNum > 1000 && dollarNum < 1749 )
        //             {
        //                 $scope.timedMessage = "Cluck Cluck, that meeting could have been 1000 McChicken Sammiches";
        //             }
        //             else if ( dollarNum > 1750 && dollarNum < 2999 )
        //             {
        //                 $scope.timedMessage = "You could have installed 25 above ground pools";
        //             }
        //             else if ( dollarNum > 3000 && dollarNum < 3599 )
        //             {
        //                 $scope.timedMessage = "High end escort";
        //             }
        //             else if ( dollarNum > 3600 && dollarNum < 4499 )
        //             {
        //                 $scope.timedMessage = "Dozen roses daily for 2 months";
        //             }
        //             else if ( dollarNum > 4500 && dollarNum < 24999 )
        //             {
        //                 $scope.timedMessage = "You could have bought 1/4 ton of tilapia";
        //             }
        //             else if ( dollarNum > 25000 && dollarNum < 77781  )
        //             {
        //                 $scope.timedMessage = "You could have bought hired Snooky to drink and dance with you";
        //             }
        //             else if ( dollarNum > 77782 && dollarNum < 99999 )
        //             {
        //                 $scope.timedMessage = "You could have paid 2 years tuition to Michigan State";
        //             }
        //             else if ( dollarNum > 100000 && dollarNum < 249999 )
        //             {
        //                 $scope.timedMessage = "You could have paid 2 years tuition to Michigan State";
        //             }
        //             else if ( dollarNum > 250000 )
        //             {
        //                 $scope.timedMessage = "Virgin Galactic tickets to go to space";
        //             }


        //     }, 10000);
        // };

        // countUp.js configuration
        // http://inorganik.github.io/countUp.js/
        var options = {
            useEasing : false,
            useGrouping : true,
            separator : ",",
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
            // $scope.moneyTalks();
        };

        $scope.stopMeeting = function () {
            count.stop();
            $( "#elapsed-time" ).runner( "stop" );
            $scope.elapsedTime = angular.element( "#elapsed-time" ).text();
            $scope.moneySpent = angular.element( "#count-container" ).text();
            $scope.stopped = true;
            $scope.emailClicked = false;
        };

        $scope.resumeMeeting = function () {
            count.resume();
            $( "#elapsed-time" ).runner( "start" );
            $scope.stopped = false;
            $scope.emailClicked = false;
        };

        $scope.resetMeeting = function () {
            // Need to stop before reset due to plugin constraints
            $( "#elapsed-time" ).runner( "stop" );
            $( "#elapsed-time" ).runner( "reset" );
            $scope.meetingStarted = false;
            $scope.stopped = false;
            $scope.entries = [];
            $scope.totalRate = 0;
            $scope.emailClicked = false;
            count.reset();
        };

        $scope.showEmailForm = function () {
            $scope.emailClicked = true;

            $timeout( function () {
                angular.element( "#email" ).trigger( "focus" );
            }, 10);
        };

        $scope.sendEmail = function ( emailAddress ) {
            EmailService.send(
            {
                email: emailAddress,
                spent: $scope.moneySpent,
                time: $scope.elapsedTime
            });

            $scope.email = null;
        };

	}

] );
