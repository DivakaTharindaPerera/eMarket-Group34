import React from "react";

export default function Register() {
    return (

        <div>
            <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                </nav></div>
                <div><h1><center>REGISTER</center> </h1></div>
            <form className="container" >
                <div class="form-group">
                    <label for="UserName">Enter User Name</label>
                    <input type="text" class="form-control" id="UserName" placeholder="User Name" />
                </div>

                <div class="form-group">
                    <label for="email">Enter Email Address</label>
                    <input type="" class="form-control" id="email" placeholder="Email" />
                </div>

                <div class="form-group">
                    <label for="Password">Enter Password</label>
                    <input type="" class="form-control" id="Password" placeholder="Password" />
                </div>


                <div class="form-group">
                    <label for="Password">Confirm Password</label>
                    <input type="" class="form-control" id="Password" placeholder="Confirm Password" />
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
                <div>
                    <h4>Already have a Account</h4>
                    <a href="/login">Login</a>
                </div>
            </form>




        </div>


    )
}