import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom';
import Signup from './components/Signup'
import Login,{APPWithRouter} from './components/Login'
import Home from './components/Home'
import Welcome from "./components/Welcome";
import Vendorhome from "./components/vendor/Vendorhome";
import Signupv from "./components/vendor/Signupv";
import Dashboard from './components/Dashboard'
import APPWithRouterv from "./components/vendor/Loginv";
import Dashboardv from "./components/vendor/Dashboardv";
//import { UsersPage } from "./users";


/*
class App extends React.Component{
    componentDidMount =()=>{
        this.getBlogPost();
    }
    
    getBlogPost =()=>{
        axios.get('http://localhost:4000/app/login')
        .then((res)=>{
            const data = res.data
            this.setState({posts: data})
            console.log("retrieved")
        })
    }

    gotoDashBoard = ()=>{
        
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
        this.displayBlogPost = this.displayBlogPost.bind(this)
        this.gotoDashBoard = this.gotoDashBoard.bind(this)
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

    displayBlogPost = (posts) =>{
        if(!posts.length) return null;
        return posts.map((post, index) => (
            <tr key={index}>
                <td>{post.fullName}</td>
                <td>{post.userName}</td>
                <td>{post.email}</td>
                <td>{post.password}</td>
            </tr>
           /*<div key ={index}>
            <h3>{post.fullName}</h3>
            <h3>{post.email}</h3>
            <h3>{post.userName}</h3>
            <h3>{post.password}</h3>
           </div>   */   
           /*     
        ));
        
    }
    
    //<UsersPage/>
    render(){
        return(
          <div>
            
            <div className ='container'>
            <a href="../components/dashboard.jsx">goto dashboard</a>
            <button>LOGIN</button>
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
            <br/>
            <div>
                <table className="table table-bordered border-primary table-sm">
                    <thead>
                    <tr className="table-primary">
                        <th>Full name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>password</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.displayBlogPost(this.state.posts)}
                    </tbody>
                </table>
            </div>
          </div>  
        );
    }
}
 export default App;
 */

function App(){
    
    return(
        <>
      <Routes>
        <Route path="/" element={<Home />}/>
        
        <Route path="/vendor" element={<Vendorhome />}/>
        <Route path="/signupv" element={<Signupv/>}/>
        <Route path="/loginv" element={<APPWithRouterv/>}/>
        <Route path="/dashboardv" element={<Dashboardv/>}/>

        <Route path="/smanager" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<APPWithRouter/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </>
    )
}

export default App;