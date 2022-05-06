const User = require('../models/User')

exports.postContact = async (req,res) =>{
    try {
        //create a new User with the model contact
        const newUser = new User(req.body);
        // test if User has not email  
        if(!req.body.email || !req.body.name){
            res.status(400).send({msg:"all fileds is required!!!"})
            return;
        }
        //test if User exist
        const user = await User.findOne({email:req.body.email});
        if(user){
            res.status(400).send({msg:"Contact alrady exist"})
            return;
        }
        const response = await newUser.save()
        res.status(200).send({response:response,msg:"New User Saved.."})
    } catch (error) {
        res.status(500).send({msg:"server err Can not Save it.."})
    }
}