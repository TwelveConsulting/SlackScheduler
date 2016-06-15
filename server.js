var express = require('express'),
    bodyParser = require('body-parser'),
    schedule = require('node-schedule'),
    request = require("request"),
    conges = require('./modules/timesheet'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
    //auth.login();
});