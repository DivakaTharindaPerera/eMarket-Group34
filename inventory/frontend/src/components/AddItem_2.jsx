import React,{useState} from "react";
import axios from "axios";


function AddItem_2() {
  
  const [ItemName,setName]=useState("");
  const [ItemID,setID]=useState("");
  const [Price,setPrice]=useState("");
  const [Quantity,setQuantity]=useState("");
  const [Discount,setDiscount]=useState("");

  

  function sendData(e){
    alert("Item Added.");
      e.preventDefault();

      const newItem={
          ItemName,
          ItemID,
          Price,
          Quantity,
          Discount
      }

      // console.log(newItem);
      
      axios.post ("http.//localhost:8070/item/add",newItem).then(()=> {
        alert("Item Added")
        setName("");
        setID("");
        setPrice("");
        setQuantity("");
        setDiscount("");
      }).catch((err)=>{
        alert(err);
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
      <form onSubmit={sendData}className="container">
        <h1>ADDING ITEMS</h1>

        <div class="form-group">
          <label for="ItemName">Item Name</label>
          <input type="text" class="form-control" id="ItemName" placeholder="Item Name"
          onChange={(e)=>{
              setName(e.target.value); }}/>
        </div>

        <div class="form-group">
          <label for="ItemID">Item ID</label>
          <input type="text" class="form-control" id="ItemID" placeholder="Item ID"
          onChange={(e)=>{
              setID(e.target.value);  }}/>
        </div>

        <div class="form-group">
          <label for="Quantity">Quantity</label>
          <input type="number" class="form-control" id="Quantity" placeholder="Quantity"
          onChange={(e)=>{
             setQuantity(e.target.value); }}/>
        </div>

        <div class="form-group">
          <label for="Price">Price</label>
          <input type="number" class="form-control" id="Price" placeholder="Price"
          onChange={(e)=>{
              setPrice(e.target.value);  }}/>
        </div>

        <div class="form-group">
          <label for="Discount">Discount</label>
          <input type="number" class="form-control" id="Discount" placeholder="Discount"
          onChange={(e)=>{
             setDiscount(e.target.value); }}/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>


    </div>
  )
}

export default AddItem_2;

