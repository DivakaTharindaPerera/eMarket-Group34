import React from "react";

function Register_2(){

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
            <h1>REGISTER</h1>


            <div class="form-group">
                    <label for="username">Name </label>
                    <input type="text" class="form-control" id="name" placeholder="Name"/>
            </div>

            <div class="form-group">
                    <label for="gmail">Gmail Address </label>
                    <input type="email" class="form-control" id="gamil" placeholder="Gmail Address"/>
            </div>

            <div class="form-group">
                    <label for="contactNumber">Contact Number </label>
                    <input type="tel" class="form-control" id="contactNumber" placeholder="Contact Number"/>
            </div>

            
            <div class="form-group">
                <label for="username">Create an username </label>
                <input type="text" class="form-control" id="username" placeholder="Username"/>
            </div>

                {/* <div class="form-group">
                    <label for="password">Password </label>
                    <input type="password" class="form-control" id="password" placeholder="password"/>
                </div> */}

                <button type="submit" class="btn btn-primary">Submit</button>

            </form>

        </div>

    )
}
       

export default Register_2;

