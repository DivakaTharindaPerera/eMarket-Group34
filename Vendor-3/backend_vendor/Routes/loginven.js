const router = require ("express").Router();
let vendors = require("../models/loginven");
/*Add Vendor*/
router.route("/addvendor").post(async(req,res) =>{
    const {VendorId,VendorName,vendorEmail,vendorPassword,VendorAddress}=req.body;
    const addvendor = {
        VendorId,
        VendorName,
        vendorEmail,
        vendorPassword,
        VendorAddress
    }
    const add = await vendors.insertMany(addvendor).then(()=>{
        res.status(200).send({status: "user Added" })
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with Adding User"});
    })
})
/*get 1 vendor details*/
router.route("/login/:lid").get(async(req,res) =>{
    let vendordt = req.params.lid;
    const vendor =  await vendors.find({vendorEmail: vendordt}).then((vendor) =>{
        res.status(200).send({status: "user Found",vendor})
    }).catch((err) =>{
        console.log(err.messege);
        res.status(500).send({status: "Error With User Login", error : err.messege});
    })
})

module.exports = router;