const db= require("");


class EstudiantesController{
    construct(){

    }

    consultar(req,res){
        try{
            
        }catch (err){
            res.status(500).send(err.message);
        }
    }

    actualizar(req,res){
        const {id} = req.params;
        try{
            
        }catch (err){
            //console.log(err);
            res.status(500).send(err.message);
        }
    }

    ingresar(req,res){
        try{
            

        }catch (err){
            res.status(500).send(err.message);
        }
    }

    consultarDetalle(req,res){
        const {id} = req.params;
        try{

        }catch (err){
            res.status(500).send(err.message);
        }

    }

    borrar(req,res){
        const {id} = req.params;
        try{
            
        }catch (err){
            res.status(500).send(err.message);
        }
   }
}

module.exports = new EstudiantesController();
