let express=require("express")
const { favModel, trackModel } = require("../DataBase/db")

let router5=express.Router()

router5.use(express.json())
router5.use(express.urlencoded({extended:true}))

router5.get("/favs",async (req,res)=>{
    let data=await favModel.find();
    res.send(data);
})

router5.post("/favs/track/:id",async (req,res)=>{
     try 
     {
        let id=req.params.id;
        let data=await trackModel.findOne({id:id})
        if(data)
        {
            let doc51=new favModel({
                tracks:data
            })
            doc51.save()
            res.status(200)
        }
        else
        {
            res.status(422).send("id not exist")
        }
     } 
     catch (error) 
     {
        res.status(400).send("invalid id")
     }
     
})

router5.delete("/favs/track/:id",async (req,res)=>{
    try 
    {
       let id=req.params.id;
       let data=await trackModel.deleteOne({id:id})
       if(data)
       {
           res.status(200)
       }
       else
       {
           res.status(422).send("id not exist")
       }
    } 
    catch (error) 
    {
       res.status(400).send("invalid id")
    }
    
})

router5.post("/favs/album/:id",async (req,res)=>{
    try 
    {
       let id=req.params.id;
       let data=await trackModel.findOne({id:id})
       if(data)
       {
           let doc51=new favModel({
              albums:data
           })
           doc51.save()
           res.status(200)
       }
       else
       {
           res.status(422).send("id not exist")
       }
    } 
    catch (error) 
    {
       res.status(400).send("invalid id")
    }
    
})

router5.delete("/favs/album/:id",async (req,res)=>{
    try 
    {
       let id=req.params.id;
       let data=await trackModel.deleteOne({id:id})
       if(data)
       {
           res.status(200)
       }
       else
       {
           res.status(422).send("id not exist")
       }
    } 
    catch (error) 
    {
       res.status(400).send("invalid id")
    }
    
})

router5.post("/favs/artist/:id",async (req,res)=>{
    try 
    {
       let id=req.params.id;
       let data=await trackModel.findOne({id:id})
       if(data)
       {
           let doc51=new favModel({
              artists:data
           })
           doc51.save()
           res.status(200)
       }
       else
       {
           res.status(422).send("id not exist")
       }
    } 
    catch (error) 
    {
       res.status(400).send("invalid id")
    }
    
})

router5.post("/favs/artist/:id",async (req,res)=>{
    try 
    {
       let id=req.params.id;
       let data=await trackModel.deleteOne({id:id})
       if(data)
       {
           res.status(200)
       }
       else
       {
           res.status(422).send("id not exist")
       }
    } 
    catch (error) 
    {
       res.status(400).send("invalid id")
    }
    
})

module.exports=router5;