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
        
const options = {
        db: {type: "redis"}
}

sharejs.server.attach(app,options)

app.listen(PORT);
