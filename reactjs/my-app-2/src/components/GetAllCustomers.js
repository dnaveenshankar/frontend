import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function GetAllCustomers() {
    const [customers, setCustomers] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8081/customer/all')
            .then(resp => setCustomers(resp.data));
    }, []);

    return (
        <div>
            <h1>All Customers</h1>
            {customers.map(customer => (
                <div key={customer.customerId}>
                    <p>
                        {customer.customerId} {customer.firstName} {customer.lastName} {customer.email} {customer.mobile} {customer.city}

                        <Link to={`/customer/view/${customer.customerId}`}>View</Link>&nbsp;&nbsp;
                        <Link to={`/customer/edit/${customer.customerId}`}>Edit</Link>&nbsp;&nbsp;
                        <Link to={`/customer/delete/${customer.customerId}`}>Delete</Link></p>
                </div>
            ))}
            <div>
                <input type="button" onClick={() => navigate(-1)} value="Back to Home" />
            </div>
        </div>
    );
}

export default GetAllCustomers;
