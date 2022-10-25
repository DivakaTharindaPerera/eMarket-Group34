import React,{useState} from "react";

export default function Login(){
    return(

        <div className = "container">
        <form>
        <div class="form-group">
        <h1>Login</h1>
          <label for="username">Order Id</label>
          <input type="text" class="form-control" id="username"  placeholder="Enter username"/>
        </div>

        <div class="form-group">
          <label for="username">Order Id</label>
          <input type="text" class="form-control" id="username"  placeholder="Enter username"/>
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
        </form>
        </div>
    )

}