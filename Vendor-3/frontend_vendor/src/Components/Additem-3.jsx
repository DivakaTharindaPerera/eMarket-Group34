import React,{useState} from "react"
import axios from "axios";

export default function Additem(){
    const Vendorid = 1267
    const [ItemName, setName] = useState("");
    const [qty, setqty] = useState("");
    const [Price, setpriz] = useState("");
    

    function sendData(e){
       e.preventDefault();
       const newItem = {
        Vendorid,
        ItemName,
        qty,
        Price

        
       }
       axios.post("http://localhost:8020/items/add", newItem).then(()=>{
        alert("Item Added");
        setqty("");
        setpriz("");
       }).catch((err)=>{
        alert(err)
       })
    }

    return (
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">ABC-STORE</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-right">
                        <a className="nav-item nav-link" href="/">Dashboard</a>
                            <a className="nav-item nav-link" href="/login">Login</a>
                            <a className="nav-item nav-link" href="/register">Register</a>

                        </div>
                    </div>
                </nav>
            </div>
            <div><h1><center>ADD ITEM</center> </h1></div>
            <form className="container"onSubmit={sendData}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Item Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Item Name" onChange={(e)=>{setName(e.target.value);}}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">item QTY</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="item QTY"onChange={(e)=>{setqty(e.target.value);}}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Price" onChange={(e)=>{setpriz(e.target.value);}}/>
                </div>
                <button type="submit" class="btn btn-primary" href="/additm">Add Item</button>
            </form>
         </div>
    )
}