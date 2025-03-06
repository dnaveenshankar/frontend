import axios from "axios";
import { use, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function GetCustomerById(){

    const [customer, setCustomer] =useState([]);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8081/customer/'+id).then(resp => {setCustomer(resp.data)});
    },[]);


    return(
        <div>
        <h1>Customer Details</h1>
        {
            customer!== null && 
            <div>
                <h2>CustomerId : {customer.customerId}</h2>
                <h2>First Name : {customer.firstName}</h2>
                <h2>Last Name : {customer.lastName}</h2>
                <h2>E Mail : {customer.email}</h2>
                <h2>Mobile : {customer.mobile}</h2>
                <h2>City : {customer.city}</h2>
            </div>
        }
        <div>
            <input type="button" onClick={() => navigate(-1)} value="Back" />
        </div>
        </div>
    )
}

export default GetCustomerById;