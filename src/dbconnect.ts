import mongoose from "mongoose";

let URL:string = process.env.MONGO_URL as string

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true},(err:any)=>{

})