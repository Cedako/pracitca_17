// inyeccion de express, instancia del router
let express = require('express');
let router = express.Router();
var info = require('../models/people');


router.get('/person', (req, res) => {
    res.render('index');
})
router.post('/person', async (req, res) => {
    let personInfo = new info({firstName: req.body.fname, lastName: req.body.lname})
    await personInfo.save()
    res.send(`Nombre: ${req.body.fname} Apellido: ${req.body.lname}`)
});

module.exports= router;