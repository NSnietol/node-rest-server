let express = require('express');
let bodyParser= require('body-parser');
let session = require('cookie-session');


var app = express();
var port = 3000;

app.use(session({secret:'nodejs'}));

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','ejs');

var tareas=[];

app.get('/',function(request,answer){

    answer.render('formulario.ejs',{tareas : tareas});
});



app.post('/adicionar',function(request,answer){

    var tarea = request.body.nuevaTarea;
    tareas.push(tarea);
    answer.redirect('/');

});

app.get('/borrar/:id', function(request,answer){

        tareas.splice(request.params.id,1);
        answer.redirect('/');

});


app.listen(port,function( ){

    console.log('Work! in port 3000');
});