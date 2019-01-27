var mysql=require('mysql')

var config={

	user:'root',
	password:'password',
	server:'127.0.0.1',	
	port: 3306,
	database:'industry',
	    dateStrings: true

};


//});

connection=mysql.createConnection(config);
connection.connect(function(err){

	if(err) throw err;



});
module.exports=connection