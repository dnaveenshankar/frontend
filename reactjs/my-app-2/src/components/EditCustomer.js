import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditCustomer() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [customerId, setCustomerId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8081/customer/${id}`)
            .then(resp => {
                setCustomerId(resp.data.customerId);
                setFirstName(resp.data.firstName);
                setLastName(resp.data.lastName);
                setEmail(resp.data.email);
                setMobile(resp.data.mobile);
                setCity(resp.data.city);
            });
    }, [id]);

    const handleSubmit = () => {
        const payload = {
            customerId: customerId,
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
            city: city
        };

        axios.put("http://localhost:8081/customer/", payload)
            .then(resp => {
                alert("Customer updated with id: " + resp.data.customerId);
                navigate(-1);
            });
    };

    return (
        <div className="container mt-4">
            <h3 className="text-primary">Edit Customer</h3>
            <div className="form-group">
                <label className="form-label">Customer ID</label>
                <input type="text" className="form-control" value={customerId} disabled />
            </div>
            <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="form-label">Mobile</label>
                <input type="text" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="form-label">City</label>
                <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
}

export default EditCustomer;
