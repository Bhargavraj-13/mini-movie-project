const express = require ('express');
const mongoose = require ('mongoose');
const movieRouter = require('./Routes/movieRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const db_url = process.env.db_url;

const connectDB = async() => {
    try{
        await mongoose.connect(db_url);
        console.log("Connected To DataBase");
    }
    catch(error){
        console.error("error connecting to Database");
    }
}

connectDB();

app.use('/movies', movieRouter);

app.get('/',(req,res)=>{
    res.send("welcome!!!")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
