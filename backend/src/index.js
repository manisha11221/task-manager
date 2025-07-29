import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express"
import cors from "cors"

dotenv.config()
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

//routes import
import taskRoutes from './routes/taskRoutes.js'

//routes declaration
app.use('/api', taskRoutes)

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`>> Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log(">> MONGO db connection failed !! ", err);
})

