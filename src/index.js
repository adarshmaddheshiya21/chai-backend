import dotenv from 'dotenv'
import connectDB from './db/connectDB.js';
dotenv.config({path: './env'})

connectDB()






/*
;(async()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("ERR", error)
            throw error
        })
        app.listen(process.env.PORT, ()=> {
            console.log(`The server is listening on http/:localhost:${process.env.PORT}`)
        })
    }catch(error) {
        console.log("Error: ", error)
        throw error
    }   
})()
*/