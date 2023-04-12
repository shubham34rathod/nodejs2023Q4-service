let express=require('express');
let uuid=require("uuid")
let {userModel}=require("../DataBase/db.js")

let router=express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:true}))
router.get("/",(req,res)=>{
    res.send("Hello World")
})
router.get("/user",async (req,res)=>{
    let data=await userModel.find();
    res.send(data);
})

router.get("/user/:id",async (req,res)=>{
    let data=await userModel.findById(req.params.id)
    res.send(data);
})

router.post("/user",async (req,res)=>{
    let {login,password}=req.body;
    let user_doc=await new  userModel({
        id:uuid.v4(),
        login:login,
        password:password
    })
    user_doc.save();
    res.send("data received")
})

router.put("/user/:id",async (req,res)=>{
    let id=req.params.id;
    let {password}=req.body;
    let data=await userModel.findByIdAndUpdate(id,{password:password})
})

router.delete("/user/:id",(req,res)=>{
    let id=req.params.id;
    userModel.findByIdAndDelete(id)
})

module.exports=router;