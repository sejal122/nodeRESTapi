const express= require('express')
const router=express.Router()
const userType=require('../models/users')
router.get('/',async (req,res)=>{
    // res.send('Hello all!')
    // to fetch the data from mongodb -> we use the find({}) --> empty curly braackets means no filter or condition
    const allrecords = await userType.find({})
    res.send(allrecords)
})
router.route('/:id').get(async (req,res)=>{
    // res.send('Hello all!')
    // to fetch the data from mongodb -> we use the find({}) --> empty curly braackets means no filter or condition
    const _id=req.params.id
    console.log(typeof id)
    const singlerecord = await userType.findById({_id})
    res.send(singlerecord)
})
router.delete('/:id',async (req,res)=>{
    // res.send('Hello all!')
    // to fetch the data from mongodb -> we use the find({}) --> empty curly braackets means no filter or condition
    const _id=req.params.id
    const deletedrecord = await userType.deleteOne({_id})
    res.send(deletedrecord)
})
router.patch('/:id',async (req,res)=>{
    // res.send('Hello all!')
    // to fetch the data from mongodb -> we use the find({}) --> empty curly braackets means no filter or condition
    const _id=req.params.id
    const updatedrecord = await userType.findByIdAndUpdate(_id,req.body)
    res.send(updatedrecord)
})
router.post('/',async(req,res)=>{
try{
    console.log(req.body)
const newuser= new userType(req.body)
const insertedData = await newuser.save()
 // save is a mongodb method used to save data in the collection
//save() returns a promise
res.send(insertedData)
}catch(e){

}
})

module.exports=router;