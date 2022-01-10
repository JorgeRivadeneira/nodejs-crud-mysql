const express = require('express');
const router = express.Router();
const conexion = require('./database/db');
const crud = require('./controllers/crud');

router.get('/', (req, res) => {

    /*res.render('index', {
        var1: 'Esto es Ecuador'
    });*/
    
    conexion.query('select  * from users', (error, results) => {
        if(error){
            //throw error;
            console.error(error);
        }else{
            res.render('index', {results: results});
        }
    });
});

//ruta para crear registros
router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/save', crud.save);
router.post('/update', crud.update);

//ruta para editar registros
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('select  * from users where id = ?',[id], (error, results) => {
        if(error){
            //throw error;
            console.error(error);
        }else{
            res.render('edit', {user: results[0]});
        }
    });    
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('delete from users where id = ?',[id], (error, results) => {
        if(error){
            //throw error;
            console.error(error);
        }else{
            res.redirect('/');
        }
    });    
});

module.exports = router;