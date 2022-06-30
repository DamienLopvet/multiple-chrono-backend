const Chrono = require("../models/chrono");

exports.createChrono = (req, res, next) =>{
    const chronoObject = req.body.chrono;
    delete chronoObject._id;
    const chrono = new Chrono({
        ...chronoObject,
        userId: req.token.userId,
        });
    chrono.save().then(()=>{
        res.status(201).json({message: "chrono was created successfully !"})
        })
        .catch((error)=>{
            res.status(400).json({error:error})
        })
    
}