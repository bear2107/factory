var express=require('express')
var app=express()
var config=require('./database/connect.js')
var bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
var appRoute=require('./routes/route.js')(app);

app.get('/',function(req,res){
res.send('Application development begins');

});
app.all('/*', function(req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});


app.listen(3000,function(err){

	if(!err)
		console.log('Site is live');
	else
		console.log(err);








});