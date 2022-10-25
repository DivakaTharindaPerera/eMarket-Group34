import React, { useState, } from "react";


export default function Dashboard() {

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
              <a class="nav-item nav-link" href="/add">Add to cart</a>

            </div>
          </div>
        </nav>
      </div>
      <div>
        <div className="container p-3 my-3 bg-primary text-white text text-center">
          <h1>Welcome to ABC-STORE</h1>
          <p>ABC-STORE Dashbord</p>
        </div>
      </div>

      <div className="container">
        <h1 className="text-center">Item </h1>
      </div>

      <div className="container">
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Item Name</th>
              <th scope="col">Item Qty</th>
              <th scope="col">Item Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Soap</td>
              <td>12</td>
              <td>35$</td>
              <td><button type="button" className="btn btn-success">Modify</button> <button type="button" className="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Banana</td>
              <td>12</td>
              <td>10$</td>
              <td><button type="button" className="btn btn-success">Modify</button> <button type="button" className="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Apple</td>
              <td>5</td>
              <td>5$</td>
              <td><button type="button" className="btn btn-success">Modify</button> <button type="button" className="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
      </div>
    </div>
  )
}