const express=require('express')
const cors=require('cors')
const router = require('./routers/router')
const bodyparser=require('body-parser')
const morgan=require('morgan')

const app=express()
app.use(cors())
app.use(express.json())
app.use(bodyparser.json())
app.use(morgan('dev'))

require("../src/db/conn")
app.use(router)


app.listen(8080,()=>{
    console.log('server is live...')
})