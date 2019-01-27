var mysql=require('mysql')
var server=require('../server.js')
var exports=module.exports={}



exports.calculatepmused=function(req,res)
{
res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
var startdate=req.body.startdate;
var enddate=req.body.enddate;
//var sno=req.body.sno;
connection.query("select Sno,sum(issued) from data where  date between ? and ? group by Sno",[startdate,enddate],function(err,result){


	if(err)
		console.log(err);
	else
	{
		console.log(result);
		res.send(JSON.stringify(result));
}
});
}




exports.calculatemonthprod=function(req,res)
{
res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
var enddate=req.body.enddate;
var startdate=req.body.startdate;
//var sno=req.body.sno;
connection.query("select Sno,sum(issued)  from proddata where date between ? and ? group by Sno",[startdate,enddate],function(err,result){


	if(err)
		console.log(err);
	else
	{
		console.log(result);
		res.send(JSON.stringify(result));
}
});
}




exports.getskusz=function(req,res)
{

res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
//	var sno=req.body.sno;
	connection.query("select Sno,skusize from brand group by Sno",function(err,result)
{
	if(err)
		console.log(err);
	else
	{
		console.log(result);
		res.send(JSON.stringify(result));
	}



});








}