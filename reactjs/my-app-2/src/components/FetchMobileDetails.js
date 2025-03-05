import axios from "axios";
import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FetchMobileDetails() {
  
    const[mobile,setMobile] = useState([null]); 

    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8081/mobiles/'+id).then(resp => {setMobile(resp.data)});
    },[]);

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
    </div>
  );
}

export default FetchMobileDetails;