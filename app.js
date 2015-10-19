var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(
        JSON.stringify(req.headers, null, 4)
    );
});

var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});