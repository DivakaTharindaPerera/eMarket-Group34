import React, { useState } from "react";


export default function Addtocart() {
  //return(<h1>test</h1>)

  const [ItemName, setName] = useState("");
  const [ItemID, setID] = useState("");
  const [Quantity, setQuantity] = useState("");

  function sendData(e) {
    e.preventDefault();
    alert("insert");

    const newItem = {
      ItemName,
      ItemID,
      Quantity
    }

    console.log(newItem);
  }

  return (
    <div >

      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#" style={{ color: "red" }}>ABC Store</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">Register </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/add">Add to cart</a>

              </li>

            </ul>
          </div>
        </nav>
      </div>
      <div><h2>Add to cart</h2></div>
      <form onSubmit={sendData} className="container">
        <div class="form-group">
          <label for="ItemName">Item Name</label>
          <input type="text" class="form-control" id="ItemName" placeholder="Item Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />


        </div>
        <div class="form-group" >
          <label for="ItemID">Item ID</label>
          <input type="text" class="form-control" id="ItemID" placeholder="Item ID"
            onChange={(e) => {
              setID(e.target.value);
            }}
          />
        </div>


        <div class="form-group">
          <label for="Quantity">Quantity</label>
          <input type="number" class="form-control" id="Quantity" placeholder="Quantity"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>


    </div>
  )
}
