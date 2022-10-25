import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import {Card, Button} from 'react-bootstrap'
import { Alert } from "bootstrap"
import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom';

function Vendorhome(){
    return(
        <div className="container">
        <h1>Welcome to the Sales manager portal</h1>
        <nav>
            <button  type="button" className="btn btn-light aligned-center"><Link to ="/">Go Back</Link></button><br/><br/>
            <button  type="button" className="btn btn-light aligned-center"><Link to ="/signupv">SIGNUP</Link></button><br/><br/>
            <button  type="button" className="btn btn-light aligned-center"><Link to = "/loginv">LOGIN</Link></button>
        </nav>
        </div>
    )
}                

export default Vendorhome