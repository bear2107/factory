var mysql=require('mysql')
var server=require('../server.js')
var exports=module.exports={}

exports.viewnormaldata=function(req,res)
{

	var startdate=req.body.startdate;
	var enddate=req.body.enddate;
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);


connection.query('select * from brand join data on brand.Sno=data.Sno where data.date>=? and data.date<=?',[startdate,enddate],function(err,result){


		if(err)
			console.log(err)
		else
		{
			console.log(result)
res.send(JSON.stringify(result));
}
}) 
          






}


exports.viewproddata=function(req,res)
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
var startdate=req.body.startdate;
	var enddate=req.body.enddate;

connection.query('select * from brand join proddata on brand.Sno=proddata.Sno where proddata.date>=? and proddata.date<=?',[startdate,enddate],function(err,result){


		if(err)
			console.log(err)
		else
		{
			console.log(result)
res.send(JSON.stringify(result));
}
}) 
          






}


