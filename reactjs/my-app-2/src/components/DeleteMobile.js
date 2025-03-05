import axios from "axios";
import { use, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function DeleteMobile(){

    const navigate = useNavigate();
    const [mobile, setMobile] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8081/mobiles/'+id).then(resp => {setMobile(resp.data)});
    }
    ,[]);

    
    const handleDelete = () => {
        if(window.confirm("Are you sure you want to delete mobile with id: "+id) ){
            axios.delete('http://localhost:8081/mobiles/'+id).then(resp =>
                {alert("Mobile Deleted with id: "+id);
                navigate('/mobile/all');});
        }
    }

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

            <button onClick={handleDelete}>Delete</button>
            <Link to={`/mobile/all`}><button>Cancel</button></Link>
        </div>
      }
        </div>
    );
}

export default DeleteMobile;    