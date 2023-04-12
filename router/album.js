let express=require("express")
let uuid=require('uuid')
let {albumModel, artistModel}=require("../DataBase/db.js")
let router4=express.Router()

router4.use(express.json())
router4.use(express.urlencoded({extended:true}))

router4.get("/album",async (req,res)=>{
    let data=await albumModel.find();
    res.status(200).send(data)
})

router4.get("/album/:id",async (req,res)=>{
   try 
   {
       let id=req.params.id;
       let data=await albumModel.find({id:id})
       if(data)
       {
           res.status(200).send(data)
       }
       else
       {
           res.status(400).send("user not exist")
       }
   } 
   catch (error) 
   {
       res.status(404).send("invalid id")
   }
})

router4.post("/album",async (req,res)=>{
    try 
    {
        let {name,year}=req.body
        let data=await artistModel.findOne({name:name})
        let doc4=new albumModel({
           id:uuid.v4(),
           name:name,
           year:year,
           artistId:data.id
       })
       doc4.save();
       res.status(200).send("album is created")
    } 
    catch (error) 
    {
        res.status(400).send(error)
    }
})

router4.put("/album/:id",async (req,res)=>{
    try 
    {
        let id=req.params.id;
        let {name,year}=req.body
        let data=await albumModel.updateOne({id:id},{$set:{name:name,year:year}})
        if(data)
        {
            res.status(200).send("update successfully")
        }
        else
        {
            res.status(404).send("album not exist")
        }
    } 
    catch (error) 
    {
        res.status(400).send("invalid id")
    }
})

router4.delete("/album/:id",async (req,res)=>{
    try 
    {
        let id=req.params.id;
        let data=await albumModel.deleteOne({id:id})
        if(data)
        {
            res.status(202).send("data is deleted")
        }
        else
        {
            res.status(404).send("album is not exist")
        }
    } 
    catch (error) 
    {
        res.status(400).send("invalid id")
    }
})

module.exports=router4