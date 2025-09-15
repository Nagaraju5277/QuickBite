import express from "express"
import path from "path"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js"




// app config
const app = express();
const port =process.env.PORT || 4000;


// middleware
app.use(express.json())
app.use(cors({
  origin: [
    "https://quickbite-admin-82xc.onrender.com", // Admin frontend
    "https://quickbite-frontend.vercel.app"      // optional: customer frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);
app.use("/api/category",categoryRoutes);

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


