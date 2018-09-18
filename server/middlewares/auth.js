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

module.exports = {
    validarToken
}