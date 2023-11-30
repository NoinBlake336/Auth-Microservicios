const express = require('express');
const router = express.Router();
const response = require('../../../network/response.js');
const Controller = require('./controler.user.js'); 

router.get('/',(req,res)=>{
    const lista = Controller.list();
    response.success(req,res,lista,200);
});

module.exports = router;