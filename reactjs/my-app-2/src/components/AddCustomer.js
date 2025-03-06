import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function AddCustomer(){

    const navigate =useNavigate();
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[mobile, setMobile] = useState('');
    const[city, setCity]= useState('');

    const handleSubmit = () => {
        const payload = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile:mobile, 
            city: city
        }

        axios.post("http://localhost:8081/customer/save", payload)
            .then(resp => {
                alert("Customer saved with id: " + resp.data.customerId);
                navigate(-1);
                resetForm();
            }
            );
    }

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobile('');
        setCity('');
    }
    

    return (
        <div>
            <h3>Customer Form</h3>
            <div>
                <label>First Name</label>
                <input type="text" name="fname" value={firstName}
                onChange={(event)=>setFirstName(event.target.value)}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lname" value={lastName}
                onChange={(event)=>setLastName(event.target.value)}/>
            </div>
            <div>
                <label>E Mail</label>
                <input type="email" name="email" value={email}
                onChange={(event)=>setEmail(event.target.value)}/>
            </div>
            <div>
                <label>Mobile</label>
                <input type="text" name="mobile" value={mobile}
                onChange={(event)=>setMobile(event.target.value)}/>
            </div>
            <div>
                <label>City</label>
                <input type="text" name="city" value={city}
                onChange={(event)=>setCity(event.target.value)}/>
            </div>
            <div>
            <input type="submit" onClick={handleSubmit} />
            <input type="button" onClick={resetForm} value="Reset" />
            <input type="button" onClick={() => navigate(-1)} value="Back" />
            </div>
        </div>
    )
}

export default AddCustomer;