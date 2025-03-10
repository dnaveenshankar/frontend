import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

function FetchMobileDetails() {
  
    const[mobile,setMobile] = useState([null]); 

    const navigate = useNavigate();
    const {id} = useParams();

    const handleBack = () => {
      navigate(-1); // Navigate back one entry in the history stack
    };

    useEffect(() => {
        axios.get('http://localhost:8081/mobiles/'+id).then(resp => {setMobile(resp.data)});
    },[id]);

  return (
    <div>
      <h1>Mobile Details</h1>
      {
        mobile!== null && 
        <div>
            <h2>Id : {mobile.mobileId}</h2>
            <h2>Name : {mobile.mobileName}</h2>
            <h2>Price : {mobile.price}</h2>
            <h2>Mfd : {mobile.mfd}</h2>
            <h2>Company : {mobile.companyName}</h2>
        </div>
      }
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default FetchMobileDetails;