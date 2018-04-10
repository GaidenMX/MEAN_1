'use strict'

const Curso = require('../Models/CursosModel')

function obtenerCurso(req, res){
    let cursoId = req.params.cursoId
    if (cursoId.match(/^[0-9a-fA-F]{24}$/)) {
        Curso.findById(cursoId, (err, curso)=>{
            if(err)return res.status(500).send({message : `error al realizar la petición ${err}`})
            if(!curso) return res.status(404).send({message:'el curso no existe'});
    
            res.status(200).send({ curso })
         })
      }else
        return res.status(404).send({message:'el identificador del curso no es valido'});
}

function obtenerCursos(req, res){
    Curso.find({}, (err, cursos) =>{
        if(err)return res.status(500).send({message : `error al realizar la petición ${err}`})
        if(!cursos) return res.status(404).send({message:'No existen cursos para mostrar'})

        res.status(200).send({ cursos })
    });
}

function guardarCurso(req,res){
    let curso = new Curso();
    curso.Nombre = req.body.Nombre;

    curso.save((err, cursoGuardado)=>{
        if(err)return res.status(500).send({message : 'error al guardar'});

        res.status(200).send({ curso: cursoGuardado });
    })
}

function actualizarCurso(req, res){
    let cursoId = req.params.cursoId;
    let update = req.body;

    Curso.findByIdAndUpdate(cursoId, update, (err, cursoActualizado)=> {
        if(err)return res.status(500).send({message : 'error al actualizar'});

        res.status(200).send({ curso: cursoActualizado });
    });
}

function eliminarCurso(req, res){
    let cursoId = req.params.cursoId;

    Curso.findById(cursoId, (err, curso)=> {
        if(err)return res.status(500).send({message : 'error al obtener el curso a eliminar'});

        Curso.remove((err) => {
            if(err)return res.status(500).send({message : 'error al eliminar el curso'});
            res.status(200).send({ message : 'El curso ha sido eliminado' });
        })
    })
}

module.exports = {
  obtenerCurso,
  obtenerCursos,
  guardarCurso,
  actualizarCurso,
  eliminarCurso
}