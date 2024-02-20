import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routes.js'

dotenv.config()

const app=express()

app.use(express.json({limit:"30mb"}))

app.use(cors())

app.use('/',router)

const PORT=process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(error => console.error('Failed to connect to MongoDB:', error));

app.listen(PORT,()=>console.log(`server running ${PORT}`))