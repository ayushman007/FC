import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

const port=process.env.PORT||5000

connectDB();

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cors(
    // {
   
    //     origin: 'http://localhost:5173', //frontend url
    //     credentials: true
            
        
    // }
))


app.use(cookieParser());



app.get('/', (req, res) => res.send("server is listening"));


//error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`http://localhost:${port}`));