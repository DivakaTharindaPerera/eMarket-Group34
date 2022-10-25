const router = require("express").Router();
let delivery = require("../models/delivery");

router.route("/add").post((req,res) => {
    const orderID = Number(req.body.orderID);
    const name = req.body.customer_name;
    const address = req.body.address;
    const contact = Number(req.body.contactNO);
    const date = req.body.delivery_date;
    const status = req.body.delivery_status;

    const newdelivery = new delivery({
        orderID,
        name,
        address,
        contact,
        date,
        status
    })

    newdelivery.save().then(() => {
        res.json("delivery added")
    }).catch((err) => {
        console.log(err);
    })

})

router.route("/").get((req,res) => {
    delivery.find().then((delivery) => {
        res.json(delivery)
    }).catch((err) => {
        console.log(err)
    })

})

router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{orderID, customer_name, address, contactNo, delivery_date, delivery_status}=req.body;

    const updatedelivery = {
        orderID,
        customer_name,
        address,
        contactNo,
        delivery_date,
        delivery_status
    }

    const update = await delivery.findByIdAndUpdate(userId, updatedelivery).then(() => {
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
    .then(()=>{
        res.status(200).send({status: "user fetched", delivery})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status : "Error with get user", error: err.message});
    })
})


module.exports = router;