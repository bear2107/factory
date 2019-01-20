var mysql=require('mysql')
var server=require('../server.js')
var exports=module.exports={}

exports.add=function(req,res)
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
var item=req.body.generic_name;
var value=req.body.brand;
var type=req.body.typed;
var sku_size=req.body.skusize;
var vendor_name=req.body.vendor_name;
var pastpurchase=req.body.past_purchase;
var lastpurchaseunit=req.body.lastpurchaseunit;
var minimum_qty=req.body.minimum_qty;

console.log(minimum_qty);


connection.query('INSERT INTO brand(Generic_Name,Brand,type,skusize,vendorname,past_purchase,lastpurchaseunit,minimum_qty) VALUES (?,?,?,?,?,?,?,?)', [item,value,type,sku_size,vendor_name,pastpurchase,lastpurchaseunit,minimum_qty],function(err,result){


		if(err)
			console.log(err)
		else
		{
			console.log(result)
res.send(JSON.stringify(result));
}
}) 
          
            
        





}
