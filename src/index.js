import dotenv from "dotenv";
import connectdb from "./db/index.js";


dotenv.config({
    path :'.env'
})


connectdb()












/*const app = express()

(async{}=>{
    try{
        await mongoose.connect(`${process.env.mongoose_uri}/${db_name}`)
    }
    catch(error){
        console.error("error:" error)
        throw err
    }
})()*/