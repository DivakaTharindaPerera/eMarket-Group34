const router = require("express").Router();
// let Item  =require("../models/items.js");
let Item  =require("../modules/items");


//insert
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const id = req.body.id;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const discount = req.body.discount;

    const newItem = new Item({
        name,
        id,
        quantity,
        price,
        discount
    })

    newItem.save().then(()=> {
        res.json("Item Added")
    }).catch((err)=> {
        console.log(err);
    })


})

//read
router.route("/").get((req,res)=> {
    Item.find().then((Item)=> {
        res.json(Item)
    }).catch((err)=> {
        console.log(err)
    })

})

//update
router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const {name,id,quantity,price,discount} = req.body;
    
    const updateItem = {
        name,
        id,
        quantity,
        price,
        discount
    }

    const update = await Item.findByIdAndUpdate(userId,updateItem).then(()=>{
    res.status(200).send({status: "User updated",user:update})   
    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})

//delete
router.route("/delete/: id").delete(async(req,res)=> {
    let userId = req.params.id;

    await Item.findByIdAndDelete(userId).then(()=> {
        res.status(200).send({status:"User deleted"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

//get information of a particular item
// router.route("/get/:id").get(async (req,res)=> {
//     let userId = req.params.id;
//     await Item.findById(userId).then(()=> {
//         res.status(200).send({status: "User fetched",user:user})
//     }).catch(()=> {
//         console.log(err.message);
//         res.status(500).send({status: "Error with get user", error:err.message});
//     })
// })

module.exports = router;
