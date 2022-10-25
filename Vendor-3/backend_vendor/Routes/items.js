const router = require ("express").Router();
let items = require("../models/items");

/* add item*/
router.route("/add").post(async(req,res) =>{
    const {Vendorid,ItemName,qty,Price}=req.body;
    const addItem = {
        Vendorid,
        ItemName,
        qty,
        Price
    }
    const add = await items.insertMany(addItem).then(()=>{
        res.status(200).send({status: "Item Added" })
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with Adding data", error: err.messege});
    })
})
/*View items by added one vendor*/
router.route("/view/:vid").get(async(req,res) =>{
    let itemId = req.params.vid
    const itm = await items.find({Vendorid: itemId}).then((items)=>{
        res.status(200).send({status: "Items Fonund", items})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with Fectching data", error: err.messege});
    })
})
/*Update 1 Item */
router.route("/update/:id").put(async(req,res) =>{
    let itemId = req.params.id;
    const {ItemName,qty,Price}=req.body;

    const updateitem = {
        ItemName,
        qty,
        Price
    }
    const update = await items.findByIdAndUpdate(itemId, updateitem)
    .then(()=>{
        res.status(200).send({status: "Item Updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with Updateing data", error: err.messege});
    })
})
/*Delete Items*/
router.route("/delete/:id").delete(async(req,res) =>{
    let itemId = req.params.id;
    await items.findByIdAndDelete(itemId).then(() =>{
        res.status(200).send({status: "Item Deleted"})
    }).catch((err) =>{
        console.log(err.messege);
        res.status(500).send({status: "Error With dele Item", error : err.messege});
    })
})
/*get 1 item details*/
router.route("/get/:id").get(async(req,res) =>{
    let itemId = req.params.id;
    const item =  await items.findById(itemId).then((item) =>{
        res.status(200).send({status: "Item Fectched",item})
    }).catch((err) =>{
        console.log(err.messege);
        res.status(500).send({status: "Error With dele Item", error : err.messege});
    })
})

module.exports = router;