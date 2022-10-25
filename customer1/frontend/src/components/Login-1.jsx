import React, { useState } from "react";
import axios from "axios";


export default function Login() {


  const [User_Name, setUserName] = useState("");
  const [Password, setPassword] = useState("");


  function sendData(e) {
    e.preventDefault();
    alert("insert");

    const newCustomer = {

      User_Name,
      Password,
    }

    axios.post("http://localhost:8070/customer/add", newCustomer).then(() => {
      // alert("customer added")
      // Name("");
      // User_Name("");
      // Password("");
      // ContactNo("");
      // Address("");

    }).catch((err) => {
      alert(err)
    })

    console.log(newCustomer);
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

      <div><h2>Login</h2></div>

      <form onSubmit={sendData} className="container">

        <div class="form-group">
          <label for="User_Name">User Name</label>
          <input type="text" class="form-control" id="User_Name" placeholder="User_Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>

        <div class="form-group">
          <label for="Password">Password</label>
          <input type="text" class="form-control" id="Password" placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>


    </div>


  )
}