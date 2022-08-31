const Color = require("../models/colors");

exports.getPrimaryColor = (req, res, next) =>{
    Color.find({userId : req.token.userId})
    .then((color)=>{
        if (!color) {
            return res.status(400).json({ message: "No color founded" });
          }
        res.status(200).json(color)
    }).catch((error)=>res.status(400).json({error:error}))
    
    }

    
exports.createColor= (req,res, next)=>{
colorObject = req.body.color
delete colorObject._id
const color = new Color({...colorObject, userId : req.token.userId});
color.save()
.then(()=>{
    res.status(201).json({message: "color was created successfully !"})
        })
        .catch((error)=>{
            res.status(400).json({error:error})
        })

}


exports.updateColor = (req,res,next)=>{
    Color.findOne({
        _id : req.params.id
    })
    .then((color)=>{
        if(!color){
            res.status(400).json({message : "No color founded"})
        }
        if(color.userId == req.token.userId){
            Color.updateOne({_id: req.params.id, color : req.body.color})
            .then(() => {
                res.status(201).json({
                  message: "Color updated successfully!",
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