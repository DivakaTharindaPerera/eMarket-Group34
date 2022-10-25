import React,{useState} from "react";
//import axios from "axios";

export default function AddDelivery(){

   const[orderid, setorderid] =useState("");
   const[customerName, setcustomerName] =useState("");
   const[address, setaddress] =useState("");
   const[contact, setcontact] =useState("");
   const[date, setdate] =useState("");

   function sendData(e){
    e.preventDefault();
    
    const newdelivery={
      orderid,
      customerName,
      address,
      contact,
      date
    }

  //   axios.post("http://localhost:8070/delivery_details/add",newdelivery).then(()=>{
  //     alert("Delivery added")
  //   }).catch((err)=>{
  //     alert(err)
  //   })

    }


    return(
        <div className = "container">
        <form onSubmit={sendData}>
        <div class="form-group">
        <h1>Add order delivery</h1>
          <label for="oderid">Order Id</label>
          <input type="text" className="form-control" id="oderid"  placeholder="Enter Order Id"
          onChange={(e)=>{
            setorderid(e.target.value);
          }} />
        </div>

        <div class="form-group">
        <label for="customeName">Customer Name</label>
        <input type="text" className="form-control" id="customerName"  placeholder="Enter customer name"
        onChange={(e)=>{
          setcustomerName(e.target.value);
        }}/>
        </div>

         <div class="form-group">
        <label for="address">Customer Address</label>
        <input type="text" className="form-control" id="address"  placeholder="Enter customer address"
        onChange={(e)=>{
          setaddress(e.target.value);
        }}/>
        </div>
        
        <div class="form-group">
        <label for="contact">Contact Number</label>
        <input type="text" className="form-control" id="contact"  placeholder="Enter customer contact number"
        onChange={(e)=>{
          setcontact(e.target.value);
        }}/>
        </div>

        <div class="form-group">
        <label for="date">Delivery date</label>
        <input type="date" className="form-control" id="date"  placeholder="Enter delivery address"
        onChange={(e)=>{
          setdate(e.target.value);
        }}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
}

