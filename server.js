var express=require('express');
var hbs=require('hbs');
var bodyParser=require('body-parser');
var formRoutes=require('./routes/formRoutes');
var path=require("path");
var expressValidator=require('express-validator');
var app=express();
app.use(express.static(path.join(__dirname,'public')));
require('./db/connect');
app.set('view engine','hbs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use('/',formRoutes);

var PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('server is listening on port 3000');
})