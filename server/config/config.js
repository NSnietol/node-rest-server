
//================PUERTO=================
process.env.PORT = process.env.PORT || 3000;  


//================ENTORNO=================

process.env.NODE_ENV =  process.env.NODE_ENV || 'dev'



//===================Base de datos ============

let urlDB = process.env.NODE_ENV ==='dev'? 'mongodb://localhost:27017/cafe':"mongodb://dev_ns:QWE2018OP@ds161062.mlab.com:61062/cafe";


process.env.urlDB = urlDB;