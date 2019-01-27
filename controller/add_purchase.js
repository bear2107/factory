var mysql=require('mysql')
var server=require('../server.js')
var exports=module.exports={}

exports.add=function(req,res)
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);

var purchasedate=req.body.purchasedate
var purchaseval=req.body.purchaseval
var sno=req.body.sno

connection.query('INSERT INTO purchasedata(Sno,date,val) VALUES (?,?,?)', [sno,purchasedate,purchaseval],function(err,result){


		if(err)
			console.log(err)
		else
		{
			console.log(result)
res.send(JSON.stringify(result));
}
}) 
          






}


exports.edit=function(req,res)
{

res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);

var query="";
var purchasedate=req.body.purchasedate
var purchaseval=req.body.purchaseval
var sno=req.body.sno


query="UPDATE purchasedata SET date=? ,val =? where  Sno=?";

connection.query(query,[purchasedate,purchaseval,sno],function(err,result){
	if(err)
		console.log(err)
	else
	{
		res.send(JSON.stringify(result));
	}



})












}