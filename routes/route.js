var brandadd=require('../controller/add_brand.js')
var add_data=require('../controller/add_data.js')
var prod_data=require('../controller/add_prod_data.js')
var calculate=require('../controller/calculate.js')
var prodcal=require('../controller/prodcal.js')
var show=require('../controller/view.js')
module.exports=function(app)
{


app.post('/add',brandadd.add);
app.post('/adddata',add_data.add);
app.post('/edit',add_data.edit);
app.post('/addprod',prod_data.add);
app.post('/editprod',prod_data.edit);

app.post('/calculatedate',calculate.calculate);
app.post('/calculatemonth',calculate.calculatemonth);
app.post('/getpurchaseunit',calculate.getlastpurchaseunit);


app.post('/calculatepmused',prodcal.calculatepmused);
app.post('/calmonthprod',prodcal.calculatemonthprod);
app.post('/getsku',prodcal.getskusz);


app.post('/getnormaldata',show.viewnormaldata);
app.post('/getproddata',show.viewproddata);

}