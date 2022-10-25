import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import {Card, Button} from 'react-bootstrap'
import { Alert } from "bootstrap"
import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom';

function Welcome(){
    return(
        <div className="container">
        <h1>Welcome to eMarket</h1>
        <nav>
            <button  type="button" className="btn btn-light aligned-center"><Link to ="/smanager">Sales Manager</Link></button><br/><br/>
            <button  type="button" className="btn btn-light aligned-center"><Link to = "/vendor">Vendor</Link></button>
        </nav>
        </div>
    )
}                

export default Welcome