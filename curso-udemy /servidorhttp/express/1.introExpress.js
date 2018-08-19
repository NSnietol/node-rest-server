let express= require('express');
let bodyParser = require('body-parser');
var app = express();

app.use('/virtual',express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));


//--------------------Metodos GET------------------
app.get('/',function(request,answer){


    answer.send("Hola desde Express");

});

app.get('/form.html',function(request,answer){

    answer.sendFile(__dirname+"/"+"form.html");

});

app.get('/datos',function(request,answer){
    var nombre = request.query.nombre;
    var apellido = request.query.apellido;

    answer.send('El nombre es '+nombre+"<br>"+"El apellido es "+apellido);
});
//-----------------_FIN GETS---------------------


//------------_POST

app.post('/datosPost',function(request,answer){
    var nombre = request.body.nombre;
    var apellido = request.body.apellido;

    answer.send('El nombre es '+nombre+"<br>"+"El apellido es "+apellido);

});


app.listen(3000,function(){

console.log('Work! in port 3000');
});