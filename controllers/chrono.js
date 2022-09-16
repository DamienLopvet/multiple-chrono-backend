const Chrono = require("../models/chrono");

exports.createChrono = (req, res, next) =>{
    const chronoObject = req.body.chronos;
    delete chronoObject._id;
    const chrono = new Chrono({
        chronos: chronoObject,
        userId: req.token.userId,
        });
    chrono.save().then(()=>{
        res.status(201).json({message: "chrono was created successfully !"})
        })
        .catch((error)=>{
            res.status(400).json({error:error})
        })
    
}

exports.getAllChronos = (req, res, next) =>{
Chrono.find({userId : req.token.userId})
.then((chronos)=>{
    if (!chronos) {
        return res.status(400).json({ message: "No chronos were found" });
      }
    res.status(200).json(chronos)
}).catch((error)=>res.status(400).json({error:error}))

}


exports.updateChrono = (req, res, next)=>{
Chrono.findOne({
    _id:req.params.id
}).then((chrono)=>{
    if(!chrono){
        res.status(400).json({ message: "No chronos were found" });
    }
    if (req.token.userId == chrono.userId) {
        Chrono.updateOne(
            {_id: req.params.id},{...req.body.chrono}

        ).then(() => {
            res.status(201).json({
              message: "Chrono updated successfully!",
            });
          })
          .catch((error) => {
            res.status(400).json({
              error: error,
            });
          });
    }else{
        res.status(401).sjson({messsage: 'unauthorized action !'})
    }

}).catch((error) => {
    res.status(500).json({
      error: error,
    });
  });

}
exports.deleteChrono = (req, res, next)=>{
Chrono.findOne({_id : req.params.id})
.then((chrono)=>{
    if (!chrono) {
        return res.status(400).json({ message: "chrono not found" });
      }
    if(chrono.userId == req.token.userId){
        chrono.deleteOne({_id : req.params.id})
        .then(()=> res.status(200).json({message : "chrono suprrimé !"}))
        .catch((error)=>res.status(400).json({error}))
    }else{
        res.statut(401).json({message : "no authorized action!"})
    }
}).catch((error)=>res.status(500).json({error}) )
}