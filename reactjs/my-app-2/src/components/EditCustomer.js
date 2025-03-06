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
        <div>
            <h3>Edit Customer</h3>
            <div>
                <label>Customer ID</label>
                <input type="text" value={customerId} disabled />
            </div>
            <div>
                <label>First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Mobile</label>
                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div>
                <label>City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div>
                <input type="submit" onClick={handleSubmit} value="Update" />
                <input type="button" onClick={() => navigate(-1)} value="Back" />
            </div>
        </div>
    );
}

export default EditCustomer;
