var mysql=require('mysql')
var server=require('../server.js')
var exports=module.exports={}

exports.add=function(req,res)
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);

var datac=req.body.datac
var obj=JSON.parse(datac);


var arr=[]
for(var key in obj){
	arr.push(obj[key]);

}

connection.query('INSERT INTO data(Sno,issued,received,date) VALUES ?', [arr],function(err,result){


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
var sno=req.body.sno;
var data=req.body.date;
var val=req.body.val;
var boo=req.body.boo;
if(boo=="1")
query="UPDATE data SET issued=? where date=? and Sno=?";
else
query="UPDATE data SET received=? where date=? and Sno=?";
connection.query(query,[val,data,sno],function(err,result){
	if(err)
		console.log(err)
	else
	{
		res.send(JSON.stringify(result));
	}



})












}