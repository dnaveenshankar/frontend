import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function AddCustomer() {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = () => {
        const payload = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
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
        <div className="container mt-4">
            <h3 className="text-primary">Customer Form</h3>
                <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" name="fname" value={firstName}
                        onChange={(event) => setFirstName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="lname" value={lastName}
                        onChange={(event) => setLastName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label">E Mail</label>
                    <input type="email" className="form-control" name="email" value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label">Mobile</label>
                    <input type="text" className="form-control" name="mobile" value={mobile}
                        onChange={(event) => setMobile(event.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" name="city" value={city}
                        onChange={(event) => setCity(event.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
                    <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>Back</button>
                </div>
        </div>
    )
}

export default AddCustomer;