import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import User from "./models/User.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";




dotenv.config();
connectDB();

const app = express()
app.use(cors());
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("Backend is running ")
});
// app.get("/api/auth", async (req,res)=>{
//     try{
//         const users =await User.find();
//         console.log(users)
//         res.json(users)
//     }catch(err){
//         console.error( `error geting user ${err}`);
//         res.send("error getting data not getting ")
//     }
// });
app.use("api/auth", authRoutes);
app.use("api/tasks", taskRoutes);



const PORT = process.env.port || 5000;
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
})