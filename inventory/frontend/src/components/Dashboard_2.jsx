// import React, {useState, useEffect }from "react";
import React from "react";

import {link} from 'react-router-dom';
import axios from "axios";

function Dashboard_2(){

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
            <div>
                <div className="container p-3 my-3 bg-primary text-white text text-center">
                    <h1>Welcome to ABC-STORE</h1>
                    <p>ABC-STORE INVENTORY MANAGEMENT DASHBOARD</p>
                </div>
            </div>
            <div className="container">
                <div className="text-right">
                <a href="/add"><button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Add New Item</button></a>
                </div>
            </div>
            <div className="container">
                <h1 className="text-center">Item Dashboard</h1>
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
                            <td>120</td>
                            <td>35$</td>
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

export default Dashboard_2;
