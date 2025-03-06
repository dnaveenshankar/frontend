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
            <h2 style={{ textAlign: "center" }}>All Customers</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Customer ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>City</th>
                        <th colSpan={3}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.customerId}>
                            <td>{customer.customerId}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.email}</td>
                            <td>{customer.mobile}</td>
                            <td>{customer.city}</td>
                            <td><Link to={`/customer/view/${customer.customerId}`} className="btn btn-primary">View</Link></td>
                            <td><Link to={`/customer/edit/${customer.customerId}`} className="btn btn-warning">Edit</Link></td>
                            <td><Link to={`/customer/delete/${customer.customerId}`} className="btn btn-danger">Delete</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back to Home</button>
        </div>
    );
}

export default GetAllCustomers;
