import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from './route/book.route.js';
import userRoute from "./route/user.route.js"




const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

//connect to mongodb
try{
mongoose.connect(URI,{
    UseNewUrlParser:true,
    useUnifiedTopology:true
});
console.log("connected to mongodb")
}catch(error){
    console.log("Error: ",error);

}

app.use("/book",bookRoute);
app.use("/user",userRoute);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});




