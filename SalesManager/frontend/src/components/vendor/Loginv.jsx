import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import { Alert } from "bootstrap";



class Loginv extends React.Component{
    
    constructor(){
        const alert = new Alert()
        super()
        this.state = {
            email: '',
            password: '',
            posts:[]
        }
        
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.login = this.login.bind(this)
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    
    login(event){
        //const navigate = useNavigate()
        event.preventDefault()
        axios.post('http://localhost:4000/app/vlogin', {username: this.state.email,password: this.state.password})
        .then(res => {
            if(res.data === "successfull"){
                this.props.navigate('/dashboardv');
            }
            
        })
        this.setState({
            email: '',
            password: ''
        })
    }

    render(){
    return(
        <>
        <nav>
        <ul>
            <li><Link to ="/signupv">SIGNUP</Link></li>
            <li><Link to ="/vendor">HOME</Link></li>
        </ul>
    </nav>
        <div className="container">
        <div className="form-div">
            <form>
                <br/>
                <input type= 'text' placeholder = 'E-mail' onChange={this.changeEmail} value={this.state.email} 
                className = 'form-control form-group'/>
                <br/>
                <input type= 'password' placeholder = 'password' onChange={this.changePassword} value={this.state.password} 
                className = 'form-control form-group'/>
                <br/>
                <button onClick={this.login} className = 'btn btn-danger btn-block' value= 'LOGIN'>LOGIN</button>
            </form>
        </div>
        </div>
        </>
    )
    }
}

export function APPWithRouterv(props){
    const navigate = useNavigate()
    return(
        <Loginv navigate={navigate}></Loginv>
    )
}

export default Loginv;