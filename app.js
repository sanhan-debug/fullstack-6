import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { blogRouter } from './Routes/blogRoutes.js'
import { connect } from 'mongoose'

// mongodb+srv://sanhan:sanhan2006@blogs.licpm.mongodb.net/?retryWrites=true&w=majority&appName=blogs

dotenv.config()
const app = express()
const PORT = 3000
const URI = process.env.URI

app.use(cors())
app.use(express.json())
app.use("/blogs",blogRouter)


app.listen(PORT, () => {
    console.log(`server is active ${PORT} `)

    connect(URI).then(()=>console.log("connected to the mongo"))
})