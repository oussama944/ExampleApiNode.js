const express=require('express');
const router=express.Router();

const{ PostModel }=require('../models/potsModel');

router.get('/',(req,res)=>{
    PostModel.find((err,docs)=>{
        console.log(docs);
    })
})

module.exports=router