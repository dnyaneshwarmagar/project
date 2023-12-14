import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";

dotenv.config()
const app = express();

app.use(express.json());
app.use(morgan('dev'))

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`listening on ${process.env.DEV_MODE} and on PORT ${PORT}`)
})