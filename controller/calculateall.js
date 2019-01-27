var mysql=require('mysql')
var server=require('../server.js')
var exports=module.exports={}



exports.calculate=function(req,res)
{
res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
var startdate=req.body.startdate;
var enddate=req.body.enddate;
//var sno=req.body.sno;
connection.query("select Sno,sum(received) - sum(issued) from data where  date between ? and ? group by Sno",[startdate,enddate],function(err,result){


	if(err)
		console.log(err);
	else
	{
		console.log(result);
		res.send(JSON.stringify(result));
}
});
}




exports.calculatemonth=function(req,res)
{
res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
var enddate=req.body.enddate;
//var sno=req.body.sno;
connection.query("select Sno,sum(received) - sum(issued) from data where  date <=? group by Sno",[enddate],function(err,result){


	if(err)
		console.log(err);
	else
	{
		console.log(result);
		res.send(JSON.stringify(result));
}
});
}




exports.getlastpurchaseunit=function(req,res)
{

res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	//var sno=req.body.sno;
	connection.query("select Sno,lastpurchaseunit from brand group by Sno",function(err,result)
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