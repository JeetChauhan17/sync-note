const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
        res.render('pad');
    });
    
    app.get('/(:id)', function(req, res) {
            res.render('pad');
        });

    const sharejs = require("share")
    require("redis")
    
    // var redisClient;
    // console.log(process.env.REDISTOGO_URL);
    // if (process.env.REDISTOGO_URL) {
    //   var rtg   = require("url").parse(process.env.REDISTOGO_URL);
    //   redisClient = require("redis").createClient(rtg.port, rtg.hostname);
    //   redisClient.auth(rtg.auth.split(":")[1]);
    // } else {
    //   redisClient = require("redis").createClient();
    // }


const options = {
        db: {type: "redis"}
}

sharejs.server.attach(app,options)

app.listen(PORT);
