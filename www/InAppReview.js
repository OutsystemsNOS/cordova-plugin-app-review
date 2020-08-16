var exec = require("cordova/exec");
var PLUGIN_NAME = "InAppReview";

module.exports = {
    requestReviewDialog: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "requestReviewDialog", []);
        });
    },
    requestReviewManually: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "requestReviewManually", []);
        });
    }
};