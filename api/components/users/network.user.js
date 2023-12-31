const express = require('express');
const router = express.Router();
const response = require('../../../network/response.js');
const Controller = require('./index.js'); 

router.get('/',(req,res)=>{
    Controller.list()
        .then((lista)=>{
            response.success(req,res,lista,200);
        })
        .catch(err=>{
            response.error(req,res,err.message,500);
        })
});
router.get('/:id',(req,res)=>{
    Controller.get(req.params.id)
        .then((user)=>{
            response.success(req,res,user,200);
        })
        .catch(err=>{
            response.error(req,res,err.message,500);
        });
});



module.exports = router;