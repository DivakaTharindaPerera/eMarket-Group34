const router = require("express").Router();
let delivery = require("../models/customer");

router.route("/add").post((req,res) => {
    const name = req.body.customer_name;
    const address = req.body.address;
    const contact = Number(req.body.contactNO);
    const uname = req.body.user_name;
    const password = req.body.password;

    const newcustomer = new customer({
        name,
        address,
        contact,
        uname,
        password
    })

    newcustomer.save().then(() => {
        res.json("order added")
    }).catch((err) => {
        console.log(err);
    })

})

router.route("/").get((req,res) => {
    customer.find().then((customer) => {
        res.json(customer)
    }).catch((err) => {
        console.log(err)
    })

})

router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{customer_name, address, contactNo, user_name,password }=req.body;

    const updatecustomer = {
        customer_name,
        address,
        contactNo,
        user_name,
        password
    }

    const update = await customer.findByIdAndUpdate(userId, updatecustomer).then(() => {
        res.status(200).send({status:"User updated"}) 

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error with updating data", error: err.message});
    })

    
})

router.route("/delete/:id").delete(async(req,res) => {
    let userId = req.params.id;

    await delivery.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status : "User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status : "Error with delete user", error: err.message});

    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await delivery.find.findone(orderID)
    .then((customer)=>{
        res.status(200).send({status: "user fetched", customer})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status : "Error with get user", error: err.message});
    })
})


module.exports = router;