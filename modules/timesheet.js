
var schedule = require('node-schedule');
var PUSH_TOKEN = process.env.SLACK_TIMESHEET_TOKEN;
var request = require("request");


console.log('Starting scheduler');

var j = schedule.scheduleJob('* * 18 * * 1-5', function(){
    
    console.log('The answer to life, the universe, and everything!');

    
    var postData = {
            "channel": "@gaspard", 
            "username": "james", 
            "text": "Time to get home !", 
            "icon_emoji": ":ghost:"
        };

    var url = 'https://hooks.slack.com/services/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';
    var options = {
        method: 'post',
        body: postData,
        json: true,
        url: url
    }

    request(options, function (err, res, body) {
        if (err) { 
            console.log(err); 
        }
    });
});