import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import {Card, Button} from 'react-bootstrap'
import { Alert } from "bootstrap"
import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom';

class Dashboardv extends React.Component{
    componentDidMount =()=>{
        this.getBlogPost();
    }

    getBlogPost =()=>{
        axios.get('http://localhost:4000/app/promotions')
        .then((res)=>{
            const data = res.data
            this.setState({posts: data})
            console.log("retrieved")
        })
    }

    constructor(){
        const alert = new Alert()
        super()
        this.state = {
            idp:'',
            id:'',
            name: '',
            amount:'',
            condition: '',
            posts:[],
            id_u:'',
            name_u: '',
            amount_u:'',
            condition_u: '',
        }
        this.changeId = this.changeId.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changeAmount = this.changeAmount.bind(this)
        this.changeCondition = this.changeCondition.bind(this)
        
        this.changeIdu = this.changeIdu.bind(this)
        this.changeNameu = this.changeNameu.bind(this)
        this.changeAmountu = this.changeAmountu.bind(this)
        this.changeConditionu = this.changeConditionu.bind(this)

        this.onSubmit = this.onSubmit.bind(this)
        this.displayBlogPost = this.displayBlogPost.bind(this)
        this.rmpromo = this.rmpromo.bind(this)
        this.updatepromo=this.updatepromo.bind(this)
    }
    changeId(event){
        this.setState({
            id:event.target.value
        })
    }
    changeName(event){
        this.setState({
            name:event.target.value
        })
    }
    changeAmount(event){
        this.setState({
            amount:event.target.value
        })
    }
    changeCondition(event){
        this.setState({
            condition:event.target.value
        })
    }changeIdu(event){
        this.setState({
            id:event.target.value
        })
    }
    changeNameu(event){
        this.setState({
            name:event.target.value
        })
    }
    changeAmountu(event){
        this.setState({
            amount:event.target.value
        })
    }
    changeConditionu(event){
        this.setState({
            condition:event.target.value
        })
    }
    onSubmit(event){
        const registered ={
            id:this.state.id,
            name: this.state.name,
            amount: this.state.amount,
            condition: this.state.condition
        }
        axios.post('http://localhost:4000/app/addpromo', registered)
            .then(res => console.log(res.data))

        this.setState({
            id:'',
            name: '',
            amount: '',
            condition: ''
        })
    }

    onUpdate(event){
        
    }

    updatepromo(event){
        this.setState({
            idp:event.target.value,
            id:'',
            name: '',
            amount: '',
            condition: ''
        })
    }

    rmpromo(event){
        window.location.reload(false);
        const item={
            Id:event.target.value
        }
        axios.post('http://localhost:4000/app/rmpromo', item)
    }

    displayBlogPost = (posts) =>{
        if(!posts.length) return null;
        return posts.map((post, index) => (
        
            <tr key={index}>
                <td>{post.Id}</td>
                <td>{post.Name}</td>
                <td>{post.Amount}</td>
                <td>{post.Condition}</td>
                <td>
                    <button type="button" class="btn btn-outline-primary" onClick={this.rmpromo} value={post._id}>DELETE</button>
                    --------<button type="button" class="btn btn-outline-secondary" onClick={this.updatepromo} value={post._id}>EDIT</button>
                </td>
            </tr>
              
        ))
    }

    //<UsersPage/>
    render(){
        return(
          <>
            <Card>
                <Card.Body>
                    <h3 className="texte-center mb-4">PROFILE</h3>
                    <nav>
            <ul>
                <li><Link to ="/signupv">SIGNUP</Link></li>
                <li><Link to = "/loginv">LOGIN</Link></li>
                <li><Link to ="/vendor">HOME</Link></li>
            </ul>
        </nav>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
            </div>
            <div>
            <div className ='container'>
                <div className = 'form-div'>
                    <form onSubmit={this.onSubmit}>
                        <br/>
                        <input type= 'text' placeholder = 'ID' onChange={this.changeId} value={this.state.id} 
                        className = 'form-control form-group' />
                        <br/>
                        <input type= 'text' placeholder = 'Name' onChange={this.changeName} value={this.state.name} 
                        className = 'form-control form-group'/>
                        <br/>
                        <input type= 'text' placeholder = 'Amount' onChange={this.changeAmount} value={this.state.amount} 
                        className = 'form-control form-group'/>
                        <br/>
                        <input type= 'text' placeholder = 'Condition' onChange={this.changeCondition} value={this.state.condition} 
                        className = 'form-control form-group'/>
                        <br/>
                        <input type = 'submit' className = 'btn btn-danger btn-block' value= 'ADD PROMOTION'/>
                    </form>
                </div>
            </div>
            <br/>
            <br/>
            <div className="container">
                <table className="table table-bordered border-primary table-sm">
                    <thead>
                    <tr className="table-primary">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Condition</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.displayBlogPost(this.state.posts)}
                    </tbody>
                </table>
                </div>
                <div className="container">
                <form onSubmit={this.onUpdate}>
                        <br/>
                        <input type= 'text' placeholder = 'ID' value={this.state.idp} 
                        className = 'form-control form-group'/>
                        <br/>
                        <input type= 'text' placeholder = 'Name' onChange={this.changeNameu} value={this.state.name_u} 
                        className = 'form-control form-group'/>
                        <br/>
                        <input type= 'text' placeholder = 'Amount' onChange={this.changeAmountu} value={this.state.amount_u} 
                        className = 'form-control form-group'/>
                        <br/>
                        <input type= 'text' placeholder = 'Condition' onChange={this.changeConditionu} value={this.state.condition_u} 
                        className = 'form-control form-group'/>
                        <br/>
                        <input type = 'submit' className = 'btn btn-danger btn-block' value= 'UPDATE'/>
                </form>
                </div>
            
          </div>
          </>  
        );
    }
}
 export default Dashboardv;