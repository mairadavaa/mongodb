const express = require('express');
const router = express.Router();
const Ninja = require("../models/ninjaModel")

router.get('/ninjas', function(req, res){
    res.send({type:'CET'})
})
router.post('/ninjas', function(req, res){
    console.log(req.body)
   Ninja.create(req.body)
   .then(function(ninja) {
    res.send(ninja);
  })
  .catch(function(error) {
    res.status(500).send(error);
  });
 
})
router.put('/ninjas/:id', function(req, res){
    res.send({type:'PUT'})
})
router.delete('/ninjas/:id', function(req, res){
    res.send({type:'DELETE'})
})
module.exports = router;