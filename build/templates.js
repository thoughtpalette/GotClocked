angular.module('vokal').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/build/templates/app.html',
    "<header>\n" +
    "    <div class=\"row-container\">\n" +
    "        <div class=\"row\">\n" +
    "            <img src=\"/images/gotclocked_logo.png\" alt=\"\">\n" +
    "            <p class=\"tag-line\">Calculate the cost of your meetings</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"row-container\">\n" +
    "\n" +
    "    <div class=\"row sent\" data-ng-show=\"emailSent\">\n" +
    "        <p>Email sent... whoopi</p>\n" +
    "\n" +
    "        <img src=\"/images/ic_thumbs.png\" alt=\"\">\n" +
    "\n" +
    "            <div class=\"paused-controls clearfix\">\n" +
    "                <button class=\"reset-timer\" data-ng-click=\"resetMeeting()\">Reset</button>\n" +
    "            </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div data-ng-hide=\"emailSent\">\n" +
    "\n" +
    "        <div class=\"row\" data-ng-hide=\"emailClicked\">\n" +
    "\n" +
    "            <p data-ng-hide=\"meetingStarted\">Who's getting clocked?</p>\n" +
    "            <p data-ng-show=\"meetingStarted\" data-ng-class=\"{'stopped' : stopped || timedMessage }\">Budget's getting clocked</p>\n" +
    "            <p data-ng-show=\"stopped\" data-ng-class=\"{'stopped' : timedMessage }\">Clock'n has been paused</p>\n" +
    "            <p class=\"timed-message\">{{timedMessage}}</p>\n" +
    "\n" +
    "            <img data-ng-hide=\"meetingStarted\" class=\"people-icon\" src=\"/images/ic_people.png\" alt=\"\">\n" +
    "\n" +
    "            <ul class=\"entries clearfix\" data-ng-hide=\"meetingStarted\">\n" +
    "                <li data-ng-repeat=\"entry in entries\" data-ng-click=\"removeRate(entry)\">\n" +
    "                    {{entry.rate}}\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <img data-ng-show=\"meetingStarted\" data-ng-class=\"{'stopped' : stopped }\" class=\"money-top-icon\" src=\"/images/ic_money_on.png\" alt=\"\">\n" +
    "            <img data-ng-show=\"stopped\" class=\"money-top-icon\" src=\"/images/ic_money.png\" alt=\"\">\n" +
    "\n" +
    "            <div class=\"dollar-counter\" data-ng-show=\"meetingStarted\">\n" +
    "                <div id=\"count-container\" data-ng-class=\"{'stopped' : stopped }\">\n" +
    "                    0\n" +
    "                </div>\n" +
    "                <span>Money Spent</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row email\" data-ng-show=\"emailClicked\">\n" +
    "            <p>Email to someone who cares</p>\n" +
    "\n" +
    "            <img class=\"email-icon\" src=\"/images/ic_mail.png\" alt=\"email icon\">\n" +
    "\n" +
    "            <div class=\"money-spent\">\n" +
    "                <span>{{moneySpent}}</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"time-elapsed\">\n" +
    "                <span>{{elapsedTime}}</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <form id=\"email-form\" class=\"clearfix\" data-ng-submit=\"sendEmail(email)\" autocomplete=\"off\">\n" +
    "                <div class=\"form-wrapper\">\n" +
    "                    <span data-ng-click=\"emailClicked = false\"></span>\n" +
    "                    <input type=\"email\" data-ng-model=\"email\" id=\"email\" name=\"email\" placeholder=\"Enter Recipient Email\" required>\n" +
    "\n" +
    "                    <button type=\"submit\">Send</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <div data-ng-hide=\"emailClicked\">\n" +
    "                <img data-ng-show=\"meetingStarted\" data-ng-class=\"{'stopped' : stopped }\" class=\"time-icon\" src=\"/images/ic_clock.png\" alt=\"\">\n" +
    "                <img data-ng-show=\"stopped\" class=\"time-icon\" src=\"/images/ic_clock_pause.png\" alt=\"clock paused icon\">\n" +
    "\n" +
    "                <div class=\"time-wrapper\" data-ng-show=\"meetingStarted\">\n" +
    "                    <div id=\"elapsed-time\" data-ng-class=\"{'stopped' : stopped }\">00:00:00</div>\n" +
    "                    <span>Elapsed Time</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <form id=\"rate-form\" data-ng-hide=\"meetingStarted\" name=\"rateform\" data-ng-submit=\"addRate(rate)\">\n" +
    "                <img class=\"money-icon\" src=\"/images/ic_money.png\" alt=\"\">\n" +
    "                <input type=\"number\" name=\"rate\" id=\"rate\" data-ng-model=\"rate\" placeholder=\"    Enter an Hourly Rate\">\n" +
    "                <button class=\"add-btn\" type=\"submit\" data-ng-class=\"{'disabled' : rate === undefined || rate === null}\" data-ng-disabled=\"rate === undefined || rate === null\">Add</button>\n" +
    "                <span>Per hr</span>\n" +
    "            </form>\n" +
    "\n" +
    "            <button class=\"start-timer\" data-ng-hide=\"meetingStarted\" data-ng-click=\"startMeeting()\" data-ng-class=\"{'disabled' : !entries.length }\" data-ng-disabled=\"!entries.length\">Start</button>\n" +
    "            <button class=\"stop-timer\" data-ng-class=\"{'stopped' : stopped }\" data-ng-show=\"meetingStarted\" data-ng-click=\"stopMeeting();\">Stop</button>\n" +
    "\n" +
    "            <div class=\"paused-controls clearfix\">\n" +
    "                <button class=\"start-timer-resume\" data-ng-show=\"stopped\" data-ng-click=\"resumeMeeting()\">Resume</button>\n" +
    "                <button class=\"email-time\" data-ng-show=\"stopped\" data-ng-class=\"{'stopped' : emailClicked }\" data-ng-click=\"showEmailForm()\">Email</button>\n" +
    "                <button class=\"reset-timer\" data-ng-show=\"stopped\" data-ng-click=\"resetMeeting()\">Reset</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<span class=\"vokal-tag\">Built by <a href=\"http://vokalinteractive.com/\" target=\"_blank\">Vokal Interactive</a> Hack Days</span>"
  );


  $templateCache.put('/build/templates/email.html',
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
    "<html xmlns=\"http://www.w3.org/1999/xhtml\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0\">\n" +
    "<head>\n" +
    "<meta name=\"viewport\" content=\"width=device-width\">\n" +
    "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n" +
    "<title>GotClocked.com</title>\n" +
    "\n" +
    "\n" +
    "<style>\n" +
    "img {\n" +
    "max-width: 100%;\n" +
    "}\n" +
    "body {\n" +
    "-webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6;\n" +
    "}\n" +
    "body {\n" +
    "background-color: #f6f6f6;\n" +
    "}\n" +
    "@media only screen and (max-width: 640px) {\n" +
    "  h1 {\n" +
    "    font-weight: 600 !important; margin: 20px 0 5px !important;\n" +
    "  }\n" +
    "  h2 {\n" +
    "    font-weight: 600 !important; margin: 20px 0 5px !important;\n" +
    "  }\n" +
    "  h3 {\n" +
    "    font-weight: 600 !important; margin: 20px 0 5px !important;\n" +
    "  }\n" +
    "  h4 {\n" +
    "    font-weight: 600 !important; margin: 20px 0 5px !important;\n" +
    "  }\n" +
    "  h1 {\n" +
    "    font-size: 22px !important;\n" +
    "  }\n" +
    "  h2 {\n" +
    "    font-size: 18px !important;\n" +
    "  }\n" +
    "  h3 {\n" +
    "    font-size: 16px !important;\n" +
    "  }\n" +
    "  .container {\n" +
    "    width: 100% !important;\n" +
    "  }\n" +
    "  .content {\n" +
    "    padding: 10px !important;\n" +
    "  }\n" +
    "  .content-wrapper {\n" +
    "    padding: 10px !important;\n" +
    "  }\n" +
    "  .invoice {\n" +
    "    width: 100% !important;\n" +
    "  }\n" +
    "\n" +
    "  .stat-numeric {\n" +
    "    font-size: 14px !important;\n" +
    "  }\n" +
    "\n" +
    "  .stat-label {\n" +
    "    font-size: 11px;\n" +
    "  }\n" +
    "}\n" +
    "</style>\n" +
    "</head>\n" +
    "\n" +
    "<body style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6; background: #f6f6f6; margin: 0; padding: 0\">\n" +
    "\n" +
    "<table class=\"body-wrap\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background: #f6f6f6; margin: 0; padding: 0\">\n" +
    "    <tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0\">\n" +
    "        <td style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0\" valign=\"top\"></td>\n" +
    "        <td class=\"container\" width=\"600\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto; padding: 0\" valign=\"top\">\n" +
    "            <div class=\"content\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px\">\n" +
    "                <table class=\"main\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background: #fff; margin: 0; padding: 0; border: 1px solid #c2c2c2\">\n" +
    "                    <tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0\">\n" +
    "                        <td style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 3px 3px 0 0; margin: 0; padding: 20px 20px 0 20px\" align=\"center\" valign=\"top\">\n" +
    "                          <a href=\"http://gotclocked.com\" target=\"_blank\">\n" +
    "                            <img src=\"http://localhost:3000/images/email/logo.jpg\" alt=\"Icons\">\n" +
    "                          </a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0\">\n" +
    "                        <td class=\"content-wrap\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 10px 20px 20px 20px\" valign=\"top\">\n" +
    "                            <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0\">\n" +
    "                                <tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0; text-align:center\">\n" +
    "                                    <td class=\"content-block\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px; color: #858585\" valign=\"top\">\n" +
    "                                        Thur Sept 23, 2014 @ 8:30am\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                                <tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0; text-align: center\">\n" +
    "                                    <td class=\"content-block\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; color: #858585\" valign=\"top\">\n" +
    "                                      total time\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                                <tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0; text-align: center\">\n" +
    "                                    <td class=\"content-block\" style=\"font-family: 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 40px; vertical-align: top; font-weight: bold; margin: 0; padding: 0 0 20px; color: #2c2d2d\" valign=\"top\">\n" +
    "                                      1:35:47\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                                <tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0\">\n" +
    "                                    <td class=\"content-block\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px; text-align: center\" valign=\"top\">\n" +
    "                                        <img src=\"http://localhost:3000/images/email/icons.jpg\" alt=\"Got Clocked Logo\">\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                            </table>\n" +
    "                            <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0\">\n" +
    "                                <tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0\">\n" +
    "                                    <td class=\"content-block\" style=\"width:50%;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px; text-align: center\" valign=\"top\">\n" +
    "                                        <div class=\"stat-wrapper\" style=\"float:left;text-align: center; width: 50%\">\n" +
    "                                          <span class=\"stat-numeric\" style=\"color: #2c2d2d; font-weight: bold; font-size: 22px\">3</span>\n" +
    "                                          <p class=\"stat-label\" style=\"margin: 0\">ppl</p>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                        <div class=\"stat-wrapper\" style=\"float:left;text-align: center; width: 50%\">\n" +
    "                                          <span class=\"stat-numeric\" style=\"color: #2c2d2d; font-weight: bold; font-size: 22px\">$272</span>\n" +
    "                                          <p class=\"stat-label\" style=\"margin: 0\">avg rate</p>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                    </td>\n" +
    "                                    <td class=\"content-block\" style=\"width: 50%;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px\" valign=\"top\">\n" +
    "                                        <div class=\"stat-wrapper\" style=\"float:left;text-align: center; width: 50%\">\n" +
    "                                          <span class=\"stat-numeric\" style=\"color: #2c2d2d; font-weight: bold; font-size: 22px\">$1,270</span>\n" +
    "                                          <p class=\"stat-label\" style=\"margin: 0\">total cost</p>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                        <div class=\"stat-wrapper\" style=\"float:left;text-align: center; width: 50%\">\n" +
    "                                          <span class=\"stat-numeric\" style=\"color: #2c2d2d; font-weight: bold; font-size: 22px\">$213</span>\n" +
    "                                          <p class=\"stat-label\" style=\"margin: 0\">per hr cost</p>\n" +
    "                                        </div>\n" +
    "                                    </td>\n" +
    "                                </tr>\n" +
    "                            </table>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0; text-align: center\">\n" +
    "                      <td>\n" +
    "                        <a href=\"http://gotclocked.com/app\" target=\"_blank\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; text-transform: capitalize; margin: 0; padding: 0\">\n" +
    "                          <img src=\"http://localhost:3000/images/email/footer.jpg\" alt=\"Got Clocked footer\">\n" +
    "                        </a>\n" +
    "                      </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "        <div class=\"footer\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px\">\n" +
    "          <table width=\"100%\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0\">\n" +
    "            <tr style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0\">\n" +
    "              <td class=\"aligncenter content-block\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; text-align: center; margin: 0; padding: 0 0 20px\" align=\"center\" valign=\"top\">Built by <a href=\"http://vokalinteractive.com/\" style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 12px; color: #5FBA47; text-decoration: underline; margin: 0; padding: 0\" target=\"_blank\">VOKAL Interactive</a></td>\n" +
    "            </tr>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "                </div>\n" +
    "        </td>\n" +
    "        <td style=\"font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0\" valign=\"top\"></td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "\n" +
    "</body>\n" +
    "</html>"
  );


  $templateCache.put('/build/templates/home.html',
    "<div class=\"overlay\"></div>\n" +
    "\n" +
    "<div class=\"go-to-app\">\n" +
    "    <p>Too many meetings, too many people.</p>\n" +
    "    <a href=\"/app\" target=\"_self\">Get Clock'n</a>\n" +
    "</div>"
  );

}]);
