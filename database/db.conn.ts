import mongoose from "mongoose";

export const dbConnect = async (): Promise<void> => {
    try{
        await mongoose.connect(process.env.MONGO_URI as string, {
            autoIndex: true,
            dbName: "Alam_Barkani"
        });
        console.log("MongoDB connected");
    }catch(err){
        console.error(err);
    }
}