const mongoose=require('mongoose')


const connectDB=async(DATABASE_URL)=>{
    try {
        const DB_OPTIONS={
            dbName:"schooldb"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log("connected mongo")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDB

