let express = require('express');
let bodyParser= require('body-parser');
let session = require('cookie-session');


var app = express();


app.use(session({secret:'nodejs'}));

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','ejs');


var tareas=[];

app.get('/',function(request,answer){

    answer.render('formulario.ejs',{});
});



app.get('/jquery-2.1.4.js',function(request,answer){

});

app.post('/adicionar',function(request,answer){

    var tarea = request.body.nuevaTarea;
    tareas.push(tarea);
    answer.redirect('/');

});

app.listen(3000,function( ){

    console.log('Work! in port 3000');
});