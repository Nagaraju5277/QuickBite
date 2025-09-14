import mongoose from "mongoose";

export const connectDB = async()=>{
    await  mongoose.connect('mongodb+srv://QuickBite:QuickBite1234@cluster0.opnfcce.mongodb.net/QuickBite').then(()=> console.log("DB Connected"));
}