var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var nav = [{
    Link: '/Books', Text: 'Books'
    },{
    Link: '/Authors', Text:'Authors'
}];
var test = "Hi,test";
var bookRouter = require('./src/routes/bookRoutes')(nav, test);


app.use(express.static('public'));
app.use('/Books', bookRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs');




app.get('/', function(req, res){
    res.render('index', {title: 'Hello from render', nav: nav}
            );
});
app.get('/Authors', function(req, res){ 
    res.send("Hello Authors!");
});
app.listen(port, function(err){
    console.log('running server on port '+ port);
});