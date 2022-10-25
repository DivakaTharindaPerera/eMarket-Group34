const { request } = require('express');
const express =  require('express');
const router = express.Router();
const mongoose = require ("../DbConnect")
const signUpTemplateCopy = require('../models/signupmodels');
const promotions = require('../models/promotions');
const vendors = require('../models/vendorsignupmodel')
const bcrypt = require('bcrypt');
const passport = require("../models/passportconfig")
const passportv = require("../models/passportconfigv")

router.post('/signup', async(req,res) =>{

    const salt = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, salt)

    //

    const signUpUser = new signUpTemplateCopy({
        fullName:req.body.fullName,
        userName:req.body.userName,
        email:req.body.email,
        password:securePassword
    })
    signUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router.post('/vsignup', async(req,res) =>{

    const salt = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, salt)

    //

    const signUpUser = new vendors({
        fullName:req.body.fullName,
        userName:req.body.userName,
        email:req.body.email,
        password:securePassword
    })
    signUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})
router.post('/vlogin', passportv.authenticate("local",{failureRedirect: '/app/signup'}),(req,res) =>{
    res.send("successfull")
    console.log("Successfull")
})

router.post('/addpromo', async(req,res) =>{
    const promo = new promotions({
        Id:req.body.id,
        Name: req.body.name,
        Amount: req.body.amount,
        Condition: req.body.condition
    })
    
    promo.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router.post('/rmpromo',async(req,res) =>{
    const id= req.body.Id
    await promotions.findByIdAndDelete(id).exec()
    console.log(id+" deleted")
})

router.get('/signup', (req,res) =>{
    res.send("login-failed")
    console.log("login-failed")
})

router.post('/login', passport.authenticate("local",{failureRedirect: '/app/signup'}),(req,res) =>{
    res.send("successfull")
    console.log("Successfull")
})

router.get('/users', (req,res) =>{
    signUpTemplateCopy.find()
    .then(data =>{
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

router.get('/promotions', (req,res) =>{
    promotions.find()
    .then(data =>{
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

module.exports = router;