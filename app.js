var fs = require('fs');
var express = require('express');
var app = express();

app.get('*', function (req, res) {
    res.send(
        JSON.stringify(req.headers, null, 4)
    );
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    // Touch file so nginx can give us traffic
    fs.writeFileSync('/tmp/app-initialized', '', 'utf-8');

    console.log('App listening at http://%s:%s', host, port);
});
