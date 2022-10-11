const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{type:'String',required:true},
    dept:{type:'String',required:true},
    password:{type:'String',required:true}
})



const userModal=mongoose.model('user',userSchema)
module.exports=userModal