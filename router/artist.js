let express=require("express");
let uuid=require("uuid")
let router3=express.Router();
let {artistModel}=require("../DataBase/db.js")

router3.use(express.json())
router3.use(express.urlencoded({extended:true}))

router3.get("/artist",async (req,res)=>{
    let data=await artistModel.find();
    res.status(200).send(data)
})

router3.get("/artist/:id",async (req,res)=>{
    let id=req.params.id;
    let data=await artistModel.findOne({id:id})
    if(data)
    {
        res.status(200).send(data)
    }
    else if(!data)
    {
        res.status(400).send("invalid id")
    }
    else
    {
        res.status(404).send("artist is not exist")
    }
})

router3.post("/artist",(req,res)=>{
    let {name,grammy}=req.body;
    let doc3=new artistModel({
        id:uuid.v4(),
        name:name,
        grammy:grammy
    })
    doc3.save();
})

router3.put("/artist/:id",async (req,res)=>{
    let id=req.params.id;
    let {name,grammy}=req.body;
    let data=await artistModel.updateOne({id:id},{$set:{name:name,grammy:grammy}})
    if(data)
    {
        res.status(200).send("data is updated")
    }
    else if(!data)
    {
        res.status(400).send("invalid id")
    }
    else
    {
        res.status(404).send("artist is not exist")
    }
})

router3.delete("/artist/:id",async (req,res)=>{
    let id=req.params.id;
    let data=await artistModel.deleteOne({id:id});
    if(data)
    {
        res.status(200).send("data is deleted")
    }
    else if(!data)
    {
        res.status(400).send("invalid id")
    }
    else
    {
        res.status(404).send("artist is not exist")
    }
})

module.exports=router3

