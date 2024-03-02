import mongoose from "mongoose";
import { db_name } from "../constant.js";

const connectdb = async()=>{
    try{
         const connectioninstance=await mongoose.connect(`${process.env.mongoose_uri}/${db_name}`)

        console.log(`\n mongoose connected !!!! at db host:${connectioninstance.connection.host}`)
    }
    catch(error){
        console.error("index.js in db folder in having an error", error)
        process.exit(1)
    }
}

 export default connectdb