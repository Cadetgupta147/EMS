import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';
import connectToDatabase from './db/db.js';
import departmentRoter from './routes/department.js'

connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter)
app.use('/api/department', departmentRoter)

const PORT = process.env.PORT;

app.get('/', (req,res)=>{
    res.send("Server is running");
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})