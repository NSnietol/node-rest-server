

var suma =0;
process.stdin.on("data", function(data){


    if(data.toString().trim()=="."){
        process.exit();
 
    }else{
        suma+=parseInt(data.toString().trim()); 
    }

});

process.on("exit",function(){
    console.log('Total : ',suma);

});