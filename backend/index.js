import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

const port = process.env.PORT;

//importing routes
import userRoutes from './routes/userRoutes.js'
import connectDb from './database/db.js';
app.use("/api/user", userRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on https://localhost:${port}`)
    connectDb();
});