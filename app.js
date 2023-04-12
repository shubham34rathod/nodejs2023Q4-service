let express=require('express')
require("./DataBase/db.js")
let router=require("./router/user.js")
let router2=require("./router/track.js")
let router3=require("./router/artist.js")
let router4=require("./router/album.js")
let router5=require("./router/fav.js")

let app=express();

app.use(router)
app.use(router2)
app.use(router3)
app.use(router4)
app.use(router5)

app.listen(4000,()=>console.log('port is running on 4000'))