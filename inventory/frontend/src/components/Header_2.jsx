import React from "react";

function Header_2(){

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" style={{color:"red"}}>ABC Store</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/dashboard">Dashboard <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">Register </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/add">Add Items</a>
              
            </li>
            
          </ul>
        </div>
      </nav>
      

    )
}

export default Header_2;