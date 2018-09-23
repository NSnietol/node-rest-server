const jwt = require('jsonwebtoken');

//========================	
        //Verificar Token	
        //=======================

let validarToken=(req,res,next)=>{

    let token = req.get('Authorization');


    jwt.verify(token,process.env.SEED,(err,decoced)=>{

        if(err){

            return res.status(401).json({

                ok:false,
                err
            })
        }

        req.usuario=decoced.usuario;
        next();

    });
    



};



let validarRole=(req,res,next)=>{

    let usuario = req.usuario;

    if(usuario.role==='ADMIN_ROLE'){
        next();

    }else{

        return res.status(400).json({

            ok:false,
            message: "No cuenta con permisos para realizar esta operación"
        });
    }

}



module.exports = {
    validarToken,validarRole
}