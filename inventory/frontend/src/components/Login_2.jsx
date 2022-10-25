import React from "react";

function Login_2(){

    return(
        <div >
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
            
            <form className = "container">
                <h1>LOGIN</h1>

                <div class="form-group">
                    <label for="username">Username </label>
                    <input type="text" class="form-control" id="username" placeholder="username"/>
                </div>

                <div class="form-group">
                    <label for="password">Password </label>
                    <input type="password" class="form-control" id="password" placeholder="password"/>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>

            </form>

        </div>

    )
}
       

export default Login_2;
