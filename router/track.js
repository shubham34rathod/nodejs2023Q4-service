let express=require("express");
let uuid=require("uuid");
let {trackModel,artistModel}=require('../DataBase/db.js')

let router2=express.Router();

router2.use(express.json());
router2.use(express.urlencoded({extended:true}))

router2.get("track",async (req,res)=>{
    try  
    {
        let data=await trackModel.find();
        res.status(201).send(data)
    } 
    catch (error) 
    {
        console.log(error);
    }
})

router2.get("track/:id",async (req,res)=>{
    try  
    {
        let id=req.params.id;
        console.log(id);
        let data=await trackModel.find({id:id});
        if(data)
        {
            res.status(201).send(data)
        }
        else
        {
            res.status(404).send("invalid id")
        }
    } 
    catch (error) 
    {
        res.status(404).send("not exist")
    }
})

router2.post("/track",async (req,res)=>{
    try 
    {
        let {name,artistId,albumId,duration}=req.body;
        let data=await artistModel.findOne({name:name})
        let doc2=new trackModel({
            id:uuid.v4(),
            name:name,
            artistId:data.id,
            albumId:albumId,
            duration:duration
        })
        doc2.save();
        res.status(201).send("data is created")
    } 
    catch (error) 
    {
        res.status(400).send("sending error")
    }
})

router2.put("/track/:id",async (req,res)=>{
    try 
    {
        let id=req.params.id;
        let {name,duration}=req.body;
        let data=await trackModel.updateOne({id:id},{$set:{name:name,duration:duration}})
        if(data)
        {
            res.status(200).send("update successfully")
        }
        else
        {
            res.status(400).send("id is invalid")
        }
    } 
    catch (error) 
    {
        res.status(404).send("id not exist")
    }
})

router2.delete("/track/:id",async (req,res)=>{
    try 
    {
        let id=req.params.id;
        let data=await trackModel.deleteOne({id:id})
        if(data)
        {
            res.status(202).send("data is deleted")
        }
        else
        {
            res.status(404).send("track is not exist")
        }
    } 
    catch (error) 
    {
        res.status(400).send("invalid id")
    }
})

module.exports=router2
