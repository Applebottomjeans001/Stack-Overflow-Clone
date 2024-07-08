// import express from "express"
// import dotenv from "dotenv"
// import cors from"cors"
// import mongoose from "mongoose"
// import userroutes from './routes/user.js'
// import questionroutes from './routes/question.js'
// import answerroutes from './routes/answer.js'

// const app=express();
// dotenv.config();
// app.use(express.json({limit:"70mb", extended:true}))
// app.use(express.urlencoded({limit:"70mb", extended:true}))
// // app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000' 
// }));

// app.use("/user",userroutes);
// app.use("/questions",questionroutes);
// app.use("/answers",answerroutes);
// app.get('/',(req,res)=>{
//     res.send("The clone server is running ")
// })

// const PORT = process.env.PORT || 5000
// const database_url = process.env.MONGODB_URL

// mongoose.connect(database_url)
// .then(()=> app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)}))
// .catch((err)=>console.log(err.message))




import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./somethingelse.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/',(req, res) => {
//     res.send("This is a stack overflow clone API")
// })

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});