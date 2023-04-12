const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/user")
.then(()=>console.log("connected to database"))
.catch(()=>console.log("connection error"))

//user schema and model
let UserSchema=new mongoose.Schema({
    login:{type:String},
    password:{type:String}
},{timestamps:true})
let userModel=mongoose.model("user_data",UserSchema)

//artist schema

let ArtistSchema=new mongoose.Schema({
    id:{type:String},
    name:{type:String},
    grammy:{type:Boolean}

})
let artistModel=mongoose.model("artist_data",ArtistSchema)

//track schema and method

let TrackSchema=new mongoose.Schema({
    name: {type:String},
    artistId:{type:String},
    albumId:{type:String},
    duration:{type:Number}
})
let trackModel=mongoose.model("track_data",TrackSchema)

//album schema

let AlbumSchema=new mongoose.Schema({
    id:{type:String},
    name:{type:String},
    year:{type:Number},
    artistId:{type:String}
})
let albumModel=mongoose.model("album_data",AlbumSchema)

//favorite schema

let FavSchema=new mongoose.Schema({
    artists:{type:[String]},
    albums: {type:[String]}, // favorite albums ids
    tracks: {type:[String]}
})
let favModel=mongoose.model("fav_data",FavSchema);

module.exports={userModel,trackModel,artistModel,albumModel,favModel};