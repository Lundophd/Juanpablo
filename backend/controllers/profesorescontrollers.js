const db= require("");


class ProfesoresController{
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
        /*res.json ({msg:'Consulta detalle estudiantes desde clase y id de  '+id}); */
        try{
           
        }catch (err){
            res.status(500).send(err.message);
        }
    }

    borrar(req,res){
        //res.json ({msg:"Borrar estudiantes desde clase"});
        const {id} = req.params;
        try{
            
        }catch (err){
            //console.log(err);
            res.status(500).send(err.message);
        }

    }
}

module.exports = new ProfesoresController();
