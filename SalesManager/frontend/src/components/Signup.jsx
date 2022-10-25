import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
//import { UsersPage } from "./users";



class Signup extends React.Component{
    componentDidMount =()=>{
        this.getBlogPost();
    }
    
    getBlogPost =()=>{
        axios.get('http://localhost:4000/app/users')
        .then((res)=>{
            const data = res.data
            this.setState({posts: data})
            console.log("retrieved")
        })
    }

    constructor(){
        super()
        this.state = {
            fullName: '',
            userName:'',
            email: '',
            password: '',
            posts:[]
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            userName:event.target.value
        })
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

    onSubmit(event){
        event.preventDefault()

        const registered ={
            fullName: this.state.fullName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/app/signup', registered)
            .then(res => console.log(res.data))

        this.setState({
            fullName: '',
            userName: '',
            email: '',
            password: ''
        })
    }

    
    
    //<UsersPage/>
    render(){
        return(
            <><nav>
            <ul>
                <li><Link to = "/login">LOGIN</Link></li>
                <li><Link to ="/smanager">HOME</Link></li>
            </ul>
        </nav>
          <div>
            
            <div className ='container'>
                <h1>Sales Manager signup</h1>
                <div className = 'form-div'>
                    <form onSubmit={this.onSubmit}>
                        <br/>
                        <input type= 'text' placeholder = 'Full Name' onChange={this.changeFullName} value={this.state.fullName} 
                        className = 'form-control form-group'/>
                        <br/>
                        <input type= 'text' placeholder = 'Username' onChange={this.changeUsername} value={this.state.userName} 
                        className = 'form-control form-group'/>
                        <br/>
                        <input type= 'text' placeholder = 'E-mail' onChange={this.changeEmail} value={this.state.email} 
                        className = 'form-control form-group'/>
                        <br/>
                        <input type= 'password' placeholder = 'password' onChange={this.changePassword} value={this.state.password} 
                        className = 'form-control form-group'/>
                        <br/>
                        <input type = 'submit' className = 'btn btn-danger btn-block' value= 'SIGN UP'/>
                    </form>
                </div>
                
            </div>
            <br/>
          </div>  
          </>
        );
    }
}
 export default Signup;