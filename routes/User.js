const { response } = require("express");
const express =require("express");
const router = express.Router();
const controllers =require("../controllers/User");
const User = require('../models/User');

//test Routing 
router.get('/hi',(req,res)=>{
    res.send("hi bassam")
})

//post new Contact = User;
router.post('/user',controllers.postContact);

router.get("/user",async(req,res)=>{
    try {
        const result = await User.find();
        res.status(200).json({response:result,msg:"geting Contacts Successfully"})
    } catch (error) {
        res.status(500).send({msg:"can not get contacts"})
    }
})

    //Get One Contact

router.get('/user/:id',async(req,res)=>{
    try {
        const result = await User.findOne({_id:req.params.id});
        !result ? res.status(400).send({msg:"there is no user with this id"})
        : res.status(200).send({response:result, msg:"geting Contact Successfully"})
    } catch (error) {
        res.status(500).send({msg:"can not get contact"})
    }
})

///delete  Contact
router.delete('/user/:id',async(req,res)=>{
    try {
        await User.deleteOne({_id:req.params.id})
        res.status(200).send({msg:"Contact deleted with success"})
    } catch (error) {
        res.status(500).send({msg:"can not get contact"})
    }
})

router.put("/user/:id",async(req,res)=>{
    try {
        const result = await User.updateOne({_id:req.params.id},{$set:{...req.body}});
        const test = await User.findOne({_id:req.params.id})
        !result ? res.status(400).send({msg:"there is no user with this id"})
        : res.status(200).send({response:test,msg:"Update Contact Successfully"});
    } catch (error) {
        res.status(500).send({msg:"can not get contact"});
    }
})

module.exports =router